import type { SpeciesDetails, SpeciesResolvers } from "./../../types.generated";
import { fetchPokemonApi } from "../../pokemon/resolvers/Query/pokemon";

export const Species: Pick<SpeciesResolvers, "speciesDetails"> = {
  /* Implement Species resolver logic here */
  speciesDetails: async (parent) => {
    const { url } = parent;
    const { is_legendary } = await fetchPokemonApi<{ is_legendary: boolean }>(
      url!
    );
    return {
      is_legendary,
    };
  },
};
