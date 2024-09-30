import React from 'react';
import { View, Text, Button } from 'react-native';

const PantallaInicio = ({ navigation }) => {
  const inicioSesion = () => {
    navigation.navigate('InicioSesion');
  };

  const RealizarRegistro = () => {
    navigation.navigate('Registro');
  };

 
 
  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Iniciar Sesión" onPress={inicioSesion} />
      <Button title="Registro" onPress={RealizarRegistro} />
      <Button title="Continuar sin iniciar sesion" onPress={() => navigation.navigate('Tabs')} />
    </View>
  );
};

export default PantallaInicio;
