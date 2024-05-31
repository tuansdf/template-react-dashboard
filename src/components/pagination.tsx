import { Pagination as MPagination } from "antd";

type Props = {
  total: number;
  pageNumber: number;
  pageSize: number;
  onPageNumberChange: (n: number) => void;
  onPageSizeChange: (n: number) => void;
};

export const Pagination = ({ onPageNumberChange, onPageSizeChange, pageNumber, pageSize, total }: Props) => {
  return (
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
  );
};
