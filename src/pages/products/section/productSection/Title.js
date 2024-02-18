import React from "react";
import { useSelector } from "react-redux";
import { productsPageState } from "../../../../redux/slices/productSlice";
import styled from "@emotion/styled";
import BoxComp from "../../../../components/core/Box";
import {
  PageSubTitleTypography,
  PageTitleTypography,
} from "../../../../components/custom/Typographies";
import { SwitchButton } from "../../../../components/custom/Buttons";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Container = styled(BoxComp)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const RightWrapper = styled(BoxComp)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const IconTextWrapper = styled(BoxComp)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const RightSection = ({ switchClick, switchStatus}) => {
  const {favoriteProductCount} = useSelector(productsPageState);
  return (
    <RightWrapper>
      <IconTextWrapper>
        {favoriteProductCount > 0 ? (
          <FavoriteIcon width="24" height="24" color="error" />
        ) : (
          <FavoriteBorderIcon width="24" height="24" />
        )}

        <PageSubTitleTypography>{`${favoriteProductCount} ÜRÜN`}</PageSubTitleTypography>
      </IconTextWrapper>

      <SwitchButton switchStatus={switchStatus} onClick={() => switchClick()} />
    </RightWrapper>
  );
};

const TitleSection = ({ switchClick, switchStatus }) => {
  return (
    <Container>
      <PageTitleTypography>Products</PageTitleTypography>
      <RightSection switchClick={switchClick} switchStatus={switchStatus} />
    </Container>
  );
};

export default TitleSection;
