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
  const [mobileMenuIndex, setMobileMenuIndex] = useState(-1);
  const [lock, setLock] = useState(false);

  const showMenu = (index: number) => {
    setMenuIndex(index);
  };

  const showMobileMegaMenu = (index: number) => {
    setMobileMenuIndex(index);
    console.log(index);
  };

  const lockMenu = (index: any) => {
    setLock(true);
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

  const hideMobileMegaMenu = () => {
    setMobileMenuIndex(-1);
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
        showMobileMegaMenu,
        unlockMenu,
        lockMenu,
        unlockAndHideMenu,
        hideMenu,
        showMenu,
        menuIndex,
        mobileMenuIndex,
        arcticlesRef,
        productsRef,
        promiseRef,
        feminineHygieneRef,
        scrollToMobileSection,
        hideMobileMegaMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext) as MenuContextType;
export default MenuProvider;
