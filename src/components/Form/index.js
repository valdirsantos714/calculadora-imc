import { Button, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function Form() {
    
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [imc, setImc] = useState(null)
    const [mensagemImc, setMensagemImc] = useState("Preencha os campos acima")
    

    function imcCalculator() {
        return setImc((weight / (height * height))).toFixed(2); //Calcula o imc
        //O metódo tofixed só amostra as casas decimais do resultado da divisão de acordo com o número que vc definir 
    }

    function validatorImc() {
        //Esta função verifica se os campos de altura e peso estão preenchidos ou não, se estiverem e vc tiver apertado o botão de calcular, irá sumir o que vc escreveu, vai mudar texto do botão e amostrar o resultado do cálculo
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setTextButton("Calcular novamente")
            setMensagemImc("Seu imc é igual a:")
            return

        } else {
            setImc(null)
            setTextButton("Calcular") //Se estiverem nulos o imc terá valor de null e o botão continuará com o nome calcular
        }
    }
    return (
        <View>
            <View>
                <Text>Altura: </Text>
                <TextInput 
                keyboardType="numeric"
                placeholder="Ex: 1,75"
                ></TextInput>

                <Text>Peso: </Text>
                <TextInput
                placeholder="Ex: 75"
                keyboardType="numeric"
                ></TextInput>

                <Button
                title={textButton}
                ></Button>
            </View>

        </View>
    );
}