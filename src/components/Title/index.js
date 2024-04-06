import { StyleSheet, Text, View } from "react-native";


export default function Title() { //Tem que colocar no nome da função o nome da pasta
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Calculadora de IMC</Text>
        </View>
    );
}

const styles = StyleSheet.create ({

    titulo: {
        color: "#FFFFFF",
        fontSize: 40,
    },

    container: {
        height: 200,
        //Cor anterior: #848484
        backgroundColor: '#08088A',
        alignItems: 'center',
        justifyContent: 'center',
    },
      
});