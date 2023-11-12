import React, { useState } from "react";
import { View, Text, Button, Image } from "react-native";
import { ScreenProps } from "../../navigation/navigationTypes";
import { NavigationRoutes } from "../../navigation/NavigationRoutes";
import { styles } from "./styles";
import useFinancialProducts from "../../hooks/useFinancialProducts";
import DeleteProductModal from "../../components/DeleteProductModal";
import { StyledButton } from "../../components/StyledButton";
import { COLORS } from "../../constants/colors";

const ProductDetailScreen = ({
  route,
  navigation,
}: ScreenProps<NavigationRoutes.ProductDetails>) => {
  const { productId } = route.params;
  const { data: products, isLoading, isError } = useFinancialProducts();

  const [isModalDeleteVisible, setIsModalDeleteVisible] = useState(false);

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
      <Text style={styles?.id}>{`ID: ${product?.id}`}</Text>
      <Text style={styles?.extraInfo}>Información extra</Text>
      <View style={styles?.cardContainer}>
        <DetailRow label='Name' value={product?.name} />
        <DetailRow label='Description' value={product?.description} />
        <DetailRow label='Logo' value={""} />
        {product?.logo && (
          <Image source={{ uri: product.logo }} style={styles.logoContainer} />
        )}
        <DetailRow
          label='Release Date'
          value={product?.date_release?.toDateString()}
        />
        <DetailRow
          label='Revision Date'
          value={product?.date_revision?.toDateString()}
        />
      </View>
      {/* Render other product details */}
      <View style={styles.buttonContainer}>
        <StyledButton
          title='Editar'
          onPress={() =>
            navigation.navigate(NavigationRoutes.EditProduct, {
              product,
            })
          }
          color={COLORS.LIGTH_BLUE_PICHINCHA}
        />
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          title='Eliminar'
          onPress={() => setIsModalDeleteVisible(true)}
          color={COLORS.RED_PICHINCHA}
        />
      </View>
      <DeleteProductModal
        productId={product?.id}
        productName={product?.name}
        navigation={navigation}
        visible={isModalDeleteVisible}
        setVisible={setIsModalDeleteVisible}
      />
    </View>
  );
};

const DetailRow = ({ label, value }) => (
  <View style={styles.detailRow}>
    <Text style={styles.detailLabel}>{label}</Text>
    <Text style={styles.detailValue}>{value}</Text>
  </View>
);

export default ProductDetailScreen;
