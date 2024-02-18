import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { ROUTER } from "../../../../utils/constants/routerConstant";
import { headerLogoPath } from "../../../../utils/constants/appLogoConstant";
import BoxComp from "../../../../components/core/Box";

const Container = styled(BoxComp)`
  display: flex;
  cursor: pointer;
`;

const LogoSection = () => {
  const navigate = useNavigate();
  const logo = headerLogoPath;

  return (
    <Container onClick={() => navigate(ROUTER.PRODUCTS.path)}>
      <img src={logo} alt={"LOGO"} />
    </Container>
  );
};

export default LogoSection;
