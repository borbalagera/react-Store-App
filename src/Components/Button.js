import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-variant: small-caps;
  font-size: 1.2rem;
  border: 2px solid black;
  border-color: ${(props) => (props.cart ? "var(--mainOther)" : "black")};
  color: ${(props) => (props.cart ? "var(--mainOther)" : "black")};
  margin-right: 5px;
  cursor: pointer;
  transition: all 1s linear;
  &:focus {
    outline: none;
  }

  &:hover {
    background: ${(props) => (props.cart ? "var(--mainOther)" : "white")};
    color: ${(props) => (props.cart ? "white" : "black")};
  }
`;
