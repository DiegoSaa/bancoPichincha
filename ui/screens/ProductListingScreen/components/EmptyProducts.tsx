import React from "react";
import { Text } from "react-native";
import { styles } from "../styles";
import { View } from "react-native";

export const EmptyProducts = () => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemTextName}>No hay productos agregagos</Text>
  </View>
);
