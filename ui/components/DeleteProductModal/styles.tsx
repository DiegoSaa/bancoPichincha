import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
    width: "100%",
  },
  modalContent: {
    margin: 20,
    backgroundColor: "white",
    height: "40%",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    padding: 35,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  headerIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginRight: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  closeButton: {
    alignSelf: "flex-end",
    padding: 10,
  },
});
