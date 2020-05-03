import Vue from 'vue'
import App from './App'
import router from './router'

import globals from './globals'

Vue.config.productionTip = false

// Global RTL flag
Vue.mixin({
  data: globals
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
