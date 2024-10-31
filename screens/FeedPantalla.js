import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground, ActivityIndicator } from 'react-native';
import { getRestaurants } from '../util/bd'; // Asegúrate de ajustar la ruta a tu archivo de API

const FeedPantalla = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRestaurants();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/file(2).jpg')} // Fondo de pantalla
        style={styles.background}
      >
        <View style={styles.overlay}>
          <ScrollView style={styles.scrollView}>
            {items.map(item => (
              <TouchableOpacity 
                key={item.id} 
                style={styles.card} 
                onPress={() => navigation.navigate('DetallesPantalla', { item })}
              >
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.textContainer}>
                  <Text style={styles.titulo}>{item.titulo}</Text>
                  <Text style={styles.descripcion}>{item.descripcion}</Text>
                  <Text style={styles.calificacion}>Calificación: {item.calificacion}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Capa semitransparente
    padding: 10,
  },
  scrollView: {
    width: '100%',
    paddingTop: 50,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Fondo semitransparente blanco
    marginBottom: 15,
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
    elevation: 4, // Sombra en Android
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  descripcion: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  calificacion: {
    fontSize: 14,
    color: '#2c3e50',
    marginTop: 10,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FeedPantalla;
