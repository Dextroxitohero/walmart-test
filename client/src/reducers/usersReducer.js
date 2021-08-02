import { types } from '../types/types'
const initialState = {
    users: [],
    userDemographic: []
}


export const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.usersLoad:
            return {
                ...state,
                users: [...action.payload]
            }

        case types.setDemographic:
            return {
                ...state,
                userDemographic: [...action.payload]
            }

        default:
            return state
    }


}