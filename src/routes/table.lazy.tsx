import { createLazyFileRoute } from "@tanstack/react-router";
import { Head } from "~/components/helpers/head.tsx";
import { DashContentHeader } from "~/components/layouts/dash-content-header.tsx";
import { SearchProvider } from "~/context/search-context.tsx";
import { TaskFilter } from "~/features/tasks/task-filter.tsx";
import { TaskTable } from "~/features/tasks/task-table.tsx";

export const Route = createLazyFileRoute("/table")({
  component: TableFilterPaginationPage,
});

function TableFilterPaginationPage() {
  return (
    <SearchProvider>
      <Head title="Table" />

      <DashContentHeader title="Notes" extraTitle={<TaskFilter />} />

      <TaskTable />
    </SearchProvider>
  );
}
