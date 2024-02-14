import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HOME_ICON, SHORTS_ICON, SUBCRIPTION_ICON } from "../utils/constant";

const SideBar = () => {
  const toggleMenu = useSelector((store) => store.app.isMenuOpen);
  if(!toggleMenu) return null;

  return (
    <div className="p-2 shadow-lg col-span-2 text-[7px]">
      <div>
        <ul>
          <Link to="/"><li className="flex"><img className="w-4" src={HOME_ICON}/><span className="mt-[3px]">Home</span></li></Link>
          <li className="flex"><img className="w-4" src={SHORTS_ICON}/><span className="mt-[3px]">Shorts</span></li>
          <li className="flex"><img className="w-4" src={SUBCRIPTION_ICON}/><span className="mt-[3px]">Subscriptions</span></li>
        </ul>
      </div>
      <div className="pt-2">
        <h1 className="font-bold pb-1">Subcription</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Comedy</li>
          <li>Gaming</li>
        </ul>
      </div>
      <div className="pt-2">
        <h1 className="font-bold pb-1">You</h1>
        <ul>
          <li>Your Channel</li>
          <li>History</li>
          <li>Your Videos</li>
          <li>Watch Later</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
