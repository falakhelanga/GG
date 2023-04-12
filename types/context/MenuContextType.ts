import { MutableRefObject } from "react";

export type MenuContextType = {
  unlockMenu: (index: number) => void;
  showMenu: (index: number) => void;
  showMobileMenu: () => void;
  showMobileMegaMenu: (index: number) => void;
  menuOpen: any;
  lockMenu: (index: boolean) => void;
  lockMobileMenu: (index: boolean) => void;
  hideMenu: () => void;
  hideMobileMegaMenu: () => void;
  hideMobileMenu: () => void;
  unlockAndHideMenu: (index: number) => void;
  arcticlesRef: MutableRefObject<null>;
  menuIndex: any;
  mobileMenuIndex: any;
  feminineHygieneRef: MutableRefObject<null>;
  promiseRef: MutableRefObject<null>;
  productsRef: MutableRefObject<null>;
  scrollToMobileSection: (ref: MutableRefObject<null>) => void;
};
