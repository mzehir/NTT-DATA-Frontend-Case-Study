import React from "react";
import styled from "@emotion/styled";
import {
  BootstrapDialog,
  BootstrapDialogContent,
  BootstrapDialogTitle,
} from "../../../components/custom/BootstrapDialog";
import BoxComp from "../../../components/core/Box";
import DividerComp from "../../../components/core/Divider";
import { MenuItemButton } from "../../../components/custom/Buttons";

const CustomDivider = styled(DividerComp)`
  margin-top: 10px;
  height: 2px;
  background-color: rgba(217, 217, 217, 1);
`;

const MenusContainer = styled(BoxComp)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const MenuMobile = ({ open, setOpen, menus }) => {
  return (
    <BootstrapDialog fullScreen open={open} onClose={() => setOpen(false)}>
      <BootstrapDialogTitle onClose={() => setOpen(false)}>
        Menus
      </BootstrapDialogTitle>

      <BootstrapDialogContent>
        <MenusContainer>
          {menus.map((item, index) => (
            <BoxComp key={index.toString()}>
              <MenuItemButton>{item.label}</MenuItemButton>
            </BoxComp>
          ))}
        </MenusContainer>

        <CustomDivider />
      </BootstrapDialogContent>
    </BootstrapDialog>
  );
};

export default MenuMobile;
