import type { QueryResolvers } from "./../../../types.generated";
export const apiUrl = "https://pokeapi.co/api/v2/pokemon";

export interface PokemonApiReturn {
  name: string;
  url: string;
  id: number;
  height: number;
  weight: number;
  base_experience: number;
  species: {
    name: string;
    url: string;
    
  };
}

export const fetchPokemonApi = async <TData>(url: string): Promise<TData> => {
  const response = await globalThis.fetch(url);
  return response.json() as TData;
};
export const pokemon: NonNullable<QueryResolvers['pokemon']> = async (
  _parent,
  _arg,
  _ctx
) => {
  /* Implement Query.pokemon resolver logic here */
  const data = await fetchPokemonApi<{
    results: {
      name: string;
      url: string;
    }[];
  }>(`${apiUrl}`);
  // console.log('dres', data.results)
  // console.log(data);

  console.log('parent', _parent)
  const PokemonList = await Promise.all(
    data.results.map(async (pokemon) => {
      const { id, height, weight, base_experience, species } =
        await fetchPokemonApi<PokemonApiReturn>(`${apiUrl}/${pokemon.name}`);
      return {
        id,
        height,
        weight,
        base_experience,
        species,
        ...pokemon,
      };
    })
  );
  // console.log("list", PokemonList);
  return PokemonList;
};
