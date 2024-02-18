import React, { useState } from "react";
import MenuItemComp from "../core/MenuItem";
import Select from "@mui/material/Select";
import { getCategoriesEnumsAsArray } from "../../utils/constants/categoryContant";
import { css, useTheme } from "@emotion/react";

const SelectForSearchBox = () => {
  const globalTheme = useTheme();
  const options = getCategoriesEnumsAsArray();
  const [selectedVariant, setSelectedVariant] = useState("");

  const selectStyles = css`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
    min-width: 132px;
    color: ${globalTheme.header.selectForSearchBox.color};
    background-color: ${globalTheme.header.selectForSearchBox.backgroundColor};

    .MuiOutlinedInput-notchedOutline {
      border-color: transparent;
    }

    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${globalTheme.header.selectForSearchBox.borderColor};
    }

    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: ${globalTheme.header.selectForSearchBox.borderColor};
    }

    .MuiSvgIcon-root {
      color: ${globalTheme.header.selectForSearchBox.iconColor};
    }

    &:hover {
      border-color: ${globalTheme.header.selectForSearchBox.borderColor};
    }
  `;

  const menuStyles = css`
    .MuiMenu-paper {
      background-color: ${globalTheme.header.selectForSearchBox.menu
        .backgroundColor};
      padding: 12px;
    }

    .MuiMenuItem-root {
      font-family: Roboto;
      font-size: 14px;
      font-weight: 400;
      line-height: 26px;
      color: ${globalTheme.header.selectForSearchBox.menu.color};
      background-color: ${globalTheme.header.selectForSearchBox.menu
        .backgroundColor};
      padding: 4px 8px;
      border-radius: 2px;

      &:hover {
        background-color: ${globalTheme.header.selectForSearchBox.menu
          .hoverBackgroundColor};
      }
    }

    .Mui-selected {
      background-color: ${globalTheme.header.selectForSearchBox.menu
        .selectedBackgroundColor};
      color: ${globalTheme.header.selectForSearchBox.menu.color};
    }
  `;

  return (
    <Select
      MenuProps={{
        sx: menuStyles,
      }}
      sx={selectStyles}
      variant="outlined"
      displayEmpty
      options={options}
      value={selectedVariant}
      renderValue={(selected) => {
        if (selected.length === 0) {
          return "Categories";
        }
        return options.filter((item) => item.value === selected)[0].label;
      }}
      onChange={(e) => setSelectedVariant(e.target.value)}
    >
      <MenuItemComp style={{ display: "none" }} disabled value="">
        <em>Categories</em>
      </MenuItemComp>

      {options.map((item, index) => (
        <MenuItemComp key={index} value={item.value}>
          {item.label}
        </MenuItemComp>
      ))}
    </Select>
  );
};

export default SelectForSearchBox;
