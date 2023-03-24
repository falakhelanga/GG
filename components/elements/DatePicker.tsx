import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import InputWrapper from "./InputWrapper";
import { Field, useField } from "formik";

interface DatePickerPropType {
  name: string;
  label?: string;
  placeholder?: string;
  containerClassNames?: string;
  inputClassNames?: string;
  labelClassNames?: string;
  type?: React.HTMLInputTypeAttribute | undefined;
}

const DatePicker = ({
  name,
  placeholder,
  label,
  inputClassNames,
  containerClassNames,
  labelClassNames,
  type = "text",
}: DatePickerPropType) => {
  const [field, meta, helpers] = useField(name);
  const { value } = field;

  return (
    <InputWrapper
      labelClassNames={labelClassNames}
      name={name}
      label={label}
      containerClassNames={containerClassNames}
    >
      <>
        <ReactDatePicker
          placeholderText={placeholder}
          className={`outline-none w-full  bg-white  border-gray-300 py-4 px-2 rounded-md ${inputClassNames}`}
          selected={value}
          onChange={(date) => {
            helpers.setValue(date);
          }}
          dropdownMode="select"
          // closeOnScroll={true}
          showMonthDropdown
          dateFormat="dd/MM/yyyy"
          scrollableYearDropdown
          showYearDropdown
        />

        {meta.touched && meta.error && (
          <div className="text-red-600 text-sm p-2  bg-opacity-10">
            {meta.error}
          </div>
        )}
      </>
    </InputWrapper>
  );
};

export default DatePicker;
