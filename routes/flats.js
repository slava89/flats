var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Flat = mongoose.model('Flat', {title: String});

/* GET flats listing. */
router.get('/', function(req, res, next) {
    Flat.find((err, data) => {
        if (err) {
            return next(err);
        }
        
        res.json(data);
    })
});

router.post('/', function(req, res, next) {
    const title = req.query.title;
    
    if(!title) {
        res.status(403).json({message: 'Title missing'})
    }
    Flat.create({title: title}, (err, data) => {
        if (err) {
            return next(err);
        }
        
        res.json(data);
    })
});

module.exports = router;
