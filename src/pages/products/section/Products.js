import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  productsPageState,
  updateProductFavoriteStatus,
} from "../../../redux/slices/productSlice";
import WindowResizeUseContext from "../../../hooks/WindowResizeUseContext";
import { DEVICE } from "../../../utils/constants/deviceConstant";
import styled from "@emotion/styled";
import BoxComp from "../../../components/core/Box";
import ForProductView from "../../../components/custom/reactSlickCustomize/ForProductView";
import TitleSection from "./productSection/Title";
import ContentSection from "./productSection/Content";
import FooterSection from "./productSection/Footer";

const Container = styled(BoxComp)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 48px;
`;

const ProductsSection = () => {
  const { device } = WindowResizeUseContext();
  const dispatch = useDispatch();
  const { products, numberOfProductsToShow } = useSelector(productsPageState);
  const [onlyShowFavorites, setOnlyShowFavorites] = useState(false);

  return (
    <Container>
      <TitleSection
        switchClick={() => setOnlyShowFavorites(!onlyShowFavorites)}
        switchStatus={onlyShowFavorites}
      />

      {device === DEVICE.MOBILE ? (
        <ForProductView
          products={products}
          onlyShowFavorites={onlyShowFavorites}
          favoriteClick={(item, newStatus) => {
            dispatch(
              updateProductFavoriteStatus({
                id: item.id,
                newStatus: newStatus,
              })
            );
          }}
        />
      ) : (
        <ContentSection
          products={products}
          onlyShowFavorites={onlyShowFavorites}
          favoriteClick={(item, newStatus) => {
            dispatch(
              updateProductFavoriteStatus({
                id: item.id,
                newStatus: newStatus,
              })
            );
          }}
        />
      )}

      {numberOfProductsToShow < products.length && device !== DEVICE.MOBILE && (
        <FooterSection />
      )}
    </Container>
  );
};

export default ProductsSection;
