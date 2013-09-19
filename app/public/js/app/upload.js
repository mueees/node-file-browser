require([
    'app/app',
    'app/fileBrowser/fileBrowser_app'
], function(App){
    App.start();
    App.module('FileBrowser').API.showFileBrowser();
})