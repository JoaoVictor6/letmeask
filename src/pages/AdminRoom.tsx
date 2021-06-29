import { useParams, useHistory } from "react-router-dom";
import { database } from "../services/firebase";

import logoImg from "../assets/images/logo.svg";
import deleteImg from "../assets/images/delete.svg";
import answerImg from "../assets/images/answer.svg";
import checkImg from "../assets/images/check.svg";

import { Button } from "../components/Button";
import { Question } from "../components/Question";
import { RoomCode } from "../components/RoomCode";
import { EmptyStateQuestion } from "../components/EmptyStateQuestion";
import { useRoom } from "../hooks/useRoom";

import {
  PageRoom,
  QuestionList,
  RoomTitle,
  Content,
  Header,
  Main,
} from "../styles/room";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const { id: roomId } = useParams<RoomParams>();
  const history = useHistory();
  const { questions, title } = useRoom(roomId);

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que deseja excluir essa pergunta?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleCheckQuestionAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push("/");
  }

  return (
    <PageRoom>
      <Header>
        <Content>
          <img
            onClick={() => history.push("/rooms/")}
            src={logoImg}
            alt="logo do site"
          />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={() => handleEndRoom()}>
              Encerrar sessão
            </Button>
          </div>
        </Content>
      </Header>

      <Main>
        <RoomTitle>
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </RoomTitle>

        <QuestionList>
          {questions.length > 0 ? (
            questions.map((question) => (
              <Question
                content={question.content}
                author={question.author}
                key={question.id}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                <button
                  className="check"
                  type="button"
                  onClick={() => handleCheckQuestionAnswered(question.id)}
                >
                  <img src={checkImg} alt="Marcar pergunta como respondida" />
                </button>
                <button
                  className="answer"
                  type="button"
                  onClick={() => handleHighlightQuestion(question.id)}
                >
                  <img src={answerImg} alt="Dar destaque a pergunta" />
                </button>
                <button
                  className="delete"
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Deletar pergunta" />
                </button>
              </Question>
            ))
          ) : (
            <EmptyStateQuestion />
          )}
        </QuestionList>
      </Main>
    </PageRoom>
  );
}
