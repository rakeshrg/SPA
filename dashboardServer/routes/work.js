var express = require('express');
var router  = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send({
        works: [{
            id: '001',
            title: 'Journey in Central Park',
            author: 'haziqhalimy',
            like: '12,774 likes',
            comment: '174 comments',
            image: 'assets/images/src/work/1.jpg'
        }, {
            id: '002',
            title: 'Found GoPro in the Ocean',
            author: 'naddiafeehily',
            like: '236,238 likes',
            comment: '59 comments',
            image: 'assets/images/src/work/2.jpg'
        }, {
            id: '003',
            title: 'Weekends Are For Shopping',
            author: 'mirna73',
            like: '25,327 likes',
            comment: '730 comments',
            image: 'assets/images/src/work/3.jpg'
        }, {
            id: '004',
            title: 'Hard Feeling',
            author: 'stavros_gr',
            like: '22,669 likes',
            comment: '16 comments',
            image: 'assets/images/src/work/4.jpg'
        }, {
            id: '005',
            title: 'Bring back old comics',
            author: 'saimir91',
            like: '25,327 likes',
            comment: '9908 comments',
            image: 'assets/images/src/work/5.jpg'
        }, {
            id: '006',
            title: 'Awesome place in Turkey',
            author: 'malakach',
            like: '972,035 likes',
            comment: '453 comments',
            image: 'assets/images/src/work/6.jpg'
        }, {
            id: '007',
            title: 'Shot of the moment',
            author: 'nutritious',
            like: '377,825 likes',
            comment: '103 comments',
            image: 'assets/images/src/work/7.jpg'
        }, {
            id: '008',
            title: 'In Memory of Lapane',
            author: 'ferandino88',
            like: '152,890 likes',
            comment: '68 comments',
            image: 'assets/images/src/work/8.jpg'
        }, {
            id: '009',
            title: 'The Waiting Game',
            author: 'dsi64',
            like: '507,006 likes',
            comment: '235 comments',
            image: 'assets/images/src/work/9.jpg'
        }, {
            id: '010',
            title: 'The Ballad of Poisonberry Pete',
            author: 'zwhkaralh',
            like: '6,712 likes',
            comment: '140 comments',
            image: 'assets/images/src/work/10.jpg'
        }]
    });
});
router.delete('/:id', function(req, res, next) {
    res.send({
        status: 'success'
    })
});
module.exports = router;
