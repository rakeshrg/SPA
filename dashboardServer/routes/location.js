var express = require('express');
var router  = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send({
        locations: [{
            value: 'ala',
            title: 'Alabama'
        }, {
            value: 'alk',
            title: 'Alaska'
        }, {
            value: 'arz',
            title: 'Arizona'
        }, {
            value: 'ark',
            title: 'Arkansas'
        }, {
            value: 'cal',
            title: 'California'
        }, {
            value: 'col',
            title: 'Colorado'
        }, {
            value: 'con',
            title: 'Connecticut'
        }, {
            value: 'del',
            title: 'Delaware'
        }, {
            value: 'flo',
            title: 'Florida'
        }, {
            value: 'geo',
            title: 'Georgia'
        }, {
            value: 'haw',
            title: 'Hawaii'
        }, {
            value: 'ida',
            title: 'Idaho'
        }, {
            value: 'ill',
            title: 'Illinois'
        }, {
            value: 'ind',
            title: 'Indiana'
        }, {
            value: 'iow',
            title: 'Iowa'
        }, {
            value: 'kan',
            title: 'Kansas'
        }, {
            value: 'ken',
            title: 'Kentucky'
        }, {
            value: 'lou',
            title: 'Louisiana'
        }, {
            value: 'mai',
            title: 'Maine'
        }, {
            value: 'mar',
            title: 'Maryland'
        }, {
            value: 'mas',
            title: 'Massachusetts'
        }, {
            value: 'mic',
            title: 'Michigan'
        }, {
            value: 'min',
            title: 'Minnesota'
        }, {
            value: 'mis',
            title: 'Mississippi'
        }, {
            value: 'mso',
            title: 'Missouri'
        }, {
            value: 'mon',
            title: 'Montana'
        }, {
            value: 'neb',
            title: 'Nebraska'
        }, {
            value: 'nev',
            title: 'Nevada'
        }, {
            value: 'nhs',
            title: 'New Hampshire'
        }, {
            value: 'njs',
            title: 'New Jersey'
        }, {
            value: 'nmx',
            title: 'New Mexico'
        }, {
            value: 'nyc',
            title: 'New York'
        }, {
            value: 'ncl',
            title: 'North Carolina'
        }, {
            value: 'ndk',
            title: 'North Dakota'
        }, {
            value: 'ohi',
            title: 'Ohio'
        }, {
            value: 'okl',
            title: 'Oklahoma'
        }, {
            value: 'ore',
            title: 'Oregon'
        }, {
            value: 'pen',
            title: 'Pennsylvania'
        }, {
            value: 'rho',
            title: 'Rhode Island'
        }, {
            value: 'scl',
            title: 'South Carolina'
        }, {
            value: 'sdk',
            title: 'South Dakota'
        }, {
            value: 'ten',
            title: 'Tennessee'
        }, {
            value: 'tex',
            title: 'Texas'
        }, {
            value: 'uta',
            title: 'Utah'
        }, {
            value: 'ver',
            title: 'Vermont'
        }, {
            value: 'vir',
            title: 'Virginia'
        }, {
            value: 'was',
            title: 'Washington'
        }, {
            value: 'wes',
            title: 'West Virginia'
        }, {
            value: 'wis',
            title: 'Wisconsin'
        }, {
            value: 'wyo',
            title: 'Wyoming'
        }]
    });
});
module.exports = router;
