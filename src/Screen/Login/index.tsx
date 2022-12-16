import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";
import logo from "../../Assets/logo.png";
import { Ionicons } from "@expo/vector-icons";
import TextInputComponent from "../../Components/TextInput/TextInput";
import ButtonComponent from "../../Components/Botao/Botao";


export const Login = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrar, setMostrar] = useState("");
  const [ocultar, setOcultar] = useState(true);

  const Home = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  }; 

  return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.textoLogo}>Login</Text>
        <View style={styles.areaLogin}>
          <TextInputComponent placeHolder={"Email"} setValue={setEmail} />
        </View>
        <View style={styles.areaLogin}>
          <TextInput
            secureTextEntry={ocultar}
            placeholder="Senha"
            placeholderTextColor="#000000"
            style={styles.input}
            selectionColor={"black"}
            onChangeText={(e) => setSenha(e)}
          />
          <TouchableOpacity
            style={styles.mostrar}
            onPress={() => setOcultar(!ocultar)}
          >
            {ocultar ? (
              <Text style={styles.mostrarTexto}>
                <Ionicons name="ios-eye" size={24} color="black" />
              </Text>
            ) : (
              <Text style={styles.mostrarTexto}>
                <Ionicons name="ios-eye-off" size={24} color="black" />
              </Text>
            )}
          </TouchableOpacity>
          <ButtonComponent setAction={Home} texto={"Entrar"} />
        </View>
        <View style={styles.areaTexto}>
          <Text style={styles.texto}>Não tem uma conta? </Text>
          <TouchableOpacity onPress={Home}>
            <Text style={styles.textoRegistro}>Registre-se</Text>
          </TouchableOpacity>
        </View>
      </View> 
  );
};
