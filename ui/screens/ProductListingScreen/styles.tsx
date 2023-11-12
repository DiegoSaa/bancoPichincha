import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "white",
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
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomColor: "gray",
  },
  itemTextName: {
    fontSize: 18,
    fontWeight: "600",
  },
  itemTextId: {
    fontSize: 16,
  },
  addButton: {
    marginBottom: 40,
  },
  rigthIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginRight: 10,
  },
});
