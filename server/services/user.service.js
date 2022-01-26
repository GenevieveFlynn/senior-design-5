// business layer abstraction between DB and client calls 

const { createUserDB, addUserWalletDB }  = require("../db/user.db");

const createUser = async(firstname, lastname, username, password, role) => {
    try {
        return await createUserDB(firstname, lastname, username, password, role);
    } catch(e) {
        throw new Error(e.message);
    }
};

const addUserWallet = async(userid, walletaddr) => {
    try {
        return await addUserWalletDB(userid, walletaddr);
    } catch(e) {
        throw new Error(e.message);
    }
};

module.exports = {
    createUser,
    addUserWallet
};