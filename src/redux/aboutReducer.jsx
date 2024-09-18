import { types } from "./types"


const initialState = {
    aboutTitle: 'old title'
}


export default function aboutReducer(state = initialState, action){
    if(action.type === types.CHANGE_ABOUT_TITLE){
           return {...state, aboutTitle: 'New about title'}
    }
    return state;
}