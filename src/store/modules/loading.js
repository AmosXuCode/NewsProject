const loading = {
  namespaced: true,
  state: {
    isLoading: false,
  },
  getters: {
  },
  mutations: {
    setLoading(state, status) {
      state.isLoading = status;
    },
  },
  actions: {
    async setLoadingStatus({ commit }, status) {
      commit('setLoading', status);
    },
  },
};

export default {
  ...loading,
};
