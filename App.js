import React, { useState } from 'react';
import UploadPDF from './components/UploadPDF';
import ChatBox from './components/ChatBox';

function App() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8">📄 Smart PDF Chatbot</h1>
        {!showChat ? (
          <UploadPDF onUpload={() => setShowChat(true)} />
        ) : (
          <ChatBox />
        )}
      </div>
    </div>
  );
}

export default App;