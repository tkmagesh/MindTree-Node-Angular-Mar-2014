var fs = require("fs");

var cache = {};
function serveFile(filename,res){
	if (!!cache[filename] && !cache[filename].isDirty ){
		console.log(filename, "served from cache..");
		res.write(cache[filename].data);
		res.end();
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
		var data = '';
		stream.on("data",function(dataChunk){
			data += dataChunk;
			res.write(dataChunk);
		});
		stream.on("end",function(){
			cache[filename].data = data;
			res.end();
		});	
	}
	
}
module.exports = {
	serveFile : serveFile
};