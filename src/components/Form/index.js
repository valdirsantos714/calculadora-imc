import { StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from "react-native";
import React, { useState } from "react";

import ResultadoImc from "../ResultadoImc";

export default function Form() {
    
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [imc, setImc] = useState(null)
    const [mensagemImc, setMensagemImc] = useState("Preencha os campos acima")
    

    function imcCalculator() {

        const floatHeight = parseFloat(height)
        const floatWeight = parseFloat(weight)
        
        return setImc((floatWeight / (floatHeight * floatHeight)).toFixed(2))

        //Calcula o imc
        //O metódo tofixed só amostra as casas decimais do resultado da divisão de acordo com o número que vc definir 
    }

    function validatorImc() {
        //Esta função verifica se os campos de altura e peso estão preenchidos ou não, se estiverem e vc tiver apertado o botão de calcular, irá sumir o que vc escreveu, vai mudar texto do botão e amostrar o resultado do cálculo

        if (weight != null && height != null && height > 0 && weight > 0) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setTextButton("Calcular novamente")
            setMensagemImc("Seu imc é igual a:")
            Keyboard.dismiss() //Função que faz sumir o teclado
            return

        } else if ((weight != null && height == null) || (height == 0 && weight > 0)) {
            setImc(null)
            setTextButton("Calcular")
            setMensagemImc("Tem que preencher o campo de altura!!")          
            Keyboard.dismiss()
            return  
        
        }  else if ((weight == null && height != null) || (height != 0 && weight == 0)) {
            setImc(null)
            setTextButton("Calcular")
            setMensagemImc("Tem que preencher o campo de Peso!!")
            Keyboard.dismiss()
            return  
        
        } else if ((weight == null && height == null) || (height == 0 && weight == 0)) {
            setImc(null)
            setTextButton("Calcular")
            setMensagemImc("Tem que preencher os campos acima!!")
            Keyboard.dismiss()
            return //Se estiverem nulos o imc terá valor de null e o botão continuará com o nome calcular

        }  else if ((isNaN(weight) || isNaN(height)) || (height <= 0 && weight <= 0)) {
            setImc(null)
            setTextButton("Calcular")
            setMensagemImc("Tem que preencher o campos direito!!")
            Keyboard.dismiss()
            return  
        
        }

    }
    return (
        <View style={styles.conteiner}>
            <View>
                <Text style={styles.textos}>Altura: </Text>
                <TextInput style={styles.inputs}
                onChangeText={altura => setHeight(altura)} //Função arrowFunction que pega o que escrever aqui e muda a altura
                value={height}
                keyboardType="numeric"
                placeholder="Ex: 1,75"
                ></TextInput>

                <Text style={styles.textos}>Peso: </Text>
                <TextInput style={styles.inputs}
                onChangeText={peso => setWeight(peso)}
                value={weight}
                placeholder= "Ex: 75"
                keyboardType="numeric"
                ></TextInput>

                <TouchableOpacity  //Troquei por esse tipo de botão pq ele é mais moderno e quando clica nele ele meio que soma e aparece de novo
                style={styles.botao}
                onPress={validatorImc}
                >
                <Text style={styles.textoButao}>{textButton}</Text>
                </TouchableOpacity>
            </View>

            <ResultadoImc mensagemImc={mensagemImc} resultadoImc={imc}/>

        </View>

    );
}
const styles = StyleSheet.create ({

    conteiner: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        width: 412,
        height: 500,
        backgroundColor: "#08088A",
    },

    textos: {
        color: 'white',
        fontSize: 25,
        paddingBottom: 10,

    },

    inputs: {
        color: 'white',
        fontSize: 25,
        paddingBottom: 10,
    },

    botao: {
        marginTop: 10,
        padding: 10,
        borderRadius: 50,
        backgroundColor: 'red',
    },

    textoButao: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
    },
})
