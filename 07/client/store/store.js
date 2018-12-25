import Vue from 'vue';
import Vuex from 'vuex';

import defaultState from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export default () => {
    return new Vuex.Store({
        state: defaultState,
        mutations,
        actions,
        getters
    });
};
