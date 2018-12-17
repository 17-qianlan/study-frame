import Vuex from 'vuex';

import defaultState from './state/state';
import actions from './actions/actions';
import mutations from './mutations/mutations';
import getters from './getters/getters';

export default () => {
    return new Vuex.Store({
        state: defaultState,
        actions,
        mutations,
        getters
    });
};
