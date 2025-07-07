import Cores from "@/constants/cores";
import { apresentacao_styles as aps } from "@/styles/apresentacao.styles";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

// Tela inicial do Aplicativo
export default function Index() {

  const backgroundImage = require("@/assets/images/fundo-conexao.jpg");
  const logo = require("@/assets/icons/logo-app-glow.png");

  const router = useRouter()

  return (
    
    <View
        style={aps.container}
    >
      {/* Configurações do Conteúdo de Fundo da Tela */}
      <LinearGradient
      colors={[Cores.degrade, Cores.verde_principal]}
      style={StyleSheet.absoluteFillObject}

      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      />

      <Image 
        style={[StyleSheet.absoluteFillObject, aps.backgroundImg]}
        source={backgroundImage}
        resizeMode="cover"
      />

      {/* Configuração da logo e dos botões */}
      <View style={aps.conteudo}>

        {/* Seção da Logo do Aplicativo */}
        <View style={aps.containerLogo}>
          <Image source={logo} style={aps.logo} resizeMode="contain"/>
          <Text style={aps.logoTexto}>Uny</Text>
          <Link href="/(main)/(tabs)/home">Home direto</Link>
        </View>

        {/* Container dos Botões */}
        <View style={aps.containerBtn}>
          <Pressable style={aps.btn} onPress={() => router.push("/cadastro")}>
            <Text style={aps.btnTexto}>Criar Conta</Text>
          </Pressable>
          <Pressable style={aps.btn} onPress={() => router.push("/login")}>
            <Text style={aps.btnTexto}>Entrar na Conta</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
