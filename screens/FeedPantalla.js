import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';


const FeedPantalla = ({ navigation }) => {
  const items = [
    {
      id: 1,
      title: "aqui va el titulo",
      description: "aqui va la descripcion",
      rating: "★★★★☆",
      image: require('../assets/esd.jpg'), 
    },
    {
      id: 2,
      title: "aqui va el titulo",
      description: "aqui va la descripcion",
      rating: "★★★★★",
      image: require('../assets/esd.jpg'),
    },
    {
      id: 3,
      title: "aqui va el titulo",
      description: "aqui va la descripcion",
      rating: "★★★☆☆",
      image: require('../assets/esd.jpg'),
    },
  ];

  return (
    <View style={styles.container}>
       <ScrollView style={styles.scrollView}>
      {items.map(item => (
        <TouchableOpacity 
          key={item.id} 
          style={styles.card} 
          onPress={() => navigation.navigate('DetailScreen', { item })}
        >
          <Image source={item.image} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.rating}>Rating: {item.rating}</Text>
          </View>
        </TouchableOpacity>
      ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    
  },
  scrollView: {
    backgroundColor: 'pink',
    // Elimina el margen horizontal para que ocupe todo el ancho
    marginHorizontal: 0,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    // Establece el ancho al 100% menos el padding o margen deseado
    width: '90%',
    
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    color: '#666',
  },
  rating: {
    marginTop: 5,
    color: '#2c3e50',
  },
});
export default FeedPantalla;
