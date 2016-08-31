var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var ObjectId = require('mongoose').Types.ObjectId;

var Cart = require('../models/cart');
var MenuItem = require('../models/menu-items');

var ObjectId = (require('mongoose').Types.ObjectId);


router.get('/menu-items', function(req, res, next) {
  var cart_id = req.query.cart_id;
  MenuItem.find({"cart_id": cart_id })
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
