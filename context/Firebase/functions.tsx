import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  collection,
  getDocs,
  addDoc,
  setDoc,
  query,
  where,
  Timestamp,
  getDoc,
} from "firebase/firestore";
import { EntryValues } from "../../types/entry";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseConfig from "./config";

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();

const auth = getAuth();

const Firebase = {
  /* ----------------- CREATE ENTRY ----------------- */
  createEntry: (values: EntryValues) => {
    const entryRef = collection(db, "entries");
    return addDoc(entryRef, {
      ...values,
      enteredAt: Timestamp.fromDate(new Date()),

      // fullName: values.firstName + " " + values.lastName,
    });
  },

  // approveEntry: (entry: EntryValues) => {
  //   const entryRef = doc(db, "entries", entry.id);
  //   return setDoc(entryRef, { ...entry, status: "approved" });
  // },

  // denyEntry: (entry: EntryValues) => {
  //   const entryRef = doc(db, "entries", entry.id);
  //   return setDoc(entryRef, { ...entry, status: "denied" });
  // },

  // getUser: async (email: string) => {
  //   const q = query(collection(db, "entries"), where("email", "==", email));
  //   const querySnapshot = await getDocs(q);
  //   return querySnapshot;
  // },

  // getEntry: async (entryId: string) => {
  //   if (entryId) {
  //     const entryRef = doc(db, "entries", entryId);
  //     const entrySnap = await getDoc(entryRef);
  //     return entrySnap.data();
  //   }
  // },

  // addVote: async (entryId: string) => {
  //   const voteRef = collection(db, "entries", entryId, "votes");
  //   return addDoc(voteRef, {
  //     date: Timestamp.fromDate(new Date()),
  //     action: "add",
  //   }).then((docRef) => {
  //     localStorage.setItem("voteId", docRef.id);
  //   });
  // },

  // removeVote: async (entryId: string, voteId: string) => {
  //   const voteRef = collection(db, "entries", entryId, "votes");
  //   return addDoc(voteRef, {
  //     date: Timestamp.fromDate(new Date()),
  //     action: "remove",
  //   });
  // },

  // incrementVotes: async (entry: EntryValues) => {
  //   const entryRef = doc(db, "entries", entry.id);
  //   return setDoc(entryRef, { ...entry, totalVotes: entry.totalVotes + 1 });
  // },

  // decrementVotes: async (entry: EntryValues) => {
  //   const entryRef = doc(db, "entries", entry.id);
  //   return setDoc(entryRef, { ...entry, totalVotes: entry.totalVotes - 1 });
  // },

  // checkUserAuth: () => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) return true;
  //     else return false;
  //   });
  // },
};

export default Firebase;
