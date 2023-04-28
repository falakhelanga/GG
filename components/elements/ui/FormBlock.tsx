import React from "react";
import Form from "../form/Form";

const FormBlock = ({
  textIinput,
  textArea,
  formName,
}: {
  textIinput: any;
  textArea: any;
  formName: any;
}) => {
  const initialValues = textIinput.map;

  return (
    <div>
      {/* <Form
            containerClassName=" w-full flex-1 md:px-[10rem] "
            // initialValues={initialValues}
            onSubmit={submitEntry}
            validationSchema={entryFormValidationSchema}
          >


          </Form> */}
    </div>
  );
};

export default FormBlock;
