import type { QueryResolvers } from "./../../../types.generated";
import type { PokemonApiReturn } from "./pokemon";
import { fetchPokemonApi } from "./pokemon";
import { apiUrl } from "./pokemon";
// const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

export const pokemon_by_pk: NonNullable<QueryResolvers['pokemon_by_pk']> = async (_parent, _arg, _ctx) => {
  /* Implement Query.pokemon_by_pk resolver logic here */
  const pokemonData = await fetchPokemonApi<PokemonApiReturn>(`${apiUrl}/${_arg.id}`);
  console.log("pokemon data", pokemonData);
  return pokemonData;
};
// create callPokemonApi function -> PokemonType will be an interface that matches what is returned from the REST API
