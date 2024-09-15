import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
    const [base, setBase] = useState('');
    const [altura, setAltura] = useState('');
    const [area, setArea] = useState('');

    const baseInputRef = useRef();

    function CalcularArea() {
        if (base > 0 && altura > 0) {
            const areaCalculada = (parseFloat(base) * parseFloat(altura)) / 2;
            setArea(areaCalculada.toString());
            setAltura('');
            setBase('');
            baseInputRef.current.clear();
            baseInputRef.current.focus();
        } else {
            if (base === '' || altura === '') {
                alert("Insira os dados : - ( ");
            } else {
                setArea('');
            }
        }
    }

    return (
        <View style={styles.container}>
            <Text> Hello World </Text>
            <Text> Insira os dados abaixo para o cálculo da área do triângulo</Text>
            <TextInput
                placeholder="Base"
                style={styles.TextInput}
                keyboardType={'numeric'}
                value={base}
                onChangeText={(text) => setBase(text)}
                ref={baseInputRef}
            />
            <TextInput
                placeholder="Altura"
                style={styles.TextInput}
                keyboardType={'numeric'}
                value={altura}
                onChangeText={(text) => setAltura(text)}
            />
            <Button title="Calcular" onPress={CalcularArea} />
            <Text>{area ? `Resultado: ${area}` : ''}</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        marginBottom: 10,
        textAlign: 'center',
    },
});
