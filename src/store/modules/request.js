import axios from "@/axios/request";
import store from "@/store/index";

export default {
  namespaced: true,
  state() {
    return {
      requests: []
    };
  },
  mutations: {
    setRequest(state, requests) {
      state.requests = requests;
    },
    addRequest(state, request) {
      state.requests.push(request);
    }
  },
  actions: {
    async create({ commit, dispatch }, payload) {
      try {
        const token = store.getters['auth/token'];
        const { data } = await axios.post(`/requests.json?auth=${token}`, payload);
        commit('addRequest', { id: data.name ,...payload });
        dispatch('infoAlerts/toggleMessage', {
          value: 'Заявка успешно созданна',
          type: 'primary'
        }, { root: true });
      } catch (e) {
        dispatch('infoAlerts/toggleMessage', {
          value: e.message,
          type: 'danger'
        }, { root: true });
      }
    },
    async load({ commit, dispatch }) {
      try {
        const token = store.getters['auth/token'];
        const { data } = await axios.get(`/requests.json?auth=${token}`);
        const requests = Object.keys(data).map(id => ({ ...data[id], id }));
        commit('setRequest', requests);
      } catch (e) {
        dispatch('infoAlerts/toggleMessage', {
          value: e.message,
          type: 'danger'
        }, { root: true });
      }
    },
    async loadById({ dispatch }, id) {
      try {
        const token = store.getters['auth/token'];
        const { data } = await axios.get(`/requests/${id}.json?auth=${token}`);
        return data;
      } catch (e) {
        dispatch('infoAlerts/toggleMessage', {
          value: e.message,
          type: 'danger'
        }, { root: true });
      }
    }
  },
  getters: {
    requests(state) {
      return state.requests;
    }
  }
};