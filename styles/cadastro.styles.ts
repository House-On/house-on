
import Cores from "@/constants/cores";
import { StyleSheet } from "react-native";

export const cadastro_styles = StyleSheet.create({
    background: {
        flex: 1, 
        position: 'relative'
    },

    container: {
        height: '100%',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
    },

    containerIntro: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        width: 348,
        padding: 10,
        gap: 10,
        borderBottomColor: Cores.preto,
        borderBottomWidth: 3
    },

    titulo: {
        fontSize: 32, 
        fontWeight: 500,
        color: Cores.branco,

        height: 54
    },

    introText: {
        fontSize: 20,
        fontWeight: 'light',
        textAlign: 'center',
        color: Cores.branco,

        width: 328,
        height: 54
    },

    containerConteudo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between', 
        paddingVertical: 10,

        height: 560, 
        width: 392
    },

    containerInfo: {
        padding: 10,
        gap: 10
    },

    btn: {
        backgroundColor: Cores.branco,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,

        width: 384,
        height: 60,

        shadowColor: Cores.preto,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    btnText: {
        fontSize: 20,
        color: Cores.verde_principal,
    },

    link: {
        fontWeight: '900',
        textDecorationLine: 'underline'
    },

    pergunta: {
        fontSize: 16,
        color: Cores.branco
    }
}) 