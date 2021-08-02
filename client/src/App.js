import React from 'react'
import { Provider } from 'react-redux'

import { store } from './store/store'

import { Users } from './components/Users'
import { Demographic } from './components/Demographic'

export const App = () => {
    return (
        <Provider store={store}>
            <h1>All Users</h1>
            <hr />
            <Users />
            <Demographic />
        </Provider>
    )
}