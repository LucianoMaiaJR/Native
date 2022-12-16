import { StyleSheet } from "react-native";
import colors from "../../Themes/theme";

export const styles = StyleSheet.create({
  botao: {
    marginTop: 10,
    marginBottom: 25,
    color: colors.sixnary,
    backgroundColor: colors.primary,
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.sixnary,
  },
  textoBotao: {
    color: colors.sixnary,
    fontSize: 20,
    fontWeight: "bold",
  },
});
