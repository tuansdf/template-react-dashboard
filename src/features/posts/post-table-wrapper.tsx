import { Alert, Loader } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { SearchPagination } from "~/components/search-pagination.tsx";
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
    <>
      {dataQuery.isLoading ? (
        <Loader />
      ) : dataQuery.isError ? (
        <Alert variant="light" color="red" title="Alert title">
          No data
        </Alert>
      ) : (
        <>
          <PostTable data={data?.data || []} />
          <SearchPagination total={data?.pages || 0} />
        </>
      )}
    </>
  );
};
