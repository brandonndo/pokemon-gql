import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema/typeDefs.generated";
import { resolvers } from "./schema/resolvers.generated";
import { PokemonAPI } from "./schema/pokemon-api";

export interface ContextValue {
  dataSources: {
    pokemonAPI: PokemonAPI;
  };
}

const server = new ApolloServer<ContextValue>({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, {
  context: async () => {
    const { cache } = server;
    return {
      dataSources: {
        pokemonAPI: new PokemonAPI({ cache }),
      },
    };
  },
});

console.log(`Server Successfully Running at: ${url}`);
