import React, { useState } from "react";
import axios from "axios";

export default function ChatComponent({ senderId, receiverId }: { senderId: string, receiverId: string }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/chat`, {
      message: input,
      senderId,
      receiverId
    });
    setMessages([...messages, { sender: "You", content: input }, { sender: "AI", content: res.data.aiMessage }]);
    setInput("");
  };

  return (
    <div className="p-6 border rounded h-96 flex flex-col">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((m: any, i: number) => <div key={i}><strong>{m.sender}:</strong> {m.content}</div>)}
      </div>
      <div className="flex">
        <input className="flex-1 border p-2 rounded" value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="ml-2 px-4 py-2 bg-black text-white rounded" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}