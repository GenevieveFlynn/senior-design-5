const { createUser } = require('../services/user.service');

// create a new user to insert into the database
const postUser = async (req, res, next) => {
    body = req.body;

    try {
        const user = await createUser(body.firstname, body.lastname, body.username, body.password, body.role);
        return res.status(201).json({"sucess": "i am genius"});
        
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500) & next(error);
        next();
    }
};

// export functions used
module.exports = {
    postUser
}


// const getUser = async (req, res, next) => {

//     // req = http request
//     // req.body.email (parameters)

//     try {

//         // wait for content response to forward 

//         // req.something

//         const something = await userService() 

//         res.sendStatus(201)

//         res.json()

//         // res is what is the response body so set it to json res.json({status: successful})

//         next()
//     } catch(e) {
//         console.log(e.message)
//         res.sendStatus(500) && next(error)
//         next()
//     }
// }