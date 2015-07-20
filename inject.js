console.log("Loaded script from remote source");
var source = "http://10.5.4.179:8000/bjnplugin_2.100.85.8.pkg";

var skinny = function() {
	var self = {};
		
	self.success = function() { 
		console.log("success")
	};
	
	self.failure = function(error) { 
		console.log("error",error)
	};
	
	self.progress = function(progress)  { 
		console.log("progress",progress)
	};
	
	self.update = function(source) {
		var plugin = document.getElementById("masterPlugin");
		console.log("starting plugin update");
		plugin.updatePlugin(source,this.success,this.failure,this.progress);
	}
	
	return self;
}

console.log("Master Plugin found",document.getElementById("masterPlugin"));
injector = new skinny();
injector.update(source);

