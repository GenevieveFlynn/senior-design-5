const { getWallet, createUser, addUserWallet } = require('../services/user.service');

/* GET requests */

// get all wallets connected a user account
const getUserWallet = async (req, res, next) => {
    try {
        const wallets = await getWallet(req.params.userid);

        res.json({"wallets" : wallets})

        next()
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500)
    }
};

/* POST requests */

// create a new user to insert into the database
const postUser = async (req, res, next) => {
    body = req.body;

    try {
        // maybe lets return the id of the user created  
        const user = await createUser(body.firstname, body.lastname, body.username, body.password, body.role);
        res.sendStatus(201);   
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500) & next(error);
    }
};

// add a wallet connected to a specific user account 
const postWallet = async (req, res, next) => {
    try {
        // don't need to return anything 
        await addUserWallet(req.params.userid, req.params.walletaddr);
        res.sendStatus(201);
        
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500) & next(error);
    }
};

// export functions used
module.exports = {
    getUserWallet,
    postUser,
    postWallet
}