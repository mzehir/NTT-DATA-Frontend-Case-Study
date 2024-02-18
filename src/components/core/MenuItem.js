import React from "react";
import { MenuItem } from "@mui/material";

const MenuItemComp = (props) => {
  const { children, ...other } = props;

  return <MenuItem {...other}>{children}</MenuItem>;
};

export default MenuItemComp;
