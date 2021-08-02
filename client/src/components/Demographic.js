import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { startLoadingItems, startLoadDemographic, setItemActivo } from '../actions/items'


export const Demographic = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startLoadingItems())
    }, [dispatch])


    const { items } = useSelector(state => state.items)
    const { itemActivo } = useSelector(state => state.items)
    const { userDemographic } = useSelector(state => state.users)



    const handleChangeSelectItem = (e) => {
        e.preventDefault()
        if (e.target.value !== '') {
            dispatch(startLoadDemographic(e.target.value))
        } else {
            dispatch(setItemActivo(null))
        }
    }


    return (
        <div className='mt-5'>
            <h4 className='mb-5'>Age Demographic of users With { itemActivo }</h4>

            <select
                className="custom-select mb-5"
                onChange={handleChangeSelectItem}
            >
                <option value='' selected>Item</option>

                {
                    items.map(item => {
                        return (
                            <option value={item} key={item}>{item}</option>
                        )
                    })
                }
            </select>


            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Age</th>
                        <th scope="col">Count</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itemActivo === null
                            ? <tr><td colspan="2" className='text-center'>Select item </td></tr>
                            : userDemographic.map(info => 
                                
                                    <tr key={info.age}>
                                        <td>{info.age}</td>
                                        <td>{info.counter}</td>
                                    </tr>
                                )
                            

                    }

                </tbody>
            </table>
        </div>
    )
}
