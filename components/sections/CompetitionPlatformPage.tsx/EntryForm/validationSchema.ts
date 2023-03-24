import { differenceInYears, format, parseISO } from "date-fns";
import * as Yup from "yup";

export const entryFormValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Please enter your name."),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Please enter your surname."),
  phone: Yup.string().required("Please enter your mobile number."),
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Please enter your email address."),
  dateOfBirth: Yup.string()
    .required("Please enter your date of birth.")
    .test(
      "DOB",
      "You need to be over 18 to participate in this competition.",
      (value) => {
        return Math.abs(differenceInYears(new Date(value), new Date())) >= 18;
      }
    ),
  location: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Please enter your location."),
  bio: Yup.string()
    .min(2, "Too Short!")
    .required(
      "Tell us which GynaGuard product you bought, and what your experience was using it in less than 500 characters"
    ),
  //   acceptedTsAndCs: Yup.bool().oneOf(
  //     [true],
  //     "Please tick the box above to confirm that you agree to comply with terms and conditions of becoming a participating member in GYNAGaurd competition. "
  //   ),
});
