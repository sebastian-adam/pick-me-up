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

router.get('/most-voted', function(req,res,next){
  Cart.find().sort({"votes": -1}).limit(1).exec(function(err, doc){
    if(err){
      return res.status(500).json({
        title: 'An error occured. Check Database',
        error: err
      });
    }
    res.status(200).json(doc[0]);
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

router.patch('/', function(req, res, next) {
  var cart_id = req.body._id;
  Cart.findOneAndUpdate({
    _id: cart_id
  },
  {
    $inc: {votes: 1}
  }).exec(function (err, docs) {
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

router.patch('/reset', function(req, res, next) {
  Cart.update({}, {votes: 0}, {multi: true}, function(err, num) {
    if(err){
      return res.status(400).json({message: req.body});
    }
    return res.status(200).json({message: num});
  });
});


module.exports = router;
