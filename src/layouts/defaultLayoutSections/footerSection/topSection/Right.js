import React from "react";
import styled from "@emotion/styled";
import WindowResizeUseContext from "../../../../hooks/WindowResizeUseContext";
import { DEVICE } from "../../../../utils/constants/deviceConstant";
import { getTitleEnumsAsArray } from "../../../../utils/constants/titleConstant";
import BoxComp from "../../../../components/core/Box";
import {
  FooterSubTitleTypography,
  FooterTitleTypography,
} from "../../../../components/custom/Typographies";

const Container = styled(BoxComp)`
  display: flex;
  flex: 1;
  flex-direction: ${(props) => props.direction};
  justify-content: end;
  ${(props) => (props.direction === "column" ? "gap: 12px" : "gap: 24px")}
`;

const ItemWrapper = styled(BoxComp)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SubTitleWrapper = styled(BoxComp)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Item = ({ item, device }) => {
  const { label, subTitle } = item;
  return (
    <ItemWrapper>
      <FooterTitleTypography>{label}</FooterTitleTypography>

      {device === DEVICE.WEB && (
        <SubTitleWrapper>
          {subTitle.map((subItem, index) => (
            <FooterSubTitleTypography key={index.toString()}>
              {subItem.label}
            </FooterSubTitleTypography>
          ))}
        </SubTitleWrapper>
      )}
    </ItemWrapper>
  );
};

const RightSection = () => {
  const { device } = WindowResizeUseContext();
  const webVisibleItemNumber = 3;
  const titles = getTitleEnumsAsArray();

  return (
    <Container direction={device === DEVICE.WEB ? "row" : "column"}>
      {titles
        .slice(0, device !== DEVICE.WEB ? titles.length : webVisibleItemNumber)
        .map((item, index) => (
          <Item key={index.toString()} item={item} device={device} />
        ))}
    </Container>
  );
};

export default RightSection;
