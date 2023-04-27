import { faMagnifyingGlass } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SearchInput = ({
  handleSearch,
  searchValue,
  setSearchValue,
}: {
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
}) => {
  return (
    <form
      onSubmit={handleSearch}
      className=" flex bg-white px-3 py-2 rounded-lg items-center shadow w-full"
    >
      <input
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        value={searchValue}
        className="flex-1 bg-[transparent] outline-none"
        placeholder="Search for someone"
      />
      <button type="submit">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-pink" />
      </button>
    </form>
  );
};

export default SearchInput;
