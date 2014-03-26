var http  = require("http")
	,fs   = require("fs")
	,url  = require("url")
	,querystring = require("querystring")
	,fileServer = require("./fileServer.js");
	

var server = http.createServer(function(req,res){
	var filename = "." + url.parse(req.url).pathname;
	if (filename === "./") filename = "./index.html";
	if (filename === "./favicon.ico") {
		res.end();
		return;
	}
	if (req.method === "GET"){
		var fileExists = fs.existsSync(filename);
		if (fileExists){
			fileServer.serveFile(filename,res);
		} else {
			res.statusCode = 404;
			res.end();
		}
	} else {
		processRequest(req,function(result){
			fileServer.serveFile(filename,res,result);
			//res.end();
		});
	}

});
server.listen(9090);
console.log("Server listening on port 9090!!!");
function processRequest(req,resultCallback){
	var data = '';
	req.on("data",function(dataChunk){
		data += dataChunk;
	});
	req.on("end",function(){
		var inputData = querystring.parse(data);
		var outputData = {
			number1 : parseInt(inputData.number1) ,
			number2 : parseInt(inputData.number2) ,
			result : parseInt(inputData.number2) + parseInt(inputData.number1)
		};
		resultCallback(outputData);
	});

}