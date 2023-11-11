import { StackScreenProps } from "@react-navigation/stack";
import { NavigationRoutes } from "./NavigationRoutes";

export type RootStackParamList = {
  [NavigationRoutes.ProductListing]: undefined;
  [NavigationRoutes.ProductDetails]: { productId: string };
  [NavigationRoutes.AddProduct]: undefined;
  [NavigationRoutes.EditProduct]: { productId: string };
  [NavigationRoutes.DeleteProductModal]: { productId: string };
};

export type ScreenProps<T extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  T
>;
