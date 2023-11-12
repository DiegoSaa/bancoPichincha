import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants/colors";

type StyledButtonType = {
  onPress: () => void;
  title: string;
  color?: string;
};

export const StyledButton = ({ onPress, title, color }: StyledButtonType) => (
  <View
    style={[
      styles.container,
      { backgroundColor: color ?? COLORS.YELLOW_PICHINCHA },
    ]}
  >
    <Pressable style={styles.addButton} onPress={onPress}>
      <Text style={styles.addButtonText}>{title}</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  container: {},
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderWidth: 0,
  },
  addButtonText: {
    color: COLORS.BLUE_PICHINCHA,
    fontSize: 16,
  },
});
