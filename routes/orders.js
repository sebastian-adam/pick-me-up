var express = require('express');
var router = express.Router();
var Order = require('../models/order');

router.get('/', function(req, res, next){
  Order.find().populate('user_id item_id').exec(function(err, doc){
    if(err){
      res.status(400).json({
          message: "bad"
      });
    }
    res.status(200).json({
      message: "good",
      obj: doc
    });
  }
  );
});

router.post('/', function(req, res, next){

  var order = new Order({user_id: req.body.user_id, item_id: req.body.item_id});
  order.save(function(err, result){
    if(err){
      return res.status(400).json({
        error: err
      });
    }
    res.status(200).json({
      result: result
    });
  });
});

module.exports = router;
