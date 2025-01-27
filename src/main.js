import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'a17t'
import './assets/tailwind.css'
import { uniSun, uniMoon, uniGithub, uniBars, uniFavoriteMonochrome, uniCheckCircleMonochrome } from 'vue-unicons/src/icons'
import Unicon from 'vue-unicons'
import store from './store'
import 'roboto-mono-webfont'
import './assets/theming.css'
import Heading from './components/Heading'
import Subheading from './components/Subheading'

Unicon.add([uniSun, uniMoon, uniGithub, uniBars, uniFavoriteMonochrome, uniCheckCircleMonochrome])
Vue.use(Unicon)

Vue.config.productionTip = false
Vue.prototype.$bodyElement = null // It's not really a body element it's a div but idc

Vue.component('heading', Heading)
Vue.component('subheading', Subheading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
