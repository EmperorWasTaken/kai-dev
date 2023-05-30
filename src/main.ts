import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'quasar/dist/quasar.sass'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import { Quasar } from 'quasar'

App.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
})

createApp(App).mount('#app')
