import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, KeyboardAvoidingView, Platform, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        <SafeAreaView style={styles.container}>
            <ImageBackground 
                source={require('../assets/file(2).jpg')} // Cambia esto por tu fondo preferido
                style={styles.background}
            >
                {/* Overlay para aumentar la opacidad */}
                <View style={styles.overlay} />

                <KeyboardAvoidingView 
                    style={styles.innerContainer} 
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <View style={styles.inputContainer}>
                        <Icon name="search" size={20} color="gray" style={styles.icon} />
                        <TextInput 
                            placeholder="Buscar..." 
                            value={buscar} 
                            onChangeText={AsignarBusqueda} 
                            style={styles.input} 
                        />
                    </View>
                    
                    <TouchableOpacity style={styles.button} onPress={Buscador}>
                        <Icon name="search" size={20} color="black" />
                        <Text style={styles.buttonText}>Buscar</Text>
                    </TouchableOpacity>

                    <FlatList 
                        data={resultados}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <Text style={styles.resultItem}>{item.name}</Text>}
                    />
                </KeyboardAvoidingView>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    background: { flex: 1, resizeMode: 'cover' },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Color negro con opacidad (ajusta el color y la opacidad aquí)
    },
    innerContainer: { 
        flex: 1, 
        padding: 20,
        justifyContent: 'center', // Opcional: centra el contenido verticalmente
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo blanco semi-transparente
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 25,
        paddingHorizontal: 15,
        marginBottom: 20,
        height: 50,
    },
    input: {
        flex: 1,
        height: 50,
        paddingLeft: 10,
    },
    button: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo blanco semi-transparente
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
    resultItem: {
        fontSize: 18,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    icon: {
        marginRight: 10,
    },
});

export default BuscarPantalla;
