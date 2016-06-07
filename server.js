// server.js

// set up ========================
var express  = require('express');
var app      = express();                               // create our app w/ express
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var env = process.env; //OPENSHIFT Enviroments
// configuration =================


var enviromentFolder = env.NODE_ENV === 'development' ? 'app' : 'dist';

app.use(express.static(__dirname + '/app/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// routes ======================================================================

// api ---------------------------------------------------------------------
app.get('/rest/people', function(req, res) {

    var name = ["Adam", "Abe", "Maria", "Rose", "Mario", "Luigi"];
    var surname = ["Lincoln", "Franklin", "Jackson", "Miyazaki", "M'bebe"];
    var people = []

    for (var i = 0; i < 10; i++) {
      people.push({ 
        'id' : i,
        'name' : name[Math.floor((Math.random() * 5) + 1)] + " " + surname[Math.floor((Math.random() * 5) + 1)],
        'disclosableInfo' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini m veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      })  
    }

    res.json(people);
   
});

// application -------------------------------------------------------------
//app.get('*', function(req, res) {
//    res.sendfile('./'+enviromentFolder+'/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
//});

// listen (start app with node server.js) ======================================
app.listen(8090, 'localhost');
console.log("App listening on port 8090");