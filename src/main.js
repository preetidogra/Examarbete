import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
//import {library} from '@fortawesome/fontawesome-svg-core'

// .se(router)
createApp(App).use(router).mount('#app')
