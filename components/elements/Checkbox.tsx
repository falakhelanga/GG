import { Field, useField } from "formik";
import React, { useState } from "react";
import InputWrapper from "./InputWrapper";
import Image from "next/image";

interface CheckBoxPropType {
  name: string;
  label?: string;
  placeholder?: string;
  containerClassNames?: string;
  inputClassNames?: string;
  labelClassNames?: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  showError?: boolean;
}

const Checkbox = ({
  name,
  placeholder,
  label,
  inputClassNames,
  containerClassNames,
  labelClassNames,
  showError = true,
  type = "text",
}: CheckBoxPropType) => {
  const [field, meta, helpers] = useField(name);
  const { value } = field;
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  return (
    <div className={`${containerClassNames}  flex gap-3 items-center`}>
      <div>
        <div className="">
          <div
            onClick={() => {
              setCheckBoxValue((currState) => !currState);
              helpers.setValue(!checkBoxValue);
            }}
            className="bg-white h-5 w-5 md:cursor-pointer  rounded overflow-hidden flex items-center justify-center"
          >
            {value && (
              <Image
                height={15}
                width={15}
                alt="checkmark"
                src="/images/checkmark.svg"
                // className="h-full w-full"
              />
            )}
          </div>
          {/* <input
              className={`checkbox outline-none w-full  bg-white  border-gray-300 py-4 px-2 rounded-md ${inputClassNames}`}
              type="checkbox"
              {...field}
              placeholder={placeholder}
            /> */}
          {showError && meta.touched && meta.error && (
            <div className="text-red-600 text-sm p-2  bg-opacity-10">
              {meta.error}
            </div>
          )}
        </div>
      </div>
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Checkbox;
