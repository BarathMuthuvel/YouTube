import React, { useEffect, useState } from "react";
import {
  MENU_ICON,
  USER_ICON,
  YT_LOGO,
  YT_SEARCH_API,
} from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (searchCache[searchQuery]) {
          setSuggestions(searchCache[searchQuery]);
        } else {
          getSearchSugestions();
        }
      },200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSugestions = async () => {
    const response = await fetch(YT_SEARCH_API + searchQuery);
    const data = await response.json();
    setSuggestions(data[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: data[1],
      })
    );
  };

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col text-[10%] p-1 m-1 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-5 cursor-pointer"
          src={MENU_ICON}
          alt="menu-icon"
          onClick={handleToggleMenu}
        />
        <img className="h-5 mx-2" src={YT_LOGO} alt="yt-logo" />
      </div>
      <div className="col-span-10 mt-[2px]">
        <div className="">
          <input
            className="w-1/2 border border-gray-400 rounded-l-full p-[4px]"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            className="border border-gray-400 rounded-r-full p-[4px] bg-gray-100"
            type="button"
          >
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white mt-1 py-2 px-3 w-72 shadow-lg rounded-md border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-[2px] shadow-sm hover:bg-gray-100">
                  ↗️ {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 flex justify-end">
        <img className="h-5" src={USER_ICON} alt="user-icon"></img>
      </div>
    </div>
  );
};

export default Header;
