import styled from "styled-components";

export const Div = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;

  > img {
    margin-bottom: 16px;
  }
`;

export const Subtitle = styled.span`
  font-size: 14px;
  color: #737380;
  text-align: center;
`;

export const Title = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #29292e;
`;
