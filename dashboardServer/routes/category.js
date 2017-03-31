var express = require('express');
var router  = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send({
        categories: [{
            value: 'tec',
            title: 'Technical'
        }, {
            value: 'soc',
            title: 'Social'
        }, {
            value: 'pay',
            title: 'Payment'
        }, {
            value: 'inf',
            title: 'Information'
        }, {
            value: 'opp',
            title: 'Opportunity'
        }]
    });
});
module.exports = router;
