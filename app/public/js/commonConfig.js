requirejs.config({

    baseUrl: 'js/libs',

    paths: {
        app: '../app',
        plugins: '../plugins',
        marionette: 'marionette',

        /*plugins*/
        ckeditor: 'ckeditor/ckeditor',

        /*libs*/
        bootstrap: "bootstrap/bootstrap"
    },

    shim:{
        jquery: {
            exports: "jQuery"
        },
    	backbone: {
    		deps: ['jquery', 'underscore'],
    		exports: 'Backbone'
    	},
        marionette:{
            deps: ['backbone', 'underscore'],
            exports: "Marionette"
        },

        /*libs*/
        bootstrap: {
            deps: ['jquery']
        },
        ckeditor: {
            exports: 'CKEDITOR'
        }
    },

    urlArgs: "bust=" + (new Date()).getTime()
});