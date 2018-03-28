var express = require('express');
var router = express.Router();

var Purchase = require('../models/purchase');

router.get('/', function (req, res, next) {
    Purchase.find()
      .exec(function(err, purchases) {
        if (err) {
          return res.status(500).json({
            title: 'An error occurred',
            error: err
          });
        }
        res.status(200).json({
          message: 'Success',
          purchases: purchases
        });
      });
})

router.post('/', function (req, res, next) {
    var purchase = new Purchase({
      store: req.body.store,
      date: req.body.date,
      pepsiAmountInLitres: req.body.pepsiAmountInLitres,
      pepsiPriceInPurchase: req.body.pepsiPriceInPurchase,
      monsterAmountInCans: req.body.monsterAmountInCans,
      monsterPricePerCan: req.body.monsterPricePerCan
    });
    purchase.save(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(201).json({
        message: 'Saved purchase',
        obj: result
      });
    });
});

router.delete('/:id', function(req, res, next) {
  Purchase.findById(req.params.id, function (err, purchase) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred in findById',
        error: err
      });
    }
    if (!purchase) {
      return res.status(500).json({
        title: 'No purchase found!',
        error: {message: 'Purchase not found'}
      });
    }
    purchase.remove(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Deleted purchase',
        obj: result
      });
    });
  });
});

module.exports = router;
