var rootController = require('../controllers/rootcontroller');
var fileBrowserController = require('../controllers/fileBrowser');


module.exports = function(app) {

    //Root Paths
    app.get('/', rootController.home);

    //fileBrowser
    app.get("/api/fileBrowser", fileBrowserController.getData);
    app.get("/api/fileBrowser/newFolder", fileBrowserController.newFolder);
    app.delete("/api/fileBrowser/deleteItems", fileBrowserController.deleteItems);
    app.post("/upload", fileBrowserController.upload);
};