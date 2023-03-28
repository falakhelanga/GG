import React from "react";
import Select from "react-select";

const options = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
];

const SortSelectInput = ({
  setSortValue,
}: {
  setSortValue: React.Dispatch<
    React.SetStateAction<"newest" | "oldest" | null>
  >;
}) => {
  return (
    <div>
      <Select
        styles={{
          container: (styles) => ({
            ...styles,

            outline: "none",
            border: "none",
          }),
          control: (styles) => ({
            ...styles,
            border: "none",
            boxShadow: "none",
            outline: "none",
          }),
        }}
        placeholder="Sort By"
        className="md:w-[14rem] outline-none md:mt-0 mt-3"
        options={options}
        onChange={(value) => {
          setSortValue(value?.value as any);
        }}
      />
    </div>
  );
};

export default SortSelectInput;
