import React from "react";
import styled from "@emotion/styled";
import WindowResizeUseContext from "../../../hooks/WindowResizeUseContext";
import { DEVICE } from "../../../utils/constants/deviceConstant";
import BoxComp from "../../../components/core/Box";
import LeftSection from "./topSection/Left";
import RightSection from "./topSection/Right";

const Container = styled(BoxComp)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Spacer = styled(BoxComp)`
  display: flex;
  flex: 1;
`;

const Top = () => {
  const { device } = WindowResizeUseContext();

  return (
    <Container>
      <LeftSection />

      {device !== DEVICE.MOBILE && <Spacer />}

      {device !== DEVICE.MOBILE && <RightSection />}
    </Container>
  );
};

export default Top;
