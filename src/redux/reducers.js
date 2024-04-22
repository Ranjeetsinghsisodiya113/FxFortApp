
const initailState = [];

import { ATTEMPT_RIGHT, ADD_POST, EDIT_POST, DELETE_POST,Add_ORDER } from "./constants"
export const reducers = (state = initailState, action) => {

    switch (action.type) {
        case Add_ORDER:
            var array = [
                ...state,
                action.data
            ]
            return array;

       
        default:
            return state;
    }

}