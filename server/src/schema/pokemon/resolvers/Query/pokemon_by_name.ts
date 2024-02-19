import type { QueryResolvers } from "./../../../types.generated";
import { apiUrl } from "./pokemon";
import { fetchPokemonApi } from "./pokemon";
import type {PokemonApiReturn} from "./pokemon"
// interfaces: type checking the shape of values - aka duck typing / structural subtyping
// export interface PokemonAPIReturn {
//   name: string;
//   url: string;
//   id: number;
//   base_experience: number;
//   height: number;
//   weight: number;
// }


export const pokemon_by_name: NonNullable<QueryResolvers['pokemon_by_name']> = async (_parent, _arg, _ctx) => {
  /* Implement Query.pokemon_by_name resolver logic here */
  const pokemonData = await fetchPokemonApi<PokemonApiReturn>(
    `${apiUrl}/${_arg.name}`
  );
  console.log("pokemon data", pokemonData);
  return pokemonData;
};

