import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from "aos";
import "aos/dist/aos.css";
import vuetify from './plugins/vuetify';

const VueCookie = require('vue-cookie');
// 플러그인 사용
Vue.use(VueCookie);


AOS.init();
new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
	  vuetify,
  render: h => h(App)
}).$mount('#app')
