import { Table as MTable, TableProps } from "antd";

type Props = TableProps;

export const Table = (props: Props) => {
  return (
    <MTable
      size="small"
      pagination={false}
      scroll={{
        y: "var(--table-height)",
      }}
      {...props}
    />
  );
};
