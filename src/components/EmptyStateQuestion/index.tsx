import emptyImg from "../../assets/images/empty.svg";
import { useAuthContext } from "../../hooks/useAuth";

import { Div, Title, Subtitle } from "./style";

export function EmptyStateQuestion() {
  const { user } = useAuthContext();
  return (
    <Div>
      <img src={emptyImg} />
      <Title>Nenhuma pergunta por aqui...</Title>
      {!user && (
        <Subtitle>
          Faça o seu login e seja a primeira pessoa a fazer uma pergunta!
        </Subtitle>
      )}
    </Div>
  );
}
