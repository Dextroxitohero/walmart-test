import axios from 'axios'
import { types } from '../types/types'
const baseUrl = process.env.REACT_APP_API_URL;


export const startLoadingItems = () => {
    return async (dispatch) => {
        const url = `${baseUrl}items`

        const res = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
            }
        })

        if(res.data.message === 'ok'){
            dispatch(setItems(res.data.data))
        }else{
            console.log(res.data.message)
        }


    }
}

export const setItems = (items) => ({
    type: types.itemsLoad,
    payload: items
});


export const startLoadDemographic = (item) => {
    return async (dispatch) => {
        const url = `${baseUrl}users/age/${item}`

        const res = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
            }
        })

        if(res.data.message === 'ok'){
            dispatch(setItemActivo(item))
            dispatch(setUserDemographic(res.data.data))
        }else{
            console.log(res.data.message)
        }


    }
}

export const setItemActivo = (item) =>({
    type: types.itemActive,
    payload: item
})

export const setUserDemographic = (items) => ({
    type: types.setDemographic,
    payload: items
});
