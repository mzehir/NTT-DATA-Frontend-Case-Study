import styled from "@emotion/styled";
import TypographyComp from "../core/Typography";

//! 1- FooterTitleTypography ******************************************************************
const StyledFooterTitleTypography = styled(TypographyComp)`
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
  color: ${(props) => props.theme.footer.color};
`;

export const FooterTitleTypography = (props) => {
  const { children, ...other } = props;
  return (
    <StyledFooterTitleTypography {...other}>
      {children}
    </StyledFooterTitleTypography>
  );
};

//! 2- FooterSubTitleTypography ******************************************************************
const StyledFooterSubTitleTypography = styled(TypographyComp, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})`
  font-weight: 400;
  font-size: ${(props) => (props.isMobile ? "12px" : "20px")};
  line-height: ${(props) => (props.isMobile ? "14.06px" : "23px")};
  color: ${(props) => props.theme.footer.color};
`;

export const FooterSubTitleTypography = (props) => {
  const { children, ...other } = props;
  return (
    <StyledFooterSubTitleTypography {...other}>
      {children}
    </StyledFooterSubTitleTypography>
  );
};

//! 3- FooterStandardTypography ******************************************************************
const StyledFooterStandardTypography = styled(TypographyComp)`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  color: ${(props) => props.theme.footer.color};
`;

export const FooterStandardTypography = (props) => {
  const { children, ...other } = props;
  return (
    <StyledFooterStandardTypography {...other}>
      {children}
    </StyledFooterStandardTypography>
  );
};

//! 4- PageTitleTypography ******************************************************************
const StyledPageTitleTypography = styled(TypographyComp)`
  font-size: 32px;
  font-weight: 500;
  line-height: 38px;
  color: ${(props) => props.theme.main.page.titleColor};
`;

export const PageTitleTypography = (props) => {
  const { children, ...other } = props;
  return (
    <StyledPageTitleTypography {...other}>{children}</StyledPageTitleTypography>
  );
};

//! 5- PageSubTitleTypography ******************************************************************
const StyledPageSubTitleTypography = styled(TypographyComp)`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: ${(props) => props.theme.main.page.titleColor};
`;

export const PageSubTitleTypography = (props) => {
  const { children, ...other } = props;
  return (
    <StyledPageSubTitleTypography {...other}>
      {children}
    </StyledPageSubTitleTypography>
  );
};

//! 6- CardTitleTypography ******************************************************************
const StyledCardTitleTypography = styled(TypographyComp)`
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  color: ${(props) => props.theme.main.cardProduct.titleColor};
`;

export const CardTitleTypography = (props) => {
  const { children, ...other } = props;
  return (
    <StyledCardTitleTypography {...other}>{children}</StyledCardTitleTypography>
  );
};

//! 7- CardSubTitleTypography ******************************************************************
const StyledCardSubTitleTypography = styled(TypographyComp)`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  color: ${(props) => props.theme.main.cardProduct.titleColor};
`;

export const CardSubTitleTypography = (props) => {
  const { children, ...other } = props;
  return (
    <StyledCardSubTitleTypography {...other}>
      {children}
    </StyledCardSubTitleTypography>
  );
};

//! 8- CardDescriptionTitleTypography ******************************************************************
const StyledCardDescriptionTitleTypography = styled(TypographyComp)`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  color: ${(props) => props.theme.main.cardProduct.titleColor};
`;

export const CardDescriptionTitleTypography = (props) => {
  const { children, ...other } = props;
  return (
    <StyledCardDescriptionTitleTypography {...other}>
      {children}
    </StyledCardDescriptionTitleTypography>
  );
};

//! 9- CardDescriptionContentTypography ******************************************************************
const StyledCardDescriptionContentTypography = styled(TypographyComp)`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  color: ${(props) => props.theme.main.cardProduct.titleColor};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  max-height: 28px;
`;

export const CardDescriptionContentTypography = (props) => {
  const { children, ...other } = props;
  return (
    <StyledCardDescriptionContentTypography {...other}>
      {children}
    </StyledCardDescriptionContentTypography>
  );
};

//! 10- CardFooterTypography ******************************************************************
const StyledCardFooterTypography = styled(TypographyComp)`
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  color: ${(props) => props.theme.main.page.titleColor};
  font-family: Inter;
`;

export const CardFooterTypography = (props) => {
  const { children, ...other } = props;
  return (
    <StyledCardFooterTypography {...other}>
      {children}
    </StyledCardFooterTypography>
  );
};
