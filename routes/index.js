var express = require('express');
var http = require('http');
var request = require('request');
var router = express.Router();


var BASE_URL = "developer-api.nest.com";
var PIN_CODE = "KN2JFH6B";
var COLLECTION_NAME = "nest_data";
var LIGHT_COLLECTION_NAME = "light_data";
var ACCESS_TOKEN = "c.CkIEtPt2WhY7F5FAOC16CesXtDIGkhBYJUdbJo1IYRUptBuSOphqBV4Y3TCe0b7Q2nZhLcetFXzul6dnCCoQn1AgaQEnZZx7hWRMiGHkoI2ICByBKRtdM9FfHfpjcmyKlVrj63QGkYq66gLZ";
var nest_path = "/?auth=" + ACCESS_TOKEN;
var nest_api = require('nest-api');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login',function(req, res, next) {
});

router.get('/hello',function(req,res,next){
  console.log('Hello world');
});
// router.get('/allThermo', function(req,res){
//     var nestAPI = new NestApi('sophia2901@gmail.com','')
// });

// router.get('/test',function(req,res,next){
//   var options = {
//     port     : 3000,
//     host     : 'localhost',
//     method   : 'GET',
//     path     : '/hello'
//   }
//   req = http.request(options);
// }

router.get('/test',function(req,res,next){
  request('http://localhost:3000/hello', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log("successful") // Print the google web page.
    }
  })
});

module.exports = router;
