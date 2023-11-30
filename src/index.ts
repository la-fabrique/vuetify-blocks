import CardBlock from './components/CardBlock.vue'
import type { App } from 'vue'
import {ClickOutside} from 'vuetify/directives'

export { CardBlock }

export default {
    install: (app: App) => {
      
        app.directive('click-outside', ClickOutside)
    }
  }