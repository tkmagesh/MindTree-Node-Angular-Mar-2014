var fs = require("fs");

var cache = {};
function serveFile(filename,res, reqData){

	if (!!cache[filename] && !cache[filename].isDirty ){
		console.log(filename, "served from cache..");
		processResponse(res, cache[filename].data,reqData);
		
	} else {
		console.log(filename, "served from filesystem..");
		//console.log("filename =" , filename);
		cache[filename] = {
				isDirty : false,
				data : ''
			};
		fs.watch(filename).on("change",function(evt,fn){
			//console.log("fn = ", fn, "filename = ", filename);
			cache[filename].isDirty = true;
		});
		var stream = fs.createReadStream(filename,{encoding : "utf8"});
		
		//stream.pipe(res);
		
		var data = '';
		stream.on("data",function(dataChunk){
			data += dataChunk;
			//res.write(dataChunk);
		});
		stream.on("end",function(){
			cache[filename].data = data;
			processResponse(res, cache[filename].data,reqData);
			//res.end();
		});	
	}
	
}
function processResponse(res,html,data){
	console.log("data =",data);
	var reqData = data || { number1 : "", number2 : "", result : ""};
	res.write(html.replace("{number1}",reqData.number1).replace("{number2}",reqData.number2).replace("{result}",reqData.result));
	res.end();
}
module.exports = {
	serveFile : serveFile
};