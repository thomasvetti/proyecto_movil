import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleIniciarSesion = () => {
    navigation.navigate('InicioSesion');
  };

  const handleRegistro = () => {
    navigation.navigate('Registro');
  };

 
 
  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Iniciar Sesión" onPress={handleIniciarSesion} />
      <Button title="Registro" onPress={handleRegistro} />
      <Button title="Continuar a Tabs" onPress={() => navigation.navigate('Tabs')} />
    </View>
  );
};

export default LoginScreen;
