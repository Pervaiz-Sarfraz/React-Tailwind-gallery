import React, { useState } from "react";

function SearchImage({ searchText }) {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center  border-b-2 border-teal-500 py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700   px-2 leading-tight focus:outline-none bg-white rounded-lg py-3"
            type="text"
            placeholder="Search Image..."
          />
          <button
            className="flex-shrink-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-sm font-bold duration-700 border-4 text-white py-3 px-6 hover:from-pink-500 hover:to-yellow-500 rounded-lg "
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchImage;
