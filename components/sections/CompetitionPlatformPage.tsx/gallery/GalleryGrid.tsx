import React, { useEffect, useMemo, useState } from "react";
import GalleryCard from "./GalleryCard";
import SearchInput from "./SearchInput";
import SelectInput from "@/components/elements/SelectInput";

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
import Button from "@/components/elements/Button";
import { ScrollToTop } from "@/components/elements/ScrollToTop";
import DropDown from "@/components/elements/GallerySortDropDown";

const ITEMS_PER_PAGE = 16;

const GalleryGrid = () => {
  const { db } = useFirebase();
  const [sortValue, setSortValue] = useState<"newest" | "oldest" | null>(
    "newest"
  );
  const [entries, setEntries] = useState<EntryValues[] | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const [lastVisible, setLastVisible] = useState<any | null>(null);
  ///////// FETCH ALL ENTRIES OF THE EPISODE FROM FIRESTORE

  useEffect(() => {
    const q = query(
      collection(db, "entries"),
      limit(ITEMS_PER_PAGE)
      // orderBy("date_created", "desc")
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
        console.log(querySnapshot.docs[querySnapshot.docs.length - 1], "ffd");
        setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
        setEntries(data);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [db]);

  const paginate = () => {
    const q = query(
      collection(db, "entries"),

      startAfter(lastVisible),
      limit(ITEMS_PER_PAGE)
    );
    onSnapshot(q, { includeMetadataChanges: true }, (querySnapshot) => {
      const data: EntryValues[] = [];
      querySnapshot.forEach((doc) => {
        const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        data.push({ ...doc.data(), id: doc.id } as EntryValues);
      });
      console.log(querySnapshot.docs[querySnapshot.docs.length - 1], "ffd");
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      setEntries((currState) => {
        const newState = currState && [...currState, ...data];

        return newState;
      });
    });
  };

  ///// sort entries
  useEffect(() => {
    if (sortValue === "newest") {
      entries?.sort((a, b) => {
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
      entries?.sort((a, b) => {
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

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchValue.trim() === "") {
      const entriesRef = collection(db, "entries");
      const q = query(
        entriesRef

        // where("lastName", "==", searchValue)
      );

      onSnapshot(q, { includeMetadataChanges: true }, (querySnapshot) => {
        const data: EntryValues[] = [];
        querySnapshot.forEach((doc) => {
          const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
          data.push({ ...doc.data(), id: doc.id } as EntryValues);
        });
        setEntries(data);
        console.log(data, "data");
      });
      return;
    }

    const entriesRef = collection(db, "entries");
    const q = query(
      entriesRef,
      where("firstName", "==", searchValue)
      // where("lastName", "==", searchValue)
    );

    onSnapshot(q, { includeMetadataChanges: true }, (querySnapshot) => {
      const data: EntryValues[] = [];
      querySnapshot.forEach((doc) => {
        const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        data.push({ ...doc.data(), id: doc.id } as EntryValues);
      });
      setEntries(data);
      console.log(data, "data");
    });
  };
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
      {entries && entries.length > 0 && (
        <>
          <div className="md:flex mb-8 justify-between">
            <SearchInput
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              handleSearch={handleSearch}
            />
            <div>
              <DropDown sortValue={sortValue} setSortValue={setSortValue} />
            </div>
          </div>

          <motion.div
            layout
            className="grid md:grid-cols-4 gap-6"
            transition={{ duration: 0.5 }}
          >
            {entries &&
              entries.map((entry) => {
                return <GalleryCard entry={entry} key={entry.id} />;
              })}
          </motion.div>

          <div className="flex md:justify-center mt-8 relative">
            {lastVisible && (
              <Button
                onClick={() => {
                  paginate();
                }}
                variant="outline"
                className=""
              >
                LOAD MORE
              </Button>
            )}

            <ScrollToTop />
          </div>
        </>
      )}
    </div>
  );
};

export default GalleryGrid;
