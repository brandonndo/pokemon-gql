import type { QueryResolvers } from "./../../../types.generated";
export const apiUrl = "https://pokeapi.co/api/v2/pokemon";
import type { ContextValue } from "server/src/server";


export const fetchPokemonApi = async <TData>(url: string): Promise<TData> => {
  const response = await globalThis.fetch(url);
  return response.json() as TData;
};
export const pokemon: NonNullable<QueryResolvers<ContextValue>['pokemon']> = async (
  _parent,
  _arg,
  {dataSources}
) => {
  /* Implement Query.pokemon resolver logic here */
    return dataSources.pokemonAPI.getPokemon()
};
