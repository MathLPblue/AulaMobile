import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { Alert, Button, Linking, StyleSheet, Text, View, Image } from 'react-native';

type SendIntentButtonProps = {
    acao: string;
    children: string;
    extras?: Array< {
        key:string;
        value: string | number | boolean;
    }>;
};

const SendIntentButton = ({acao, extras, children,}: SendIntentButtonProps) =>{
    const handlePress = useCallback(async () => {
        try{
            await Linking.sendIntent(acao, extras);
        } catch(e:any){
            Alert.alert(e.message);
        }
    }, [acao, extras]);
    return <Button title={children} onPress={handlePress}/>
};

export default function App(){
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Image source={require('./assets/img/image.png')} style={styles.logo} />
            <Text style={styles.header}> Meu aplicativo</Text>
            <View style={styles.nav}>
                <Text style={styles.navLink} onPress = {() => console.log("clique início")}>INICIO</Text>
                <Text style={styles.navLink} onPress = {() => console.log("clique momento")}>MOMENTO</Text>
                <Text style={styles.navLink} onPress = {() => console.log("clique sobre")}>SOBRE</Text>
                <Text style={styles.navLink} onPress = {() => console.log("clique contato")}>CONTATO</Text>
            </View>
            <View style={styles.section} id="inicio">
                <Text style={styles.sectionHeader}>Seção Início</Text>
                <Text> Conteúdo da seção início</Text>
                <Text>...</Text>
                <SendIntentButton acao="android.intent.action.POWER_USAGE_SUMMARY">
                    Uso da bateria
                </SendIntentButton>
            </View>

            <View style={styles.section} id="sobre">
            <Text style={styles.sectionHeader}>Seção Sobre</Text>
                <Text> Conteúdo da seção Sobre</Text>
                <Text>...</Text>
            </View>

            <View style={styles.section} id="Contato">
            <Text style={styles.sectionHeader}>Seção Contato</Text>
                <Text> Conteúdo da seção Contato</Text>
                <Text>...</Text>
            </View>
            
        </View>
    );
}


const styles = StyleSheet.create ({
    container:{
        padding:20,
        flex:1
    },
    logo: {
        width:40,
        height:40,
        marginRight:10,
    },
    header:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:20,
    },
    nav:{
        flexDirection:"row",
        justifyContent:"center",
        marginBottom:20,
    },
    navLink:{
        marginHorizontal:10,
        color:"blue",
    },
    section:{
        marginBottom:30,
    },
    sectionHeader:{
        fontSize:18,
        fontWeight:"bold",
        marginBottom:10,
    },
});