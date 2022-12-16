import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { listaProdutos } from "../../Services/repository/produtoRepository";
import { styles } from "./styles";

interface ProdutosCardProps extends TouchableOpacityProps {
    produto: listaProdutos;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    setPrecoSelecionado?: React.Dispatch<React.SetStateAction<number>>;
}

export const ProdutoCard = ({ produto }: ProdutosCardProps) => {

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image style={styles.imgCard} source={{ uri: produto.images ? produto.images[0] : `` }} />
                    <Text style={styles.title}>{produto.title}</Text>
                    {/*<Text style={styles.title}>{produto.description}</Text>*/}
                    <Text style={styles.price}> R${produto.price},00</Text>
                </View>
            </View>
        </ScrollView>
    )
}