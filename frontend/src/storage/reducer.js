import { SET_DARK_MODE } from "./contants";

const initialState = {
    darkMode: false



}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DARK_MODE:
            return { ...state, darkMode: action.payload };
        default:
            return state;

    }
}