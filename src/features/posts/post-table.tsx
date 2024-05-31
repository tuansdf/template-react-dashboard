import { TableProps } from "antd";
import { Table } from "~/components/core/table.tsx";
import { Post } from "~/types/post.type.ts";

type Props = {
  data: Post[];
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

export const PostTable = ({ data }: Props) => {
  return <Table columns={columns} dataSource={data} />;
};
