import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "John",
    singleItem: {},
  },
  mutations: {
    changeSingleItem(state, value){
      state.singleItem = value;
    }
  },
  actions: {
    getJson(url){
      console.log(url);
      return fetch(url)
          .then(result => result.json())
          .catch(error => {
            this.$refs.error.setError(error);
          })
    },
    postJson(url, data) {
      return fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(result => result.json())
          .catch(error => {
            this.$refs.error.setError(error);
          });
    },
    putJson(url, data) {
      return fetch(url, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(result => result.json())
          .catch(error => {
            this.$refs.error.setError(error);
          });
    },
    deleteJson(url, data) {
      return fetch(url, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(result => result.json())
          .catch(error => {
            console.log(error);
          });
    },
  },
});


