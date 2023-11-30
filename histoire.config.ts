// histoire.config.js
import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'


export default defineConfig({
  // your Histoire configuration
  plugins: [HstVue()],
  setupFile: 'src/histoire.setup.ts',
})