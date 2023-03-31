import { MenuContextType } from "@/types/context/MenuContextType";
import { useRouter } from "next/router";
import { Context, createContext, ReactNode, useContext, useState } from "react";

const MenuContext: Context<MenuContextType> = createContext(null as any);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuIndex, setMenuIndex] = useState(-1);
  const [lock, setLock] = useState(false);

  const showMenu = (index) => {
    setMenuIndex(index);
  };

  const lockMenu = (index) => {
    setLock(true);
    setMenuIndex(index);
  };

  const unlockMenu = () => {
    setLock(false);
  };

  const unlockAndHideMenu = (index) => {
    setLock(false);
  };

  const hideMenu = () => {
    if (!lock) {
      setMenuIndex(-1);
    }
  };

  return (
    <MenuContext.Provider
      value={{
        unlockMenu,
        lockMenu,
        unlockAndHideMenu,
        hideMenu,
        showMenu,
        menuIndex,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext) as MenuContextType;
export default MenuProvider;
