import React from "react";
import { View, Text, Button } from "react-native";
import { ScreenProps } from "../../navigation/navigationTypes";
import { NavigationRoutes } from "../../navigation/NavigationRoutes";
import { styles } from "./styles";
import useFinancialProducts from "../../hooks/useFinancialProducts";

const ProductDetailScreen = ({
  route,
  navigation,
}: ScreenProps<NavigationRoutes.ProductDetails>) => {
  const { productId } = route.params;
  const { data: products, isLoading, isError } = useFinancialProducts();

  const product = products.find((p) => p.id === productId);

  if (!productId) {
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
          navigation.navigate(NavigationRoutes.EditProduct, {
            product,
          })
        }
      />
      <Button
        title='Delete'
        onPress={() =>
          navigation.navigate(NavigationRoutes.DeleteProductModal, {
            productId: product.id,
          })
        }
      />
    </View>
  );
};

export default ProductDetailScreen;
