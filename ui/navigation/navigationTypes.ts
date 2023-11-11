import { StackScreenProps } from "@react-navigation/stack";
import { NavigationRoutes } from "./NavigationRoutes";
import { FinancialProduct } from "../../data/models/FinancialProductModel";

export type RootStackParamList = {
  [NavigationRoutes.ProductListing]: undefined;
  [NavigationRoutes.ProductDetails]: { productId: string };
  [NavigationRoutes.AddProduct]: undefined;
  [NavigationRoutes.EditProduct]: { product: FinancialProduct };
  [NavigationRoutes.DeleteProductModal]: { productId: string };
};

export type ScreenProps<T extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  T
>;
