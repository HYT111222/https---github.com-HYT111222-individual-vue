import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import './assets/css/global.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
Vue.config.productionTip = false
window.localStorage.removeItem('token')
// window.sessionStorage.setItem('Token',JSON.stringify({
//   token: ""
// }))

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
