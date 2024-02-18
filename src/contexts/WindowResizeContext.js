import React, { createContext, useEffect, useState } from "react";
import { customBreakpoints } from "../theme/breakpoints";
import { DEVICE } from "../utils/constants/deviceConstant";
import {
  appMarginReturn,
  getFooterBottomSectionSpacer,
  getFooterTopSectionSpacer,
  getHeaderAndMenuSpacer,
} from "../utils/constants/appGeneralCssConstant";

const WindowResizeContext = createContext(null);

const WindowResizeProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dynamicAppStyles, _setDynamicAppStyles] = useState({});

  const [device, setDevice] = useState("");

  const setDynamicAppStyles = (key, newValues) => {
    _setDynamicAppStyles((prevStyles) => {
      return { ...prevStyles, [key]: newValues };
    });
  };

  const adjustStylesByWindowWidth = (windowWidth) => {
    if (windowWidth) {
      if (
        windowWidth <= customBreakpoints.mobileBreakpointMax &&
        device !== DEVICE.MOBILE
      ) {
        let appMargin = appMarginReturn(DEVICE.MOBILE);
        let headerAndMenuSpacer = getHeaderAndMenuSpacer(DEVICE.MOBILE);
        let footerTopSectionSpacer = getFooterTopSectionSpacer(DEVICE.MOBILE);
        let footerBottomSectionSpacer = getFooterBottomSectionSpacer(
          DEVICE.MOBILE
        );

        setDynamicAppStyles("appMargin", appMargin);
        setDynamicAppStyles("headerAndMenuSpacer", headerAndMenuSpacer);
        setDynamicAppStyles("footerTopSectionSpacer", footerTopSectionSpacer);
        setDynamicAppStyles(
          "footerBottomSectionSpacer",
          footerBottomSectionSpacer
        );

        setDevice(DEVICE.MOBILE);
      } else if (
        windowWidth <= customBreakpoints.tabletBreakpointMax &&
        device !== DEVICE.TABLET
      ) {
        let appMargin = appMarginReturn(DEVICE.TABLET);
        let headerAndMenuSpacer = getHeaderAndMenuSpacer(DEVICE.TABLET);
        let footerTopSectionSpacer = getFooterTopSectionSpacer(DEVICE.MOBILE);
        let footerBottomSectionSpacer = getFooterBottomSectionSpacer(
          DEVICE.MOBILE
        );

        setDynamicAppStyles("appMargin", appMargin);
        setDynamicAppStyles("headerAndMenuSpacer", headerAndMenuSpacer);
        setDynamicAppStyles("footerTopSectionSpacer", footerTopSectionSpacer);
        setDynamicAppStyles(
          "footerBottomSectionSpacer",
          footerBottomSectionSpacer
        );

        setDevice(DEVICE.TABLET);
      } else if (
        windowWidth > customBreakpoints.tabletBreakpointMax &&
        device !== DEVICE.WEB
      ) {
        let appMargin = appMarginReturn(DEVICE.WEB);
        let headerAndMenuSpacer = getHeaderAndMenuSpacer(DEVICE.WEB);
        let footerTopSectionSpacer = getFooterTopSectionSpacer(DEVICE.MOBILE);
        let footerBottomSectionSpacer = getFooterBottomSectionSpacer(
          DEVICE.MOBILE
        );

        setDynamicAppStyles("headerAndMenuSpacer", headerAndMenuSpacer);
        setDynamicAppStyles("appMargin", appMargin);
        setDynamicAppStyles("footerTopSectionSpacer", footerTopSectionSpacer);
        setDynamicAppStyles(
          "footerBottomSectionSpacer",
          footerBottomSectionSpacer
        );

        setDevice(DEVICE.WEB);
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      adjustStylesByWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    adjustStylesByWindowWidth(window?.innerWidth);
  }, []);

  return (
    <WindowResizeContext.Provider
      value={{ windowWidth, device, dynamicAppStyles }}
    >
      {children}
    </WindowResizeContext.Provider>
  );
};

export { WindowResizeContext, WindowResizeProvider };
