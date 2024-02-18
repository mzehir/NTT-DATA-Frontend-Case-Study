import React from "react";
import styled from "@emotion/styled";
import { footerLogoPath } from "../../../../utils/constants/appLogoConstant";
import BoxComp from "../../../../components/core/Box";
import { FooterStandardTypography } from "../../../../components/custom/Typographies";
import LoginInputTogetherButton from "./section/LoginInputTogetherButton";

const Container = styled(BoxComp)`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
`;

const Logo = () => {
  const logo = footerLogoPath;
  return (
    <BoxComp>
      <img src={logo} alt={"LOGO"} style={{ height: "42px" }} />
    </BoxComp>
  );
};

const Description = () => {
  return (
    <BoxComp>
      <FooterStandardTypography>
        Lorem ipsum dolor sit amet consectetur. Auctor tempor pretium aliquam
        neque.
      </FooterStandardTypography>
    </BoxComp>
  );
};

const LoginInputForm = () => {
  return (
    <BoxComp>
      <LoginInputTogetherButton />
    </BoxComp>
  );
};

const LeftSection = () => {
  return (
    <Container>
      <Logo />
      <Description />
      <LoginInputForm />
    </Container>
  );
};

export default LeftSection;
