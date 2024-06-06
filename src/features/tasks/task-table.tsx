import { useQuery } from "@tanstack/react-query";
import { TableProps } from "antd";
import { Table } from "~/components/core/table.tsx";
import { SearchPagination } from "~/components/helpers/form/search-pagination.tsx";
import { useSearchContext } from "~/context/search-context.tsx";
import { tasks } from "~/features/tasks/task-data.ts";

const fetchTasks = async ({
  pageNumber,
  pageSize,
  searchQuery,
}: {
  pageNumber: number;
  pageSize: number;
  searchQuery: string;
}) => {
  await new Promise((r) => setTimeout(r, 300));
  const search = new URLSearchParams(searchQuery);
  const title = search.get("title");
  const body = search.get("body");
  const filtered = tasks.filter((post) => {
    if (title && body) return post.title.includes(title) && post.body.includes(body);
    if (title) return post.title.includes(title);
    if (body) return post.body.includes(body);
    return true;
  });
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return { data: filtered.slice(startIndex, endIndex), items: filtered.length };
};

export const TaskTable = () => {
  const { pageNumber, pageSize, searchQuery } = useSearchContext();

  const dataQuery = useQuery({
    queryKey: ["tasks", pageNumber, pageSize, searchQuery],
    queryFn: () => fetchTasks({ pageNumber, pageSize, searchQuery }),
  });
  const data = dataQuery.data;

  return (
    <>
      <Table columns={columns} dataSource={data?.data} loading={dataQuery.isLoading} />
      <SearchPagination total={data?.items || 0} />
    </>
  );
};

const columns: TableProps["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    width: "5rem",
  },
  {
    title: "User ID",
    dataIndex: "userId",
    width: "5rem",
  },
  {
    title: "title",
    dataIndex: "title",
    width: "10rem",
  },
  {
    title: "body",
    dataIndex: "body",
    width: "20rem",
  },
];
