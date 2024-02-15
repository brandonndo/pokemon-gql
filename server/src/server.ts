import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema/typeDefs.generated";
import { resolvers } from "./schema/resolvers.generated";

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`server running at: ${url}`);
}).catch((error) => {
  console.log("error starting the server: ", error)
})
