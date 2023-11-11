import React from "react";
import { Pressable, Text } from "react-native";
import { FinancialProduct } from "../../../../data/models/FinancialProductModel";
import { styles } from "../styles";
import { NavigationRoutes } from "../../../navigation/NavigationRoutes";
import { ScreenProps } from "../../../navigation/navigationTypes";

type RenderItemProps = {
  item: FinancialProduct;
  navigation: ScreenProps<NavigationRoutes.ProductListing>["navigation"];
};

export const renderItem = ({ item, navigation }: RenderItemProps) => (
  <Pressable
    style={({ pressed }) => [
      styles.itemContainer,
      { backgroundColor: pressed ? "#dddddd" : "transparent" },
    ]}
    onPress={() =>
      navigation.navigate(NavigationRoutes.ProductDetails, {
        productId: item.id,
      })
    }
  >
    <Text style={styles.itemText}>{item.name}</Text>
  </Pressable>
);
