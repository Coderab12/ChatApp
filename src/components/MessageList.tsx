import React from 'react';

interface MessageListProps {
  messages: string[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  if (!messages || messages.length === 0) {
    return <div>No messages yet.</div>;
  }

  return (
    <div>
      {messages.map((message, index) => (
        <div key={index} className="p-2 bg-blue-200 my-2 rounded">
          {message}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
