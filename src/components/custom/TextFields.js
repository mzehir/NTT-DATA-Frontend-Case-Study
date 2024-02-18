import styled from "@emotion/styled";
import TextFieldComp from "../core/TextField";

const StyledTextField = styled(TextFieldComp)`
  & input::placeholder {
    font-family: Roboto;
    font-size: 16px;
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border: none;
    }
    &:hover fieldset {
      border: none;
    }
    &.Mui-focused fieldset {
      border: none;
    }
  }
`;

//! 1- SearchTextField ******************************************************************
const StyledSearchTextField = styled(StyledTextField)`
  & input::placeholder {
    font-weight: 500;
    line-height: 24px;
    color: #74777a;
  }
`;

export const SearchTextField = () => {
  return <StyledSearchTextField placeholder="Search..." />;
};

//! 2- SearchTextField ******************************************************************
const StyledLoginTextField = styled(StyledTextField)`
  & input::placeholder {
    font-weight: 400;
    line-height: 19px;
    color: #000000;
  }

  & .MuiOutlinedInput-root {
    background-color: #ffffff;
    border-radius: 0;
  }
`;

export const LoginTextField = () => {
  return <StyledLoginTextField placeholder="Email" />;
};
