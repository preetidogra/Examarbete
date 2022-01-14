import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'


// use(router)
createApp(App).use(router).mount('#app')

//export NODE_OPTIONS=--openssl-legacy-provider
//json-server --watch db.json
