import { Vote } from "./vote";

export interface EntryValues {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  photoURL: string;
  videoURL: string;
  id?: string;
  isDuplicate?: boolean;
  enteredAt: any;
  totalVotes: number;
  status: string;
  location: string;
  votes?: Vote[];
}
