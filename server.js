//=============================================================
// Dependencies
// ============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


//=============================================================
// Sets up the Express App
//=============================================================

var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static('app/public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


//=============================================================
//Routing
//=============================================================

require('./app/Routes/api-routes.js')(app); 
require('./app/Routes/html-routes.js')(app);


// =============================================================
// Starts the server to begin listening 
// =============================================================

app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
});