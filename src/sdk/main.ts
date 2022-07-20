import { createApp } from 'vue'
import Sdk from './Sdk.vue'
import vuetify from '../plugins/vuetify'
import { loadFonts } from '../plugins/webfontloader'

loadFonts()

createApp(Sdk)
  .use(vuetify)
  .mount('#app')
