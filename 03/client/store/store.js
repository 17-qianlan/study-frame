import Vuex from "vuex";

import mutations from "./mutations/mutations"
import actions from "./actions/actions.js"
import getters from "./getters/getters.js"
import defaultState from "./state/state.js"


export default () => {
    const store = new Vuex.Store({
        mutations,
        actions,
        getters,
        state : defaultState,
        /*modules: {
            a: {
                namespaced: true,
                state: {
                    text: 1
                },
                mutations: {
                    updateText(state,text){
                        state.text = text;
                    }
                },
                getters: {
                    textPlus(state,getters,rootState){
                        // console.log("这个是getters",getters);
                        // console.log("这个是rootState",rootState);
                        return state.text = 200
                    }
                },
                actions: {
                    add({state,commit,rootState}){
                        commit("a/updateText",5000,{root: true});
                    }
                }
            },
            b: {
                state: {
                    text: 2
                }
            }
        }*/
    });
    if(module.hot){
        module.hot.accept([
            "./state/state.js",
            "./mutations/mutations.js",
            "./actions/actions.js",
            "./getters/getters.js"
        ],() => {
            const newState = require("./state/state.js");
            const newMutations = require("./mutations/mutations");
            const newActions = require("./actions/actions");
            const newGetters = require("./getters/getters");

            store.hotUpdate({
                state: newState,
                mutations: newMutations,
                actions: newActions,
                getters: newGetters
            })
        })
    }
    return store;
}
