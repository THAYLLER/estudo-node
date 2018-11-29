var express = require('express')
var router = express.Router();
var Usuario = require('../model/usuario')

router.post('/', function (req, res, next) {
   
    Usuario.create(req.body, function (err, post){
        
        if (err) {
            return next(err); // deu erro
        }
        res.json(post);
    })
    
  })

router.get('/', function (req, res, next) {
    Usuario.find(function (err, post){
        
        if (err) {
            return next(err); // deu erro
        }
        res.json(post);
    })
})
router.get('/:id', function (req, res, next) {
    Usuario.find(function (err, post){
        
        if (err) {
            return next(err); // deu erro
        }
        res.json(post);
    })
})
router.put('/:id', function (req, res, next) {
    Usuario.findByIdAndUpdate(req.params.id, req.body, function (err, post){
        if (err) {
            return next(err);
        }
        res.json(post)
    })
})

router.delete('/:id', function (req, res, next) {
    Usuario.findByIdAndRemove(req.params.id, req.body, function (err, post){
        if (err) {
            return next(err);
        }
        res.json(post)
    })
})

// exportando router
module.exports = router;
