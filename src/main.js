import Vue from "vue";
import "./styles.less";
import "./styles/index.scss";
import { jwtInterceptor, router } from "./_helpers";
import App from "./App.vue";
import Vuex from "vuex";
import { store } from "./_store";
import VueSocketIOExt from "vue-socket.io-extended";
import io from "socket.io-client";

let socket = undefined;

function initialiseSocket() {
  socket = io(`${process.env.VUE_APP_API_URL}`);

  socket.on("connect", function() {
    console.log("socket connected");
  });
  socket.on("disconnect", function() {
    console.log("socket disconnected");
  });

  socket.on("joinedRoom", (data) => {
    console.log("joinedRoom");
    store.dispatch("room/joinedRoom", data);
  });
  socket.on("usersList", (data) => {
    console.log(data);
    console.log("usersList");
    store.dispatch("room/setUsersList", data);
  });

  socket.on("next", (data) => {
    console.log(data);
    store.dispatch("beer/setBeers", data.beers);
    store.dispatch("category/setPivots", data.pivots);
    router.push("/degustation");
  });
}

initialiseSocket();

if (!socket) {
  initialiseSocket();
}

Vue.prototype.$socket = socket;

Vue.use(Vuex);

Vue.use(VueSocketIOExt, socket, { store });

jwtInterceptor();

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
