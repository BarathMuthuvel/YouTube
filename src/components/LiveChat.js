import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, getRandomSentence } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: getRandomSentence(),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <div className="w-full h-[300px] font-semibold text-sm ml-1 p-1 border border-black rounded-md bg-slate-200 overflow-y-scroll flex flex-col-reverse">
      <div>Live Chat</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Barath",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="text-[40%]  w-40 px-2 rounded-l-full"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="text-[40%] rounded-r-full bg-slate-800 text-white px-2">
          Send
        </button>
      </form>
      <div>
        {chatMessage.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))}
      </div>
    </div>
  );
};

export default LiveChat;
