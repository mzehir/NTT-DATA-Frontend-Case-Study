const subMenuStaticPath = "/static/img/subMenu/";

const MOCK_SUB_MENU_LEFT = {
  SUB_MENU_1: { value: "subMenu1", label: "subheader" },
  SUB_MENU_2: { value: "subMenu2", label: "subheader" },
  SUB_MENU_3: { value: "subMenu3", label: "subheader" },
  SUB_MENU_4: { value: "subMenu4", label: "subheader" },
  SUB_MENU_5: { value: "subMenu5", label: "subheader" },
  SUB_MENU_6: { value: "subMenu6", label: "subheader" },
  SUB_MENU_7: { value: "subMenu7", label: "subheader" },
  SUB_MENU_8: { value: "subMenu8", label: "subheader" },
};

const MOCK_SUB_MENU_RIGHT = {
    SUB_MENU_9: { value: "subMenu9", label: "subheader" },
    SUB_MENU_10: { value: "subMenu10", label: "subheader" },
    SUB_MENU_11: { value: "subMenu11", label: "subheader" },
    SUB_MENU_12: { value: "subMenu12", label: "subheader" },
    SUB_MENU_13: { value: "subMenu13", label: "subheader" },
    SUB_MENU_14: { value: "subMenu14", label: "subheader" },
    SUB_MENU_15: { value: "subMenu15", label: "subheader" },
    SUB_MENU_16: { value: "subMenu16", label: "subheader" },
  };

const MENU = {
  MENU_1: { value: "menu1", label: "Menu Item", imgForSubMenu: subMenuStaticPath + "menu1.png", subMenuLeftTitle:"Header Left", subMenuRightTitle:"Header Right" },
  MENU_2: { value: "menu2", label: "Menu Item", imgForSubMenu: subMenuStaticPath + "menu1.png", subMenuLeftTitle:"Header Left", subMenuRightTitle:"Header Right" },
  MENU_3: { value: "menu3", label: "Menu Item", imgForSubMenu: subMenuStaticPath + "menu1.png", subMenuLeftTitle:"Header Left", subMenuRightTitle:"Header Right" },
  MENU_4: { value: "menu4", label: "Menu Item", imgForSubMenu: subMenuStaticPath + "menu1.png", subMenuLeftTitle:"Header Left", subMenuRightTitle:"Header Right" },
  MENU_5: { value: "menu5", label: "Menu Item", imgForSubMenu: subMenuStaticPath + "menu1.png", subMenuLeftTitle:"Header Left", subMenuRightTitle:"Header Right" },
  MENU_6: { value: "menu6", label: "Menu Item", imgForSubMenu: subMenuStaticPath + "menu1.png", subMenuLeftTitle:"Header Left", subMenuRightTitle:"Header Right" },
  MENU_7: { value: "menu7", label: "Menu Item", imgForSubMenu: subMenuStaticPath + "menu1.png", subMenuLeftTitle:"Header Left", subMenuRightTitle:"Header Right" },
  MENU_8: { value: "menu8", label: "Menu Item", imgForSubMenu: subMenuStaticPath + "menu1.png", subMenuLeftTitle:"Header Left", subMenuRightTitle:"Header Right" },
  MENU_9: { value: "menu9", label: "Menu Item", imgForSubMenu: subMenuStaticPath + "menu1.png", subMenuLeftTitle:"Header Left", subMenuRightTitle:"Header Right" },
  MENU_10: { value: "menu10", label: "Menu Item", imgForSubMenu: subMenuStaticPath + "menu1.png", subMenuLeftTitle:"Header Left", subMenuRightTitle:"Header Right" },
  MENU_11: { value: "menu11", label: "Menu Item", imgForSubMenu: subMenuStaticPath + "menu1.png", subMenuLeftTitle:"Header Left", subMenuRightTitle:"Header Right" },
  MENU_12: { value: "menu12", label: "Menu Item", imgForSubMenu: subMenuStaticPath + "menu1.png", subMenuLeftTitle:"Header Left", subMenuRightTitle:"Header Right" },
};

export const getMenuEnumsAsArray = () => {
  let mockSubMenuLeft = Object.values(MOCK_SUB_MENU_LEFT);
  let mockSubMenuRight = Object.values(MOCK_SUB_MENU_RIGHT);

  let menu = Object.values(MENU);
  let result = [];

  for (let i = 0; i < menu.length; i++) {
    let _menu = menu[i];
    _menu.subMenuLeft = mockSubMenuLeft;
    _menu.subMenuRight = mockSubMenuRight;
    result.push(_menu);
  }
  return result;
};
