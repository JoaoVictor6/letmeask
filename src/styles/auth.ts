import styled from "styled-components";

export const PageAuth = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    flex: 7;

    background-color: #835afc;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 120px 80px;

    img {
      max-width: 320px;
    }

    strong {
      font: 700 36px "Poppins", sans-serif;
      line-height: 42px;
      margin-top: 16px;
    }

    p {
      font-size: 24px;
      line-height: 32px;
      margin-top: 16px;
      color: #f8f8f8;
    }
  }

  main {
    flex: 8;

    padding: 0 32px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 414px) {
    background: #835afd;

    flex-direction: column;

    aside {
      padding: 0;
      margin: 0 auto;

      img {
        width: 120px;
        margin: 0 auto;
      }

      strong {
        font-size: 24px;
        line-height: 31px;
      }

      p {
        font-size: 20px;
        line-height: 18px;
        width: 313px;
      }
    }

    main {
      background: #fff;
      flex: 10;

      border-radius: 50px 50px 0 0;
    }
  }

  @media screen and (max-width: 860px) and (min-width: 414px) {
    aside {
      padding: 0;
      width: 40%;

      img {
        width: 220px;
        margin: 0 auto;
      }

      strong {
        width: 90%;
        margin: 16px auto 0 auto;
        font-size: 26px;
        line-height: 30px;
      }

      p {
        width: 90%;
        font-size: 20px;
        line-height: 20px;
        margin: 0 auto;
        margin-top: 16px;
      }
    }
  }
`;

export const CreateRoomButton = styled.button`
  margin-top: 64px;
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: #ea4335;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  > img {
    margin-right: 8px;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Separator = styled.div`
  font-size: 14px;
  text-transform: lowercase;
  color: #a8a8b3;

  margin: 32px 0;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    flex: 1;
    height: 1px;
    background: #a8a8b3;
    margin-right: 16px;
  }

  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #a8a8b3;
    margin-left: 16px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;

  > img {
    align-items: center;
  }

  .little {
    width: 154px;
    margin: auto;
    margin-bottom: 16px;
  }

  h2 {
    font-size: 24px;
    margin: 64px 0 24px;
    font-family: "Poppins", sans-serif;
  }

  form {
    input {
      height: 50px;
      border-radius: 8px;
      padding: 0 16px;
      background-color: #fff;
      border: 1px solid #a8a8b3;
    }

    button {
      margin-top: 16px;
    }

    button,
    input {
      width: 100%;
    }
  }

  p {
    font-size: 14px;
    color: #737388;
    margin-top: 16px;

    a {
      color: #e559f9;
    }
  }

  @media screen and (max-width: 414px) {
    > img {
      margin: 0 auto;
      margin-bottom: 16px;
    }

    button {
      margin-top: 8px;
    }
  }
`;
