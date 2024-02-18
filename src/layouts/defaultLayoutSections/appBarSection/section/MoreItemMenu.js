import React from "react";
import styled from "@emotion/styled";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuItemSection from "./MenuItem";
import BoxComp from "../../../../components/core/Box";
import MenuComp from "../../../../components/core/Menu";
import { MoreItemMenuButton } from "../../../../components/custom/Buttons";

const StyledMenuComp = styled(MenuComp)`
  margin-top: 1px;

  & .MuiMenu-paper {
    background-color: ${(props) =>
      props.theme.header.moreButton.wrapperBackground};
  }
`;

const ItemWrapper = styled(BoxComp)`
  padding: 5px;
  background-color: ${(props) =>
    props.theme.header.moreButton.wrapperBackground};
`;

export default function MoreItemMenuSection({ menus }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <BoxComp>
      <MoreItemMenuButton
        onClick={handleClick}
        endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      >
        More
      </MoreItemMenuButton>

      <StyledMenuComp anchorEl={anchorEl} open={open} onClose={handleClose}>
        {menus.map((item, index) => (
          <ItemWrapper key={index.toString()} sx={{ padding: "5px" }}>
            <MenuItemSection item={item} />
          </ItemWrapper>
        ))}
      </StyledMenuComp>
    </BoxComp>
  );
}
