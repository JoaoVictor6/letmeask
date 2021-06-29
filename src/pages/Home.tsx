import { useHistory } from "react-router-dom";
import { database } from "../services/firebase";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import loginImg from "../assets/images/login.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import {
  CreateRoomButton,
  MainContent,
  PageAuth,
  Separator,
} from "../styles/auth";

import { Button } from "../components/Button";
import { useAuthContext } from "../hooks/useAuth";
import { FormEvent, useState } from "react";

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuthContext();
  const [roomCode, setRoomCode] = useState("");

  function handleCreateRoom() {
    if (!user) {
      signInWithGoogle();
    }

    history.push("/rooms/");
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
          <img src={logoImg} alt="Logo do site" />
          <CreateRoomButton
            onClick={() => {
              handleCreateRoom();
            }}
          >
            <img src={googleIconImg} alt="Logo do google" />
            Entre com o Google
          </CreateRoomButton>
          <Separator>Ou entre em uma sala</Separator>
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
