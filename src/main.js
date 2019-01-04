import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faDesktop, faGlobe, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faJs, faNodeJs, faVuejs, faPython, faJava } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee, faEnvelope, faGithub, faHeart, faDesktop, faGlobe, faNodeJs, faVuejs, faPython, faJs, faJava, faPlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
