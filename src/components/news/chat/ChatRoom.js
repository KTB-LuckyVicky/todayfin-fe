"use client";
import React, { useState, useEffect, useRef } from "react";
import ReceivedMessage from "./ReceivedMessage";
import SentMessage from "./SentMessage";

const ChatRoom = ({ comments }) => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState(comments);
  const chatEndRef = useRef(null);

  const currentUserId = 1;

  const handleSend = () => {
    if (message.trim()) {
      setChat([
        ...chat,
        {
          userId: currentUserId,
          user: "user1",
          text: message,
          timestamp: new Date().toISOString(),
        },
      ]);
      setMessage("");
    }
  };

  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">채팅방</h2>
      <div className="mb-4 max-h-96 overflow-y-auto">
        {chat.map((comment, index) =>
          comment.userId === currentUserId ? (
            <SentMessage
              key={index}
              user={comment.user}
              timestamp={comment.timestamp}
              text={comment.text}
            />
          ) : (
            <ReceivedMessage
              key={index}
              user={comment.user}
              timestamp={comment.timestamp}
              text={comment.text}
            />
          )
        )}
        <div ref={chatEndRef} />
      </div>
      <div className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 p-2 border rounded-lg mr-2"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          전송
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;