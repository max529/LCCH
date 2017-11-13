var express = require('express');
var router = express.Router();

var setSexe = require('../modules/setSexe');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/setSexe', function (req, res, next) {
  setSexe.getAll().then((list) => {
    res.render('setSexe', { title: 'express', people: list })
  })
})
router.post('/setSexe',function(req,res,next){
  setSexe.updateSexe(req.body).then(() => {
    res.send('');
  })
})

module.exports = router;
