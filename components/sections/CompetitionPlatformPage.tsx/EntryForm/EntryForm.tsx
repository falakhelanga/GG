import Button from "@/components/elements/Button";
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
import React from "react";

const initialValues: EntryValues = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  email: "",
  phone: "",
  photoURL: "",
  enteredAt: "",
  location: "",
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

  const submitEntry = (values: any) => {
    createEntry(values);
  };

  return (
    <div className=" w-full flex items-center pt-24 flex-col bg-[#EEE0E6]">
      <h1 className=" text-5xl text-pink uppercase mb-12">
        {" "}
        <span className="font-extrabold">entry</span> form
      </h1>
      <ContentWrap className="flex justify-center w-full ">
        <Form
          containerClassName=" w-full flex-1 px-[10rem]"
          initialValues={initialValues}
          onSubmit={submitEntry}
        >
          <div className="grid grid-cols-2 gap-5 w-full ">
            <TextInput
              containerClassNames=""
              name="firstName"
              placeholder="Name"
            />
            <TextInput name="lastName" placeholder="Surname" />
            <TextInput placeholder="Mobile Number" name="phone" />
            <TextInput name="email" placeholder="Email Address" />
            <DatePicker name="dateOfBirth" placeholder="Date of Birth" />
            <SelectInput
              name="location"
              options={provinces}
              placeholder="Location"
            />
            <TextAreaInput
              placeholder="Tell us which GynaGuard product you bought, and what your experience was using it!"
              name="bio"
              containerClassNames="col-span-2"
              rows="5"
            />
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="px-16 mt-7 mb-4">
              <ImageUploader name="photoURL" />
            </div>
            <div>
              <Button className="rounded-full" variant="green" type="submit">
                SUBMIT MY ENTRY!{" "}
              </Button>
            </div>
          </div>
        </Form>
      </ContentWrap>
    </div>
  );
};

export default EntryForm;
