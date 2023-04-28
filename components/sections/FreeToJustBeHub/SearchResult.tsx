import React from "react";
import SearchResultItem from "./SearchResultItem";

const SearchResult = ({ searchResults }: { searchResults: any }) => {
  return (
    <div className="absolute top-[2.7rem]  -mt-[3rem] w-full ">
      <div className="md:grid flex flex-col bg-[#F1ECEE] md:grid-cols-3 md:mt-10 md:gap-7 gap-1">
        <div className="bg-white h-8 col-span-1  relative z-[6]"></div>
        <div className="col-span-2 h-4"></div>
      </div>
      <div className="pt-6 bg-white pb-6  relative z-[6] max-h-[35rem] overflow-auto w-full  ">
        {searchResults.map((item: any) => (
          <SearchResultItem
            id={item.id}
            title={item.title}
            body={item.body}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
