import Vue from 'vue';
import Vuex from 'vuex';
import news from '@/store/modules/news';
import loading from '@/store/modules/loading';
import notification from '@/store/modules/notification';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    news,
    loading,
    notification,
  },
});
