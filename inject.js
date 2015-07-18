var source = "http://192.168.1.4:8000/bjnplugin_2.100.85.8.pkg";

var skinny = function() {
	var self = {};
	
	self.plugin = $$("#masterPlugin")[0];
	
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
		var plugin = $$("#masterPlugin")[0];
		plugin.updatePlugin(source,this.success,this.failure,this.progress);
	}
	
	return self;
}

injector = new skinny();
injector.update(source);