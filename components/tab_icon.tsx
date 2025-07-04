
import Cores from "@/constants/cores";
import { Image, StyleSheet, Text, View } from "react-native";

const TabIcon = ({focused, icone, titulo}: any) => {

  return (
    <View style={tabIconStyle.container}>
      <Image source={icone} style={tabIconStyle.image}></Image>
      <Text style={tabIconStyle.text} adjustsFontSizeToFit={true} >{titulo}</Text>
    </View>
  );
}

export default TabIcon;

const tabIconStyle = StyleSheet.create({
  /* Configurações de Estilo do Componente de TabIcon */
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
  },
  image: {
    width: 28,
    height: 28
  },
  text: {
    color: Cores.branco
  }
})