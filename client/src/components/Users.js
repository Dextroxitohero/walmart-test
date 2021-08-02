import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { startLoadingUsers } from '../actions/users'




export const Users = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startLoadingUsers())
    }, [dispatch])


    const { users } = useSelector(state => state.users)




    return (
        <div className='mt-5'>
            <h4>Users and their age</h4>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Age</th>
                        <th scope="col">Count</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            return (

                                <tr key={user.username}>
                                    <td>{user.username}</td>
                                    <td>{user.age}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
