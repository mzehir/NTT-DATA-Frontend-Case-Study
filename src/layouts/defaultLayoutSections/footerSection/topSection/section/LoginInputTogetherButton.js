import React from "react";
import styled from "@emotion/styled";
import BoxComp from "../../../../../components/core/Box";
import { LoginTextField } from "../../../../../components/custom/TextFields";
import { LoginButton } from "../../../../../components/custom/Buttons";

const Container = styled(BoxComp)`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

const LoginTextFieldWrapper = styled(BoxComp)`
  width: 100%;
  & > :not(style) {
    margin: 0;
  }
`;

const LoginInputTogetherButton = () => {
  return (
    <Container>
      <LoginTextFieldWrapper>
        <LoginTextField />
      </LoginTextFieldWrapper>

      <LoginButton>Sign Up</LoginButton>
    </Container>
  );
};

export default LoginInputTogetherButton;
