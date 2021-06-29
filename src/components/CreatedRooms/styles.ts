import styled from "styled-components";

export const RoomsSection = styled.section`
  margin-bottom: 16px;
  max-width: 312px;
`;

export const Header = styled.header`
  box-shadow: 0px 2px 2px -2px rgba(0, 0, 0, 0.47);
  width: 100%;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  padding: 12px 8px;
  a {
    text-decoration: none;
  }

  a:active,
  a:visited {
    text-transform: none;
    color: #7651e4;
  }

  a:active {
    filter: brightness(0.8);
  }
`;

export const RenderContainer = styled.div`
  overflow-y: scroll;
  max-height: 330px;

  scrollbar-width: none;
`;

export const RoomContent = styled.div`
  margin: 12px 0px;
  border-radius: 5px;
  display: flex;
  background: #fff;
  box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 62px;

  button {
    border: none;
    background: #fff;
    margin-right: 16px;
    cursor: pointer;
  }

  button:hover {
    > svg path {
      stroke: #e73f5d;
    }
  }

  > div {
    text-align: left;
  }
`;

export const RoomName = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  padding: 8px 0px 4px 12px;
  text-overflow: ellipsis;
  color: #29292e;

  a,
  a:hover,
  a:active {
    text-decoration: none;
    color: #29292e;
  }

  a:hover {
    color: #414149;
  }
`;

export const RoomsCreatedAt = styled.div`
  font-size: 12px;
  color: #737388;
  margin-top: 0px;
  margin-left: 12px;
  margin-bottom: 12px;
`;
