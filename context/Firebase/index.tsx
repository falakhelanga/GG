import React, { createContext, useContext } from "react";
import Firebase from "./functions";
import { FirebaseTypes } from "../../types/firebase";

const FirebaseContext = createContext<FirebaseTypes | null>(null);

export const FirebaseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <FirebaseContext.Provider value={Firebase}>
    {children}
  </FirebaseContext.Provider>
);

export default FirebaseProvider;

export const useFirebase = () => useContext(FirebaseContext) as FirebaseTypes;
