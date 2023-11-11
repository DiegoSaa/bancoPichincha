import React, { useState } from "react";
import { View, Text, FlatList, TextInput } from "react-native";
import { ScreenProps } from "../../navigation/navigationTypes";
import { NavigationRoutes } from "../../navigation/NavigationRoutes";
import useFinancialProducts from "../../hooks/useFinancialProducts";
import { styles } from "./styles";
import { renderItem } from "./components/render";

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
        renderItem={({ item }) => renderItem({ item, navigation })}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ProductListingScreen;
