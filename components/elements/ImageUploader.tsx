import { Field, useField } from "formik";
import React, { useRef, useState } from "react";
import InputWrapper from "./InputWrapper";
import axios from "axios";
import ProgressBar from "@ramonak/react-progress-bar";
import Spinner from "./Spinner";
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
  const [uploadedProgress, setUploadedProgress] = useState<number | null>(null);
  const [uploaded, setUploaded] = useState(false);
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUploaded(false);
    const photoFile =
      event?.currentTarget?.files && event?.currentTarget?.files[0];
    let fdPhoto = new FormData();

    fdPhoto.append("file", photoFile!!);
    fdPhoto.append("upload_preset", "gynaguard");
    fdPhoto.append("cloud_name", "dxrvqywct");
    axios
      .post("https://api.cloudinary.com/v1_1/dxrvqywct/image/upload", fdPhoto, {
        onUploadProgress: (progressEvent) => {
          const res = (progressEvent.loaded / progressEvent?.total!!) * 100;
          setUploadedProgress(Math.floor(res));
        },
      })

      .then(({ data }) => {
        setUploaded(true);

        helpers.setValue(data.url);
      });
  };

  return (
    <InputWrapper
      labelClassNames={labelClassNames}
      name={name}
      label={label}
      containerClassNames={containerClassNames}
    >
      <div className="w-full flex flex-col">
        {!uploadedProgress && (
          <div>
            <label
              htmlFor={name}
              className={`bg-pink   rounded-full text-center py-2 px-4 font-semibold md:cursor-pointer hover:opacity-75`}
            >
              <span className="text-white  max-sm:text-xs">
                UPLOAD A PHOTO OF YOU WITH YOUR PRODUCT
              </span>
            </label>
            {meta.touched && meta.error && (
              <div className="text-red-600 text-sm p-2  bg-opacity-10">
                {meta.error}
              </div>
            )}
            {/* <div className="text-red-600 text-sm p-2  bg-opacity-10">hfhfh</div> */}
          </div>
        )}
        {/* {uploadedProgress === 100 && !uploaded && <Spinner />} */}
        {uploadedProgress &&
          uploadedProgress > 0 &&
          // uploadedProgress !== 100 &&
          !uploaded && (
            <>
              <label
                htmlFor={name}
                className={`bg-pink opacity-0  rounded-full text-center py-2 px-4 font-semibold md:cursor-pointer `}
              >
                <span className="text-white">
                  UPLOAD A PHOTO OF YOU WITH YOUR PRODUCT
                </span>
              </label>
              <div className="-mt-8">
                <div className="text-pink uppercase font-bold text-center mb-0">
                  uploading, please wait...
                </div>
                <ProgressBar
                  bgColor="#E9608A"
                  barContainerClassName="bg-[#CEB9BB] rounded-full"
                  completed={uploadedProgress}
                />
              </div>
            </>
          )}

        {uploadedProgress && uploadedProgress == 100 && uploaded && (
          <div>
            <div className="flex flex-col text-pink items-center">
              <div className="font-bold">success!</div>
              <div>Click the SUBMIT button below</div>
            </div>
          </div>
        )}
      </div>

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
    </InputWrapper>
  );
};

export default ImageUploader;
