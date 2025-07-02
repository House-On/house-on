import { Dimensions, StyleSheet } from "react-native";
import Cores from '../../constants/cores';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },

    boxTop: {
        height:Dimensions.get('window').height/3,
        width: '100%',
        alignItems:'center',
        justifyContent:'center',
    },

    boxMid: {
        height:Dimensions.get('window').height/4,
        width: '100%',
        paddingHorizontal: 37,

    },

    boxBottom: {
        height:Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',

    },

    logo: {
        width: 250,
        height: 250,
    },

    borderTitulo: {
        marginTop:20,
        width: 300,
        height: 50,
        backgroundColor: Cores.branco,
        borderRadius: 40,
    },

    titulo: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        justifyContent: 'center',

    },

    titleInput: {
        marginLeft: 5,
        color: Cores.preto,
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 15,

    },

    boxInput: {
        width: '100%',
        height: 48,
        borderWidth: 1,
        marginTop:10,
        flexDirection: 'row',
        borderRadius: 40,
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: Cores.branco,
        borderColor: Cores.preto,
    },

    input: {
        height: '100%',
        width: '95%',
        borderRadius: 40,
    },

    button: {
        width: 280,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Cores.branco,
        borderRadius: 40,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
},
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

elevation: 24,
    },

    textButton: {
        fontSize: 16,
        color: Cores.verde_principal,
        fontWeight: 'bold',
    }, 

    Ou: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    textOu: {
        color: Cores.branco,
        fontSize: 16,
    },

    buttonGoogle: {
        marginTop: 20,
        width: 420,
        height: 65,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Cores.branco,
        padding: 10,
        borderRadius: 40,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
},
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

elevation: 24,

    },

    textGoogle:{
        marginLeft: 10,
        color: Cores.preto,
        fontWeight: 'bold',
        fontSize: 18,
    },

    iconGoogle: {
        
    },

    rowButtons: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 20,
        gap: 10,
},

    smallButton: {
        width: 100,
        flex: 1,
        backgroundColor: Cores.branco,
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        marginTop: 10,

                shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
},
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

elevation: 24,
},

    textSmallButton: {
        fontWeight: 'bold',
        color: Cores.azul_link,
}

})
