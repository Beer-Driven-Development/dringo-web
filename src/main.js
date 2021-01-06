import Vue from "vue";
import "./styles.less";
import "./styles/index.scss";
import { jwtInterceptor, router } from "./_helpers";
import App from "./App.vue";
import Vuex from "vuex";
import { store } from "./_store";
import $socket from "./_helpers/socket-instance";
import VueSocketIOExt from "vue-socket.io-extended";
import VModal from "vue-js-modal";

Vue.use(Vuex);

Vue.use(VueSocketIOExt, $socket, { store });
Vue.use(VModal);

jwtInterceptor();

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
