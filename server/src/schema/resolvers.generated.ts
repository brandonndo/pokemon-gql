/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { Pokemon } from './pokemon/resolvers/Pokemon';
import    { pokemon as Query_pokemon } from './pokemon/resolvers/Query/pokemon';
import    { pokemon_by_name as Query_pokemon_by_name } from './pokemon/resolvers/Query/pokemon_by_name';
import    { pokemon_by_pk as Query_pokemon_by_pk } from './pokemon/resolvers/Query/pokemon_by_pk';
import    { Species as pokemon_Species } from './pokemon/resolvers/Species';
import    { Species as species_details_Species } from './species-details/resolvers/Species';
import    { SpeciesDetails } from './species-details/resolvers/SpeciesDetails';
    export const resolvers: Resolvers = {
      Query: { pokemon: Query_pokemon,pokemon_by_name: Query_pokemon_by_name,pokemon_by_pk: Query_pokemon_by_pk },
      
      
      Pokemon: Pokemon,
Species: { ...pokemon_Species,...species_details_Species },
SpeciesDetails: SpeciesDetails
    }