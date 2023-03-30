export type MenuContextType = {
  unlockMenu: () => void;
  showMenu: () => void;
  lockMenu: () => void;
  hideMenu: () => void;
  unlockAndHideMenu: () => void;
  menuOpen: boolean;
};
