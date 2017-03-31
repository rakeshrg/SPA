var express = require('express');
var router  = express.Router();
/* GET users listing. */
router.post('/', function(req, res, next) {
    if ((req.body.userName === 'minh' && req.body.password === 'faith') ||
        (req.body.userName === 'darth' && req.body.password === 'jedi')) {
        res.send({
            authentication: 'success'
        });
    } else {
        res.status(403).send({
            authentication: 'fail'
        });
    }
});
module.exports = router;
