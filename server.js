var express = require('express');
var app = express();

app.use(express.static(__dirname + "/node_modules"));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/controllers"));



app.listen(8000, function(err){
    if(err) throw err;
    console.log("Anguflix and chill - 8000");
})