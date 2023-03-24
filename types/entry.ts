import { Vote } from "./vote";

export interface EntryValues {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  photoURL: string;
  id?: string;
  enteredAt?: any;
  location: string;
  bio: "";
  acceptedTsAndCs?: boolean;
  subscribe?: boolean;
}
