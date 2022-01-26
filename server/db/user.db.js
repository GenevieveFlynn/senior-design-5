const { pool } = require('./db')

const {promisfy }= require('promisfy')

// GET queries 
const getWalletDB = async(userID) => {
    try {
        const query = 'SELECT walletaddr FROM ontheblock_db.wallets WHERE userID = ?'
        const result = await pool.query(query, [userID])

        return result[0]
    } catch (e) {
        console.log(e.message)
        next()
    } 
}

// POST queries  

const createUserDB = async(firstname, lastname, username, password, role) => {
    try {
        const query = 'INSERT INTO ontheblock_db.users (firstname, lastname, username, password, role) VALUES (?, ?, ?, ?, ?)';
        return await pool.query(query, [firstname, lastname, username, password, role])
    } catch(e) {
        console.log(e.message)
        next()
    }
}

const addUserWalletDB = async(userid, walletaddr) => {
    try {
        const query = 'INSERT INTO ontheblock_db.wallets (userID, walletaddr) VALUES (?, ?)';
        return await pool.query(query, [userid, walletaddr]);
    } catch(e) {
        console.log(e.message)
        next()
    }
};

module.exports = {
    getWalletDB,
    createUserDB,
    addUserWalletDB
};