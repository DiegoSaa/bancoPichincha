// DeleteProductModal.tsx
import React from "react";
import { View, Text, Button, Modal, StyleSheet } from "react-native";
import { ScreenProps } from "../navigation/navigationTypes";
import { NavigationRoutes } from "../navigation/NavigationRoutes";

interface DeleteProductModalProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteProductModal: React.FC<
  ScreenProps<NavigationRoutes.DeleteProductModal> & DeleteProductModalProps
> = ({ visible, onConfirm, onCancel }) => {
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

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalContent: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
});

export default DeleteProductModal;
