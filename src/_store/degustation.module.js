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
};

const mutations = {
  SET_BEER(state, beer) {
    state.beer = beer;
  },
  SET_PIVOTS(state, pivots) {
    state.pivots = pivots;
  },
};

export const degustation = {
  namespaced: true,
  state,
  actions,
  mutations,
};
