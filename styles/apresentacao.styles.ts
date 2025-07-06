import Cores from "@/constants/cores";
import { StyleSheet } from "react-native";

// Estilos da primeira tela do Aplicativo
export const apresentacao_styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1
    },

    backgroundImg: {
        opacity: 0.1
    },

    conteudo: {
        height: '100%',

        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 200
    },

    containerLogo: {
        height: 375,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 0
    },

    logo: {
        width: 225,
        height: 239,
    },

    logoTexto: {
        fontSize: 64,
        fontWeight: 'bold',
        color: Cores.branco
    },

    containerBtn: {
        height: 170,
        width: '100%',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        paddingHorizontal: 15
    },

    btn: {
        backgroundColor: Cores.branco,
        borderRadius: 12,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        width: 382,
        height: 72,

        shadowColor: Cores.preto,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    btnTexto: {
        color: Cores.verde_principal,
        fontSize: 24
    }
});