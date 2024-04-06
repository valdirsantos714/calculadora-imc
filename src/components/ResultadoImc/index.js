import { StyleSheet, Text, View } from "react-native";


export default function ResultadoImc(props) {
    return (
        <View>
            <Text style={styles.texto}>{props.mensagemImc}</Text>
            <Text style={styles.textoImc}>{props.resultadoImc}</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    texto: {
        textAlign: 'center',
        paddingTop: 20,
        color: 'white',
        fontSize: 35,
    },

    textoImc: {
        textAlign: 'center',
        color: 'white',
        fontSize: 65,
    }
});