import { MutableRefObject } from "react";

export type MenuContextType = {
  unlockMenu: (index) => void;
  showMenu: (index) => void;
  lockMenu: (index) => void;
  hideMenu: () => void;
  unlockAndHideMenu: (index) => void;
  arcticlesRef: MutableRefObject<null>;
  menuIndex: any;
  feminineHygieneRef: MutableRefObject<null>;
  promiseRef: MutableRefObject<null>;
  productsRef: MutableRefObject<null>;
  scrollToSection: (ref: MutableRefObject<null>) => void;
};
