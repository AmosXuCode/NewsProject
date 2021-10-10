import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BlueBtn from './components/blocks/BlueBtn.vue';

Vue.component('BlueBtn', BlueBtn);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
