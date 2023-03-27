import React, { useEffect, useMemo, useState } from "react";
import GalleryCard from "./GalleryCard";
import SearchInput from "./SearchInput";
import SelectInput from "@/components/elements/SelectInput";
import SortSelectInput from "./SortSelectInput";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useFirebase } from "@/context/Firebase";
import { EntryValues } from "@/types/entry";
import { motion } from "framer-motion";

const GalleryGrid = () => {
  const { db } = useFirebase();
  const [sortValue, setSortValue] = useState<"newest" | "oldest">("newest");
  const [entries, setEntries] = useState<EntryValues[] | null>(null);
  const [searchValue, setSearchValue] = useState("");
  ///////// FETCH ALL ENTRIES OF THE EPISODE FROM FIRESTORE

  useEffect(() => {
    const q = query(
      collection(db, "entries")
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
        console.log(data, "ffd");
        setEntries(data);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [db]);

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
    <div>
      <div className="md:flex mb-8 justify-between">
        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleSearch={handleSearch}
        />
        <SortSelectInput setSortValue={setSortValue} />
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
    </div>
  );
};

export default GalleryGrid;
