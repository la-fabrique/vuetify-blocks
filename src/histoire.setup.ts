import { defineSetupVue3 } from '@histoire/plugin-vue'
import plugin from "./index"
// Styles
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export const setupVue3 = defineSetupVue3(({ app }) => {
  app.use(createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
  }))

  app.use(plugin)
  
})