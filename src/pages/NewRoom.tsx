import { Link, useHistory } from "react-router-dom";
import { FormEvent, useState } from "react";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import { Button } from "../components/Button";
import { database } from "../services/firebase";
import { useAuthContext } from "../hooks/useAuth";
import { MainContent, PageAuth } from "../styles/auth";

export function NewRoom() {
  const { user } = useAuthContext();
  const [newRoom, setNewRoom] = useState("");
  const history = useHistory();

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === "") {
      return;
    }

    const roomRef = database.ref("rooms");
    const firebaseRomm = roomRef.push({
      room: newRoom,
      authorId: user?.id,
    });

    history.push(`/admin/rooms/${firebaseRomm.key}`);
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
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              value={newRoom}
              onChange={(e) => setNewRoom(e.target.value)}
            />
            <Button type="submit" disabled={newRoom === ""}>
              Criar sala
            </Button>
          </form>
          <p>
            quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </MainContent>
      </main>
    </PageAuth>
  );
}
