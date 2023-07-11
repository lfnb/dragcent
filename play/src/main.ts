/*
 * @Author: liyafei
 * @Date: 2022-12-20 11:16:32
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './app.less'



const app = createApp(App);
app.use(router)

app.mount('#app')

