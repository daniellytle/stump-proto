
/* TimeStack - Node Server - Daniel Wilson 2015 */

var express     = require('express');
var app         = express();
var passport    = require('passport');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var port        = process.env.PORT || 8080;
var configDB    = require('./config/database.js');
var session     = require('express-session');
var cookieParse = require('cookie-parser');

// DB setup
mongoose.connect(configDB.url);
// Session Parsing
app.use(cookieParse('dothething'));
// Express Session
app.use(session({ secret : 'dothething' })); // session secret
app.use(passport.initialize());
app.use(passport.session());

// Initial setup
app.use(bodyParser());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// Config Passport
require('./config/passport')(passport);
// Load API Routes
require('./app/js/routes.js')(app, passport);

// Expose static assets
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/app/client');
// Config Jade
app.set('view engine', 'jade');

app.listen(port);
console.log('listening on port ' + port);
// Let the games begin
