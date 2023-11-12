// DeleteProductModal.tsx
import React from "react";
import { View, Text, Button, Modal } from "react-native";
import { ScreenProps } from "../../navigation/navigationTypes";
import { NavigationRoutes } from "../../navigation/NavigationRoutes";
import { styles } from "./styles";
import useDeleteFinancialProduct from "../../hooks/useDeleteFinantialProduct";

interface DeleteProductModalProps {
  productId: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
  navigation: ScreenProps<NavigationRoutes.ProductDetails>["navigation"];
}

const DeleteProductModal = ({
  productId,
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
      <View style={styles.modalView}>
        <View style={styles.modalContent}>
          <Text>Are you sure you want to delete this product?</Text>
          <View style={styles.buttonContainer}>
            <Button title='Cancel' onPress={onCancel} />
            <Button title='Delete' onPress={onConfirm} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteProductModal;
