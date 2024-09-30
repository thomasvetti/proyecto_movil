import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PerfilPantalla = ({ navigation }) => {
  const [infoUsuario, asignarInfoUsuario] = useState(null);
  const [EditarPerfil, AsingarEditarPerfil] = useState(false);
  const [CambiarContraseña, AsginarCambiarContraseña] = useState(false);
  const [correoNuevo, asignarCorreoNuevo] = useState('');
  const [contraseñaActual, AsignarcontraseñaActual] = useState('');
  const [nuevaContraseña, asignarNuevaContraseña] = useState('');
  const [confirmnuevaContraseña, setConfirmnuevaContraseña] = useState('');

  useEffect(() => {
    const loadinfoUsuario = async () => {
      const email = await AsyncStorage.getItem('userEmail');
      asignarInfoUsuario({ email });
    };
    loadinfoUsuario();
  }, []);

  const handleSaveProfile = async () => {
    await AsyncStorage.setItem('userEmail', correoNuevo);
    asignarInfoUsuario({ email: correoNuevo });
    AsingarEditarPerfil(false);
    Alert.alert("Perfil actualizado");
  };

  const handleChangePassword = async () => {
    const storedPassword = await AsyncStorage.getItem('userPassword');
    if (storedPassword === contraseñaActual && nuevaContraseña === confirmnuevaContraseña) {
      await AsyncStorage.setItem('userPassword', nuevaContraseña);
      AsginarCambiarContraseña(false);
      Alert.alert("Contraseña cambiada");
    } else {
      Alert.alert("Error al cambiar la contraseña");
    }
  };

  const handleLogout = async () => {
    Alert.alert(
      "Cerrar sesión",
      "¿Estás seguro de que quieres cerrar sesión?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Cerrar sesión", onPress: async () => {
          await AsyncStorage.clear();
          navigation.navigate('Login');
        }}
      ]
    );
  };

  const handleDeleteAccount = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Login');
  };

  if (EditarPerfil) {
    return (
      <View>
        <Text>Editar Perfil</Text>
        <TextInput 
          placeholder="Nuevo Correo"
          value={correoNuevo}
          onChangeText={asignarCorreoNuevo}
          style={{ borderWidth: 1, margin: 10, padding: 5 }} 
        />
        <Button title="Guardar Cambios" onPress={handleSaveProfile} />
        <Button title="Cancelar" onPress={() => AsingarEditarPerfil(false)} />
      </View>
    );
  }

  if (CambiarContraseña) {
    return (
      <View>
        <Text>Cambiar Contraseña</Text>
        <TextInput 
          placeholder="Contraseña Actual"
          value={contraseñaActual}
          onChangeText={AsignarcontraseñaActual}
          secureTextEntry
          style={{ borderWidth: 1, margin: 10, padding: 5 }} 
        />
        <TextInput 
          placeholder="Nueva Contraseña"
          value={nuevaContraseña}
          onChangeText={asignarNuevaContraseña}
          secureTextEntry
          style={{ borderWidth: 1, margin: 10, padding: 5 }} 
        />
        <TextInput 
          placeholder="Confirmar Nueva Contraseña"
          value={confirmnuevaContraseña}
          onChangeText={setConfirmnuevaContraseña}
          secureTextEntry
          style={{ borderWidth: 1, margin: 10, padding: 5 }} 
        />
        <Button title="Cambiar Contraseña" onPress={handleChangePassword} />
        <Button title="Cancelar" onPress={() => AsginarCambiarContraseña(false)} />
      </View>
    );
  }

  return (
    <View>
      {infoUsuario ? (
        <>
          <Text>Correo: {infoUsuario.email}</Text>
        </>
      ) : (
        <Text>Cargando perfil...</Text>
      )}

      <Button title="Editar perfil" onPress={() => AsingarEditarPerfil(true)} />
      <Button title="Cambiar Contraseña" onPress={() => AsginarCambiarContraseña(true)} />
      <Button title="Eliminar Cuenta" onPress={() => 
        Alert.alert(
          "¿Seguro que deseas eliminar tu cuenta?",
          "",
          [
            { text: "Cancelar", style: "cancel" },
            { text: "Eliminar", onPress: handleDeleteAccount }
          ]
        )
      } />
      <Button title="Cerrar sesión" onPress={handleLogout} />
    </View>
  );
};

export default PerfilPantalla;
