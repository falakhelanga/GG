import { Field, FieldMetaProps, useField } from "formik";
import React, { useEffect, useState } from "react";
import InputWrapper from "./InputWrapper";
import Image from "next/image";
import Link from "next/link";

interface CheckBoxPropType {
  name: string;
  label?: string;
  placeholder?: string;
  containerClassNames?: string;
  inputClassNames?: string;
  labelClassNames?: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  showError?: boolean;
  link?: string;
  setTsAndCsCheckboxMeta?: React.Dispatch<
    React.SetStateAction<FieldMetaProps<any>>
  >;
}

const Checkbox = ({
  name,
  placeholder,
  label,
  inputClassNames,
  containerClassNames,
  labelClassNames,
  link = null,
  showError = true,
  type = "text",
  setTsAndCsCheckboxMeta,
}: CheckBoxPropType) => {
  const [field, meta, helpers] = useField(name);
  const { error, touched } = meta;
  const { value } = field;
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  useEffect(() => {
    if (touched && error) {
      if (setTsAndCsCheckboxMeta) {
        setTsAndCsCheckboxMeta(meta);
      }
    } else {
      if (setTsAndCsCheckboxMeta) {
        setTsAndCsCheckboxMeta(null);
      }
    }
  }, [touched, error]);
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

          {showError && meta.touched && meta.error && (
            <div className="text-red-600 text-sm p-2  bg-opacity-10">
              {meta.error}
            </div>
          )}
        </div>
      </div>
      {link && <Link href={link}>{label}</Link>}
      {!link && <label htmlFor={name}>{label}</label>}
    </div>
  );
};

export default Checkbox;
