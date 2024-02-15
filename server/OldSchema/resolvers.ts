const apiUrl = "https://pokeapi.co/api/v2/pokemon";

// interfaces: defines structure of Pokemon obj for ts
interface Pokemon {
  name: string;
  url: string;
  id: number;
  height: number;
  weight: number;
  base_experience: number;
  types?: Types[];
  abilities?: Abilities[];
}

interface Abilities {
  name: string;
}

interface Types {
  name: string;
}

let PokemonList: Pokemon[];
let TypeList: Types[];

export const resolvers = {
  Query: {
    pokemon: async () => {
      try {
        const response = await globalThis.fetch(apiUrl);
        const data = await response.json();
        console.log(data);

        PokemonList = data.results.map(
          ({ name, url }: { name: string; url: string }) => {
            return { name, url };
          }
        );
        return PokemonList;
      } catch (error) {
        console.error("error fetching list of pokemon", error);
      }
    },

    getPokemon: async (
      parent,
      {
        name,
        base_experience,
        height,
        weight,
      }: {
        name: string;
        id: number;
        base_experience: number;
        height: number;
        weight: number;
      }
    ) => {
      try {
        const response = await globalThis.fetch(
          `${apiUrl}/${name.toLowerCase()}`
        );
        const pokemonData = await response.json();

        const types = await fetchPokemonTypes(pokemonData.types);

        const abilities = await fetchPokemonAbilities(pokemonData.abilities);

        const pokemon: Pokemon = {
          name: pokemonData.name,
          url: pokemonData.url,
          id: pokemonData.id,
          base_experience: pokemonData.base_experience,
          height: pokemonData.height,
          weight: pokemonData.weight,
          types: types,
          abilities: abilities,
          // abilities: abilities,
        };

        return pokemon;
      } catch (error) {
        console.error("error fetching specific pokemon", error);
        return null;
      }
    },

    // types: async () => {
    //   try {
    //     const response = await globalThis.fetch(
    //       "https://pokeapi.co/api/v2/type"
    //     );
    //     const data = await response.json();
    //     console.log("type list", data);

    //     TypeList = data.result.map(({ name }: { name: string }) => {
    //       return { name };
    //     });
    //     return TypeList;
    //   } catch (error) {
    //     console.error("error fetching type list", error);
    //   }
    // },
  },
};

const fetchPokemonTypes = async (typeData: any[] | null): Promise<Types[]> => {
  if (!typeData) {
    return [];
  }
  return typeData.map((typeData: any) => ({ name: typeData.type.name }));
};

const fetchPokemonAbilities = async (
  abilitiesData: any[] | null
): Promise<Abilities[]> => {
  if (!abilitiesData) {
    return [];
  }
  return abilitiesData.map((abilitiesData: any) => ({
    name: abilitiesData.ability.name,
  }));
};

/*
- implement codegen - for resolver type safety
- When you wrap it in try catch the issue is 
then nothing is returned from the server when 
theres an error, youll need to look up how to 
handle errors in apollo server.
- more dry


*/