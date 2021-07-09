import { useHistory } from "react-router-dom";
import { Content, HeaderElement } from "./style";
import { Button } from "../Button";
import { RoomCode } from "../RoomCode";
import logoImg from "../../assets/images/logo.svg";

type HeaderProps = {
  roomId: string;
  redirectPath: string;
  hasButton: {
    exists: boolean;
    handleButtonFunction: () => Promise<void> | void;
  };
};

export function Header({ roomId, hasButton, redirectPath }: HeaderProps) {
  const history = useHistory();
  return (
    <HeaderElement>
      <Content>
        <img
          onClick={() => history.push(redirectPath)}
          src={logoImg}
          alt="logo do site"
        />
        <div>
          <RoomCode code={roomId} />
          {hasButton.exists && (
            <Button
              isOutlined
              onClick={() => {
                hasButton.handleButtonFunction();
              }}
            >
              Encerrar sessão
            </Button>
          )}
        </div>
      </Content>
    </HeaderElement>
  );
}
