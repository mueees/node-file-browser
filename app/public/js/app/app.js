define([
	'backbone',
	'marionette',
	'app/config/global',
	'jquery'

	], function(Backbone, Marionette, globalConfig){
	
	var App = new Marionette.Application();
	
	App.config = globalConfig;

    //add Chanels
    App.channels = {}
    App.channels.main = _.extend({}, Backbone.Events);
    App.channels.blog = _.extend({}, Backbone.Events);
    App.channels.fileBrowser = _.extend({}, Backbone.Events);

    App.addRegions({
        body: 'body',
        header: '.header',
        main: '.main'
    });

    App.on('initialize:after', function(){
        if( Backbone.history ){
            Backbone.history.start();
        }
    })

	App.startSubApp = function(appName, args){
	    var currentApp = App.module(appName);
	    if (App.currentApp === currentApp){ return; }

	    if (App.currentApp){
	      App.currentApp.stop();
	    }

	    App.currentApp = currentApp;
	    currentApp.start(args);
	};

	return App;

})