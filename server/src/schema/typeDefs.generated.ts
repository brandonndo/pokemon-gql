import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 5, end: 10 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 0, end: 10 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 23, end: 28 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pokemon", loc: { start: 33, end: 40 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Pokemon",
                    loc: { start: 43, end: 50 },
                  },
                  loc: { start: 43, end: 50 },
                },
                loc: { start: 43, end: 51 },
              },
              loc: { start: 42, end: 52 },
            },
            loc: { start: 42, end: 53 },
          },
          directives: [],
          loc: { start: 33, end: 53 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "pokemon_by_pk",
            loc: { start: 56, end: 69 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "id", loc: { start: 70, end: 72 } },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 74, end: 76 },
                  },
                  loc: { start: 74, end: 76 },
                },
                loc: { start: 74, end: 77 },
              },
              directives: [],
              loc: { start: 70, end: 77 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Pokemon",
              loc: { start: 80, end: 87 },
            },
            loc: { start: 80, end: 87 },
          },
          directives: [],
          loc: { start: 56, end: 87 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "pokemon_by_name",
            loc: { start: 90, end: 105 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 106, end: 110 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 112, end: 118 },
                  },
                  loc: { start: 112, end: 118 },
                },
                loc: { start: 112, end: 119 },
              },
              directives: [],
              loc: { start: 106, end: 119 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Pokemon",
              loc: { start: 122, end: 129 },
            },
            loc: { start: 122, end: 129 },
          },
          directives: [],
          loc: { start: 90, end: 129 },
        },
      ],
      loc: { start: 11, end: 131 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Pokemon", loc: { start: 138, end: 145 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 150, end: 154 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 156, end: 162 },
              },
              loc: { start: 156, end: 162 },
            },
            loc: { start: 156, end: 163 },
          },
          directives: [],
          loc: { start: 150, end: 163 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "url", loc: { start: 166, end: 169 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 171, end: 177 },
            },
            loc: { start: 171, end: 177 },
          },
          directives: [],
          loc: { start: 166, end: 177 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 180, end: 182 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 184, end: 186 } },
            loc: { start: 184, end: 186 },
          },
          directives: [],
          loc: { start: 180, end: 186 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "height",
            loc: { start: 189, end: 195 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Int", loc: { start: 197, end: 200 } },
            loc: { start: 197, end: 200 },
          },
          directives: [],
          loc: { start: 189, end: 200 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "weight",
            loc: { start: 203, end: 209 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Int", loc: { start: 211, end: 214 } },
            loc: { start: 211, end: 214 },
          },
          directives: [],
          loc: { start: 203, end: 214 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "base_experience",
            loc: { start: 217, end: 232 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Int", loc: { start: 234, end: 237 } },
            loc: { start: 234, end: 237 },
          },
          directives: [],
          loc: { start: 217, end: 237 },
        },
      ],
      loc: { start: 133, end: 239 },
    },
  ],
  loc: { start: 0, end: 240 },
} as unknown as DocumentNode;
