import * as Yup from "yup";
import {
  descriptionValidation,
  idValidation,
  nameValidation,
} from "./ProductValidation";

export const AddProductSchema = Yup.object().shape({
  id: idValidation,
  name: nameValidation,
  description: descriptionValidation,
  logo: Yup.string().url("URL invalida").required("Rquerido"),
  date_release: Yup.date().required("Rquerido"),
  date_revision: Yup.date().required("Rquerido"),
});
