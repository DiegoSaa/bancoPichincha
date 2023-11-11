// AddProductScreen.tsx
import React from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

interface FormValues {
  id: string;
  name: string;
  description: string;
  // Include other fields as needed
}

// Setting up validation schema using Yup
const ProductSchema = Yup.object().shape({
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
  // Define validation for other fields
});

const AddProductScreen = () => {
  const initialValues: FormValues = { id: "", name: "", description: "" };

  const handleAddProduct = (values: FormValues) => {
    console.log(values);
    // TODO: Submit the values to the API
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ProductSchema}
      onSubmit={(values) => handleAddProduct(values)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        resetForm,
      }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("id")}
            onBlur={handleBlur("id")}
            value={values.id}
            placeholder='ID'
          />
          {touched.id && errors.id ? (
            <Text style={styles.error}>{errors.id}</Text>
          ) : null}

          <TextInput
            style={styles.input}
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
            placeholder='Name'
          />
          {touched.name && errors.name ? (
            <Text style={styles.error}>{errors.name}</Text>
          ) : null}

          <TextInput
            style={styles.input}
            onChangeText={handleChange("description")}
            onBlur={handleBlur("description")}
            value={values.description}
            placeholder='Description'
          />
          {touched.description && errors.description ? (
            <Text style={styles.error}>{errors.description}</Text>
          ) : null}

          {/* Include other input fields */}

          <Button onPress={() => handleSubmit()} title='Add Product' />
          <Button onPress={() => resetForm()} title='Reset Form' />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 10,
  },
  error: {
    fontSize: 10,
    color: "red",
  },
});

export default AddProductScreen;
