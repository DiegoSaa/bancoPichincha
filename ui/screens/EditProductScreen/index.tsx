import React from "react";
import { View, TextInput, Button, Text } from "react-native";
import { Formik } from "formik";
import { ScreenProps } from "../../navigation/navigationTypes";
import { NavigationRoutes } from "../../navigation/NavigationRoutes";
import { styles } from "./styles";
import useEditFinancialProduct from "../../hooks/useEditFinancialProduct";
import { UpdateProductParams } from "../../../data/repositories/FinancialProductEdit";
import { EditProductSchema } from "../../validation/EditProductValidation";
import { StyledButton } from "../../components/StyledButton";
import { COLORS } from "../../constants/colors";
import ProductForm from "../../components/ProductForm";

const EditProductScreen: React.FC<
  ScreenProps<NavigationRoutes.EditProduct>
> = ({ route, navigation }) => {
  const { product } = route.params;
  const { mutate: updateProduct, isError, error } = useEditFinancialProduct();

  const initialValues = {
    id: product.id || "",
    name: product.name || "",
    description: product.description || "",
    logo: product.logo || "",
    date_release: product.date_release,
    date_revision: product.date_revision,
  };

  const handleUpdateProduct = (values) => {
    const updateParams: UpdateProductParams = {
      id: product.id,
      name: values.name,
      description: values.description,
      logo: values.logo,
      date_release: values.date_release,
      date_revision: values.date_revision,
    };

    updateProduct(updateParams);
    navigation.goBack();
  };

  return (
    <ProductForm
      initialValues={initialValues}
      onSubmit={(values) => handleUpdateProduct(values)}
      canEditId={false}
    />
  );
};

export default EditProductScreen;
