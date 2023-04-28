import React, { useEffect, useMemo, useState } from "react";
import GalleryCard from "./GalleryCard";
import SearchInput from "./SearchInput";
import SelectInput from "@/components/elements/form/SelectInput";

import {
  DocumentData,
  QuerySnapshot,
  collection,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import { useFirebase } from "@/context/Firebase";
import { EntryValues } from "@/types/entry";
import { motion } from "framer-motion";
import Button from "@/components/elements/ui/Button";
import { ScrollToTop } from "@/components/elements/ui/ScrollToTop";
import DropDown from "@/components/sections/CompetitionPlatformPage.tsx/gallery/GallerySortDropDown";
import { useSearch } from "@/hooks/useSearch";
import { searchResultsFormatter } from "@/context/searchResultsFormatter";

const ITEMS_PER_PAGE = 16;
const searchKeys = ["firstName", "lastName"];
const options = ["newest", "oldest"];
const GalleryGrid = () => {
  const { db } = useFirebase();
  const [sortValue, setSortValue] = useState<"newest" | "oldest" | null>(
    "newest"
  );
  const [entries, setEntries] = useState<EntryValues[] | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const [selectedSearchValue, setSelectedSearchValue] = useState("");
  const [lastVisible, setLastVisible] = useState<any | null>(null);
  const [visible, setVisible] = useState(ITEMS_PER_PAGE);
  const [totalEntries, setTotalEntries] = useState(1);

  ///////// FETCH ALL ENTRIES OF THE EPISODE FROM FIRESTORE

  useEffect(() => {
    const q = query(
      collection(db, "entries"),
      // limit(ITEMS_PER_PAGE)
      orderBy("enteredAt", "desc")
    );

    const unsubscribe = onSnapshot(
      q,
      { includeMetadataChanges: true },
      (querySnapshot) => {
        const data: EntryValues[] = [];
        querySnapshot.forEach((doc) => {
          const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
          data.push({ ...doc.data(), id: doc.id } as EntryValues);
        });

        setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
        setTotalEntries(data.length);
        setEntries(data);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [db]);

  ///// sort entries
  const sortedEntries = useMemo(() => {
    if (sortValue === "newest") {
      return entries?.sort((a, b) => {
        const firstDate = a.enteredAt.toDate();
        const secondDate = b.enteredAt.toDate();
        if (firstDate > secondDate) {
          return -1;
        }
        // if (firstDate < secondDate) {
        //   return 1;
        // }
        return 0;
      });
    }
    if (sortValue === "oldest") {
      return entries?.sort((a, b) => {
        const firstDate = a.enteredAt.toDate();
        const secondDate = b.enteredAt.toDate();
        if (firstDate < secondDate) {
          return -1;
        }
        // if (firstDate < secondDate) {
        //   return 1;
        // }
        return 0;
      });
    }
  }, [sortValue, entries]);

  const { searchResults, loading } = useSearch(
    entries || [],
    searchKeys,
    selectedSearchValue
  );

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue.trim() === "") return;
    setSelectedSearchValue(searchValue);
  };

  useEffect(() => {
    const timemout = setTimeout(() => {
      if (searchValue.trim() === "") {
        setSelectedSearchValue("");
      }
    }, 300);

    return () => clearTimeout(timemout);
  }, [searchValue]);
  return (
    <div className="">
      {entries && entries?.length === 0 && (
        <div className="flex flex-col items-center w-full md:mt-[6rem] mt-[3rem]">
          <div
            className="
        md:text-5xl text-4xl uppercase text-pink text-center text-paul
        "
          >
            You&apos;re the first one here.
          </div>
          <div className="font-paul text-green md:text-8xl text-7xl -mt-6">
            enter now
          </div>
        </div>
      )}

      {entries && entries?.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 mb-8 md:gap-6 justify-between">
            <SearchInput
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              handleSearch={handleSearch}
            />
            <div className="col-span-2 md:block hidden"></div>
            <div>
              <DropDown
                options={options}
                name="Sort by"
                sortValue={sortValue}
                setSortValue={setSortValue}
              />
            </div>
          </div>

          <motion.div
            layout
            className="grid md:grid-cols-4 gap-6"
            transition={{ duration: 0.5 }}
          >
            {selectedSearchValue && searchResults.length === 0 && !loading && (
              <div className="flex col-span-4 flex-col items-center w-full md:mt-[6rem] mt-[3rem]">
                <div
                  className="
            md:text-5xl text-4xl uppercase text-pink text-center text-paul
            "
                >
                  No result found
                </div>
                {/* <div className="font-paul text-green md:text-8xl text-7xl -mt-6">
                  enter now
                </div> */}
              </div>
            )}
            {loading && selectedSearchValue.trim() !== "" && (
              <div className="col-span-4 flex justify-center">
                {" "}
                <div className="text-2xl">searhing....</div>
              </div>
            )}
            {entries && (
              <>
                {searchResultsFormatter(searchResults).length === 0 &&
                selectedSearchValue.trim() === ""
                  ? entries?.slice(0, visible).map((entry) => {
                      return <GalleryCard entry={entry} key={entry.id} />;
                    })
                  : searchResultsFormatter(searchResults)
                      ?.slice(0, visible)
                      .map((entry) => {
                        return <GalleryCard entry={entry} key={entry.id} />;
                      })}
              </>
            )}
          </motion.div>

          <div className="flex md:justify-center mt-8 relative max-sm:gap-4">
            {visible >= totalEntries ? null : (
              <div className="max-sm:flex-1">
                {" "}
                <Button
                  onClick={() => {
                    showMoreItems();
                  }}
                  variant="outline"
                  className="md:px-16 max-sm:w-full"
                >
                  LOAD MORE
                </Button>
              </div>
            )}

            <div className="md:absolute md:right-0">
              <ScrollToTop />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GalleryGrid;
