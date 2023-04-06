import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.titulo} >olá mundo</View>

      <text>
      <h2>Oi meu nome é Victor e esse é meu primeiro AAP no React </h2>
      </text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  titulo:{
    backgroundColor: '#483D8B',	
    padding: '12',
    borderBottomLeftRadius: '6',
    fontSize: 100
  }


});
