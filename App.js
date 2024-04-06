import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Title from './src/components/Title';
import Main from './src/components/Main';

export default function App() {
  return (
    <View >

      <Title/>

      <Main style={StyleSheet.main}/>

    </View>
  );
}


