import React from "react";
import styled from "@emotion/styled";
import WindowResizeUseContext from "../../../hooks/WindowResizeUseContext";
import OwnerUseContext from "../../../hooks/OwnerUseContext";
import { DEVICE } from "../../../utils/constants/deviceConstant";
import BoxComp from "../../../components/core/Box";
import { FooterSubTitleTypography } from "../../../components/custom/Typographies";
import SocialMedias from "./bottomSection/SocialMedias";

const Container = styled(BoxComp)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Bottom = () => {
  const { device } = WindowResizeUseContext();
  const { email, phone } = OwnerUseContext();

  return (
    <Container>
      <BoxComp>
        <FooterSubTitleTypography isMobile={device === DEVICE.MOBILE}>
          {email}
        </FooterSubTitleTypography>
      </BoxComp>

      <BoxComp>
        <FooterSubTitleTypography isMobile={device === DEVICE.MOBILE}>
          {phone}
        </FooterSubTitleTypography>
      </BoxComp>

      {device !== DEVICE.MOBILE && (
        <BoxComp>
          <SocialMedias device={device} />
        </BoxComp>
      )}
    </Container>
  );
};

export default Bottom;
