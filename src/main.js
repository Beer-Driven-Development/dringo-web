import Vue from "vue";

import "./styles.less";
import "./styles/index.scss";

import { jwtInterceptor, router } from "./_helpers";
import App from "./App.vue";
import Vuex from "vuex";
import { store } from "./_store";

Vue.use(Vuex);

jwtInterceptor();

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
