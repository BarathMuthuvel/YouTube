import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  });

  return (
    <div className="px-5 py-2 col-span-11">
      <div className="flex">
        <div>
          <iframe
            width="500"
            height="300"
            className="rounded-md"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="text-[7%] w-full">
          <LiveChat />
        </div>
      </div>

      <div className="flex flex-row text-[5%]">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
