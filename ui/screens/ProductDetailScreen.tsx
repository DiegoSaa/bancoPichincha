import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { ScreenProps } from "../navigation/navigationTypes";
import { NavigationRoutes } from "../navigation/NavigationRoutes";
import { FinancialProduct } from "../../data/models/FinancialProductModel";

const ProductDetailScreen = ({
  route,
  navigation,
}: ScreenProps<NavigationRoutes.ProductDetails>) => {
  const [product, setProduct] = useState<FinancialProduct | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const { productId } = route.params;
    fetchProductDetails(productId);
  }, [route.params]);

  const fetchProductDetails = async (productId: string) => {
    /* try {
      setIsLoading(true);
      // Replace with your actual API call
      const response = await fetch(`https://yourapi.com/products/${productId}`);
      const data: FinancialProduct = await response.json();
      setProduct(data);
    } catch (error) {
      console.error(error);
      // Handle error appropriately
    } finally {
      setIsLoading(false);
    } */
    console.log(
      "🚀 ~ file: ProductDetailScreen.tsx:55 ~ fetchProductDetails ~ fetchProductDetails:"
    );
  };

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.centered}>
        <Text>Product not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Text>Description: {product.description}</Text>
      {/* Render other product details */}
      <Button
        title='Edit'
        onPress={() =>
          navigation.navigate("EditProduct", { productId: product.id })
        }
      />
      <Button
        title='Delete'
        onPress={() =>
          navigation.navigate("DeleteProductModal", { productId: product.id })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductDetailScreen;
