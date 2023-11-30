/// <reference types="histoire" />

// Plugins
import vue from '@vitejs/plugin-vue'
import { transformAssetUrls } from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { Vuetify3Resolver } from "unplugin-vue-components/resolvers";
// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    /* vuetify({
      autoImport: true,
    }), */
    Components({
      resolvers: [Vuetify3Resolver()],
      dts: true,
      dirs: ["src/**/components"],
    }),
    AutoImport({ imports: ["vue"], vueTemplate: true }),
 
    ViteFonts({
      google: {
        families: [
          {
            name: 'Roboto',
            styles: 'wght@100;300;400;500;700;900',
          },
        ],
      },
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
  server: {
    port: 3000,
  },  
})
