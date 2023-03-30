import React from "react";
import InputWrapper from "./InputWrapper";
import Select, { GroupBase, OptionsOrGroups } from "react-select";
import { Field, useField } from "formik";
interface SelectInputPropType {
  name: string;
  label?: string;
  placeholder?: string;
  containerClassNames?: string;
  inputClassNames?: string;
  labelClassNames?: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  options?: OptionsOrGroups<any, GroupBase<any>> | undefined;
  defaultValue?: any;
  isMulti?: boolean;
  isSearchable?: boolean;
}

const SelectInput = ({
  name,
  placeholder,
  label,
  inputClassNames,
  containerClassNames,
  labelClassNames,
  isSearchable = false,
  type = "select",
  options,
  defaultValue,
  isMulti,
}: SelectInputPropType) => {
  const [field, meta, helpers] = useField(name);
  const { value } = field;
  return (
    <InputWrapper
      labelClassNames={labelClassNames}
      name={name}
      label={label}
      containerClassNames={containerClassNames}
    >
      <div>
        <Select
          placeholder={placeholder}
          isSearchable={isSearchable}
          styles={{
            input: (styles) => {
              return {
                ...styles,
                outline: "none",
                border: "none",
              };
            },

            container: (styles) => ({
              ...styles,
              height: "100%",
              backgroundColor: "transparent",
              outline: "none",
              border: "none",
            }),
            control: (styles) => ({
              ...styles,
              backgroundColor: "white",
              padding: "0.6rem 0",
              boxShadow: "none",
              border: "none",
              borderRadius: "0.375rem",
              outline: "none",
            }),
            dropdownIndicator: (styles) => ({
              ...styles,
              color: "#E9608A",
            }),
          }}
          defaultValue={defaultValue}
          onChange={(value) => {
            helpers.setValue(
              Array.isArray(value)
                ? value.map((item) => item.value)
                : value.value
            );
          }}
          isMulti={isMulti}
          options={options}
          className="basic-multi-select outline "
          classNamePrefix="select"
          name={name}
          // value={value}
        />

        {
          <div
            className={`${
              meta.touched && meta.error ? "opacity-1" : "opacity-0"
            } text-red-600 text-sm    bg-opacity-10`}
          >
            {meta.error ? meta.error : "dd"}
          </div>
        }
      </div>
    </InputWrapper>
  );
};

export default SelectInput;
