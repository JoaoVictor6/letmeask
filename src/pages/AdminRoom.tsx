import { useParams, useHistory } from "react-router-dom";

import logoImg from "../assets/images/logo.svg";
import deleteImg from "../assets/images/delete.svg";
import answerImg from "../assets/images/answer.svg";
import checkImg from "../assets/images/check.svg";

import { Button } from "../components/Button";
import { Question } from "../components/Question";
import { RoomCode } from "../components/RoomCode";
import { useRoom } from "../hooks/useRoom";

import "../styles/room.scss";
import { database } from "../services/firebase";

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
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="logo do site" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={() => handleEndRoom()}>
              Encerrar sessão
            </Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="question-list">
          {questions.map((question) => (
            <Question
              content={question.content}
              author={question.author}
              key={question.id}
            >
              <button
                type="button"
                onClick={() => handleCheckQuestionAnswered(question.id)}
              >
                <img src={checkImg} alt="Marcar pergunta como respondida" />
              </button>
              <button
                type="button"
                onClick={() => handleHighlightQuestion(question.id)}
              >
                <img src={answerImg} alt="Dar destaque a pergunta" />
              </button>
              <button
                type="button"
                onClick={() => handleDeleteQuestion(question.id)}
              >
                <img src={deleteImg} alt="Deletar pergunta" />
              </button>
            </Question>
          ))}
        </div>
      </main>
    </div>
  );
}
