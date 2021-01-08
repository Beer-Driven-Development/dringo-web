import { userService } from "../_services";
import { router } from "../_helpers";
import jwt_decode from "jwt-decode";

const user = JSON.parse(localStorage.getItem("user"));
const token = JSON.parse(localStorage.getItem("token"));

const state = user
  ? { status: { loggedIn: true }, user, token }
  : { status: {}, user: null, token: "" };

const actions = {
  login({ commit }, { email, password }) {
    commit("loginRequest", { email });

    userService.login(email, password).then(
      (token) => {
        commit("loginSuccess", token);
        router.push("/rooms");
      },
      (error) => {
        commit("loginFailure", error);
      }
    );
  },
  logout({ commit }) {
    userService.logout();
    commit("logout");
  },
  register({ commit }, user) {
    commit("registerRequest", user);

    userService.register(user).then(
      (user) => {
        commit("registerSuccess", user);
        router.push("/login");
      },
      (error) => {
        commit("registerFailure", error);
      }
    );
  },
};

const mutations = {
  loginRequest(state) {
    state.status = { loggingIn: true };
  },
  loginSuccess(state, token) {
    state.status = { loggedIn: true };
    state.token = token;
    let decodedToken = jwt_decode(token);
    state.user = decodedToken.user;
  },
  loginFailure(state) {
    state.status = {};
    state.user = null;
    state.token = "";
  },
  logout(state) {
    state.status = {};
    state.user = null;
    state.token = "";
  },
  registerRequest(state) {
    state.status = { registering: true };
  },
  registerSuccess(state, token) {
    state.status = {};
    state.token = token;
  },
  registerFailure(state) {
    state.status = {};
    state.token = "";
  },
};

export const auth = {
  namespaced: true,
  state,
  actions,
  mutations,
};
