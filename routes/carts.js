var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Cart = require('../models/cart');

router.get('/', function(req, res, next) {
    Cart.find()
        .exec(function(err, docs) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: docs
            });
        });
});

module.exports = router;
