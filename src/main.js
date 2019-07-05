// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router';
import Header from './components/Header/Header.vue'

//全局注册
Vue.component('Header', Header)


new Vue({
  el: '#app',
  // components: { App } , template: '<App/>'  ==== 简写 render: h => h(App)
  render: h => h(App),
  router
})
