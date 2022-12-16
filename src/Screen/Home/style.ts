import { StyleSheet } from "react-native";
import colors from "../../Themes/theme";

export const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
    backgroundColor: colors.fivenary,
  },
  nav: {
    paddingBottom: 68,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.primary,
    paddingVertical: 20,
  },
  logo: {
    width: 1300,
    height: 1300,
    marginTop: -640,
    marginHorizontal: -440,
    marginBottom: -550
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 20,
    marginLeft: 310,
  },
  textButton: {
    color: colors.sixnary,
    fontWeight: "bold",
    fontSize: 18,
  },
});
