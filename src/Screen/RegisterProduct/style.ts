import { StyleSheet, Platform } from "react-native";
import colors from "../../Themes/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.fivenary,
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  icon: {
    marginRight: 350,
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
    marginTop: -660,
    marginBottom: -70,
    marginRight: 25,
  },
  textoLogo: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 35,
    marginBottom: 10,
    marginTop: -450,
  },
  input: {
    backgroundColor: "white",
    fontSize: 17,
    padding: Platform.OS === "ios" ? 15 : 10,
    height: 65,
    borderRadius: 9,
    width: "100%",
    marginBottom: 15,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
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
    borderColor: colors.secondary,
  },
  textoBotao: {
    color: colors.sixnary,
    fontSize: 20,
    fontWeight: "bold",
  },
  mostrar: {
    zIndex: 10,
    width: 80,
    alignItems: "center",
    position: "absolute",
    marginLeft: 280,
    marginTop: 22,
  },
  mostrarTexto: {
    color: colors.sixnary,
    fontSize: 15,
    marginLeft: 40,
    marginTop: -5,
  },
  areaLogin: {
    width: "100%",
  },
  areaTexto: {
    flexDirection: "row",
  },
  texto: {
    color: "white",
    fontWeight: "bold",
  },
  textoRegistro: {
    color: colors.primary,
    fontWeight: "bold",
  },
});