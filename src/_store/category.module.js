import axios from "axios";
import { authHeader } from "@/_helpers";

const state = {
  categories: [],
  pivots: [],
};
const actions = {
  fetchCategories({ commit }) {
    axios
      .get(`${process.env.VUE_APP_API_URL}/categories`, {
        headers: authHeader(),
      })
      .then((response) => commit("FETCH_CATEGORIES", response.data));
  },
  add({ commit }, payload) {
    axios
      .post(
        `${process.env.VUE_APP_API_URL}/rooms/${payload.roomId}/categories`,
        payload,
        {
          headers: authHeader(),
        }
      )
      .then((response) => commit("ADD", response.data));
  },
};

const mutations = {
  FETCH_CATEGORIES(state, categories) {
    categories ? (state.categories = categories) : (state.categories = []);
  },
  ADD(state, pivot) {
    state.pivots.push(pivot);
  },
};

export const category = {
  namespaced: true,
  state,
  actions,
  mutations,
};
