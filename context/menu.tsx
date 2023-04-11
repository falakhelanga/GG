import { MenuContextType } from "@/types/context/MenuContextType";
import { useRouter } from "next/router";
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

  const scrollToSection = (ref: MutableRefObject<null>) => {
    window.scrollTo({
      top: ref?.current?.offsetTop,

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
        arcticlesRef,
        productsRef,
        promiseRef,
        feminineHygieneRef,
        scrollToSection,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext) as MenuContextType;
export default MenuProvider;
