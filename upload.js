// Importamos axios
const axios = require('axios');

// definimos la data que queremos subir a firebase
// si quieren cambiar la data o cambiar campos lo puedenhacer facilmente
const restaurants = [
  {
    id: 1,
    titulo: "Título 1",
    descripcion: "Descripción   1",
    calificacion: "★★★★☆",
    texto: "texto 0"
    
  },
  {
    id: 2,
    titulo: "Título 2",
    descripcion: "Descripción  ",
    calificacion: "★★★★★",
    texto: "texto 1"
    
  },
  {
    id: 3,
    titulo: "Título d 3",
    descripcion: "Descripción del ítem 3",
    calificacion: "★★★☆☆",
    texto: "texto 2"
    
  },
  {
    id: 4,
    titulo: "Título d 4",
    descripcion: "Descripción del ítem4",
    calificacion: "★★★★★",
    texto: "texto 3"
    
  },
  
  // Add more restaurant objects as needed
];

const uploadDataToFirebase = async () => {
  try {
    const response = await axios.put(
      'https://proyecto-50166-default-rtdb.firebaseio.com/items.json',
      restaurants
    );
    console.log('Data subida de manera exitosa:', response.data);
  } catch (error) {
    console.error('Error subiendo la data', error);
  }
};

// Llamamos el metodo para subir la data
uploadDataToFirebase();