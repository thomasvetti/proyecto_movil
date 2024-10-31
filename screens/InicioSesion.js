import React, { useContext, useState } from 'react';
import { View, Text, TextInput, ImageBackground, StyleSheet, Pressable, Platform, Alert } from 'react-native';
import { login } from '../util/auth';
import { AuthContext } from '../context/auth-context';

const backgroundImage = require('../assets/file(1).jpg');

const InicioSesion = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authCtx = useContext(AuthContext); 

  async function handleLogin() {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password', [{ text: 'OK' }]);
      return;
    }

    try {
      const token = await login(email, password);
      authCtx.login(token); 
      navigation.navigate('Tabs');
    } catch (error) {
      Alert.alert('Error', 'Login failed. Please try again.');
    }
  }

  return (
    <ImageBackground 
      source={backgroundImage} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <View style={styles.innerContainer}>
        <Text style={styles.header}>Welcome to the App</Text>
        <Text style={styles.infoText}>Please log in to continue</Text>

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#e67e22"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#e67e22"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />

        {/* Login Button */}
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed ? { backgroundColor: 'rgba(255, 255, 255, 0.9)' } : null,
          ]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Color negro con opacidad
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '90%', // Ajustar el ancho
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white', // Color del texto del encabezado
  },
  input: {
    borderWidth: 1,
    margin: 10,
    padding: 10,
    width: '100%', // Ajustar el ancho
    borderRadius: 5,
    backgroundColor: 'white', // Color de fondo del campo de texto
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginBottom: 15,
    alignItems: 'center',
    width: '80%',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white', // Color del texto de información
  },
});



export default InicioSesion;
