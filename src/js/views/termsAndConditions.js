define(['jquery', 'backbone', 'templates/html.jst'], function($, Backbone, htmlJST){
        var termsAndConditionsView = Backbone.View.extend({
            el: "#content",

            render: function(){
                this.$el
                    .html(JST['src/js/templates/termsAndConditions.html']({}));

                ga('send', 'pageview', {
                    'page': location.pathname,
                    'title': 'Terms and Conditions'
                });
            }
        });
        
        return new termsAndConditionsView();
    }
);