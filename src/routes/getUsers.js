'use strict';
const mockDBCalls = require('../database/index.js');

const getUsersHandler = async (request, response) => {

    try {
        const data = await mockDBCalls.getUsers();
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
    app.get('/users', getUsersHandler);
};