import CustomHeader from '@/components/HeaderCustom';
import { icons } from '@/constants/icons';
import { Tabs } from 'expo-router';
import { Image, StyleSheet, Text, View } from "react-native";

const TabIcon = ({focused, icone, titulo}: any) => {

  return (
    <View style={tabIconStyle.container}>
      <Image source={icone} style={tabIconStyle.image}></Image>
      <Text style={tabIconStyle.text} adjustsFontSizeToFit={true} >{titulo}</Text>
    </View>
  );
}

const tabIconStyle = StyleSheet.create({
  /* Configurações de Estilo do Componente de TabIcon */
  container: {
    
  },
  image: {
    width: 28,
    height: 28
  },
  text: {
    
  }
})

const tabBarStyle = StyleSheet.create({
    barContainer: {
      margin: 0,
      backgroundColor: '#EF9643',
    },
    itemStyle: {
      margin: 5,
      borderRadius: 10
    }
})

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: 'black',
        tabBarStyle: tabBarStyle.barContainer,
        tabBarItemStyle: tabBarStyle.itemStyle,
        tabBarShowLabel: false,
        headerShown: true,
        header: () => (<CustomHeader title="HouseON"></CustomHeader>),
        headerStyle: {
            backgroundColor: 'black'
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icone={icons.home} titulo="Home"></TabIcon>
          )
        }}
      />

      <Tabs.Screen 
        name='config'
        options={{
          title: 'Configurações',
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icone={icons.home} titulo="Configurações" />
          )
        }}
      />

      <Tabs.Screen 
        name='automacoes'
        options={{
          title: 'Automações',
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icone={icons.home} titulo="Automações" />
          )
        }}
      />
    </Tabs>
  );
}