import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  rtl: true,

  theme: {
    dark: false,

    themes: {
      light: {
        primary: '#673ab7'
      },
      dark: {
      }
    }
  }
});
