import { Pagination } from "~/components/core/form/pagination.tsx";
import { useSearchContext } from "~/context/search-context.tsx";
import classes from "~/components/helpers/form/search-pagination.module.scss";

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
