import { createStore, createLogger } from 'vuex';
import auth from '@/store/modules/auth';
import infoAlerts from '@/store/modules/info-alerts';
import request from '@/store/modules/request';

const plugins = [];

if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger());
}

export default createStore({
  plugins,
  state() {
    return {
      sidebar: false
    };
  },
  mutations: {
    openSidebar(state) {
      state.sidebar = true;
    },
    closeSidebar(state) {
      state.sidebar = false;
    }
  },
  actions: {},
  modules: { auth, infoAlerts, request }
});
