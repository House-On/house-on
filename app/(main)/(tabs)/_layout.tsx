import CustomHeader from '@/components/headerCustom';
import TabIcon from '@/components/tabIcon';
import { icons } from '@/constants/icons';
import tabBarStyle from '@/styles/tabBar.styles';
import { Tabs } from 'expo-router';
import { Pressable } from "react-native";

// Barra inferior do App
export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarButton: (props: any) => (
          <Pressable {...props}
            android_ripple={{ color: 'transparent' }}
          />
        ),
        tabBarInactiveTintColor: 'black',
        tabBarStyle: tabBarStyle.barContainer,
        tabBarItemStyle: tabBarStyle.itemStyle,
        tabBarShowLabel: false,
        headerShown: true,
        header: () => <CustomHeader />,
        headerStyle: {
            backgroundColor: 'black'
        }
      }}
    >

      {/* Definição dos Icones da barra inferior */}
      <Tabs.Screen 
        name='chat'
        options={{
          title: 'Chat',
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icone={icons.home} titulo="Chat" />
          )
        }}
      />

      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icone={icons.home} titulo="Home"></TabIcon>
          )
        }}
      />

      <Tabs.Screen 
        name='auto'
        options={{
          title: 'Auto',
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icone={icons.home} titulo="Auto" />
          )
        }}
      />
    </Tabs>
  );
}