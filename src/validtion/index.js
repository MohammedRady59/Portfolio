import * as yup from "yup";

export const schemaForm = yup.object({
  name: yup
    .string()
    .required("Your Name Is Required")
    .min(3, "At least 3 Character"),
  email: yup
    .string()
    .required("Email Is Required")
    .matches(
      /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
      "Enter Vaild Mail extext@test.com"
    ),
  text: yup
    .string()
    .required("Your Message Is Required")
    .min(6, "At least 6 Character"),
});
