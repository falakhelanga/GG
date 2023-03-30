import { MenuContextType } from "@/types/context/MenuContextType";
import { useRouter } from "next/router";
import { Context, createContext, ReactNode, useContext, useState } from "react";

const MenuContext: Context<MenuContextType> = createContext(null as any);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMobile, setShowMobile] = useState(true);
  const [lock, setLock] = useState(false);

  const showMenu = () => {
    setMenuOpen(true);
  };

  const lockMenu = () => {
    setLock(true);
  };

  const unlockMenu = () => {
    setLock(false);
  };

  const unlockAndHideMenu = () => {
    setLock(false);
  };

  const hideMenu = () => {
    if (!lock) {
      setMenuOpen(false);
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
        menuOpen,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext) as MenuContextType;
export default MenuProvider;
