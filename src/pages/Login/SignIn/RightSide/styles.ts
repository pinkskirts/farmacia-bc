import styled from "styled-components";
import { theme } from "@theme/index";
import Link from "@components/UI/Link/index";

export const SignInRightSideContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  & input,
  & button {
    border-radius: 5px;
    border: transparent;
    font-size: 20px;
  }
`;

export const PlainText = styled.p`
  white-space: pre;
  font-size: 20px;
  font-weight: bold;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  background-color: rgba(158, 51, 51, 0.4);
  border: 2px transparent;
  border-radius: 5px;
  flex-wrap: wrap;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  padding: 2rem;
  color: ${theme.colors.white[10]};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(158, 51, 51, 0.6);
  }
`;

export const LoginTopDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 1.5rem;
`;

export const LoginTopDivHeader = styled.h1``;

export const DoesNotHaveAccountDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const DoesNotHaveAccountLink = styled(Link)``;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormInputDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TogglePasswordVisibilityDiv = styled.div`
  cursor: pointer;
  position: absolute;
  right: 5%;
  top: 39%;
  background-color: transparent;
`;

export const RememberLoginDiv = styled.div`
  display: flex;
  font-size: 20px;
  gap: 0.5rem;
  align-items: center;
`;

export const RememberLoginCheckboxDiv = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RememberLoginCheckbox = styled.input.attrs({
  type: "checkbox",
})`
  cursor: pointer;
  position: relative;
  width: 30px;
  height: 30px;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: ${theme.colors.white[10]};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  &:checked {
    background-color: ${theme.colors.blue[20]};
  }

  &:checked::after {
    content: "";
    display: block;
    width: 10px;
    height: 18px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    position: absolute;
    top: 2px;
    left: 9px;
  }
`;

export const LoginButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginButton = styled.button.attrs({
  type: "submit",
})`
  cursor: pointer;
  font-size: 20px;
  padding: 8px;
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const LoginBottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  transform: translateY(15px);
`;

export const RequestWarningDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
`;

export const RequestWarningMsg = styled.p`
  color: ${theme.colors.red[10]};
  font-weight: bold;
  font-size: 21px;
`;
