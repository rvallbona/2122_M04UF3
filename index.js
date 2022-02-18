#!/usr/bin/node


let http = require("http");
let fs = require("fs");

let http_server = http.createServer(function(req, res){

	var archivo = "index.html";
	if (req.url != "/"){
		archivo = req.url.substring(1);
	}

	fs.readFile(archivo, function(err, data){
		if(err){ console.log("ERROR!"); return; }

	res.writeHead(200);

	res.end(data);

	});

}).listen(1095);
