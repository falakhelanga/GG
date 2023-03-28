import React from "react";
import FirebaseProvider from "./Firebase";
import MenuProvider from "./menu";

export default function DataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Include all your Context Providers in this file. It wraps the app.
    <>
      <FirebaseProvider>
        <MenuProvider>{children}</MenuProvider>
      </FirebaseProvider>
    </>
  );
}
