import { Field, useField } from "formik";
import React, { useRef } from "react";
import InputWrapper from "./InputWrapper";

interface ImageUploaderPropType {
  name: string;
  label?: string;
  placeholder?: string;
  containerClassNames?: string;
  inputClassNames?: string;
  labelClassNames?: string;
  type?: React.HTMLInputTypeAttribute | undefined;
}

const ImageUploader = ({
  name,
  placeholder,
  label,
  inputClassNames,
  containerClassNames,
  labelClassNames,
  type = "text",
}: ImageUploaderPropType) => {
  const [field, meta, helpers] = useField(name);
  const { value } = field;

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const photoFile =
      event?.currentTarget?.files && event?.currentTarget?.files[0];
    let fdPhoto = new FormData();

    fdPhoto.append("file", photoFile!!);
    fdPhoto.append("upload_preset", "gynaguard");
    fdPhoto.append("cloud_name", "dxrvqywct");

    fetch("https://api.cloudinary.com/v1_1/dxrvqywct/image/upload", {
      method: "post",
      body: fdPhoto,
    })
      .then((resp) => resp.json())
      .then((data) => helpers.setValue(data.url));
  };

  return (
    <InputWrapper
      labelClassNames={labelClassNames}
      name={name}
      label={label}
      containerClassNames={containerClassNames}
    >
      <label
        htmlFor={name}
        className="bg-pink  rounded-full text-center py-2 px-4 font-semibold"
      >
        <span className="text-white">
          UPLOAD A PHOTO OF YOU WITH YOUR PRODUCT
        </span>
      </label>
      <input
        id={name}
        name={name}
        onChange={(event) => {
          const maxAllowedSize = 10 * 1024 * 1024;
          if (event.currentTarget.files[0].size > maxAllowedSize) {
            helpers.setError("Please upload a shorter/smaller photo.");
          } else {
            handleImageUpload(event);
          }
        }}
        accept="image/*"
        className="input hidden"
        type="file"
      />
      {meta.touched && meta.error && (
        <div className="text-red-600 text-sm p-2  bg-opacity-10">
          {meta.error}
        </div>
      )}
    </InputWrapper>
  );
};

export default ImageUploader;
