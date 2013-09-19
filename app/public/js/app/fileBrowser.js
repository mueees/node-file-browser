require([
    'app/app',
    'app/fileBrowser/fileBrowser_app',
    'ckeditor'
], function(App){
    App.start();
    App.module('FileBrowser').API.showFileBrowser();


    CKEDITOR.replace('CKEDITOR', {
        filebrowserBrowseUrl : '/upload.html'
    });
})