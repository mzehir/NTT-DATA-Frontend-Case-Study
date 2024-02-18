import React, { useState } from "react";
import styled from "@emotion/styled";
import WindowResizeUseContext from "../../../hooks/WindowResizeUseContext";
import { DEVICE } from "../../../utils/constants/deviceConstant";
import { getMenuEnumsAsArray } from "../../../utils/constants/menuConstant";
import MenuIcon from "@mui/icons-material/Menu";
import BoxComp from "../../../components/core/Box";
import IconButtonComp from "../../../components/core/IconButton";
import MenuMobile from "./MenuMobile";
import LogoSection from "./section/Logo";
import SearchBoxSection from "./section/SearchBox";

const DefaultHeaderContainer = styled(BoxComp)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 24px;
`;

const MobileHeaderContainer = styled(BoxComp)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const MobileHeaderTopRow = styled(BoxComp)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DefaultHeaderSection = () => {
  return (
    <DefaultHeaderContainer>
      <LogoSection />
      <SearchBoxSection />
    </DefaultHeaderContainer>
  );
};

const MobileHeaderSection = () => {
  const [open, setOpen] = useState(false);
  const menus = getMenuEnumsAsArray();

  return (
    <MobileHeaderContainer>
      <MobileHeaderTopRow>
        <LogoSection />

        <IconButtonComp onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButtonComp>
      </MobileHeaderTopRow>

      <SearchBoxSection />

      {open && <MenuMobile open={open} setOpen={setOpen} menus={menus} />}
    </MobileHeaderContainer>
  );
};

const Header = () => {
  const { device } = WindowResizeUseContext();

  return device === DEVICE.MOBILE ? (
    <MobileHeaderSection />
  ) : (
    <DefaultHeaderSection />
  );
};

export default Header;
