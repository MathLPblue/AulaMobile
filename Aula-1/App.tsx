import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ViewStyle, ImageStyle } from "react-native";

interface Pessoa {
    nome: string;
    idade: number;
    cidade: string;
    avatar: any;
}

const pessoa: Pessoa = {
    nome: "Raphael",
    idade: 40,
    cidade: "Rio de Janeiro",
    avatar: require("./assets/icon.png"),
};

function getHora(): string {
    const horaAtual = new Date().getHours();
    if (horaAtual >= 5 && horaAtual < 12) {
        return "Bom dia";
    } else if (horaAtual >= 12 && horaAtual < 18) {
        return "Boa Tarde";
    } else {
        return "Boa noite";
    }
}

interface SaudacaoPersonalizadaProps {
    saudacao?: string;
    nome?: string;
    style?: ViewStyle | ViewStyle[];
}

const SaudacaoPersonalizada: React.FC<SaudacaoPersonalizadaProps> = ({
    saudacao = "Olá",
    nome = "Usuário",
    style,
}) => {
    return (
        <View style={[styles.saudacaoContainer, style]}>
            <Text>
                {saudacao}, {nome}!
            </Text>
        </View>
    );
};

interface ExibirPessoaProps {
    nome: string;
    idade: number;
    cidade: string;
}

const ExibirPessoa: React.FC<ExibirPessoaProps> = ({ nome, idade, cidade }) => {
    return (
        <View style={styles.container}>
            <Image source={pessoa.avatar} style={styles.avatar} />
            <Text>Nome: {nome}</Text>
            <Text>Idade: {idade}</Text>
            <Text>Cidade: {cidade}</Text>
        </View>
    );
};

const App = () => {
    const [saudacao, setSaudacao] = useState<string>("");

    useEffect(() => {
        setSaudacao(getHora());
    }, []);

    return (
        <View>
            <SaudacaoPersonalizada saudacao={saudacao} nome={pessoa.nome} />
            <ExibirPessoa nome={pessoa.nome} idade={pessoa.idade} cidade={pessoa.cidade} />
        </View>
    );
};

const styles = StyleSheet.create({
    saudacaoContainer: {
        padding: 10,
        backgroundColor: '#f8f9fa',
        borderRadius: 5,
    },
    container: {
        padding: 20,
        alignItems: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
});

export default App;
