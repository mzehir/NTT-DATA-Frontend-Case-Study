import React from "react";
import styled from "@emotion/styled";
import WindowResizeUseContext from "../../hooks/WindowResizeUseContext";
import BoxComp from "../../components/core/Box";
import DividerComp from "../../components/core/Divider";
import Top from "./footerSection/Top";
import Bottom from "./footerSection/Bottom";

const Root = styled(BoxComp)`
  background: ${(props) => props.theme.footer.background};
  width: 100%;
`;

const Container = styled(BoxComp)`
  display: flex;
  flex-direction: column;
`;

const StyledDividerComp = styled(DividerComp)`
  background-color: ${(props) => props.theme.footer.color};
  height: 2px;
`;

const ContainerItemWrapper = (props) => {
  const { children, ...other } = props;
  const { dynamicAppStyles } = WindowResizeUseContext();

  return (
    <BoxComp sx={dynamicAppStyles.appMargin} {...other}>
      {children}
    </BoxComp>
  );
};

const FooterSection = () => {
  const { dynamicAppStyles } = WindowResizeUseContext();

  return (
    <Root>
      <Container>
        <ContainerItemWrapper>
          <BoxComp sx={dynamicAppStyles.footerTopSectionSpacer}>
            <Top />
          </BoxComp>
        </ContainerItemWrapper>

        <StyledDividerComp />

        <ContainerItemWrapper>
          <BoxComp sx={dynamicAppStyles.footerBottomSectionSpacer}>
            <Bottom />
          </BoxComp>
        </ContainerItemWrapper>
      </Container>
    </Root>
  );
};

export default FooterSection;
