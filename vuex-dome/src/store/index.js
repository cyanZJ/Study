import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        counter:1000
    },
    mutations:{
        add(state){
            state.counter ++;
        },
        reduce(state){
            state.counter --;
        }
    },
    actions:{
        add({commit}){
            commit('add');
        },
        reduce({commit}){
            commit('reduce');
        }
    }
})
export default store