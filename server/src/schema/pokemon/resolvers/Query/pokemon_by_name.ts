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

// --------------------------------------------------------------------------------------------------------------
// old way without type generics 
//   const response = await globalThis.fetch(`${apiUrl}/${name}`);
//   const pokemonData = await response.json();
//   console.log(pokemonData);

//   const Pokemon = {
//     name: pokemonData.name,
//     url: pokemonData.url,
//     id: pokemonData.id,
//     base_experience: pokemonData.base_experience,
//     height: pokemonData.height,
//     weight: pokemonData.weight,
//   };
//   return Pokemon;

// create callPokemonApi function -> PokemonType will be an interface that matches what is returned from the REST API
// export const pokemon_by_pk: NonNullable<
//   QueryResolvers["pokemon_by_pk"]
// > = async (_parent, _args, _ctx) => {
//   return callPokemonApi<PokemonType>(`${apiUrl}/${_args.id}`);
// };

// you can create func with a type helper mapped over the top, and manually pass the type to them
