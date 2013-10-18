define(['jquery', 'backbone', 'templates/html.jst'], function($, Backbone, htmlJST){
    var rmaConfirmationView = Backbone.View.extend({
        el: "body",
        overlayBG: null,
        overlayContent: null,
        rmaRequest: null,

        events: {
            'click #confirm-rma-request': 'onConfirmButtonClick',
            'click #cancel-rma-request': 'onCancelButtonClick',
            'click #ack-overlay-bg': 'onCancelButtonClick'
        },

        closeOverlay: function() {
            this.overlayBG.remove();
            this.overlayContent.remove();
            this.rmaRequest = null;
        },

        onCancelButtonClick: function() {
            this.closeOverlay();
        },

        onConfirmButtonClick: function() {
            if(this.rmaRequest !== null) {
                this.rmaRequest.onFormRequestConfirmation();
            }

            this.closeOverlay();
        },

        render: function(request){
            this.$el
                .append(JST['src/js/templates/rmaConfirmation.html']({}));

            this.overlayBG = $("#ack-overlay-bg");
            this.overlayContent = $("#ack-overlay");
            this.rmaRequest = request;
        }
    });
    
    return new rmaConfirmationView();
});