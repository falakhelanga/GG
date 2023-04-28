import React from "react";
import Form from "../form/Form";
import TextInput from "../form/TextInput";
import { ColoursEnum } from "@/enums/colourEnum";
import ContentWrap from "./ContentWrap";
import TextAreaInput from "../form/TextAreaInput";
import MarkDown from "./MarkDown";

const ContactFormPage = ({
  description,
  contactDetails,
}: {
  description: any;
  contactDetails: any;
}) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    emailAdress: "",
    mobileNo: "",
    yourMessage: "",
  };

  return (
    <div className="w-full flex justify-center flex-col">
      <MarkDown className="text-black text-center prose md:mb-16">
        {description}
      </MarkDown>
      <ContentWrap className="flex gap-6">
        {" "}
        <Form
          onSubmit={() => {}}
          initialValues={initialValues}
          containerClassName="
           w-full "
        >
          <div className="grid grid-cols-2  gap-x-8 w-full">
            <TextInput
              containerClassNames="md:col-span-1 col-span-2 "
              inputClassNames={`bg-[#f1ecee] placeholder-black`}
              name="firstName"
              placeholder="First Name"
            />
            <TextInput
              containerClassNames="md:col-span-1 col-span-2 w-full"
              inputClassNames={`bg-[#f1ecee] placeholder-black`}
              name="lastName"
              placeholder="Last Name"
            />
            <TextInput
              containerClassNames="md:col-span-2 col-span-2 w-full"
              inputClassNames={`bg-[#f1ecee] placeholder-black`}
              name="Emailadress"
              placeholder="Email Address"
            />
            <TextInput
              containerClassNames="md:col-span-2 col-span-2 w-full"
              inputClassNames={`bg-[#f1ecee] placeholder-black`}
              name="mobileNo"
              placeholder="Mobile N0."
            />
            <TextAreaInput
              placeholder="Your message"
              name="bio"
              containerClassNames="col-span-2 mb-4"
              inputClassNames={`bg-[#f1ecee] placeholder-black`}
              rows="5"
            />
          </div>
        </Form>
        <MarkDown>{contactDetails}</MarkDown>
      </ContentWrap>
    </div>
  );
};

export default ContactFormPage;
