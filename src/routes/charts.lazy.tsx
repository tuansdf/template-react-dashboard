import { createLazyFileRoute } from "@tanstack/react-router";
import { Chart } from "~/components/core/charts/echarts.tsx";
import { Head } from "~/components/helpers/head.tsx";

export const Route = createLazyFileRoute("/charts")({
  component: ChartsPage,
});

// https://dev.to/manufac/using-apache-echarts-with-react-and-typescript-optimizing-bundle-size-29l8
function ChartsPage() {
  return (
    <>
      <Head title="Charts" />

      <Chart
        style={{
          height: "50rem",
        }}
        option={{
          series: {
            type: "sankey",
            emphasis: {
              focus: "adjacency",
            },
            data: [
              {
                name: "a",
              },
              {
                name: "b",
              },
              {
                name: "a1",
              },
              {
                name: "a2",
              },
              {
                name: "b1",
              },
              {
                name: "c",
              },
            ],
            links: [
              {
                source: "a",
                target: "a1",
                value: 5,
              },
              {
                source: "a",
                target: "a2",
                value: 3,
              },
              {
                source: "b",
                target: "b1",
                value: 8,
              },
              {
                source: "a",
                target: "b1",
                value: 3,
              },
              {
                source: "b1",
                target: "a1",
                value: 1,
              },
              {
                source: "b1",
                target: "c",
                value: 2,
              },
            ],
          },
        }}
      />
    </>
  );
}
