import React from "react";
import Chat from "./Chat";
import "./Chats.css";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="yoo whats up? :)"
        timestamp="40 seconds ago"
        profilePic="https://hairstylecamp.com/wp-content/uploads/hairstyle-for-small-face-women-6.jpg"
      />
      <Chat
        name="Mark"
        message="yoo whats up? :)"
        timestamp="40 seconds ago"
        profilePic="https://hairstylecamp.com/wp-content/uploads/hairstyle-for-small-face-women-6.jpg"
      />
      <Chat
        name="Mark"
        message="yoo whats up? :)"
        timestamp="40 seconds ago"
        profilePic="https://hairstylecamp.com/wp-content/uploads/hairstyle-for-small-face-women-6.jpg"
      />
    </div>
  );
};

export default Chats;
