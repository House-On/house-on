import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from "react";
import { ActivityIndicator, Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Logo from "@/assets/icons/logo-app.png";
import Cores from '@/constants/cores';
import { styles } from "@/styles/login.styles";
import { useRouter } from 'expo-router';

export default function Login() {

    const [email,setEmail] = useState('');
    const [passWord,setPassword] = useState('');
    const [loading, setloading] = useState(false);
    const router = useRouter()


    async function getLogin(){
        try{
            setloading(true)
            
            if( !email || !passWord ){
                return Alert.alert('Atencao', 'Informe os campos obrigatórios!')
            }

            setTimeout(()=>{
                if(email == 'acessoteste@gmail.com' && passWord == '123456'){
                    Alert.alert('Logado com sucesso');
                    router.push('/home')
                }else{
                    Alert.alert('Usuário ou senha incorretos');
                }

                setloading(false)
            },2000)

        } catch (error) {
            console.log(error)
        }
    }



    return (
        <LinearGradient
            colors={[Cores.degrade, Cores.verde_principal]}
                style={styles.container}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}>

        <View style={styles.boxTop}>
            <Image source={Logo} style={styles.logo} resizeMode="contain" />

            <View style={styles.borderTitulo}>
                <Text style={styles.titulo}>Acesse sua conta</Text>
            </View>

        </View>

        <View style={styles.boxMid}>
            <Text style={styles.titleInput}> E-mail: </Text>
                <View style={styles.boxInput}>
                <TextInput style={styles.input} value={email} 
                onChangeText={setEmail}/>

            <MaterialIcons name='email' size={20} color={Cores.cinza} />            
        </View>

        <Text style={styles.titleInput}> Senha: </Text>

            <View style={styles.boxInput}>
                <TextInput style={styles.input} value={passWord}
                onChangeText={setPassword}/>
                <MaterialIcons name='remove-red-eye' size={20} color={Cores.cinza} />
            </View>

        </View>

        <View style={styles.boxBottom}>
            <TouchableOpacity style={styles.button} onPress={()=> getLogin()}>
                {loading?<ActivityIndicator color={'#339989'} size={"small"} />: <Text style={styles.textButton}> Entrar </Text>}
            </TouchableOpacity>

        <View style={styles.Ou}>
            <Text style={styles.textOu}> OU </Text>
        </View>

        <View>
            <TouchableOpacity style={styles.buttonGoogle}>
                <AntDesign name="google" size={20} style={styles.iconGoogle} />
                <Text style={styles.textGoogle}>Entre com sua conta Google</Text>
            </TouchableOpacity>
        </View>

            <View style={styles.rowButtons}>
                <TouchableOpacity style={styles.smallButton}>
                    <Text style={styles.textSmallButton}>Criar conta</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.smallButton}>
                    <Text style={styles.textSmallButton}>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>
        </View>
    </LinearGradient>
    
);
}
