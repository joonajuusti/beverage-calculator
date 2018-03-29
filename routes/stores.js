var express = require('express');
var router = express.Router();

var Store = require('../models/store');

router.get('/', function (req, res, next) {
    Store.find()
      .exec(function(err, stores) {
        if (err) {
          return res.status(500).json({
            title: 'An error occurred',
            error: err
          });
        }
        res.status(200).json({
          message: 'Success',
          stores: stores
        });
      });
});

router.post('/', function (req, res, next) {
  var store = new Store({
    name: req.body.name
  });
    store.save(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(201).json({
        message: 'Saved store',
        obj: result
      });
    });
});

module.exports = router;
