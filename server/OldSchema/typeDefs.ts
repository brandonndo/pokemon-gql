import { gql } from "apollo-server";

export const typeDefs = gql`
  type Pokemon {
    name: String!
    url: String
    id: Int!
  }

  type eachPokemon {
    name: String!
    id: Int!
    base_experience: Int!
    height: Int!
    weight: Int!
    types: [Types!]!
    abilities: [Abilities!]!
  }

  type Types {
    name: String!
  }

  type Abilities {
    name: String!
  }

  type Query {
    pokemon: [Pokemon!]!
    getPokemon(name: String!): eachPokemon
    types: [Types!]!
  }
`;
