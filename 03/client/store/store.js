import Vuex from "vuex";

import mutations from "./mutations/mutations"
import actions from "./actions/actions.js"
import getters from "./getters/getters.js"
import defaultState from "./state/state.js"


export default () => {
    return new Vuex.Store({
        mutations,
        actions,
        getters,
        state : defaultState
    })
}
