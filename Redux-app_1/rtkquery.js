import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const axios = require('axios');

// Define a service using a base URL and expected endpoints
const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

// Destructure the required hooks
const { useGetPokemonByNameQuery } = pokemonApi;

// Define an async function to fetch the data
const fetchData = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu');
    const data = response.data;
    console.log(data); // Process the data as needed
  } catch (error) {
    console.error(error);
  }
};

fetchData();
