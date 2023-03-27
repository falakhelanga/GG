import React, { useRef, useState } from "react";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import InputWrapper from "./InputWrapper";
import { Field, useField } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/pro-solid-svg-icons";
import { date } from "yup";

interface DatePickerPropType {
  name: string;
  label?: string;
  placeholder?: string;
  containerClassNames?: string;
  inputClassNames?: string;
  labelClassNames?: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  withIcon?: boolean;
  iconClassName?: string;
}

const DatePicker = ({
  name,
  placeholder,
  label,
  inputClassNames,
  containerClassNames,
  labelClassNames,
  type = "text",
  iconClassName,
  withIcon = false,
}: DatePickerPropType) => {
  const [field, meta, helpers] = useField(name);
  const { value } = field;
  const datePickerRef = useRef<any>(null);
  return (
    <InputWrapper
      labelClassNames={labelClassNames}
      name={name}
      label={label}
      containerClassNames={`${containerClassNames} bg-white rounded-md px-4`}
    >
      <>
        <div className="flex items-center">
          <ReactDatePicker
            ref={datePickerRef}
            placeholderText={placeholder}
            className={`outline-none w-full  bg-white  border-gray-300 py-4 px-2 rounded-md ${inputClassNames} bg-pink`}
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
          {withIcon && (
            <FontAwesomeIcon
              onClick={() => {
                datePickerRef?.current?.setOpen(true);
              }}
              className={`${iconClassName} md:cursor-pointer`}
              size="lg"
              icon={faCalendarDays}
            />
          )}
        </div>

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
