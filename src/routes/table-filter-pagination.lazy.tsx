import { createLazyFileRoute } from "@tanstack/react-router";
import { DashContentHeader } from "~/components/layouts/dash-content-header.tsx";
import { SearchProvider } from "~/context/search-context.tsx";
import { PostFilter } from "~/features/posts/post-filter.tsx";
import { PostTableWrapper } from "~/features/posts/post-table-wrapper.tsx";

export const Route = createLazyFileRoute("/table-filter-pagination")({
  component: TableFilterPaginationPage,
});

function TableFilterPaginationPage() {
  return (
    <SearchProvider>
      <DashContentHeader title="Table filter pagination" extraTitle={<PostFilter />} />

      <PostTableWrapper />
    </SearchProvider>
  );
}
