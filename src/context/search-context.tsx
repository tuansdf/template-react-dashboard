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
  defaultFormValues?: DefaultValues<FieldValues>;
  defaultSearchValues?: SearchObject;
}>;
export const SearchProvider = ({
  defaultSearchValues = {},
  defaultFormValues = defaultSearchValues,
  children,
}: Props) => {
  const [pageNumber, setPageNumberRaw] = useState(() => defaultContextValues.pageNumber);
  const [pageSize, setPageSizeRaw] = useState(() => defaultContextValues.pageSize);
  const [searchObject, setSearchObject] = useState<SearchObject>(() => defaultSearchValues);
  const formMethods = useForm({ defaultValues: defaultFormValues });

  const resetPage = () => {
    resetPageSize();
    resetPageNumber();
  };
  const resetPageNumber = () => {
    setPageNumberRaw(defaultContextValues.pageNumber);
  };
  const resetPageSize = () => {
    setPageSizeRaw(defaultContextValues.pageSize);
  };
  const setPageSize = (n: number) => {
    resetPageNumber();
    setPageSizeRaw(n);
  };
  const setPageNumber = (n: number) => {
    setPageNumberRaw(n);
  };
  const setSearchQuery = useCallback((data: SearchObject) => {
    resetPage();
    setSearchObject(data);
  }, []);
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
