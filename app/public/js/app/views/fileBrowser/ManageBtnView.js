define([
    'marionette',
    'text!app/templates/fileBrowser/ManageBtnView.html'
], function(Marionette, template){

    return Marionette.ItemView.extend({
        template: _.template(template),

        events: {
            "click .upBtn": "upBtn",
            "click .newFolderBtn": "newFolderBtn",
            "click .selectBtn": "selectBtn",
            "click .deleteBtn": "deleteBtn"
        },

        ui: {
            "deleteBtn": ".deleteBtn",
            "selectBtn": ".selectBtn"
        },

        initialize: function(data){
            this.channel = data.channel;
            this.listenTo(this.channel, "currentItemSelected", this.itemSelectedChanged)
        },

        upBtn: function(e){
            e.preventDefault();
            this.channel.trigger("up");
        },

        newFolderBtn: function(e){
            e.preventDefault();
            this.channel.trigger("newFolderBtn");
        },

        itemSelectedChanged: function(data){
            if( data.items.length ){
                this.ui.deleteBtn.show();
                this.ui.selectBtn.show();
            }else{
                this.ui.deleteBtn.hide();
                this.ui.selectBtn.hide();
            }
        },

        deleteBtn: function(e){
            e.preventDefault();
            this.channel.trigger("deleteBtn");
        },

        selectBtn: function(e){
            e.preventDefault();
            this.channel.trigger("selectBtn");
        }
    })

})