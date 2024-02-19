import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";

const config: CodegenConfig = {
  schema: "**/schema.graphql",
  generates: {
    "server/src/schema": defineConfig({
      typesPluginsConfig: {
        useIndexSignature: true,
        defaultMapper: "Partial<{T}>",
      },
    }),
  },
};
export default config;
