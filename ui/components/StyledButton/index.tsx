import { Pressable, StyleSheet, Text, View } from "react-native";

export const StyledButton = ({ onPress, title }) => (
  <View style={styles.container}>
    <Pressable style={styles.addButton} onPress={onPress}>
      <Text style={styles.addButtonText}>{title}</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  addButton: {
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 0,
  },
  addButtonText: {
    color: "black",
    fontSize: 16,
  },
});
