var http  = require("http")
	,fs   = require("fs")
	,url  = require("url")
	,fileServer = require("./fileServer.js");
	

var server = http.createServer(function(req,res){
	var filename = "." + url.parse(req.url).pathname;
	if (filename === "./") filename = "./index.html";
	var fileExists = fs.existsSync(filename);
	if (fileExists){
		fileServer.serveFile(filename,res);
	} else {
		res.statusCode = 404;
		res.end();
	}
});


server.listen(9090);
console.log("Server listening on port 9090!!!");