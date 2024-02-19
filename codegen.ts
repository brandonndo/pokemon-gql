import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";

const config: CodegenConfig = {
    schema: "**/schema.graphql",
    generates: {
        "server/src/schema": defineConfig({
            add: {
                "./types.generated.ts": {
                    // The key should target the generated types file
                    content: "import type { DeepPartial } from 'utility-types';",
                },
            },
            typesPluginsConfig: {
                defaultMapper: "DeepPartial<{T}>",
            },
        }),
    },
};
export default config;