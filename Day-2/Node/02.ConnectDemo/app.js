var connect = require("connect"),
	http = require("http"),
	querystring = require("querystring");

var app = connect();
app.use(connect.static("./public"));
app.use(connect.bodyParser());
/*app.use(function(req,res,next){
	var rawData = '';
	req.on('data',function(dataChunk){
		rawData += dataChunk;
	});
	req.on('end',function(){
		var data = querystring.parse(rawData);
		req.incomingData = data;
		next();
	});
});*/
app.use(function(req,res,next){
	console.log("incoming data = ", req);
	res.end();
});
//app.use(connect.bodyParser());
app.listen(9090);
console.log("Server listening on port 9090");
