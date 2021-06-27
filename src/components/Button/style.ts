import styled from "styled-components";

export const ButtonElement = styled.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  text-transform: capitalize;
  background: #835afd;
  color: #fff;
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  &.outline {
    background: #fff;
    border: 1px solid #835afd;
    color: #835afd;
  }

  > img {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;