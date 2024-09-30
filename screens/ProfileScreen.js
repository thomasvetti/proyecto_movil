import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Preguntar al usuario si está seguro de que quiere cerrar sesión
    Alert.alert(
      "Cerrar sesión",
      "¿Estás seguro de que quieres cerrar sesión?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Cerrar sesión", 
          onPress: () => {
            // Redirigir a la pantalla de inicio de sesión
            navigation.navigate('Login');
          }
        }
      ]
    );
  };

  return (
    <View>
      <Text>Profile Screen</Text>
      <Button title="Cerrar sesión" onPress={handleLogout} />
    </View>
  );
};

export default ProfileScreen;
