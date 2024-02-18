import React from "react";
import { useDispatch } from "react-redux";
import { incrementNumberOfProductsToShow } from "../../../../redux/slices/productSlice";
import styled from "@emotion/styled";
import BoxComp from "../../../../components/core/Box";
import { MoreButton } from "../../../../components/custom/Buttons";

const Container = styled(BoxComp)`
  text-align: center;
`;

const FooterSection = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <MoreButton
        onClick={() => {
          dispatch(incrementNumberOfProductsToShow());
        }}
      />
    </Container>
  );
};

export default FooterSection;
