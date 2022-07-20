import { createApp } from 'vue'
import Sdk from './sdk/index.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(Sdk)
  .use(vuetify)
  .mount('#app')
