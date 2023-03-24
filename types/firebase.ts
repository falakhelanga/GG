import { Unsubscribe } from "firebase/auth";
import {
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  Firestore,
  QuerySnapshot,
} from "firebase/firestore";
import { EntryValues } from "./entry";

export type FirebaseTypes = {
  db: Firestore;
  createEntry: (
    values: EntryValues
  ) => Promise<DocumentReference<DocumentData>>;
  getUser: (email: string) => Promise<QuerySnapshot<DocumentData>>;
  getEntry: (entryId: string) => Promise<DocumentData>;
  addVote: (entryId: string) => Promise<void>;
  removeVote: (
    entryId: string,
    voteId: string
  ) => Promise<DocumentReference<DocumentData>>;
  incrementVotes: (entry: EntryValues) => Promise<void>;
  decrementVotes: (entry: EntryValues) => Promise<void>;
  approveEntry: (entry: EntryValues) => Promise<void>;
  denyEntry: (entry: EntryValues) => Promise<void>;
  checkUserAuth: () => void;
};
