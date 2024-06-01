import { createLazyFileRoute } from "@tanstack/react-router";
import { DashContentHeader } from "~/components/layouts/dash-content-header.tsx";
import { SearchProvider } from "~/context/search-context.tsx";
import { PostFilter } from "~/features/posts/post-filter.tsx";
import { PostTable } from "~/features/posts/post-table.tsx";

export const Route = createLazyFileRoute("/table")({
  component: TableFilterPaginationPage,
});

function TableFilterPaginationPage() {
  return (
    <SearchProvider>
      <DashContentHeader title="Posts" extraTitle={<PostFilter />} />

      <PostTable />
    </SearchProvider>
  );
}
