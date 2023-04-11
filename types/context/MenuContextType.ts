import { MutableRefObject } from "react";

export type MenuContextType = {
  unlockMenu: (index: number) => void;
  showMenu: (index: number) => void;
  showMobileMenu: () => void;
  menuOpen: any;
  lockMenu: (index: boolean) => void;
  lockMobileMenu: (index: boolean) => void;
  hideMenu: () => void;
  hideMobileMenu: () => void;
  unlockAndHideMenu: (index: number) => void;
  arcticlesRef: MutableRefObject<null>;
  menuIndex: any;
  mobileMenuOpen: any;
  feminineHygieneRef: MutableRefObject<null>;
  promiseRef: MutableRefObject<null>;
  productsRef: MutableRefObject<null>;
  scrollToSection: (ref: MutableRefObject<null>) => void;
  scrollToMobileSection: (ref: MutableRefObject<null>) => void;
};
