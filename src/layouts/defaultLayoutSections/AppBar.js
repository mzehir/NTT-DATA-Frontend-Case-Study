import React from "react";
import styled from "@emotion/styled";
import { AppBar as MuiAppBar, Toolbar as MuiToolbar } from "@mui/material";
import WindowResizeUseContext from "../../hooks/WindowResizeUseContext";
import { DEVICE } from "../../utils/constants/deviceConstant";
import DividerComp from "../../components/core/Divider";
import BoxComp from "../../components/core/Box";
import Menu from "./appBarSection/Menu";
import Header from "./appBarSection/Header";

const AppBar = styled(MuiAppBar)`
  background: ${(props) => props.theme.header.background};
  color: ${(props) => props.theme.header.color};
`;

const Toolbar = styled(MuiToolbar)`
  align-items: start;
  padding-left: 0 !important;
  padding-right: 0 !important;
  padding-top: 25px;
  padding-bottom: 22px;
`;

const ToolbarContainer = styled(BoxComp)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledDivider = styled(DividerComp)`
  background: ${(props) => props.theme.header.border.color};
`;

const ToolbarItemWrapper = (props) => {
  const { children, ...other } = props;
  const { dynamicAppStyles } = WindowResizeUseContext();

  return (
    <BoxComp sx={dynamicAppStyles.appMargin} {...other}>
      {children}
    </BoxComp>
  );
};

const HeaderAndMenuSpacerWrapper = (props) => {
  const { children, ...other } = props;
  const { dynamicAppStyles } = WindowResizeUseContext();

  return (
    <BoxComp sx={dynamicAppStyles.headerAndMenuSpacer} {...other}>
      {children}
    </BoxComp>
  );
};

const AppBarSection = () => {
  const { device } = WindowResizeUseContext();

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <ToolbarContainer>
          <ToolbarItemWrapper>
            <Header />
          </ToolbarItemWrapper>

          {device !== DEVICE.MOBILE && (
            <HeaderAndMenuSpacerWrapper>
              <StyledDivider />
            </HeaderAndMenuSpacerWrapper>
          )}

          {device !== DEVICE.MOBILE && (
            <ToolbarItemWrapper>
              <Menu />
            </ToolbarItemWrapper>
          )}
        </ToolbarContainer>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarSection;
