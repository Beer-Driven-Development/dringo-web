import Vue from "vue";
import "./styles.less";
import "./styles/index.scss";
import { jwtInterceptor, router } from "./_helpers";
import App from "./App.vue";
import Vuex from "vuex";
import { store } from "./_store";

import VueSocketIOExt from "vue-socket.io-extended";
import io from "socket.io-client";

Vue.use(Vuex);

const socket = io(`${process.env.VUE_APP_API_URL}`);

Vue.use(VueSocketIOExt, socket, { store });

jwtInterceptor();

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
