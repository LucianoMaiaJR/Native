import React, { useState } from "react";
import { Text, View, Image, ScrollView} from "react-native";
import { styles } from "./style";
import logoNav from "../../Assets/logo.png";
import CustomAlert from "../../Components/CustomAlert/CustomAlert";
import TextInputComponent from "../../Components/TextInput/TextInput";
import ButtonComponent from "../../Components/Botao/Botao";
import productService from "../../Services/productService/productService";

export const RegisterProduct = ({}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [categoryId, setCategoryId] = useState();
  const [images, setImages] = useState([]);

  const [titulo, setTitulo] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [tipo, setTipo] = useState("");
  const [visibleDialog, setVisibleDialog] = useState(false);

  const showDialog = (titulo: string, mensagem: string, tipo: string) => {
    setVisibleDialog(true);
    setTitulo(titulo);
    setMensagem(mensagem);
    setTipo(tipo);
  };

  const hideDialog = (status) => {
    setVisibleDialog(status);
  };

  const registerProduct = (event) => {
    event.preventDefault();

    const produto = {
      title: title,
      description: description,
      price: price,
      categoryId: categoryId,
      images: [],
    };

    productService
      .postProduct(produto)
      .then((res) => {
        showDialog("Sucesso", "Usuário cadastrado com sucesso", "SUCESSO");
      })
      .catch((error) => {
        showDialog("Erro", "Cadastro inválido", "ERRO");
      });
  };

  return (
    <ScrollView>
      <View style={styles.nav}></View>
      <View style={styles.container}>
        <Image source={logoNav} style={styles.logo} />
        <Text style={styles.textoLogo}>Registro de Produto</Text>
        <View style={styles.areaLogin}>
          <TextInputComponent placeHolder={"Nome"} setValue={setTitle} />
          <TextInputComponent placeHolder={"Descrição"} setValue={setDescription} />
          <TextInputComponent placeHolder={"Preço"} setValue={setPrice} />
          <TextInputComponent placeHolder={"Id da Categoria"} setValue={setCategoryId} />
          <TextInputComponent placeHolder={"Link da Imagem"} setValue={setImages} />
        </View>
        <ButtonComponent setAction={registerProduct} texto={"Registrar"} />
        <CustomAlert titulo={titulo} mensagem={mensagem} tipo={tipo} visible={visibleDialog} onClose={hideDialog}></CustomAlert>
      </View>
    </ScrollView>
  );
};