import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  const sendMessage = async () => {
    if (!message.trim()) return;
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:8000/api/chat", {
        message,
        history,
      });
      const botResponse = res.data.response;
      setHistory([
        ...history,
        { role: "user", text: message },
        { role: "bot", text: botResponse },
      ]);
      setMessage("");
    } catch (err) {
      setHistory([
        ...history,
        { role: "system", text: "❌ Error connecting to the server." },
      ]);
    }
    setLoading(false);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div className="flex flex-col space-y-4">
      <div className="h-80 overflow-y-auto border border-gray-300 rounded-lg p-4 bg-gray-50 space-y-2">
        {history.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-xl max-w-[80%] text-sm whitespace-pre-wrap ${
              msg.role === "user"
                ? "bg-blue-100 self-end text-right"
                : msg.role === "bot"
                ? "bg-gray-200 self-start text-left"
                : "bg-red-100 text-center w-full"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={bottomRef}></div>
      </div>
      <div className="flex items-center space-x-2">
        <input
          className="flex-1 border px-4 py-2 rounded-lg focus:outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask a question about the PDF..."
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
