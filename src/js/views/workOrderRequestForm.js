define(['jquery', 'backbone', 'templates/html.jst'], function($, Backbone, htmlJST){
        var workOrderRequestFormView = Backbone.View.extend({
            el: "#content",
            form: null,
            productCount: 1,
            nonusFieldsChecked: false,

            events: {
                'click #submit': 'onSubmitButtonClick',
                'click #reset': 'onResetButtonClick',
                'click #add-product': 'onAddProductClick',
                'click #located-in-nonus': 'onLocationCheckboxClick',
                'submit #work-order-form': 'onFormSubmission'
            },

            /**
             * Remove the error styling from fields.
             */
            clearFormErrors: function() {
                if(this.form !== null) {
                    this.form.find("input, select").removeClass("error");
                    this.form.find("label")
                        .removeClass("empty")
                        .removeClass('invalid-email')
                        .removeClass('invalid-zip');
                }
            },

            /**
             * Handle what happens when the "Add Product" button is clicked.
             */
            onAddProductClick: function() {
                $("#products-to-return").append(
                    JST['src/js/templates/productReturnFields.html']({
                        cnt: this.productCount
                    })
                );

                this.productCount++;
            },

            /**
             * Catch the form submission to check for validation.
             */
            onFormSubmission: function(event) {
                if(this.form !== null && this.validSubmission()) {
                    this.form.append('<input type="hidden" name="work-order-form-v" value="1">');
                    this.form.attr("action", "/content/orci-forms.php");
                } else {
                    event.preventDefault();
                }
            },

            /**
             * Handle what happens when the "I am located outside of the United States" button is clicked.
             */
            onLocationCheckboxClick: function() {
                var fieldsToShow,
                    fieldsToHide;

                this.nonusFieldsChecked = !this.nonusFieldsChecked;

                if(this.nonusFieldsChecked) { // Show Non-US fields
                    fieldsToHide = $("#us-fields");
                    fieldsToShow = $("#non-us-fields");
                } else { // Show US fields
                    fieldsToHide = $("#non-us-fields");
                    fieldsToShow = $("#us-fields");
                }

                fieldsToHide.slideUp(function() {
                    fieldsToShow.slideDown();
                });

                fieldsToShow.find("label").each(function() {
                    if(!$(this).hasClass("req")) {
                        $(this).addClass("req");
                    }
                });

                fieldsToHide.find("label").each(function() {
                    if($(this).hasClass("req")) {
                        $(this).removeClass("req");
                    }
                });
            },

            /**
             * Reset all of the entered values for the form.
             */
            onResetButtonClick: function() {
                this.clearFormErrors();
                if(this.form !== null) {
                    this.form.find("input, select").each(function() {
                        $(this).val("");
                    });
                }
            },

            /**
             * Fire the submission for this form if everything validates.
             */
            onSubmitButtonClick: function() {
                if(this.form !== null && this.validSubmission()) {
                    this.form.submit();
                }
            },

            render: function(){
                this.$el
                    .html(JST['src/js/templates/workOrderRequestForm.html']({}))
                    .parent().removeClass("home");

                this.form = $("#work-order-form");
                this.onAddProductClick(); // Add first row of table.
            },

            /**
             * Display the form field error.
             */
            showFieldError: function(field) {
                field.addClass("error");

                if(field.val() === "") {
                    field.prev().addClass("empty");
                } else if(field.attr("id") === "email") {
                    field.prev().addClass("invalid-email");
                } else if(field.attr("id") === "zip-code") {
                    field.prev().addClass("invalid-zip");
                } 
            },

            /**
             * Ensure form submission is valid.
             * @return boolean
             */
            validSubmission: function() {
                var noErrors = true;
                this.clearFormErrors();

                if(this.form === null) { // Ran into an error.
                    return false;
                }

                var _this = this;
                this.form.find("label.req").each(function() {
                    var field = $(this).next();
                    if(field.val() === "" || (field.attr("id") === "email" && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(field.val())) || (field.attr("id") === "zip-code" && !/^\d{5}(?:[-\s]\d{4})?$/i.test(field.val()))) {
                        _this.showFieldError(field);
                        noErrors = false;
                    }
                });

                return noErrors;
            }
        });
        
        return new workOrderRequestFormView();
    }
);