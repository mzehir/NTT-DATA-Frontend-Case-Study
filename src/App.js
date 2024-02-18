import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { WindowResizeProvider } from "./contexts/WindowResizeContext";
import { OwnerProvider } from "./contexts/OwnerContext";
import Router from "./router/Router";
import OverlayComp from "./components/custom/Overlay";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <ThemeProvider>
      <WindowResizeProvider>
        <OwnerProvider>
          <Router />
          <OverlayComp />
        </OwnerProvider>
      </WindowResizeProvider>
    </ThemeProvider>
  );
}

export default App;
