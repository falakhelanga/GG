import React from "react";
import FirebaseProvider from "./Firebase";
import MenuProvider from "./menu";
import ProductContextProvider from "./subCategories";
import SubCategoriesContextProvider from "./subCategories";

export default function DataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Include all your Context Providers in this file. It wraps the app.
    <>
      <FirebaseProvider>
        <SubCategoriesContextProvider>
          <MenuProvider>{children}</MenuProvider>
        </SubCategoriesContextProvider>
      </FirebaseProvider>
    </>
  );
}
