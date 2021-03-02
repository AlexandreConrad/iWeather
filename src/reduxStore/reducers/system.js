import {TURN_LIGHT} from "../actions/system";

const initialState = {
    light: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TURN_LIGHT:
            return {...state, light: action.light};
        default:
            return state
    }
};

export default reducer