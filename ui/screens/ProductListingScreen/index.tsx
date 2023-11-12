import React, { useState } from "react";
import { View, Text, FlatList, TextInput } from "react-native";
import { ScreenProps } from "../../navigation/navigationTypes";
import { NavigationRoutes } from "../../navigation/NavigationRoutes";
import useFinancialProducts from "../../hooks/useFinancialProducts";
import { styles } from "./styles";
import { renderItem } from "./components/render";
import { StyledButton } from "../../components/StyledButton";
import { EmptyProducts } from "./components/EmptyProducts";
import SkeletonLoader from "./components/SkeletonLoader";
import { COLORS } from "../../constants/colors";

const ProductListingScreen: React.FC<
  ScreenProps<NavigationRoutes.ProductListing>
> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: products, isLoading, error } = useFinancialProducts();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder='Search...'
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <FlatList
          data={products?.filter(
            (item) =>
              item?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
              item?.id?.toLowerCase()?.includes(searchQuery?.toLowerCase())
          )}
          renderItem={({ item }) => renderItem({ item, navigation })}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => (
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: COLORS.LIGTH_GREY_PICHINCHA,
              }}
            />
          )}
          ListEmptyComponent={EmptyProducts}
        />
      )}
      <View style={styles.addButton}>
        <StyledButton
          onPress={() => navigation.navigate(NavigationRoutes.AddProduct)}
          title='Agregar'
        />
      </View>
    </View>
  );
};

export default ProductListingScreen;
