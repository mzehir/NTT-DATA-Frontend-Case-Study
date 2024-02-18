import React from "react";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks";
import { MenuItemButton } from "../../../../components/custom/Buttons";
import SubMenuSection from "./SubMenu";

const MenuItem = ({ item }) => {
  const popupState = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });
  return (
    <>
      <MenuItemButton {...bindHover(popupState)}>{item.label}</MenuItemButton>

      <HoverMenu
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <SubMenuSection
          subMenus={{
            subMenuLeft: {
              title: item.subMenuLeftTitle,
              subMenus: item.subMenuLeft,
            },
            subMenuRight: {
              title: item.subMenuRightTitle,
              subMenus: item.subMenuRight,
            },
            img: item.imgForSubMenu,
          }}
        />
      </HoverMenu>
    </>
  );
};

export default MenuItem;
