// controller to call the services which are the 'business logic'

const { post } = require('../routes')
const { userService } = require('../services')

// don't know what these variables are for 

const { createUser } = userService

const postUser = async (req, res, next) => {
    const {user, content} = req.content

    try {
        await createUser(user, content) 

        res.sendStatus(201)

        next()
    } catch(e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
    }
}

module.exports(
    postUser
)