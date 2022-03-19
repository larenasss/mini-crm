const TOKEN_KEY = 'jwt-token';

import axios from "axios";
import { error } from "@/utils/error";

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
      try {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`;
        const { data } = await axios.post(url, { ...payload, returnSecureToken: true });
        commit('setToken', data.idToken);
      } catch (e) {
        console.error(error(e.response.data.error.message));
      }
    }
  },
  getters: {
    token: ({ token }) => token,
    isAuthenticated: (_, { token }) => !!token
  }
};