import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchUser = ({ onSearch }) => {
  return (
    <div className="flex text-sm md:text-base">
      <div className="relative w-full overflow-hidden sm:min-w-[100px] md:min-w-[320px] lg:min-w-[440px]">
        <div className="absolute left-2 top-0 flex h-full items-center">
          <IoIosSearch className="text-2xl text-secondary" />
        </div>
        <input
          type="search"
          className="z-20 block w-full rounded bg-bgSecondary px-4 py-2.5 pl-10 text-white shadow shadow-black outline outline-1 outline-gray-600 transition-all placeholder:text-secondary focus:outline-green-2"
          placeholder="Search User Name"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchUser;
