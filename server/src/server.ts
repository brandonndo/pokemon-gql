import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema/typeDefs.generated";
import { resolvers } from "./schema/resolvers.generated";

const server = new ApolloServer({ typeDefs, resolvers });
//@ts-ignore
const { url } = await startStandaloneServer(server);

console.log(`Server Successfully Running at: ${url}`);
