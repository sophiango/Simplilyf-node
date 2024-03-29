var express = require('express');
var router = express.Router();
var app = express();
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('https');
var nest = require('unofficial-nest-api');
var username = 'sophia2901@gmail.com';
var password = 'test@CMPE295';

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: 'nest philip',
    resave: true,
    saveUninitialized: true
}));

/*
POST /thermo/addNew
DELETE /thermo/{thermo_id}
GET /thermo/{thermo_id}
POST /thermo/{thermo_id}?updated_temp=
GET /thermo/all
POST /thermo/all?updated_temp=
*/

router.get('/addNew', function(req,res){
  nest.login(username, password, function (err, data) {
    if (err) {
        console.log(err.message);
        process.exit(1);
        return;
    }
  });
});


router.post('/thermo/:thermo_id', function(req,res){
  var mySesn = req.session.MyID;
  var thermo_id = req.params.thermo_id;
  var updated_temp = req.body.updated_temp;
  var
  nest.login(username, password, function (err, data) {
    if (err) {
        console.log(err.message);
        process.exit(1);
        return;
    }
    nest.setTemperature(thermo_id,updated_temp);
    });
  });
});

router.get('/all',function(req,res){
  nest.fetchStatus(function (data) {
      for (var deviceId in data.device) {
          if (data.device.hasOwnProperty(deviceId)) {
              var device = data.shared[deviceId];
              console.log('deviceid: ' + deviceId);
          }
      }
  });
});

// router.get('/allThermo', function(req,res){
    // http.request(options, function(res) {
    //   console.log('STATUS: ' + res.statusCode);
    //   console.log('HEADERS: ' + JSON.stringify(res.headers));
    //   res.setEncoding('utf8');
    //   res.on('data', function (chunk) {
    //     console.log('BODY: ' + chunk);
    //   });
    // }).end();
// });

module.exports = router;
