import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuth";
import { database } from "../../services/firebase";
import { useEffect, useState } from "react";

import {
  RoomsSection,
  Header,
  RoomContent,
  RoomName,
  RoomsCreatedAt,
  RenderContainer,
} from "./styles";

type RoomsProps = {
  authorId: string;
  endedAt?: string;
  roomName: string;
  id: string;
};

type FirebaseRoom = Record<
  string,
  {
    authorId: string;
    endedAt?: string;
    room: string;
  }
>;

export function CreatedRooms() {
  const { user } = useAuthContext();
  const [rooms, setRooms] = useState<RoomsProps[]>([]);

  useEffect(() => {
    const roomsQuestions = async () => {
      const roomsRef = await (await database.ref("/rooms/").get()).val();

      const firebaseRoom: FirebaseRoom = roomsRef ?? {};

      const parsedRooms = Object.entries(firebaseRoom).map(([key, value]) => {
        return {
          id: key,
          authorId: value.authorId,
          endedAt: value.endedAt ?? "",
          roomName: value.room,
        };
      });
      setRooms(parsedRooms);
    };
    roomsQuestions();
  }, [rooms]);

  async function handleDeleteRoom(roomId: string) {
    if (window.confirm("Tem certeza que deseja excluir essa pergunta?")) {
      setRooms(rooms.filter((room) => room.id !== roomId));
      await database.ref(`rooms/${roomId}/`).remove();
    }
  }

  function ParsedDate(data: string | undefined) {
    const parsedData = new Date(data as string);

    return `${parsedData.getDate()}/${parsedData.getMonth()}/${parsedData.getFullYear()} as ${parsedData.getHours()}/${parsedData.getMinutes()}`;
  }

  const userRooms = rooms.filter((room) => room.authorId === user?.id);

  return (
    <RoomsSection>
      <Header>
        <span>Salas existentes</span>
        <Link to="/rooms/new">Criar sala</Link>
      </Header>
      <RenderContainer>
        {userRooms.map(({ id, roomName, endedAt }, index) => {
          return (
            <RoomContent key={index}>
              <div>
                <RoomName>
                  <Link to={`/admin/rooms/${id}`}>{roomName}</Link>
                </RoomName>
                {endedAt !== "" && (
                  <RoomsCreatedAt>
                    Sala encerrada em: {ParsedDate(endedAt)}
                  </RoomsCreatedAt>
                )}
              </div>
              <button onClick={() => handleDeleteRoom(id)}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 5.99988H5H21"
                    stroke="#737380"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z"
                    stroke="#737380"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </RoomContent>
          );
        })}
      </RenderContainer>
    </RoomsSection>
  );
}
