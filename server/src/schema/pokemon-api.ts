import { RESTDataSource } from "@apollo/datasource-rest";
import DataLoader from "dataloader";
import type { Pokemon } from './types.generated'

export interface PokemonApiReturn {
  name: string;
  id: number;
  height: number;
  weight: number;
  base_experience: number;
  species: {
    name: string;
    url: string;
  };
}

export class PokemonAPI extends RESTDataSource {
  override baseURL = `https://pokeapi.co/api/v2/`;

  private pokemonLoaderById = new DataLoader(async (ids) => {
    const pokemonList = await Promise.all(
      ids.map(async (pokemonId:unknown) => {
        const encodedPokemonId = encodeURIComponent(pokemonId as string)
        const { name, id, height, weight, base_experience, species } =
          await this.get<PokemonApiReturn>(`pokemon/${encodedPokemonId}`);
        return {
          name,
          url: `https://pokeapi.co/api/v2/pokemon/${encodedPokemonId}`,
          id,
          height,
          weight,
          base_experience,
          species,
        };
      })
    );
    // primes data for by name by id, interchangable, will result in the same data (if data is the same)
    pokemonList.forEach((pokemon) => this.pokemonLoaderByName.prime(pokemon.name, pokemon))
    return ids.map((id) => pokemonList.find((pokemon) => pokemon.id === id));
  });

  private pokemonLoaderByName = new DataLoader(async (names) => {
    const pokemonList = await Promise.all(
      names.map(async (pokemonName:unknown) => {
        const encodedPokemonName = encodeURIComponent(pokemonName as string)
        const { name, id, height, weight, base_experience, species } =
          await this.get<PokemonApiReturn>(`pokemon/${encodedPokemonName}`);
        return {
          name,
          url: `https://pokeapi.co/api/v2/pokemon/${encodedPokemonName}`,
          id,
          height,
          weight,
          base_experience,
          species,
        };
      })
    );
    pokemonList.forEach((pokemon) => this.pokemonLoaderById.prime(pokemon.id, pokemon))
    return names.map((name) => pokemonList.find((pokemon) => pokemon.name === name));
  });

  async getPokemon() {
    const data = await this.get<{
      results: {
        name: string;
        url: string;
      }[];
    }>('pokemon')
    return this.pokemonLoaderByName.loadMany(data.results.map(({name}) => name)) as Promise<Pokemon[]>
  }

  // async getPokemonByPk(): .load
  // async getPokemonByName(): .load
}
