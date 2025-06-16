
import Cores from "@/constants/cores";
import { useRouter } from 'expo-router';
import { Image, Platform, SafeAreaView, StatusBar, StyleSheet, TouchableWithoutFeedback, View } from "react-native";

// Componente de Header do aplicativo
const CustomHeader = ({title}: any) => {

    const router = useRouter()
    const imageSource = ''

    return (
        <SafeAreaView style={headerStyle.headerSafe}>

            <View style={headerStyle.headerContainer}>
                <TouchableWithoutFeedback onPress={() => router.push('/profile')}>
                  <View style={headerStyle.profileIcon}>
                      <Image style={headerStyle.profileImage} source={require('@/assets/icons/logo-perfil.png')}/>
                  </View>
                </TouchableWithoutFeedback>

                <View style={headerStyle.NotificationIcon}>
                  <Image style={headerStyle.NotificationImage} source={require('@/assets/icons/notificacao.png')}></Image>
                </View>
            </View>

        </SafeAreaView>
    );
}

export default CustomHeader;

// Estilos da Header
const headerStyle = StyleSheet.create({

  // Controla a parte de status do telefone: Suas informações de bateria, notificações, etc...
  headerSafe: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40,
    paddingBottom: 0,
    backgroundColor: 'black',
    width: '100%'
  },

  // Toda a parte de que contém as seções da header: icone de perfil e o botão de notificações
  headerContainer: {
    backgroundColor: Cores.verde_principal,
    minHeight: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 0,
    ...Platform.select({
            ios: {
                shadowColor: Cores.cinza,
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.35,
                shadowRadius: 5,
            },
            // Propriedades de sombra para Android
            android: {
                elevation: 10,
            },
        }),
  },

  // Toda a estilização do container da imagem do perfil
  profileIcon: {
    backgroundColor: Cores.transparente,
    width: 54,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    overflow: 'hidden'
  },

  // Toda estilização da imagem do perfil
  profileImage: {
    width: 30,
    height: 30
  },

  // Seção que contém a imagem de notificações
  NotificationIcon: {
    backgroundColor: Cores.transparente,
    width: 55,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20%',
    overflow: 'hidden'
  },
  
  // Estilização da imagem de notificações
  NotificationImage: {
    width: 27,
    height: 27
  }
})