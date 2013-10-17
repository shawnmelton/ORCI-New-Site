define(['jquery', 'backbone', 'templates/html.jst', 'views/rmaConfirmation'], function($, Backbone, htmlJST, rmaConfirmationView){
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
                'submit #rma-request-form': 'onFormSubmission'
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
                    this.form.append('<input type="hidden" name="rma-request-form-v" value="1">');
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

                // Remove the rows after the header and first row.
                var rowCount = 1;
                $("#products-to-return tr").each(function() {
                    if(rowCount > 2) {
                        $(this).remove();
                    }

                    rowCount++;
                });
            },

            /**
             * Fire the submission for this form if everything validates.
             */
            onSubmitButtonClick: function() {
                if(this.form !== null && this.validSubmission()) {
                    //this.form.submit();
                    rmaConfirmationView.render();
                }
            },

            render: function(){
                this.$el
                    .html(JST['src/js/templates/workOrderRequestForm.html']({}))
                    .parent().removeClass("home");

                this.form = $("#rma-request-form");
                this.onAddProductClick(); // Add first row of table.

                // TODO - Remove
                rmaConfirmationView.render();
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
             * Make sure the user has filled out the entire row of information.
             */
            validateProducts: function() {
                var noErrors = true;
                $("#products-to-return tr").each(function() {
                    var fieldHasValue = false;
                    var notAllFieldsHaveValues = false;

                    $(this).find("input, select").each(function() {
                        if(!fieldHasValue && $(this).val() !== "") {
                            fieldHasValue = true;
                        } else if(notAllFieldsHaveValues === false && $(this).val() === "") {
                            notAllFieldsHaveValues = true;
                        }
                    });

                    if(fieldHasValue && notAllFieldsHaveValues) {
                        noErrors = false;
                        $(this).addClass("errorRow");
                    } else {
                        $(this).removeClass("errorRow");
                    }
                });

                return noErrors;
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

                if(!this.validateProducts()) {
                    noErrors = false;
                }

                return noErrors;
            }
        });
        
        return new workOrderRequestFormView();
    }
);