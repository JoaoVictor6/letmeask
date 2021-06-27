import styled from "styled-components";

export const QuestionElement = styled.div`
  background-color: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  & + & {
    margin-top: 8px;
  }

  &.highlighted {
    background: #f4f0ff;
    border: 1px solid #835afd;

    footer .user-info span {
      color: #29292e;
    }
  }

  &.answered {
    background: #dbdcdd;
  }

  p {
    color: #29292e;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;

  > div {
    display: flex;
    gap: 8px;
  }

  button {
    border: 0;
    background-color: transparent;
    transition: filter 02s;
    cursor: pointer;

    &.like-button {
      display: flex;
      align-items: flex-end;
      gap: 8px;
      color: #737380;

      &.liked {
        color: #835afd;

        svg path {
          stroke: #835afd;
        }
      }
    }

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;

    border-radius: 50%;
  }

  span {
    margin-left: 8px;
    color: #737380;
    font-size: 14px;
  }
`;
