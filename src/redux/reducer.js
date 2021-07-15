// import { combineReducers } from 'redux'

const initialState = {
    boolMenu:false
}

function rootReducer (state = initialState,action) {
    switch (action.type) {
        case "TOGGLE":
            return {
                boolMenu: !state.boolMenu
            };
        // case "TOGGLE_LANG":
        //     if (state.lang==="FR"){return{lang: "GB"}}
        //     else {return{lang:"FR"}}
        default:
            return state;
    }
};

export default rootReducer;