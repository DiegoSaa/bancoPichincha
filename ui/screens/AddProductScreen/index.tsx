import React from "react";
import { View, TextInput, Text } from "react-native";
import { Formik } from "formik";
import { styles } from "./styles";
import DatePickerInput from "../../components/DatePickerInput";
import { AddProductSchema } from "../../validation/AddProductValidation";
import { ConstructorFinancialProduct } from "../../../data/models/FinancialProductModel";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StyledButton } from "../../components/StyledButton";
import useAddFinancialProduct from "../../hooks/useAddFinantialProduct";
import { ScreenProps } from "../../navigation/navigationTypes";
import { NavigationRoutes } from "../../navigation/NavigationRoutes";
import { COLORS } from "../../constants/colors";
import ProductForm from "../../components/ProductForm";

const inputFields = [
  { name: "id", type: "input", placeholder: "ID" },
  { name: "name", type: "input", placeholder: "Nombre" },
  { name: "description", type: "input", placeholder: "Descripción" },
  { name: "logo", type: "input", placeholder: "Logo URL" },
  { name: "date_release", type: "date", placeholder: "Fecha de liberación" },
  { name: "date_revision", type: "input", placeholder: "Fecha de revisión" },
];

const AddProductScreen = ({
  navigation,
}: ScreenProps<NavigationRoutes.AddProduct>) => {
  const { mutate: addProduct, isError, error } = useAddFinancialProduct();

  const initialValues: ConstructorFinancialProduct = {
    id: "",
    name: "",
    description: "",
    logo: "",
    date_release: new Date(),
    date_revision: new Date(
      new Date().setFullYear(new Date().getFullYear() + 1)
    ),
  };

  const handleAddProduct = (values: ConstructorFinancialProduct) => {
    addProduct(values);
    navigation.goBack();
  };

  return (
    <ProductForm
      initialValues={initialValues}
      onSubmit={(values) => handleAddProduct(values)}
    />
  );
};

export default AddProductScreen;
