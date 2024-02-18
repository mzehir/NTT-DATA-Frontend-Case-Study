import React from "react";
import styled from "@emotion/styled";
import WindowResizeUseContext from "../../../../hooks/WindowResizeUseContext";
import { DEVICE } from "../../../../utils/constants/deviceConstant";
import BoxComp from "../../../../components/core/Box";
import { SearchTextField } from "../../../../components/custom/TextFields";
import SelectForSearchBox from "../../../../components/custom/SelectForSearchBox";
import { SearchButton } from "../../../../components/custom/Buttons";

const Container = styled(BoxComp, {
  shouldForwardProp: (prop) => prop !== "isGap",
})`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => (props.isGap ? "12px" : "0")};
`;

const LeftWrapper = styled(BoxComp, {
  shouldForwardProp: (prop) => prop !== "isBetween",
})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: ${(props) => `1px solid ${props.theme.header.border.color}`};
  border-right: ${(props) =>
    props.isBetween ? `1px solid ${props.theme.header.border.color}` : "none"};
  border-radius: ${(props) => (props.isBetween ? "4px" : "4px 0 0 4px")};
`;

const SearchWrapper = styled(BoxComp)`
  width: 100%;
  & > :not(style) {
    margin: 0;
  }
`;

const SearchBoxSection = () => {
  const { device } = WindowResizeUseContext();
  return (
    <Container isGap={device !== DEVICE.MOBILE}>
      <LeftWrapper isBetween={device !== DEVICE.MOBILE}>
        <SearchWrapper>
          <SearchTextField />
        </SearchWrapper>

        {device !== DEVICE.MOBILE && <SelectForSearchBox />}
      </LeftWrapper>

      <SearchButton isBetween={device !== DEVICE.MOBILE} />
    </Container>
  );
};

export default SearchBoxSection;
