/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { Ability } from './ability/resolvers/Ability';
import    { Pokemon } from './pokemon/resolvers/Pokemon';
import    { pokemon as Query_pokemon } from './pokemon/resolvers/Query/pokemon';
import    { pokemon_by_name as Query_pokemon_by_name } from './pokemon/resolvers/Query/pokemon_by_name';
import    { pokemon_by_pk as Query_pokemon_by_pk } from './pokemon/resolvers/Query/pokemon_by_pk';
    export const resolvers: Resolvers = {
      Query: { pokemon: Query_pokemon,pokemon_by_name: Query_pokemon_by_name,pokemon_by_pk: Query_pokemon_by_pk },
      
      
      Ability: Ability,
Pokemon: Pokemon
    }