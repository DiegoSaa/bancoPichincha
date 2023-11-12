import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 20,
  },
  error: {
    fontSize: 10,
    color: "red",
  },
  datePicker: {
    width: 200,
    margin: 10,
  },
  buttonContainer: {
    marginBottom: 15,
  },
  errorText: {
    fontSize: 12,
    color: "red",
  },
  disable: {
    backgroundColor: "#f0f0f0",
    color: "#a9a9a9",
  },
});
