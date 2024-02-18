import React from "react";
import styled from "@emotion/styled";
import BoxComp from "../../../core/Box";
import WindowResizeUseContext from "../../../../hooks/WindowResizeUseContext";
import { DEVICE } from "../../../../utils/constants/deviceConstant";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Container = styled(BoxComp, {
  shouldForwardProp: (prop) => prop !== "imageUrl" && prop !== "height",
})`
  position: relative;
  height: ${(props) => props.height};
  width: auto;
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 11px;
  right: 11px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const TitleSection = ({ imageUrl, favoriteStatus, onClick }) => {
  const { device } = WindowResizeUseContext();
  return (
    <Container
      imageUrl={imageUrl}
      height={
        device === DEVICE.MOBILE
          ? "208px"
          : device === DEVICE.TABLET
          ? "111px"
          : "179px"
      }
    >
      <IconWrapper
        onClick={(e) => {
          e.stopPropagation();
          onClick(!favoriteStatus);
        }}
      >
        {favoriteStatus ? (
          <FavoriteIcon fontSize="small" color="error" />
        ) : (
          <FavoriteBorderIcon fontSize="small" color="disabled" />
        )}
      </IconWrapper>
    </Container>
  );
};

export default TitleSection;
