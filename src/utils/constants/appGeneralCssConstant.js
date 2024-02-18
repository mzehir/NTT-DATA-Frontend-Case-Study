import { DEVICE } from "./deviceConstant";

// App Margin
const APP_MARGINS = {
  mobileMargin: { marginLeft: "16px", marginRight: "16px" },
  tabletMargin: { marginLeft: "32px", marginRight: "32px" },
  webMargin: { marginLeft: "120px", marginRight: "120px" },
};

export function appMarginReturn(device) {
  let result = {};

  if (DEVICE.MOBILE === device) {
    result = APP_MARGINS.mobileMargin;
  } else if (DEVICE.TABLET === device) {
    result = APP_MARGINS.tabletMargin;
  } else {
    result = APP_MARGINS.webMargin;
  }

  return result;
}

// Header And Menu Spacer
const HEADER_AND_MENU_SPACER = {
  tabletSpacer: { marginTop: "15px", marginBottom: "24px" },
  webSpacer: { marginTop: "24px", marginBottom: "24px" },
};

export function getHeaderAndMenuSpacer(device) {
  let result = {};

  if (DEVICE.TABLET === device) {
    result = HEADER_AND_MENU_SPACER.tabletSpacer;
  } else {
    result = HEADER_AND_MENU_SPACER.webSpacer;
  }

  return result;
}

// Footer Top Spacer
const FOOTER_TOP_SECTION_SPACER = {
  mobileSpacer: { paddingTop: "48px", paddingBottom: "48px" },
  tabletSpacer: { paddingTop: "65px", paddingBottom: "65px" },
  webSpacer: { paddingTop: "65px", paddingBottom: "65px" },
};

export function getFooterTopSectionSpacer(device) {
  let result = {};

  if (DEVICE.MOBILE === device) {
    result = FOOTER_TOP_SECTION_SPACER.mobileSpacer;
  } else if (DEVICE.TABLET === device) {
    result = FOOTER_TOP_SECTION_SPACER.tabletSpacer;
  } else {
    result = FOOTER_TOP_SECTION_SPACER.webSpacer;
  }

  return result;
}

// Footer Bottom Spacer
const FOOTER_BOTTOM_SECTION_SPACER = {
  mobileSpacer: { paddingTop: "16px", paddingBottom: "16px" },
  tabletSpacer: { paddingTop: "21px", paddingBottom: "21px" },
  webSpacer: { paddingTop: "21px", paddingBottom: "21px" },
};

export function getFooterBottomSectionSpacer(device) {
  let result = {};

  if (DEVICE.MOBILE === device) {
    result = FOOTER_BOTTOM_SECTION_SPACER.mobileSpacer;
  } else if (DEVICE.TABLET === device) {
    result = FOOTER_BOTTOM_SECTION_SPACER.tabletSpacer;
  } else {
    result = FOOTER_BOTTOM_SECTION_SPACER.webSpacer;
  }

  return result;
}
