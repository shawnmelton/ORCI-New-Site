define(['jquery', 'backbone', 'templates/html.jst'], function($, Backbone, htmlJST){
        var rmaConfirmationView = Backbone.View.extend({
            el: "body",
            overlayBG: null,
            overlayContent: null,

            events: {
                'click #confirm-rma-request': 'onConfirmButtonClick',
                'click #cancel-rma-request': 'onCancelButtonClick',
                'click #ack-overlay-bg': 'onCancelButtonClick'
            },

            closeOverlay: function() {
                this.overlayBG.remove();
                this.overlayContent.remove();
            },

            onCancelButtonClick: function() {
                this.closeOverlay();
            },

            onConfirmButtonClick: function() {
                this.closeOverlay();
            },

            render: function(){
                this.$el
                    .append(JST['src/js/templates/rmaConfirmation.html']({}));

                this.overlayBG = $("#ack-overlay-bg");
                this.overlayContent = $("#ack-overlay");
            }
        });
        
        return new rmaConfirmationView();
    }
);