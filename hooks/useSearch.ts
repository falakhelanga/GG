import { useEffect, useMemo, useState } from "react";
import Fuse from "fuse.js";
import { useRouter } from "next/router";
import queryString from "query-string";

/**
 * @param {string[]} searchKeys - List of keys that will be searched. This supports nested paths, weighted search, searching in arrays of strings and objects.
 */
export const useSearch = (
  data: any[],
  searchKeys: string[],
  searchValue: string,
  delay = 1000
) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [searchResults, setSearchResults] = useState<
    Fuse.FuseResult<typeof data>[]
  >([]);

  const fuse = useMemo(
    () =>
      new Fuse(data, {
        keys: searchKeys,
        includeScore: false,
      }),
    [data, searchKeys]
  );

  useEffect(() => {
    let timeout: any;
    setLoading(true);
    const results = fuse.search(searchValue);
    const params = queryString.parse(window.location.search);
    ///// delete the query param if the search input is empty
    if (searchValue.trim() === "" && params?.search) {
      timeout = setTimeout(() => {
        setLoading(false);
        delete params.search;
        router.push(
          {
            pathname: router.route,
            query: { ...params },
          },
          undefined,
          {
            shallow: true,
          }
        );
        setSearchResults(results);
      }, delay);
    }
    if (searchValue.trim() !== "") {
      timeout = setTimeout(() => {
        setLoading(false);

        router.push(
          {
            pathname: router.route,
            query: { ...params, search: searchValue },
          },
          undefined,
          {
            shallow: true,
          }
        );
        setSearchResults(results);
      }, delay);
    }

    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, delay]);

  return { searchResults, loading, setSearchResults };
};
