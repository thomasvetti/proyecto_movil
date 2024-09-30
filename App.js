import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importar las pantallas
import PantallaInicio from './screens/PantallaInicio';
import InicioSesion from './screens/InicioSesion';
import Registro from './screens/Registro';

import FeedPantalla from './screens/FeedPantalla';
import ConfiguracionPantalla from './screens/ConfiguracionPantalla';
import BuscarPantalla from './screens/BuscarPantalla';
import PerfilPantalla from './screens/PerfilPantalla';
import DetallesPantalla from './screens/DetallesPantalla';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedPantalla} />
      <Tab.Screen name="Buscar" component={BuscarPantalla}/>
      <Tab.Screen name="Configuración" component={ConfiguracionPantalla} />
      <Tab.Screen name="Perfil" component={PerfilPantalla} />
    
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={PantallaInicio} options={{ title: 'Iniciar Sesión' }} />
        <Stack.Screen name="InicioSesion" component={InicioSesion} options={{ title: 'Inicio de Sesión' }} />
        <Stack.Screen name="Registro" component={Registro} options={{ title: 'Registro' }} />
        
       
        <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />

        
        <Stack.Screen name="DetallesPantalla" component={DetallesPantalla} options={{ title: 'Detalles' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
