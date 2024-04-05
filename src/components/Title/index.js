import { StyleSheet, Text, View } from "react-native";


export default function Title() { //Tem que colocar no nome da função o nome da pasta
    return (
        <View>
            <Text style={styles.titulo}>ONEBITHREALTH</Text>
        </View>
    );
}

const styles = StyleSheet.create ({

    titulo: {
        color: "red",
        fontSize: 40,
    },
});