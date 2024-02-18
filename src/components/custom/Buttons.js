import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import ButtonComp from "../core/Button";
import IconButtonComp from "../core/IconButton";
import { ReactComponent as Eastcon } from "../../assets/icons/east.svg";

//! 1- StyledIconButton ******************************************************************
const StyledSearchButton = styled(IconButtonComp, {
  shouldForwardProp: (prop) => prop !== "isBetween",
})`
  width: 110px;
  height: 100%;
  color: #ffffff;
  background-color: #0059bc;
  &:hover {
    background-color: #0059bc;
  }
  border-radius: ${(props) => (props.isBetween ? "4px" : "0 4px 4px 0")};
`;

export const SearchButton = ({ isBetween }) => {
  return (
    <StyledSearchButton isBetween={isBetween}>
      <SearchIcon />
    </StyledSearchButton>
  );
};

//! 2- StyledMoreItemMenuButton ******************************************************************
const StyledMoreItemMenuButton = styled(ButtonComp)`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  width: 68px;
  height: 28px;
  padding: 0;
  color: ${(props) => props.theme.header.color};
  &:hover {
    background-color: transparent;
  }
`;

export const MoreItemMenuButton = (props) => {
  const { children, ...other } = props;
  return (
    <StyledMoreItemMenuButton {...other}>{children}</StyledMoreItemMenuButton>
  );
};

//! 3- StyledMenuItemButton ******************************************************************
const StyledMenuItemButton = styled(StyledMoreItemMenuButton)`
  position: relative;
  &:hover {
    &::after {
      position: absolute;
      content: "";
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: ${(props) => props.theme.palette.primary.main};
    }
  }
`;

export const MenuItemButton = (props) => {
  const { children, ...other } = props;
  return <StyledMenuItemButton {...other}>{children}</StyledMenuItemButton>;
};

//! 4- Login Button ******************************************************************
const StyledLoginButton = styled(ButtonComp)`
  font-weight: 400;
  font-size: 16px;
  line-height: 18.75px;
  width: 101px;
  height: 36px;
  padding: 0;
  border: none;
  border-radius: 0;
  color: ${(props) => props.theme.footer.loginButton.color};
  background-color: ${(props) => props.theme.footer.loginButton.background};
  &:hover {
    background-color: ${(props) => props.theme.footer.loginButton.background};
  }
`;

export const LoginButton = (props) => {
  const { children, ...other } = props;
  return <StyledLoginButton {...other}>{children}</StyledLoginButton>;
};

//! 5- More Button ******************************************************************
const StyledMoreButton = styled(ButtonComp)`
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  width: 193px;
  height: 56px;
  padding: 16px 32px 16px 32px;
  border-radius: 4px;
  color: ${(props) => props.theme.main.moreButton.color};
`;

export const MoreButton = (props) => {
  const { ...other } = props;
  return (
    <StyledMoreButton
      size="large"
      variant="contained"
      color="primary"
      endIcon={<Eastcon />}
      {...other}
    >
      Daha fazla
    </StyledMoreButton>
  );
};

//! 6- Switch Button ******************************************************************
const StyledSwitchButton = styled(ButtonComp, {
  shouldForwardProp: (prop) => prop !== "switchStatus",
})`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  height: 27px;
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
  border: ${(props) =>
    props.switchStatus
      ? `1px solid ${props.theme.main.switchButton.border}`
      : ""};
  color: ${(props) =>
    props.switchStatus
      ? props.theme.main.switchButton.color.second
      : props.theme.main.switchButton.color.default};

  background-color: ${(props) =>
    props.switchStatus
      ? props.theme.main.switchButton.background.second
      : props.theme.main.switchButton.background.default};

  &:hover {
    background-color: ${(props) =>
      props.switchStatus
        ? props.theme.main.switchButton.hoverBackground.default
        : props.theme.main.switchButton.hoverBackground.second};
  }
`;

export const SwitchButton = (props) => {
  const { ...other } = props;
  return (
    <StyledSwitchButton {...other}>
      {props.switchStatus ? "Tüm Ürünler" : "Beğenilenler"}
    </StyledSwitchButton>
  );
};
