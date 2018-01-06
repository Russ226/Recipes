var db  = require('./models/recipesdb.js');
var express = require("express");
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(require("./controllers/webPageRouter.js"));



app.listen(3000,function(){
  console.log("Started on PORT 3000");
});

