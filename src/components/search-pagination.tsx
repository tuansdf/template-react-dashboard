import { Pagination } from "~/components/pagination.tsx";
import { useSearchContext } from "~/context/search-context.tsx";
import classes from "./search-pagination.module.scss";

type Props = {
  total: number;
};

export const SearchPagination = ({ total }: Props) => {
  const { pageNumber, pageSize, setPageSize, setPageNumber } = useSearchContext();

  return (
    <div className={classes["container"]}>
      <Pagination
        total={total}
        pageNumber={pageNumber}
        pageSize={pageSize}
        onPageNumberChange={setPageNumber}
        onPageSizeChange={setPageSize}
      />
    </div>
  );
};
