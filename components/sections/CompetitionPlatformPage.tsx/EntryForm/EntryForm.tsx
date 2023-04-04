import Button from "@/components/elements/Button";
import Checkbox from "@/components/elements/Checkbox";
import DatePicker from "@/components/elements/DatePicker";
import DatePickerInput from "@/components/elements/DatePicker";
import Form from "@/components/elements/Form";
import ImageUploader from "@/components/elements/ImageUploader";
import SelectInput from "@/components/elements/SelectInput";
import TextAreaInput from "@/components/elements/TextAreaInput";
import TextInput from "@/components/elements/TextInput";
import ContentWrap from "@/components/elements/layout/ContentWrap";
import { useFirebase } from "@/context/Firebase";
import { EntryValues } from "@/types/entry";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { entryFormValidationSchema } from "./validationSchema";
import { FieldMetaProps } from "formik";

const initialValues: EntryValues = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  email: "",
  phone: "",
  photoURL: "",
  enteredAt: "",
  location: "",
  bio: "",
  acceptedTsAndCs: false,
  subscribe: false,
};

const provinces = [
  { value: "Eastern Cape", label: "Eastern Cape" },
  { value: "Free State", label: "Free State" },
  { value: "Gauteng", label: "Gauteng" },
  { value: "KwaZulu-Natal", label: "KwaZulu-Natal" },
  { value: "Limpopo", label: "Limpopo" },
  { value: "Mpumalanga", label: "Mpumalanga" },
  { value: "Northern Cape", label: "Northern Cape" },
  { value: "North West", label: "North West" },
  { value: "Western Cape", label: "Western Cape" },
];

const EntryForm = () => {
  const { createEntry } = useFirebase();
  const [TsAndCsCheckBoxMeta, setTsAndCsCheckboxMeta] =
    useState<FieldMetaProps<any>>();
  const [showTermsError, setShowTermsError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const submitEntry = async (values: any) => {
    if (submitting) return;
    setSubmitting(true);
    try {
      await createEntry({
        ...values,
        firstName: values.firstName.toLowerCase().trim(),
        lastName: values.lastName.toLowerCase().trim(),
      });
      setSubmitted(true);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className=" w-full flex items-center pt-24 flex-col bg-[#EEE0E6] pb-14">
      <h1 className=" md:text-5xl text-4xl text-pink uppercase mb-12">
        {" "}
        <span className="font-extrabold">entry</span> form
      </h1>

      {submitted && (
        <div className="flex flex-col items-center">
          <div className="w-full max-sm:px-[0rem] h-full px-[3rem] ">
            <div className="bg-[url(/images/paint_stroke.png)] bg-center  h-full md:py-8  bg-cover  md:bg-contain bg-no-repeat flex  w-full flex-col font-paul items-center md:text-[5em] text-6xl text-green">
              <div className="text-brown">Thank you for</div>
              <div className="md:-mt-[1.6rem]">your entry!</div>
            </div>
          </div>

          <ContentWrap className="flex flex-col items-center">
            <div className="text-center mt-6 md:w-[60%]">
              {`Approved entries will appear in the contestant gallery within 48
hours. If you don't see your entry after that period, you can
submit a query and request a second entry by sending an email to:`}
            </div>
            <div className="text-pink">help@gynaquard.co.za</div>
            <div className="flex gap-4 my-6">
              <div
                className="rounded-full flex items-center justify-center h-12 w-12 border border-2 border-pink hover:opacity-80 cursor-pointer
              "
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-pink"
                  size="xl"
                />
              </div>
              <div className="rounded-full flex items-center justify-center h-12 w-12 border border-2 border-pink hover:opacity-80 cursor-pointer">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="xl"
                  className="text-pink"
                />
              </div>
              <div className="rounded-full flex items-center justify-center h-12 w-12 border border-2 border-pink hover:opacity-80 cursor-pointer">
                <FontAwesomeIcon
                  icon={faTiktok}
                  size="xl"
                  className="text-pink"
                />
              </div>
            </div>
          </ContentWrap>
        </div>
      )}
      <ContentWrap className="flex justify-center w-full ">
        {!submitted && (
          <Form
            containerClassName=" w-full flex-1 md:px-[10rem] "
            initialValues={initialValues}
            onSubmit={submitEntry}
            validationSchema={entryFormValidationSchema}
          >
            <div className="grid grid-cols-2  gap-x-4 w-full ">
              <TextInput
                containerClassNames="md:col-span-1 col-span-2"
                name="firstName"
                placeholder="Name"
              />
              <TextInput
                containerClassNames="md:col-span-1 col-span-2"
                name="lastName"
                placeholder="Surname"
              />
              <TextInput
                containerClassNames="md:col-span-1 col-span-2"
                placeholder="Mobile Number"
                name="phone"
              />
              <TextInput
                containerClassNames="md:col-span-1 col-span-2"
                name="email"
                placeholder="Email Address"
              />
              <DatePicker
                containerClassNames="md:col-span-1 col-span-2"
                name="dateOfBirth"
                placeholder="Date of Birth"
                iconClassName="text-pink"
                withIcon
              />
              <SelectInput
                containerClassNames="md:col-span-1 col-span-2"
                name="location"
                options={provinces}
                placeholder="Location"
                isSearchable={true}
              />
              <TextAreaInput
                placeholder="Tell us which GynaGuard product you bought, and what your experience was using it!"
                name="bio"
                containerClassNames="col-span-2 mb-4"
                rows="5"
              />

              <div className="flex flex-col col-span-2 md:items-center">
                <div className="flex md:flex-row flex-col col-span-2 justify-center md:gap-6">
                  <Checkbox
                    name="isSubscribed"
                    label="Subscribe to GynaGuard"
                  />
                  <Checkbox
                    setTsAndCsCheckboxMeta={setTsAndCsCheckboxMeta}
                    showError={false}
                    name="acceptedTsAndCs"
                    label="Accept T's & C's"
                    link="#"
                  />
                </div>
                {TsAndCsCheckBoxMeta &&
                  TsAndCsCheckBoxMeta?.touched &&
                  TsAndCsCheckBoxMeta?.error && (
                    <div className="text-red-600 text-sm p-2  bg-opacity-10 text-center">
                      {TsAndCsCheckBoxMeta.error}
                    </div>
                  )}
                {/* {showTermsError && (
                  <div className="text-red-600 text-sm p-2  bg-opacity-10 col-span-2 text-center md:w-[50%] ">
                    Please tick the box above to confirm that you agree to
                    comply with terms and conditions of becoming a participating
                    member in GYNAGaurd competition.
                  </div>
                )} */}
              </div>
            </div>
            <div className="flex flex-col items-center w-full">
              <div className="md:px-16 mt-7 mb-4">
                <ImageUploader containerClassNames="w-full" name="photoURL" />
              </div>
              <div>
                <Button className="rounded-full " variant="green" type="submit">
                  {!submitting ? "SUBMIT MY ENTRY!" : "SUBMITTING..."}
                </Button>
              </div>
            </div>
          </Form>
        )}
      </ContentWrap>
    </div>
  );
};

export default EntryForm;
