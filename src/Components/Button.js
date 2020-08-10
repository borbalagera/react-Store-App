import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-variant: small-caps;
  font-size: 1.2rem;
  border: 2px solid black;
  border-color: var(--mainTextColor);
  color: var(--mainTextColor);
  margin-right: 5px;
  cursor: pointer;
  transition: all 1s linear;
  &:focus {
    outline: none;
  }

  &:hover {
    background: var(--mainTextColor);
    color: var(--mainmainbg);
  }
`;
