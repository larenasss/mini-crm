import { createStore, createLogger } from 'vuex';
import auth from './modules/auth';
import infoAlerts from './modules/info-alerts';
import request from './modules/request';

const plugins = [];

if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger());
}

export default createStore({
  plugins,
  state: {},
  mutations: {},
  actions: {},
  modules: { auth, infoAlerts, request }
});
