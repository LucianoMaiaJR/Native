import { StyleSheet, Platform } from "react-native";
import colors from "../../Themes/theme";

export const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    fontSize: 17,
    padding: Platform.OS === "ios" ? 15 : 10,
    height: 65,
    borderRadius: 9,
    width: "100%",
    marginBottom: 15,
    borderWidth: 2,
    borderColor: colors.primary,
  },
});
