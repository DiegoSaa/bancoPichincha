import * as Yup from "yup";

export const AddProductSchema = Yup.object().shape({
  id: Yup.string()
    .min(3, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  name: Yup.string()
    .min(5, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(10, "Too Short!")
    .max(200, "Too Long!")
    .required("Required"),
  logo: Yup.string().url("Invalid URL").required("Required"),
  date_release: Yup.date().required("Required"),
  date_revision: Yup.date().required("Required"),
});
