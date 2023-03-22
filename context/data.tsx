import React from "react";
import FirebaseProvider from "./Firebase";

export default function DataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Include all your Cntext Poviders in this file. It wraps the app.
    <>{children}</>
  );
}
