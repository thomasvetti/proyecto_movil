// Import Axios
import axios from 'axios';

const BACKEND_URL = 'https://proyecto-50166-default-rtdb.firebaseio.com';

const getRestaurants = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/items.json`);
    const restaurants = [];

    for (const key in response.data) {
      const restaurant = {
        id: key,
        titulo: response.data[key].titulo,
        descripcion: response.data[key].descripcion,
        calificacion: response.data[key].calificacion,
        texto: response.data[key].texto,  // Mantiene el campo como `texto`
      };
      restaurants.push(restaurant);
    }

    console.log('Fetched restaurants...');
    return restaurants;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-lanza el error para manejarlo donde se llame
  }
};

const getRestaurantById = async (id) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/items/${id}.json`);
    const restaurant = {
      id: id,
      titulo: response.data.titulo,
      descripcion: response.data.descripcion,
      calificacion: response.data.calificacion,
      texto: response.data.texto,  // Mantiene el campo como `texto`
    };

    return restaurant;
  } catch (error) {
    console.error('Error fetching data by ID:', error);
    throw error;
  }
};

export { getRestaurants, getRestaurantById };
