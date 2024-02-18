import React from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)`
  font-family: Roboto;
`;

const ButtonComp = (props) => {
  const { children, ...other } = props;

  return <StyledButton {...other}>{children}</StyledButton>;
};

export default ButtonComp;
