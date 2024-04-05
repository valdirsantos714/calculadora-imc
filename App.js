import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Title from './src/components/Title';

export default function App() {
  return (
    <View style={styles.container}>

      <Title/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: '#848484',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
