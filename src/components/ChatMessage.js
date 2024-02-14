import React from "react";

const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-center shadow-sm p-1">
      <img
        className="h-4"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <span className="text-[50%] px-1">{name}</span>
      <span className="text-[35%] text-gray-700">{message}</span>
    </div>
  );
};

export default ChatMessage;
