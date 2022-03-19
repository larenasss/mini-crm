const TOKEN_KEY = 'jwt-token';

export default {
  namespaced: true,
  state() {
    return {
      token: localStorage.getItem(TOKEN_KEY)
    };
  },
  mutations: {
    setToken(state, tokenValue) {
      state.token = tokenValue;
      localStorage.setItem(TOKEN_KEY, tokenValue);
    },
    logOut(state) {
      state.token = null;
      localStorage.removeItem(TOKEN_KEY);
    }
  },
  actions: {
    async login({ commit }, payload) {
      console.log(payload);
      commit('setToken', 'Test token');
    }
  },
  getters: {
    token: ({ token }) => token,
    isAuthenticated: (_, { token }) => !!token
  }
};