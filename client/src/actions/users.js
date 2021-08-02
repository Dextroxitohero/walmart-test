import axios from 'axios'
import { types } from '../types/types'
const baseUrl = process.env.REACT_APP_API_URL;


export const startLoadingUsers = () => {
    return async (dispatch) => {
        const url = `${baseUrl}users`

        const res = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
            }
        })

        if(res.data.message === 'ok'){
            dispatch(setUsers(res.data.data))
        }else{
            console.log(res.data.message)
        }


    }
}


export const setUsers = (users) => ({
    type: types.usersLoad,
    payload: users
});

