
import { useRouter } from 'expo-router';
import { Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

const CustomHeader = ({title}: any) => {

    const router = useRouter()
    const imageSource = ''

    return (
        <SafeAreaView style={headerStyle.headerSafe}>

            <View style={headerStyle.headerContainer}>
                <TouchableWithoutFeedback onPress={() => router.push('/profile')}>
                    <View style={headerStyle.profileIcon}></View>
                </TouchableWithoutFeedback>

                <Text style={headerStyle.appName}>{title}</Text>

                <View style={headerStyle.imageContainer}>
                  <Image source={{uri: imageSource}} style={headerStyle.image}></Image>
                </View>
            </View>

        </SafeAreaView>
    );
}

export default CustomHeader;

const headerStyle = StyleSheet.create({

  headerSafe: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40,
    paddingBottom: 0,
    backgroundColor: 'black',
    width: '100%'
  },
  headerContainer: {
    backgroundColor: '#EF9643',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    minHeight: 75, 
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  profileIcon: {
    width: 60,
    height: 60,
    backgroundColor: 'black',
    borderRadius: '100%',
    overflow: 'hidden'
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  imageContainer: {
    width: 50,
    height: 40,
    borderRadius: '20%',
    backgroundColor: 'gray',
    overflow: 'hidden'
  },
  image: {
    /* Segue as propriedades do elemento parent */
    width: '100%',
    height: '100%'
  }
})