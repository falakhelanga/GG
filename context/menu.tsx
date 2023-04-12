import { MenuContextType } from "@/types/context/MenuContextType";
import {
  Context,
  createContext,
  MutableRefObject,
  ReactNode,
  useContext,
  useRef,
  useState,
} from "react";

const MenuContext: Context<MenuContextType> = createContext(null as any);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const arcticlesRef = useRef(null);
  const feminineHygieneRef = useRef(null);
  const promiseRef = useRef(null);
  const productsRef = useRef(null);
  const [menuIndex, setMenuIndex] = useState(-1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(-1);
  const [lock, setLock] = useState(false);

  const showMenu = (index: number) => {
    setMenuIndex(index);
  };

  const lockMenu = (index: any) => {
    setLock(true);
    setMobileMenuOpen(index);
  };

  const unlockMenu = () => {
    setLock(false);
  };

  const unlockAndHideMenu = (index: number) => {
    setLock(false);
  };

  const hideMenu = () => {
    setMenuIndex(-1);
  };

  const scrollToMobileSection = (ref: MutableRefObject<null>) => {
    window.scrollTo({
      top: ref?.current?.offsetTop - 100,

      behavior: "smooth",
    });
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
        mobileMenuOpen,
        arcticlesRef,
        productsRef,
        promiseRef,
        feminineHygieneRef,
        scrollToMobileSection,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext) as MenuContextType;
export default MenuProvider;
