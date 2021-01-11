import axios from "axios";
import { authHeader } from "@/_helpers";

const state = {
  beers: [],
  currentBeers: [],
};
const actions = {
  setBeers({ commit }, beers) {
    commit("SET_BEERS", beers);
  },

  add({ commit }, payload) {
    axios
      .post(
        `${process.env.VUE_APP_API_URL}/rooms/${payload.roomId}/beers`,
        payload,
        {
          headers: authHeader(),
        }
      )
      .then((response) => commit("ADD", response.data));
  },

  delete({ commit }, payload) {
    axios
      .delete(
        `${process.env.VUE_APP_API_URL}/rooms/${payload.roomId}/beers/${payload.beerId}`,
        {
          headers: authHeader(),
        }
      )
      .then(() => commit("DELETE", payload.beerId));
  },
};

const mutations = {
  SET_BEERS(state, beers) {
    state.currentBeers = beers;
  },
  ADD(state, beer) {
    state.beers.push(beer);
  },
  DELETE(state, beerId) {
    state.beers = state.beers.filter((beer) => beer.id != beerId);
  },
};

export const beer = {
  namespaced: true,
  state,
  actions,
  mutations,
};
