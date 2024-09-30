import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Registro = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password === confirmPassword) {
      await AsyncStorage.setItem('userEmail', email);
      await AsyncStorage.setItem('userPassword', password);
      navigation.navigate('InicioSesion');
    } else {
      alert('Las contraseñas no coinciden');
    }
  };

  return (
    <View>
      <Text>Registro</Text>
      <TextInput 
        placeholder="Email" 
        value={email} 
        onChangeText={setEmail} 
        style={{ borderWidth: 1, margin: 10, padding: 5 }} 
      />
      <TextInput 
        placeholder="Contraseña" 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry 
        style={{ borderWidth: 1, margin: 10, padding: 5 }} 
      />
      <TextInput 
        placeholder="Confirmar Contraseña" 
        value={confirmPassword} 
        onChangeText={setConfirmPassword} 
        secureTextEntry 
        style={{ borderWidth: 1, margin: 10, padding: 5 }} 
      />
      <Button title="Registrar" onPress={handleRegister} />
      <Button title="Volver a Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default Registro;
