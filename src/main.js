import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './index.css'

createApp(App).use(Quasar, quasarUserOptions).mount('#app')
const app = createApp(App)
