'use strict';
const mockDBCalls = require('../database/index.js');

const getListOfAgesOfUsersWithHandler = async (request, response) => {

    try {
        //get the value from the frontend
        const { itemToLookup } = request.params

        //Request the data
        const data = await mockDBCalls.getListOfAgesOfUsersWith(itemToLookup);

        if (data === null) {
            return response.status(500).json({
                message: null
            })
        }

        return response.status(200).json({
            data: data,
            message: 'ok'
        })

        
    } catch (error) {
        return response.status(500).json({
            message: 'Error server'
        })
    }
};

module.exports = (app) => {
    app.get('/users/age/:itemToLookup', getListOfAgesOfUsersWithHandler);
};