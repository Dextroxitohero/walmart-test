'use strict';
const _ = require('lodash');
const db = require('./db.js');


// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataAccessMethod());
        }, 500);
    });
};



// MOCK DB CALLS
//----------------
const getUsers = () => {
    const dataAccessMethod = () => _.map(db.usersById, userInfo => userInfo)
    return mockDBCall(dataAccessMethod);
};

const getItems = () => {
    const dataAccessMethod = () => {
        const itemsAll = []
        const items = _.map(db.itemsOfUserByUsername, userInfo => userInfo)

        for (let item in items) {
            items[item].map(item => {
                itemsAll.push(item)
            })
        }

        //Filter all ages to get a list without repeating ages
        const itemsFilter = itemsAll.reduce((acc, item) => {
            if (!acc.includes(item)) {
                acc.push(item);
            }
            return acc;
        }, [])

        return itemsFilter
    }
    return mockDBCall(dataAccessMethod);
};


const getListOfAgesOfUsersWith = (item) => {

    const dataAccessMethod = async () => {

        //We request the data
        const users = await getUsers()
        //Requested all items by user
        const itemsUsers = db.itemsOfUserByUsername

        const ages = []
        const demographic = []

        //Iterate all users compared to user preferences to get the list of ages
        for (let userByItem in itemsUsers) {
            itemsUsers[userByItem].map(product => {
                if (product === item) {
                    users.map(user => {
                        if (user.username === userByItem) {
                            ages.push(user.age)
                        }
                    })
                }
            })
        }
        //Filter all ages to get a list without repeating ages
        const ageFilter = ages.reduce((acc, item) => {
            if (!acc.includes(item)) {
                acc.push(item);
            }
            return acc;
        }, [])

        //Compare the list of ages without repetitions against the list of all the resulting ages to count how many ages are repeated and create the object with the data from the demographic table
        for (let i = 0; i < ageFilter.length; i++) {
            let counter = 0;
            for (let x = 0; x < ages.length; x++) {
                if (ageFilter[i] === ages[x]) {
                    counter += 1
                }
            }

            demographic.push({
                age: ages[i],
                counter: counter
            })

        }

        return demographic
    }


    return mockDBCall(dataAccessMethod);


};

module.exports = {
    getUsers,
    getListOfAgesOfUsersWith,
    getItems
};