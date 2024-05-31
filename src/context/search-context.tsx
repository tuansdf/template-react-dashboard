import { createContext, PropsWithChildren, useCallback, useContext, useMemo, useState } from "react";
import { DefaultValues, FieldValues, FormProvider, useForm } from "react-hook-form";
import { SearchObject } from "~/types/search.type.ts";
import { toSearchString } from "~/utils/search-params.util.ts";

type ContextValues = {
  pageNumber: number;
  pageSize: number;
  searchQuery: string;
  setPageNumber: (n: number) => void;
  setPageSize: (n: number) => void;
  searchObject: SearchObject;
  setSearchQuery: (data: SearchObject) => void;
};

const defaultContextValues: ContextValues = {
  pageNumber: 1,
  pageSize: 20,
  searchQuery: "",
  searchObject: {},
  setPageNumber: () => {},
  setPageSize: () => {},
  setSearchQuery: () => {},
};

const SearchContext = createContext<ContextValues>(defaultContextValues);

type Props = PropsWithChildren<{
  defaultPageNumber?: number;
  defaultPageSize?: number;
  defaultFormValues?: DefaultValues<FieldValues>;
  defaultSearchValues?: SearchObject;
}>;
export const SearchProvider = ({
  defaultPageNumber = defaultContextValues.pageNumber,
  defaultPageSize = defaultContextValues.pageSize,
  defaultSearchValues = {},
  defaultFormValues = defaultSearchValues,
  children,
}: Props) => {
  const [pageNumber, setPageNumberRaw] = useState(() => defaultPageNumber);
  const [pageSize, setPageSizeRaw] = useState(() => defaultPageSize);
  const [searchObject, setSearchObject] = useState<SearchObject>(() => defaultSearchValues);
  const formMethods = useForm({ defaultValues: defaultFormValues });

  const resetPageNumber = useCallback(() => {
    setPageNumberRaw(defaultPageNumber);
  }, [setPageNumberRaw, defaultPageNumber]);
  const resetPageSize = useCallback(() => {
    setPageSizeRaw(defaultPageSize);
  }, [setPageSizeRaw, defaultPageSize]);
  const resetPage = useCallback(() => {
    resetPageSize();
    resetPageNumber();
  }, [resetPageNumber, resetPageSize]);
  const setPageSize = useCallback(
    (n: number) => {
      resetPageNumber();
      setPageSizeRaw(n);
    },
    [resetPageNumber],
  );
  const setPageNumber = useCallback((n: number) => {
    setPageNumberRaw(n);
  }, []);
  const setSearchQuery = useCallback(
    (data: SearchObject) => {
      resetPage();
      setSearchObject(data);
    },
    [resetPage],
  );
  const searchQuery = useMemo(() => {
    return toSearchString(searchObject);
  }, [searchObject]);

  return (
    <SearchContext.Provider
      value={{
        pageNumber,
        pageSize,
        searchQuery,
        searchObject,
        setPageNumber,
        setPageSize,
        setSearchQuery,
      }}
    >
      <FormProvider {...formMethods}>{children}</FormProvider>
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext<ContextValues>(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};
