import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';



const App = () => {
  return (
    <>
      <View style={styles.contenedor}>
          <TextInput style={styles.input}/>
          <Button
          title="Guardar"
          color= '#333'
          />

          <TouchableHighlight style={styles.btnEliminar}>
              <Text style={styles.textoEliminar}>Eliminar Nombre</Text>
          </TouchableHighlight>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
 contenedor:{
  flex: 1,
  backgroundColor: '#FFF',
  alignItems: 'center',
  justifyContent: 'center'
 },
 input:{
   borderColor:'#666',
   borderBottomWidth: 1,
   width: 300,
   height: 40,
   color: '#000'
 },
 btnEliminar:{
   backgroundColor: 'red',
   marginTop: 20,
   padding: 10
 },
 textoEliminar:{
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
  textTransform: 'uppercase',
  width: 300
 }
});

export default App;
