
// Tela de Apresentação do App

import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Essa é a tela que apresenta o Aplicativo</Text>
      <Link href={"/(auth)/login"}>TESTE</Link>
      <Link href={"/(main)/(tabs)/home"}>HOME</Link>
    </View>
  );
}
