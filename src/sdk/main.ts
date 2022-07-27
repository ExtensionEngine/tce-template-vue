import { createApp } from 'vue';
import { loadFonts } from '../plugins/webfontloader';
import Sdk from './Sdk.vue';
import vuetify from '../plugins/vuetify';

loadFonts();

createApp(Sdk)
  .use(vuetify)
  .mount('#app');
