import { Field } from "formik";
import React from "react";
import InputWrapper from "./InputWrapper";

interface TextAreaInputPropType {
  name: string;
  label?: string;
  placeholder?: string;
  containerClassNames?: string;
  inputClassNames?: string;
  labelClassNames?: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  cols?: string;
  rows?: string;
}

const TextAreaInput = ({
  name,
  placeholder,
  label,
  inputClassNames,
  containerClassNames,
  labelClassNames,

  type = "text",
  rows,
  cols,
}: TextAreaInputPropType) => {
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
            <textarea
              className={`outline-none w-full rounded bg-white py-3 px-2 ${inputClassNames}`}
              type={type}
              {...field}
              placeholder={placeholder}
              rows={rows}
              cols={cols}
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

export default TextAreaInput;
