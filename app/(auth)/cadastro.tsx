import CustomLabel from "@/components/customLabel";
import Cores from "@/constants/cores";
import { cadastro_styles as cs } from "@/styles/cadastro.styles";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Cadastro() {

    const router = useRouter()

    return(
        <View style={cs.background}>

            <LinearGradient
                colors={[Cores.degrade, Cores.verde_principal]}
                style={StyleSheet.absoluteFillObject}

                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
            />

            <View style={cs.container}>
                <View style={cs.containerIntro}>
                    <Text style={cs.titulo}>Uny</Text>
                    <Text style={cs.introText}>Preencha os dados para criar sua conta no aplicativo</Text>
                </View>

                <View style={cs.containerConteudo}>
                    {/* Fazer os Componentes personalizados */}
                    <View style={cs.containerInfo}>
                        <CustomLabel valorLabel="Nome da Empresa" defaultText="Digite o nome da empresa..."/>
                        <CustomLabel valorLabel="CNPJ" defaultText="Digite o seu CNPJ..."/>
                        <CustomLabel valorLabel="Email" defaultText="Digite o seu email..."/>
                        <CustomLabel valorLabel="Senha" defaultText="Digite sua senha..."/>
                        <CustomLabel valorLabel="Confirme a Senha" defaultText="Reescreva sua senha..."/>
                    </View>

                    <Pressable style={cs.btn} onPress={() => router.push("/home")}>
                        <Text style={cs.btnText}>Criar Conta</Text>
                    </Pressable>

                </View>

                <Text style={cs.pergunta}>Já tem uma conta? <Link style={cs.link} href="/login">Entrar</Link></Text>
            </View>
        </View>
    )
}