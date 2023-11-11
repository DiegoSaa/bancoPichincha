// Navigation
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./navigationTypes";
import { NavigationRoutes } from "./NavigationRoutes";

// Screen components
import ProductListingScreen from "../../ui/screens/ProductListingScreen";
import ProductDetailScreen from "../../ui/screens/ProductDetailScreen";
import AddProductScreen from "../../ui/screens/AddProductScreen";
import EditProductScreen from "../../ui/screens/EditProductScreen";
import DeleteProductModal from "../../ui/screens/DeleteProductModal";

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={NavigationRoutes.ProductListing}>
      <Stack.Screen
        name={NavigationRoutes.ProductListing}
        component={ProductListingScreen}
        options={{ title: "BANCO PICHINCHA" }}
      />
      <Stack.Screen
        name={NavigationRoutes.ProductDetails}
        component={ProductDetailScreen}
        options={{ title: "BANCO PICHINCHA" }}
      />
      <Stack.Screen
        name={NavigationRoutes.AddProduct}
        component={AddProductScreen}
        options={{ title: "BANCO PICHINCHA" }}
      />
      <Stack.Screen
        name={NavigationRoutes.EditProduct}
        component={EditProductScreen}
        options={{ title: "BANCO PICHINCHA" }}
      />
      <Stack.Screen
        name={NavigationRoutes.DeleteProductModal}
        component={DeleteProductModal}
        options={{
          title: "Eliminar Producto",
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
