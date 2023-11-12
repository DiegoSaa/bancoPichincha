// DeleteProductModal.tsx
import React from "react";
import { View, Text, Button, Modal, Image, Pressable } from "react-native";
import { ScreenProps } from "../../navigation/navigationTypes";
import { NavigationRoutes } from "../../navigation/NavigationRoutes";
import { styles } from "./styles";
import useDeleteFinancialProduct from "../../hooks/useDeleteFinantialProduct";
import { StyledButton } from "../StyledButton";
import { COLORS } from "../../constants/colors";

interface DeleteProductModalProps {
  productId: string;
  productName: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
  navigation: ScreenProps<NavigationRoutes.ProductDetails>["navigation"];
}

const DeleteProductModal = ({
  productId,
  productName,
  visible,
  setVisible,
  navigation,
}: DeleteProductModalProps) => {
  const { mutate: deleteProduct, isError, error } = useDeleteFinancialProduct();

  const onConfirm = () => {
    navigation.navigate(NavigationRoutes.ProductListing);
    deleteProduct(productId);
  };
  const onCancel = () => {
    setVisible(false);
  };

  return (
    <Modal visible={visible} animationType='slide' transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modalView}>
          <Pressable onPress={onCancel} style={styles.closeButton}>
            <Image
              source={require("../../assets/close.png")}
              style={styles.headerIcon}
            />
          </Pressable>
          <View style={styles.modalContent}>
            <Text>Estás seguro de eliminar el producto {productName}?</Text>
            {/* Buttons */}
            {/* ... */}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteProductModal;
