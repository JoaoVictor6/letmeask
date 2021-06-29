import { useHistory } from "react-router-dom";
import { database } from "../services/firebase";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import loginImg from "../assets/images/login.svg";

import { MainContent, PageAuth } from "../styles/auth";

import { Button } from "../components/Button";
import { useAuthContext } from "../hooks/useAuth";
import { FormEvent, useState } from "react";
import { CreatedRooms } from "../components/CreatedRooms";

export function HomeLogged() {
  const history = useHistory();
  const { user } = useAuthContext();
  const [roomCode, setRoomCode] = useState("");

  if (!user) {
    history.push("/");
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === "") {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert("Room does not exists.");
      return;
    }

    if (roomRef.val().endedAt) {
      return alert("Room already closed.");
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <PageAuth>
      <aside>
        <img src={illustrationImg} alt="Ilustração de perguntas e respostas." />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <MainContent>
          <img src={logoImg} className="little" alt="Logo do site" />
          <CreatedRooms />
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
            />
            <Button type="submit">
              <img src={loginImg} alt="Entras na sala" />
              Entrar na sala
            </Button>
          </form>
        </MainContent>
      </main>
    </PageAuth>
  );
}
