import {ADD_TO_FAFORITE, REMOVE_TO_FAVORITE} from "../actions/favorite";

const initialState = [];

const state = (state = initialState, action) => {
    const exist = state.indexOf(action.cityId);
    switch (action.type) {
        case ADD_TO_FAFORITE:
            if (exist === -1) {
                return [...state, action.cityId];
            }
            return state;
        case REMOVE_TO_FAVORITE:
            if (exist === -1) {
                return state;
            }
            state.splice(exist, 1);
            return [...state];
        default:
            return state
    }
};

export default state;