// business layer abstraction between DB and Calls 

const { createUserDB }  = require("../db/user.db");

const createUser = async(firstname, lastname, username, password, role) => {
    try {
        return await createUserDB(firstname, lastname, username, password, role);
    } catch(e) {
        throw new Error(e.message);
    }
};

module.exports = {
    createUser
};