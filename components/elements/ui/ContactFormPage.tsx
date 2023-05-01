import React, { useState } from "react";
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
  const [submitting, setSubmiting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { createContacts } = useFirebase();
  const submitsContacts = async (values: any) => {
    setSubmiting(true);
    try {
      await createContacts(values);
      setSubmitted(true);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmiting(false);
    }
  };
  return (
    <div className="w-full flex justify-center flex-col">
      <ContentWrap>
        <MarkDown className="text-black text-center prose md:mb-16">
          {description}
        </MarkDown>
      </ContentWrap>
      {submitted && (
        <ContentWrap className="pb-14 ">
          <div className="text-center">
            {`Thank you for reaching out to us! We appreciate your interest in our
          company and will do our best to respond to your inquiry as soon as
          possible. If you need immediate assistance, please don't hesitate to
          call us at +27 11 635 0000. Thanks again for contacting us and
          have a great day!`}
          </div>
        </ContentWrap>
      )}

      {!submitted && (
        <ContentWrap className="grid md:grid-cols-5   md:gap-6">
          <Form
            onSubmit={(values) => {
              submitsContacts(values);
            }}
            initialValues={initialValues}
            containerClassName="
     w-full pb-14 max-sm:mt-4 md:col-span-3 col-span-5"
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
                placeholder="Mobile No."
              />
              <TextAreaInput
                placeholder="Your message"
                name="yourMessage"
                containerClassNames="col-span-2 mb-4"
                inputClassNames={`bg-[#f1ecee] placeholder-black`}
                rows="5"
              />
            </div>
            <div className="w-full flex justify-center flex-col items-center gap-4 ">
              {/* <div className="flex flex-col col-span-2 md:items-center max-sm:w-full">
        <div className="flex md:flex-row flex-col col-span-2 md:justify-center justify-start md:gap-6 max-sm:w-full">
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
      </div> */}
              <div className="max-sm:w-full">
                <Button type="submit" className="uppercase max-sm:w-full">
                  {submitting ? "submitting..." : "submit form"}
                </Button>
              </div>
            </div>
          </Form>
          <div className="flex items-start">
            <MarkDown className="max-sm:text-center max-sm:mb-4 md:col-span-2 col-span-5  flex items-star ">
              {contactDetails}
            </MarkDown>
          </div>
        </ContentWrap>
      )}
    </div>
  );
};

export default ContactFormPage;
