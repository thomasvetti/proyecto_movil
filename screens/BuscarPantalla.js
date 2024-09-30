import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, KeyboardAvoidingView, Platform } from 'react-native';

const BuscarPantalla = () => {
    const [buscar, AsignarBusqueda] = useState('');
    const [resultados, AsignarResultados] = useState([]);

    const Buscador = () => {

        const datos = [
            { id: '1', name: 'Item 1' },
            { id: '2', name: 'Item 2' },
            { id: '3', name: 'Item 3' },
        ];
    
    const filteredResults = datos.filter(item => 
        item.name.toLowerCase().includes(buscar.toLowerCase())
      );
  
      AsignarResultados(filteredResults);
};

return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={{ flex: 1 }}>
        <TextInput 
          placeholder="Buscar..." 
          value={buscar} 
          onChangeText={AsignarBusqueda} 
          style={{ borderWidth: 1, margin: 10, padding: 5 }} 
        />
        <Button title="Buscar" onPress={Buscador} />
        <FlatList 
          datos={resultados}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </View>
    </KeyboardAvoidingView>
  );
};


export default BuscarPantalla;