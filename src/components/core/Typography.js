import React from "react";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

const StyledTypography = styled(Typography)`
  font-family: Roboto;
`;

const TypographyComp = (props) => {
  const { children, ...other } = props;

  return <StyledTypography {...other}>{children}</StyledTypography>;
};

export default TypographyComp;
