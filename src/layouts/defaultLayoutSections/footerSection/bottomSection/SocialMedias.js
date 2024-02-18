import React from "react";
import OwnerUseContext from "../../../../hooks/OwnerUseContext";
import styled from "@emotion/styled";
import BoxComp from "../../../../components/core/Box";
import { DEVICE } from "../../../../utils/constants/deviceConstant";

const Container = styled(BoxComp, {
  shouldForwardProp: (prop) => prop !== "isWeb",
})`
  display: flex;
  flex-direction: row;
  gap: ${(props) => (props.isWeb ? "24px" : "10px")};
`;

const ImgWrapper = styled(BoxComp)`
  cursor: pointer;
`;

const SocialMedia = ({ item }) => {
  const { url, logo } = item;

  return (
    <ImgWrapper onClick={() => window.open(url, "_blank")}>
      <img height={24} width={24} src={logo} alt={"LOGO"} />
    </ImgWrapper>
  );
};

const SocialMedias = ({ device }) => {
  const { socialMedias: _socialMedias } = OwnerUseContext();
  return (
    <Container isWeb={device === DEVICE.WEB}>
      <SocialMedia item={_socialMedias.instagram} />

      <SocialMedia item={_socialMedias.linkedin} />

      <SocialMedia item={_socialMedias.facebook} />
    </Container>
  );
};

export default SocialMedias;
