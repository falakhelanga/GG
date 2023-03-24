import { Field } from "formik";
import React from "react";
import InputWrapper from "./InputWrapper";

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
  return (
    <div className={`${containerClassNames}  flex gap-3 items-center`}>
      <Field name={name}>
        {({ field, form, meta }: { field: any; form: any; meta: any }) => (
          <div className="">
            <input
              className={`outline-none w-full  bg-white  border-gray-300 py-4 px-2 rounded-md ${inputClassNames}`}
              type="checkbox"
              {...field}
              placeholder={placeholder}
            />
            {showError && meta.touched && meta.error && (
              <div className="text-red-600 text-sm p-2  bg-opacity-10">
                {meta.error}
              </div>
            )}
          </div>
        )}
      </Field>
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Checkbox;
