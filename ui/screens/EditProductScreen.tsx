// EditProductScreen.tsx
import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScreenProps } from "../navigation/navigationTypes";
import { NavigationRoutes } from "../navigation/NavigationRoutes";

// Define the type for your navigation parameters if needed
type ProductStackParamList = {
  ProductDetails: { productId: string };
};

type EditProductScreenNavigationProp = StackNavigationProp<
  ProductStackParamList,
  "ProductDetails"
>;

type Props = {
  navigation: EditProductScreenNavigationProp;
  route: {
    params: {
      productId: string;
    };
  };
};

// Define the form's initial values and validation schema with Yup
const initialValues = {
  id: "",
  name: "",
  description: "",
  logo: "",
  date_release: "",
  date_revision: "",
};

const ProductSchema = Yup.object().shape({
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
  // Add validations for other fields as needed
});

const EditProductScreen: React.FC<
  ScreenProps<NavigationRoutes.EditProduct>
> = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { productId } = route.params;

  useEffect(() => {
    // Replace with your actual API call to fetch product details
    async function fetchProductDetails() {
      try {
        const response = await fetch(`https://your-api/products/${productId}`);
        const data = await response.json();
        // Initialize form with fetched product data
        // setInitialValues(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProductDetails();
  }, [productId]);

  const handleUpdateProduct = (values: typeof initialValues) => {
    console.log(values);
    // TODO: Submit the updated values to the API
  };

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ProductSchema}
      onSubmit={(values) => handleUpdateProduct(values)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
            placeholder='Product Name'
          />
          {touched.name && errors.name && (
            <Text style={styles.error}>{errors.name}</Text>
          )}

          <TextInput
            style={styles.input}
            onChangeText={handleChange("description")}
            onBlur={handleBlur("description")}
            value={values.description}
            placeholder='Product Description'
          />
          {touched.description && errors.description && (
            <Text style={styles.error}>{errors.description}</Text>
          )}

          {/* Include input fields for other properties */}

          <Button onPress={() => handleSubmit()} title='Update Product' />
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

export default EditProductScreen;
