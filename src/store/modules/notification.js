const notification = {
  namespaced: true,
  state: {
    notification: {
      status: '',
      type: '',
      text: '',
      cancelText: '',
      confirmText: '',
      cancelCallback: '',
      confirmCallback: '',
    },
  },
  // getters
  getters: {},
  // actions
  actions: {
    spawnNotification({ commit }, data) {
      commit('setNotification', data);
    },
    closeNotification({ commit }) {
      commit('closeNotification');
    },
  },
  // mutations
  mutations: {
    setNotification(state, data) {
      state.notification = { ...data };
    },
    closeNotification(state) {
      state.notification = { ...state, status: '' };
    },
  },
};

export default {
  ...notification,
};
