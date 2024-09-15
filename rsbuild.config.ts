import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig({
  plugins: [pluginVue()],
  server: {
    port: 3001
  },
  dev: {
    assetPrefix: 'http://localhost:3001/',
    writeToDisk: true
  },
  tools: {
    rspack: {
      output: {
        uniqueName: 'federation_provider_vue3'
      },
      plugins: [
        new ModuleFederationPlugin({
          name: 'federation_provider_vue3',
          exposes: {
            './export-app': './src/export-app.ts'
          },
          shared: ['vue', 'vue-router']
        })
      ]
    }
  }
});
