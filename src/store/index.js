import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [],
    loading: false
  },
  getters: {
    List: stateParam => stateParam.list,
    Loading: stateParam => stateParam.loading
  },
  actions: {
    ListOfTypes: context => {
      context.commit("Loading", true);
      context.commit("List", [
        { id: 1, Address: "Tembisa" },
        { id: 2, Address: "Olifantsfontein" },
        { id: 3, Address: "Midrand" },
        { id: 4, Address: "Pretoria" },
        { id: 5, Address: "Kempton Park" },
        { id: 6, Address: "Johannesburg" },
        { id: 7, Address: "Soweto" },
        { id: 8, Address: "Polokwane" },
        { id: 9, Address: "Menlyn" },
        { id: 10, Address: "Centurion" },
        { id: 11, Address: "Sandton" },
        { id: 12, Address: "Edenvale" }
      ]);
      context.commit("Loading", false);
    }
  },
  mutations: {
    List: (stateParam, payload) => {
      const localState = stateParam;
      localState.list = payload;
    },
    Loading: (stateParam, payload) => {
      const localState = stateParam;
      localState.loading = payload;
    }
  }
});
