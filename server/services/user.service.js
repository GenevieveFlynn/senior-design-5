const { userDb } = require('../db')

const createUser = async(user, content) => {
    try {
        return await userdb(user, content)
    } catch(e) {
        throw new Error(e.message)
    }
}

module.exports = {
    createUser
}