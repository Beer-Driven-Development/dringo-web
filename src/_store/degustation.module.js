import axios from "axios";
import { authHeader } from "@/_helpers";

const state = {
  beer: [],
  pivots: [],
};
const actions = {
  setBeer({ commit }, beer) {
    commit("SET_BEER", beer);
  },
  setPivots({ commit }, pivots) {
    commit("SET_PIVOTS", pivots);
  },
  rateBeer({ commit }, payload) {
    axios
      .post(
        `${process.env.VUE_APP_API_URL}/rooms/${payload.roomId}/vote`,
        payload,
        {
          headers: authHeader(),
        }
      )
      .then((response) => commit("RATE_BEER", response.data));
  },
};

const mutations = {
  SET_BEER(state, beer) {
    state.beer = beer;
  },
  SET_PIVOTS(state, pivots) {
    state.pivots = pivots;
  },

  RATE_BEER() {
    console.log("xDD");
  },
};

export const degustation = {
  namespaced: true,
  state,
  actions,
  mutations,
};
