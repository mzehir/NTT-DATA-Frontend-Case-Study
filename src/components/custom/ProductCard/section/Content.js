import React from "react";
import styled from "@emotion/styled";
import BoxComp from "../../../core/Box";
import {
  CardDescriptionContentTypography,
  CardDescriptionTitleTypography,
  CardFooterTypography,
  CardSubTitleTypography,
  CardTitleTypography,
} from "../../Typographies";

const ContentItemWrapper = styled(BoxComp, {
  shouldForwardProp: (prop) => prop !== "isBg",
})`
  padding: 4px 8px 4px 8px;
  background-color: ${(props) => (props.isBg ? props.theme.main.cardProduct.textBackground : "")};
`;

const ContentSection = (props) => {
  return (
    <BoxComp>
      <ContentItemWrapper>
        <CardTitleTypography>{props.name}</CardTitleTypography>
      </ContentItemWrapper>

      <ContentItemWrapper isBg>
        <CardSubTitleTypography>{props.price}</CardSubTitleTypography>
      </ContentItemWrapper>

      <ContentItemWrapper>
        <CardDescriptionTitleTypography>
          Description
        </CardDescriptionTitleTypography>
      </ContentItemWrapper>

      <ContentItemWrapper>
        <CardDescriptionContentTypography>
          {props.description}
        </CardDescriptionContentTypography>
      </ContentItemWrapper>

      <ContentItemWrapper>
        <CardFooterTypography>{props.shippingMethod}</CardFooterTypography>
      </ContentItemWrapper>
    </BoxComp>
  );
};

export default ContentSection;
