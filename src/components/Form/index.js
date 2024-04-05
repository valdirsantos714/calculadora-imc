import { Button, Text, TextInput, View } from "react-native";


export default function Form() {
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
                title="Calcular Imc"
                ></Button>
            </View>

        </View>
    );
}