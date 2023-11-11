import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ScreenProps } from "../navigation/navigationTypes";
import { NavigationRoutes } from "../navigation/NavigationRoutes";
import { FinancialProduct } from "../../data/models/FinancialProductModel";
import useFinancialProducts from "../hooks/useFinancialProducts";

const ProductListingScreen: React.FC<
  ScreenProps<NavigationRoutes.ProductListing>
> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: products, isLoading, error } = useFinancialProducts();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  if (isLoading) {
    return <Text>Loading...</Text>; // Loading state
  }

  if (error) {
    return <Text>Error: {error.message}</Text>; // Error state
  }

  const renderItem = ({ item }: { item: FinancialProduct }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={
        () => null //navigation.navigate("ProductDetails", { productId: item.id })
      }
    >
      <Text style={styles.itemText}>{item.name}</Text>
      {/* Add more UI elements to display product details as needed */}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder='Search products...'
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  searchBar: {
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  itemText: {
    fontSize: 18,
  },
});

export default ProductListingScreen;
