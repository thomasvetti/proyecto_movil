import React, { useState } from 'react';
import { View, Text, Button, Switch, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsScreen = ({ navigation }) => {
 
  const [notificationsEnabled, setNotificationsEnabled] = useState(true); // Estado para las notificaciones


 

  // Cambiar estado de las notificaciones
  const toggleNotifications = async () => {
    setNotificationsEnabled(previousState => !previousState);
    await AsyncStorage.setItem('notificationsEnabled', JSON.stringify(!notificationsEnabled));
  };



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>

    
   
      
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Notificaciones</Text>
        <Switch
          onValueChange={toggleNotifications}
          value={notificationsEnabled}
        />
      </View>

   
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Privacidad y Seguridad</Text>
        <Button
          title="Configurar"
          onPress={() => alert('Opciones de privacidad y seguridad')}
        />
      </View>

 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
  settingItem: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingText: {
    fontSize: 18,
  },
});

export default SettingsScreen;
