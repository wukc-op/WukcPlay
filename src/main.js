import {createApp} from 'vue'
import router from './router'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入公共样式
import "@/assets/css/reset.css"
import "@/assets/css/normalize.css"


const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(ElementPlus)