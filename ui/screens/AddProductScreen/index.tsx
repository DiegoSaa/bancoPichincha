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

const inputFields = [
  { name: "id", type: "input", placeholder: "ID" },
  { name: "name", type: "input", placeholder: "Name" },
  { name: "description", type: "input", placeholder: "Description" },
  { name: "logo", type: "input", placeholder: "Logo URL" },
  { name: "date_release", type: "date", placeholder: "Release Date" },
  { name: "date_revision", type: "date", placeholder: "Revision Date" },
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
    date_revision: new Date(),
  };

  const handleAddProduct = (values: ConstructorFinancialProduct) => {
    addProduct(values);
    navigation.goBack();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddProductSchema}
      onSubmit={(values) => handleAddProduct(values)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        values,
        errors,
        touched,
        resetForm,
      }) => (
        <View style={styles.container}>
          <KeyboardAwareScrollView>
            {inputFields.map((field) =>
              field.type === "input" ? (
                <View key={field.name}>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange(field.name)}
                    onBlur={handleBlur(field.name)}
                    value={values[field.name]}
                    placeholder={field.placeholder}
                  />
                  {touched[field.name] && errors[field.name] && (
                    <Text style={styles.error}>{errors[field.name]}</Text>
                  )}
                </View>
              ) : (
                <DatePickerInput
                  key={field.name}
                  name={field.name}
                  value={values[field.name]}
                  onChange={setFieldValue}
                  errors={errors[field.name]}
                  touched={touched[field.name]}
                />
              )
            )}
            <View style={styles.buttonContainer}>
              <StyledButton onPress={handleSubmit} title='Enviar' />
            </View>
            <View style={styles.buttonContainer}>
              <StyledButton
                onPress={resetForm}
                title='Reiniciar'
                color={COLORS.LIGTH_BLUE_PICHINCHA}
              />
            </View>
          </KeyboardAwareScrollView>
        </View>
      )}
    </Formik>
  );
};

export default AddProductScreen;
