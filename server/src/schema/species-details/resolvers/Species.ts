import type { SpeciesResolvers } from "./../../types.generated";
import { fetchPokemonApi } from "../../pokemon/resolvers/Query/pokemon";
export const Species: Pick<SpeciesResolvers, 'speciesDetails'> = {
  /* Implement Species resolver logic here */
  speciesDetails: async (parent) => {
    const data = await fetchPokemonApi<{ is_legendary: boolean }>(
      
    );
  },
};

// 