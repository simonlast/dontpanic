var express = require('express')
  , fs = require('fs');

var app = express();

var cache = {};

cache["home"] = fs.readFileSync("./public/index.html",['utf8']);

app.get('/', function(req, res){
  res.send(cache["home"]);
});

app.configure( function(){
  app.use(express.static(__dirname + '/public'));
  app.use(express.errorHandler());
});

app.listen(8888);

/*var everyone = nowjs.initialize(app);

everyone.now.distribute = function(r,g,b,rad,x,y){
  // this.now exposes caller's scope
	console.log(r);
  everyone.now.receive(r,g,b,rad,x,y);
};*/