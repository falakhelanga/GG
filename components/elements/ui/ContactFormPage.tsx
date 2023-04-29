import React from "react";
import Form from "../form/Form";
import TextInput from "../form/TextInput";
import { ColoursEnum } from "@/enums/colourEnum";
import ContentWrap from "./ContentWrap";
import TextAreaInput from "../form/TextAreaInput";
import MarkDown from "./MarkDown";
import Button from "./Button";
import Checkbox from "../form/Checkbox";
import { useFirebase } from "@/context/Firebase";

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
  const { createContacts } = useFirebase();
  return (
    <div className="w-full flex justify-center flex-col">
      <ContentWrap>
        <MarkDown className="text-black text-center prose md:mb-16">
          {description}
        </MarkDown>
      </ContentWrap>

      <ContentWrap className="flex md:flex-row flex-col  md:gap-6">
        {" "}
        <Form
          onSubmit={(values) => {
            createContacts(values);
            console.log(values);
          }}
          initialValues={initialValues}
          containerClassName="
           w-full pb-14 max-sm:mt-4"
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
              name="yourMessage"
              containerClassNames="col-span-2 mb-4"
              inputClassNames={`bg-[#f1ecee] placeholder-black`}
              rows="5"
            />
          </div>
          <div className="w-full flex justify-center flex-col items-center gap-4">
            <div className="flex flex-col col-span-2 md:items-center">
              <div className="flex md:flex-row flex-col col-span-2 justify-center md:gap-6">
                <Checkbox
                  name="isSubscribed"
                  inputClassNames={`bg-[#f1ecee] placeholder-black`}
                  label="Subscribe to GynaGuard"
                />
                <Checkbox
                  // setTsAndCsCheckboxMeta={setTsAndCsCheckboxMeta}
                  inputClassNames={`bg-[#f1ecee] placeholder-black`}
                  showError={false}
                  name="acceptedTsAndCs"
                  label="Accept T's & C's"
                  link="/terms-and-conditions"
                />
              </div>
            </div>
            <div>
              <Button type="submit" className="uppercase">
                submit form
              </Button>
            </div>
          </div>
        </Form>
        <MarkDown className="max-sm:text-center max-sm:mb-4">
          {contactDetails}
        </MarkDown>
      </ContentWrap>
    </div>
  );
};

export default ContactFormPage;
