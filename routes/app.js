var express = require('express');
var router = express.Router();

router.get('/:userTitle?', function (req, res, next) {
    res.render('node', {title: req.params.userTitle ? req.params.userTitle : ''});
});

router.post('/', function (req, res, next) {
    var title = req.body.title;
    res.redirect('/' + title);
});

module.exports = router;
