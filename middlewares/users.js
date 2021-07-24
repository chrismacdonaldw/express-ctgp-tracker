var users = require('../data/users.json');

/**
 * Imports the site users JSON file and passes it to all requests.
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
function usersMiddleware(req, res, next) {
    res.locals.userItems = users;
    next();
}

module.exports = {
    usersMiddleware: usersMiddleware
}