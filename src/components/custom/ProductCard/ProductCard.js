import React from "react";
import styled from "@emotion/styled";
import WindowResizeUseContext from "../../../hooks/WindowResizeUseContext";
import { DEVICE } from "../../../utils/constants/deviceConstant";
import BoxComp from "../../core/Box";
import TitleSection from "./section/Title";
import ContentSection from "./section/Content";

const Container = styled(BoxComp, {
  shouldForwardProp: (prop) => prop !== "maxWidth",
})`
  padding: 12px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  max-width: ${(props) => props.maxWidth};
  cursor: pointer;
`;

const ProductCardSection = ({ item, favoriteClick }) => {
  const { name, description, imageUrl, price, shippingMethod, favoriteStatus } =
    item;
  const { device } = WindowResizeUseContext();

  return (
    <Container
      maxWidth={
        device === DEVICE.MOBILE
          ? "428px"
          : device === DEVICE.TABLET
          ? "164px"
          : "285px"
      }
      onClick={() => (window.location.href = "https://www.google.com/")}
    >
      <TitleSection
        imageUrl={imageUrl}
        favoriteStatus={favoriteStatus}
        onClick={(newStatus) => favoriteClick(item, newStatus)}
      />
      <ContentSection
        name={name}
        description={description}
        price={price}
        shippingMethod={shippingMethod}
      />
    </Container>
  );
};

export default ProductCardSection;
