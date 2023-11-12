import * as Yup from "yup";

export const EditProductSchema = Yup.object().shape({
  id: Yup.string()
    .required("Required")
    .min(3, "Too Short!")
    .max(10, "Too Long!"),
  name: Yup.string()
    .required("Required")
    .min(5, "Too Short!")
    .max(100, "Too Long!"),
  description: Yup.string()
    .required("Required")
    .min(10, "Too Short!")
    .max(200, "Too Long!"),
});
