import { Field } from "formik";
import React from "react";
import InputWrapper from "./InputWrapper";

interface TextInputPropType {
  name: string;
  label?: string;
  placeholder?: string;
  containerClassNames?: string;
  inputClassNames?: string;
  labelClassNames?: string;
  type?: React.HTMLInputTypeAttribute | undefined;
}

const TextInput = ({
  name,
  placeholder,
  label,
  inputClassNames,
  containerClassNames,
  labelClassNames,

  type = "text",
}: TextInputPropType) => {
  return (
    <InputWrapper
      labelClassNames={labelClassNames}
      name={name}
      label={label}
      containerClassNames={containerClassNames}
    >
      <Field name={name}>
        {({ field, form, meta }: { field: any; form: any; meta: any }) => (
          <div>
            <input
              className={`outline-none w-full  bg-white  border-gray-300 py-4 px-2 rounded-md ${inputClassNames}`}
              type={type}
              {...field}
              placeholder={placeholder}
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
        )}
      </Field>
    </InputWrapper>
  );
};

export default TextInput;
