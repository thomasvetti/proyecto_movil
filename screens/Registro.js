import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../context/auth-context';
import { authenticate } from '../util/auth';

const Registro = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { login: contextLogin } = useContext(AuthContext);

  const handleRegister = async () => {
    if (password === confirmPassword) {
      try {
        const userId = await authenticate('signUp', email, password);
        contextLogin(userId); // Inicia sesión tras el registro
        navigation.navigate('Tabs');
      } catch (error) {
        Alert.alert('Error', 'Ocurrió un problema en el registro. Inténtalo de nuevo.');
      }
    } else {
      Alert.alert('Error', 'Las contraseñas no coinciden');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/file(1).jpg')} style={styles.background}>
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
    </View>
  );
};

// Estilos como en el código anterior
// Estilos modificados
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 30,  // Añadir un margen horizontal para evitar que los elementos toquen los bordes
  },
  header: {
    fontSize: 28,  // Hacer el texto un poco más grande para destacarlo
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,  // Aumentar el margen para separar del primer input
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginBottom: 15,  // Ajustar el margen para espacio uniforme entre inputs
    width: '100%',
  },
  icon: {
    marginRight: 10,
    color: 'gray',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',  // Asegurar que los botones se mantengan centrados y uniformes
    maxWidth: 300,  // Limitar el ancho máximo en pantallas grandes
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default Registro;
