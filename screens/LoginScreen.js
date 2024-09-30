import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    // Aquí puedes agregar lógica de autenticación si lo necesitas
    navigation.navigate('Tabs');
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
