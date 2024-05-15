import { Pagination as MPagination, Select } from "@mantine/core";
import classes from "./pagination.module.scss";

type Props = {
  total: number;
  pageNumber: number;
  pageSize: number;
  onPageNumberChange: (n: number) => void;
  onPageSizeChange: (n: number) => void;
};

const pages = [
  { label: "10 / page", value: "10" },
  { label: "20 / page", value: "20" },
  { label: "50 / page", value: "50" },
  { label: "100 / page", value: "100" },
] as const;

export const Pagination = ({ onPageNumberChange, onPageSizeChange, pageNumber = 1, pageSize = 20, total }: Props) => {
  return (
    <div className={classes["container"]}>
      <MPagination value={pageNumber} onChange={onPageNumberChange} total={total} />
      <Select
        classNames={{ wrapper: classes["size-select"], input: classes["input"], dropdown: classes["dropdown"] }}
        value={String(pageSize)}
        onChange={(v) => onPageSizeChange(Number(v))}
        data={pages}
      />
    </div>
  );
};
