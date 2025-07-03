
import Cores from "@/constants/cores"
import { Platform, StyleSheet } from "react-native"

const tabBarStyle = StyleSheet.create({
    barContainer: {

      margin: 0,
      paddingTop: 10,
      backgroundColor: Cores.verde_principal,
      ...Platform.select({
        ios: {
          height: 75
        },
        android: {
          height: 105
        }
      })
    },
    itemStyle: {

      marginHorizontal: 10,
      borderRadius: 12,
      padding: 5,
      backgroundColor: Cores.cinza,
    }
})

export default tabBarStyle