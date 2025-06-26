import { Link } from "expo-router";
import { Text, View } from "react-native";

const Automacoes = () => {
    return (
        <View>
            <Text>Essa é a tela de Automações</Text>
            <Link href={"/LoginPs"}>TELA NOVA</Link>
        </View>
    );
}

export default Automacoes;
