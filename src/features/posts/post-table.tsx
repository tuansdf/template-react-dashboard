import { Table, TableProps } from "antd";
import { Post } from "~/types/post.type.ts";

type Props = {
  data: Post[];
};

const columns: TableProps["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "User ID",
    dataIndex: "userId",
  },
  {
    title: "title",
    dataIndex: "title",
  },
  {
    title: "body",
    dataIndex: "body",
  },
];

export const PostTable = ({ data }: Props) => {
  return (
    <Table
      size="small"
      columns={columns}
      dataSource={data}
      pagination={false}
      scroll={{
        y: "var(--table-height)",
      }}
    />
  );
};
