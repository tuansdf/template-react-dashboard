import { Table as MTable, TableProps } from "antd";

type Props = TableProps;

export const Table = (props: Props) => {
  return (
    <MTable
      size="small"
      pagination={false}
      rowKey={(data) => data.id || data.key}
      scroll={{
        y: "var(--table-height)",
      }}
      {...props}
    />
  );
};
