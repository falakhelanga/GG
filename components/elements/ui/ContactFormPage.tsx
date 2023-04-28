import React from "react";
import Form from "../form/Form";
import TextInput from "../form/TextInput";
import { ColoursEnum } from "@/enums/colourEnum";

const ContactFormPage = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    emailAdress: "",
    mobileNo: "",
    yourMessage: "",
  };

  return (
    <div className="w-full flex justify-center">
      <Form
        onSubmit={() => {}}
        initialValues={initialValues}
        containerClassName="grid grid-cols-2 gap-4"
      >
        <TextInput
          containerClassNames="md:col-span-1 col-span-1 "
          inputClassNames={`bg-[${ColoursEnum["Beige"]}]`}
          name="firstName"
          placeholder="First Name"
        />
        <TextInput
          containerClassNames="md:col-span-1 col-span-1"
          name="lastName"
          placeholder="Last Name"
        />
      </Form>
    </div>
  );
};

export default ContactFormPage;
