import { types } from '../types/types'
const initialState = {
    items: [],
    itemActivo: null
}


export const itemsReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.itemsLoad:
            return {
                ...state,
                items: [...action.payload]
            }

        case types.itemActive:
            return {
                ...state,
                itemActivo: action.payload
            }

        default:
            return state
    }


}