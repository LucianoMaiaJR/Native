import { useEffect, useState } from "react";
import { View, StatusBar, ActivityIndicator, FlatList, ScrollView, Image} from "react-native";
import { styles } from "./style";
import { getProduto, listaProdutos } from "../../Services/repository/produtoRepository";
import { ProdutoCard } from "../../Components/ProdutoComponent/index";
import logoNav from "../../Assets/logo.png";


export const Home = ({}) => {
  const [carregando, setCarregando] = useState<boolean>(true);
  const [listaProdutos, setlistaProdutos] = useState<listaProdutos[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [page,setPage] = useState(1)


  useEffect(() => {
    requisicaoListaProdutos();
  }, [page]);

  function requisicaoListaProdutos() {
    setCarregando(true);
    getProduto()
      .then((res) => {
        setlistaProdutos(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setCarregando(false));
  }

  return (
    <ScrollView>
      <View style={styles.nav}></View>
      <View style={styles.containerBackground}>
      <Image source={logoNav} style={styles.logo} />
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="black"
      />
      <View>
        {carregando ? (
          <ActivityIndicator size={"large"} />
        ) : (
          <FlatList
            data={listaProdutos}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <ProdutoCard
                  produto={item}
                  setModal={setModal}
                />
              );
            }}
          />
        )}
      </View> 
      </View>
    </ScrollView>
  );
};
