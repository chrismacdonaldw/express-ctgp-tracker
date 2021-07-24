var config = require('../data/config.json');

/**
 * Imports the site config JSON file and passes it to all requests.
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
function configMiddleware(req, res, next) {
    res.locals.config = config;
    next();
}

module.exports = {
    configMiddleware: configMiddleware
}