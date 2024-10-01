import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/file(1).jpg')}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <Text style={styles.text}>Registro</Text>

          <View style={styles.inputContainer}>
            <Icon name="envelope" size={20} color="gray" style={styles.icon} />
            <TextInput
              placeholder="Correo"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} color="gray" style={styles.icon} />
            <TextInput
              placeholder="Contraseña"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} color="gray" style={styles.icon} />
            <TextInput
              placeholder="Confirmar Contraseña"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              style={styles.input}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Icon name="user-plus" size={20} color="black" />
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Icon name="arrow-left" size={20} color="black" />
            <Text style={styles.buttonText}>Volver a Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { flex: 1, resizeMode: 'cover' },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  text: {
    fontSize: 24,
    color: 'white',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 20,
    height: 50,
    width: '80%',
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
    marginLeft: 10,
  },
});

export default Registro;
