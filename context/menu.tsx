import { MenuContextType } from "@/types/context/MenuContextType";
import { useRouter } from "next/router";
import { Context, createContext, ReactNode, useContext } from "react";

const MenuContext: Context<MenuContextType> = createContext(null);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const unlockMenu = () => {};

  return (
    <MenuContext.Provider value={{ unlockMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
export default MenuProvider;
