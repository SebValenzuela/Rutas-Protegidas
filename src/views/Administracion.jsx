import React, { useState, useEffect } from 'react';

const Administracion = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(""); // Estado para mantener el Pokémon seleccionado
  const [pokemonList, setPokemonList] = useState([]); // Estado para almacenar la lista de Pokémon
  const [showCard, setShowCard] = useState(false); // Estado para controlar la visibilidad de la tarjeta
  const [pokemonDetails, setPokemonDetails] = useState(null); // Estado para almacenar los detalles del Pokémon

  useEffect(() => {
    // Realiza la solicitud a la API de PokeAPI al montar el componente
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((data) => {
        const results = data.results;
        setPokemonList(results); // Almacena la lista de Pokémon en el estado
      })
      .catch((error) => {
        console.error('Error al cargar la lista de Pokémon:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedPokemon) {
      // Realiza una solicitud para obtener los detalles del Pokémon seleccionado
      fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
        .then((response) => response.json())
        .then((data) => {
          setPokemonDetails(data); // Almacena los detalles del Pokémon en el estado
        })
        .catch((error) => {
          console.error('Error al cargar los detalles del Pokémon:', error);
        });
    }
  }, [selectedPokemon]);

  const handleSelectChange = (event) => {
    setSelectedPokemon(event.target.value);
  };

  const handleShowCard = () => {
    setShowCard(true); // Muestra la tarjeta cuando se hace clic en el botón
  };

  return (
    <div className="centered">
      <div className="selector">
        <h1 className="title-selector">Selecciona Un Pokemon</h1>
        <select className="select-pokemon" value={selectedPokemon} onChange={handleSelectChange}>
          <option value="">Selecciona un Pokémon</option>
          {pokemonList.map((pokemon, index) => (
            <option key={index} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
        </select>
      </div>
      {selectedPokemon && (
        <div>
          <h2>Has seleccionado a {selectedPokemon}</h2>
        </div>
      )}
      <div className="button-details">
        <button onClick={handleShowCard}>Ver detalle</button>
      </div>
      {showCard && pokemonDetails && (
        <div className="pokemon-card">
          <div className="card">
            <div className="row">
              <div className="col-6">
                <img className='pokemon-image' src={pokemonDetails.sprites.front_default} alt={selectedPokemon} />
              </div>
              <div className="col-6">
                <ul>
                  <li>HP: {pokemonDetails.stats[0].base_stat}</li>
                  <li>Attack: {pokemonDetails.stats[1].base_stat}</li>
                  <li>Defense: {pokemonDetails.stats[2].base_stat}</li>
                  <li>Special-Attack: {pokemonDetails.stats[3].base_stat}</li>
                  <li>Special-Defense: {pokemonDetails.stats[4].base_stat}</li>
                  <li>Speed: {pokemonDetails.stats[5].base_stat}</li>
                  <li>Element: {pokemonDetails.types[0].type.name}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Administracion;
