import Cores from "@/constants/cores";
import { StyleSheet, Text, TextInput, View } from "react-native";

type CustomLabelProps = {
    valorLabel: string;
    defaultText: string;
}

const CustomLabel = (props: CustomLabelProps) => {
    return(
        <View style={labelStyle.container}>
            <Text style={labelStyle.label}>{props.valorLabel}</Text>
            <TextInput style={labelStyle.input} placeholder={props.defaultText}/>
        </View>
    );
}

export default CustomLabel;

const labelStyle = StyleSheet.create({
    container: {
        width: 384,

        display: 'flex',
        gap: 6
    },

    input: {
        backgroundColor: Cores.branco,
        height: 50,

        display: 'flex',
        gap: 8, 

        borderColor: Cores.preto,
        borderWidth: 2,
        borderRadius: 12,
        padding: 16,

        shadowColor: Cores.preto,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    label: {
        fontSize: 16,
        fontWeight: 'light',
        color: Cores.branco
    }
})