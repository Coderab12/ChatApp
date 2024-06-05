import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatApp: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const addMessage = (message: string) => {
    setMessages([...messages, message]);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-1 overflow-auto p-4">
        <MessageList messages={messages} />
      </div>
      <div className="p-4 bg-white">
        <MessageInput onSend={addMessage} />
      </div>
    </div>
  );
};

export default ChatApp;
