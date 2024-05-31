import { useQuery } from "@tanstack/react-query";
import { Alert, Spin } from "antd";
import { SearchPagination } from "~/components/helpers/form/search-pagination.tsx";
import { useSearchContext } from "~/context/search-context.tsx";
import { PostTable } from "~/features/posts/post-table.tsx";
import { CommonResponse } from "~/types/common.type.ts";
import { Post } from "~/types/post.type.ts";

const fetchPosts = async ({
  pageNumber,
  pageSize,
  searchQuery,
}: {
  pageNumber: number;
  pageSize: number;
  searchQuery: string;
}) => {
  const res = await fetch(`http://localhost:3000/posts?_page=${pageNumber}&_per_page=${pageSize}&${searchQuery}`);
  const data = (await res.json()) as CommonResponse<Post[]>;

  return data;
};

export const PostTableWrapper = () => {
  const { pageNumber, pageSize, searchQuery } = useSearchContext();

  const dataQuery = useQuery({
    queryKey: ["table-filter-pagination", "data", pageNumber, pageSize, searchQuery],
    queryFn: () => fetchPosts({ pageNumber, pageSize, searchQuery }),
  });
  const data = dataQuery.data;

  return (
    <Spin spinning={dataQuery.isLoading}>
      {dataQuery.isLoading ? (
        <></>
      ) : dataQuery.isError ? (
        <Alert message="Alert title" />
      ) : (
        <>
          <PostTable data={data?.data || []} />
          <SearchPagination total={data?.items || 0} />
        </>
      )}
    </Spin>
  );
};
