import React,{useState, useEffect} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage'




const App = () => {

  const [inputTexto,guardarInputTexto]= useState('');
  const [nombreStorage,guardarNombreStorage]= useState('');

  useEffect(() => {
    obtenerDatosStorage();
  }, [])

  const guardarDatos = async () =>{
    try{
      await AsyncStorage.setItem('nombre', inputTexto)
      guardarNombreStorage(inputTexto)
    }catch(erro){

    }
  }

  const obtenerDatosStorage =async () =>{
    try {
      const nombre = await AsyncStorage.getItem('nombre');
      guardarNombreStorage(nombre)
    } catch (error) {
      
    }
  }
  const eliminarDatos = async () =>{
    try {
      await AsyncStorage.removeItem('nombre');
      guardarNombreStorage('')
    } catch (error) {
      
    }
  }

  return (
    <>
      <View style={styles.contenedor}>
        {nombreStorage ? <Text style={styles.texto}>Hola {nombreStorage}</Text> : null }
        
          <TextInput 
          style={styles.input}
          placeholder='Escribe tu nombre'
          placeholderTextColor={'#000'}
          onChangeText={texto => guardarInputTexto(texto)}

          />
          <Button
          title="Guardar"
          color= '#333'
          onPress={ () => guardarDatos() }
          />
            {nombreStorage ?
          <TouchableHighlight 
          onPress={() => eliminarDatos()}
          style={styles.btnEliminar}>
              <Text style={styles.textoEliminar}>Eliminar Nombre</Text>
          </TouchableHighlight>
          : null}
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
 },
 texto:{
   color: '#000'
 }
});

export default App;
