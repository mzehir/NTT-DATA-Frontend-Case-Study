import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/slices/productSlice";
import WindowResizeUseContext from "../../hooks/WindowResizeUseContext";
import styled from "@emotion/styled";
import BoxComp from "../../components/core/Box";
import IntroductionSection from "./section/Introduction";
import ProductsSection from "./section/Products";

const Container = styled(BoxComp)`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const ProductsPage = () => {
  const { dynamicAppStyles } = WindowResizeUseContext();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getProducts());
    };

    fetchData();
  }, []);

  return (
    <Container>
      <BoxComp>
        <IntroductionSection />
      </BoxComp>

      <BoxComp sx={dynamicAppStyles.appMargin}>
        <ProductsSection />
      </BoxComp>
    </Container>
  );
};

export default ProductsPage;
