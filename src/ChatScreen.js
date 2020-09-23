import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";
import { MessageSharp } from "@material-ui/icons";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([
    {
      name: "Elen",
      image:
        "https://hairstylecamp.com/wp-content/uploads/hairstyle-for-small-face-women-6.jpg",
      message: "Whats up",
    },
    {
      name: "Elen",
      image:
        "https://hairstylecamp.com/wp-content/uploads/hairstyle-for-small-face-women-6.jpg",
      message: "asdasdasd",
    },
    {
      message: "Wxxxxxp",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessage([...message, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">You matched with elen On 10/10/10</p>
      {message.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__avatar"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeHolder="wpisz wiadomsoc"
          type="text"
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
