var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Flat = mongoose.model('Flat', {title: String});

/* GET flats listing. */
router.get('/', function(req, res, next) {
    Flat.find(function(err, data) {
        if (err) {
            return next(err);
        }
        
        res.json(data);
    })
});

router.get('/new', function(req, res, next) {
    var title = req.query.title;
    
    if(!title) {
        res.status(403).json({message: 'Title missing'})
    }
    Flat.create({title: title}, function(err, data) {
        if (err) {
            return next(err);
        }
        
        res.json(data);
    })
});

module.exports = router;
