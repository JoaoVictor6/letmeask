import styled from "styled-components";

export const RoomCodeElement = styled.button`
  width: 289px;
  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  background: #fff;
  border: 1px solid #835afd;
  cursor: pointer;
  display: flex;

  &:hover {
    > div {
      filter: brightness(0.9);
    }
  }

  > div {
    background: #835afd;
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: 242px;
    font-size: 14px;
    font-weight: 500;
  }

  &:active {
    img {
      transform: scale(0.9);
    }
  }
`;
