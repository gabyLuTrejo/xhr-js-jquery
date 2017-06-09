var express = require('express');
var app = express();
app.get("/", function(req, res){
   res.send("¡Hola!"); 
});

app.get("/gaby", function(req, res){
   res.send("¡Hola Gaby!"); 
});

app.listen(3000);