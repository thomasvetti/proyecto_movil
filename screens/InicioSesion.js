import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const InicioSesion = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const loadData = async () => {
      // Intentar cargar datos solo si no estamos en modo de cierre de sesión
      const storedEmail = await AsyncStorage.getItem('userEmail');
      const storedPassword = await AsyncStorage.getItem('userPassword');

      // Solo establecer los valores si no están vacíos
      if (storedEmail && storedPassword) {
        setEmail(storedEmail);
        setPassword(storedPassword);
      }
    };

    loadData();
  }, []);

  const handleContinue = async () => {
    const storedEmail = await AsyncStorage.getItem('userEmail');
    const storedPassword = await AsyncStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
      navigation.navigate('Tabs');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <View>
      <Text>Inicio de Sesión</Text>
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
      <Button title="Iniciar Sesión" onPress={handleContinue} />
      <Button title="Registro" onPress={() => navigation.navigate('Registro')} />
      <Button title="Volver a Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default InicioSesion;
