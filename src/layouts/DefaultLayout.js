import React from "react";
import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import { CssBaseline } from "@mui/material";
import { spacing } from "@mui/system";
import PaperComp from "../components/core/Paper";
import AppBarSection from "./defaultLayoutSections/AppBar";
import FooterSection from "./defaultLayoutSections/Footer";

const Root = styled.div`
  display: flex;
  min-height: 100vh;
`;

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

const Paper = styled(PaperComp)(spacing);

const MainContent = styled(Paper)`
  flex: 1;
  background: ${(props) => props.theme.palette.background.default};

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    flex: none;
  }

  .MuiPaper-root .MuiPaper-root {
    box-shadow: none;
  }
`;

const DefaultLayout = ({ children }) => {
  return (
    <Root>
      <CssBaseline />
      <AppContent>
        <AppBarSection />

        <MainContent>
          <>
            {children}
            <Outlet />
          </>
        </MainContent>

        <FooterSection />
      </AppContent>
    </Root>
  );
};

export default DefaultLayout;
