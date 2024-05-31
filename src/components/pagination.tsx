import { Pagination as MPagination } from "antd";
import classes from "./pagination.module.scss";

type Props = {
  total: number;
  pageNumber: number;
  pageSize: number;
  onPageNumberChange: (n: number) => void;
  onPageSizeChange: (n: number) => void;
};

export const Pagination = ({ onPageNumberChange, onPageSizeChange, pageNumber, pageSize, total }: Props) => {
  return (
    <div className={classes["container"]}>
      <MPagination
        current={pageNumber}
        pageSize={pageSize}
        showSizeChanger
        onShowSizeChange={(_, toPageSize) => {
          if (toPageSize !== pageSize) {
            onPageSizeChange(toPageSize);
          }
        }}
        onChange={(toPageNumber) => {
          if (toPageNumber !== pageNumber) {
            onPageNumberChange(toPageNumber);
          }
        }}
        total={total}
      />
    </div>
  );
};
