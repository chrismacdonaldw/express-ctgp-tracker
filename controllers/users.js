var express = require('express'),
    users = require('../data/users.json'),
    rest = require('../helpers/REST'),
    strings = require('../helpers/strings'),
    router = express.Router();

/* GET specific user. */
router.get('/:user', function(req, res, next) {
    if (!req.params.user in users) res.status(403).render();

    const options = {
        host: 'tt.chadsoft.co.uk',
        port: 443,
        path: users[req.params.user].uri.replace('.html', '.json'),
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    rest.getJSON(options, (statusCode, result) => {
        stars = result.stars;

        userTrackList = result.ghosts.filter(ghost => ghost.playersFastest);

        res.render('table', {
            'bronze': stars['bronze'],
            'silver': stars['silver'],
            'gold': stars['gold'],
            'user': req.params.user,
            'userProfile': users[req.params.user].uri,
            'userTrackList': userTrackList,
        });
    });
});

module.exports = router;