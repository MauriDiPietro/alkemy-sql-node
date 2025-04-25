import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";

const socket = io("http://localhost:8080");

function App() {
  const [newMessage, setNewMessage] = useState("");
  const [newUsername, setNewUsername] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!newUsername) {
      const value = prompt("Your username:");
      setNewUsername(value);
      socket.on("messages", (data) => {
        setMessages(data);
      });
    }
  }, []);

  const sendMessage = () => {
    try {
      const message = {
        username: newUsername,
        message: newMessage,
      };
      socket.emit("chat:message", message);
      setNewMessage("");
      socket.on("messages", (data) => {
        setMessages(data);
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
  <>
  <input
    type="text"
    placeholder="Escribi tu mensaje"
    value={newMessage}
    onChange={(e)=>setNewMessage(e.target.value)}
    />
    <button onClick={sendMessage}>Enviar</button>
    <>
      {
        messages &&
          messages.map((msg) => {
            return(
              <div key={msg.id}>
                <strong>{msg.username}</strong>
                <p>{msg.message}</p>
              </div>
            )
          })
      }
    </>
  </>
  );
}

export default App;
