const { conn } = require('./db')

// contains the queries to the database 

const createUserDB = async(firstname, lastname, username, password, role) => {

    const query = 'INSERT INTO ontheblock_db.users (firstname, lastname, username, password, role) VALUES (?, ?, ?, ?, ?)';

    try {
        return await conn.execute(query, [firstname, lastname, username, password, role]);
    } catch(e) {
        throw new Error(e.message);
    }
};

module.exports = {
    createUserDB
};