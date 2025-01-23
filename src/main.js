import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1E88E5',
          secondary: '#00BCD4',
          accent: '#FF4081',
          background: '#F5F5F5',
          surface: '#FFFFFF',
        },
      },
    },
  },
})

const app = createApp(App)
app.use(vuetify)
app.mount('#app') 