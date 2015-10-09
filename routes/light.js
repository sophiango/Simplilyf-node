var express = require('express');
var router = express.Router();
var app = express();
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('https');
var Hue = require('philips-hue-api');
var username = 'newdeveloper'

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

router.get('/getlight', function(req,res){
    hue = Hue('http://localhost:8000/api/newdeveloper');
    // hue = Hue('http://192.168.x.x/api/your_username');
    hue.lights().list(function(error, lights){
    	console.log(lights);
    });
  });  
module.exports = router;


