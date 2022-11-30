const axios = require('axios');

const getCharacters = async () => {
  try {
    const { data } = await axios.get('https://rickandmortyapi.com/api/character/');
    // console.log(data.results);
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

const getCharactersById = async (id) => {
  try {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}/`);
    // console.log(data.name);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// getCharactersById(1);

module.exports = {
  getCharacters,
  getCharactersById,
};