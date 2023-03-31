export type MenuContextType = {
  unlockMenu: (index) => void;
  showMenu: (index) => void;
  lockMenu: (index) => void;
  hideMenu: () => void;
  unlockAndHideMenu: (index) => void;
  menuIndex: any;
};
