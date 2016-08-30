var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var User = require('../models/user');

router.post('/', function(req, res, next) {
  var user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  user.save(function(err, result) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    res.status(200).json({
      message: 'Success',
      obj: result
    });
  });
});

router.post('/signin', function(req, res, next) {
  User.findOne({email: req.body.email}, function(err, doc) {
    if (err) {
      return res.status(500).json({
        title: "An error occurred",
        error: err
      });
    }
    if (!doc) {
      return res.status(500).json({
        title: "No user found",
        error: {message: "User could not be found"}
      });
    }
    if (req.body.password !== doc.password) {
      return res.status(401).json({
        title: "Could not sign you in",
        error: {message: 'Invalid password'}
      });
    }
    var token = jwt.sign({user: doc}, 'secret', {expiresIn: 7200});
    res.status(200).json({
      message: 'Success',
      token: token,
      userEmail: doc.email,
      userName: doc.name,
      userId: doc._id
    });

  });
})

module.exports = router;
