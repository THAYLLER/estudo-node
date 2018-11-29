var express = require('express')
var router = express.Router();
var Labirinto = require('../model/labirinto')

router.post('/', function (req, res, next) {
   
    Labirinto.create(req.body, function (err, post){
        
        if (err) {
            return next(err); // deu erro
        }
        res.json(post);
    })
    
  })

router.get('/', function (req, res, next) {
    Labirinto.find(function (err, post){
        
        if (err) {
            return next(err); // deu erro
        }
        res.json(post);
    })
})
router.get('/:id', function (req, res, next) {
    Labirinto.find(function (err, post){
        
        if (err) {
            return next(err); // deu erro
        }
        res.json(post);
    })
})
router.put('/:id', function (req, res, next) {
    Labirinto.findByIdAndUpdate(req.params.id, req.body, function (err, post){
        if (err) {
            return next(err);
        }
        res.json(post)
    })
})

router.delete('/:id', function (req, res, next) {
    Labirinto.findByIdAndRemove(req.params.id, req.body, function (err, post){
        if (err) {
            return next(err);
        }
        res.json(post)
    })
})

// exportando router
module.exports = router;
