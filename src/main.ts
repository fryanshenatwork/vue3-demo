import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import './index.css'


const app = createApp(App)
store(app)
router(app)
app.mount('#app')


export default app