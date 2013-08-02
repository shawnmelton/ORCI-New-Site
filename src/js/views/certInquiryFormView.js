define([
	"jquery",
	"backbone",
	'templates/html.jst'
	], function($, Backbone, htmlJST){
		var certInquiryFormView = Backbone.View.extend({
			el: "#content",
			form: null,

			events: {
				'click #submit': 'onSubmitButtonClick',
				'click #reset': 'onResetButtonClick',
				'submit #cert-inquiry-form': 'onFormSubmission'
			},

			/**
			 * Remove the error styling from fields.
			 */
			clearFormErrors: function() {
				if(this.form !== null) {
					this.form.find("input, select").removeClass("error");
				}
			},

			/**
			 * Catch the form submission to check for validation.
			 */
			onFormSubmission: function(event) {
				if(this.form !== null && this.validSubmission()) {
					this.form.append('<input type="hidden" name="cert-inquiry-form-v" value="1">');
					this.form.attr("action", "/content/orci-forms.php");
				} else {
					event.preventDefault();
				}
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
					.html(JST['src/js/templates/certInquiryForm.html']({}))
					.parent().removeClass("home");

				this.form = $("#cert-inquiry-form");
			},

			/**
			 * Display the form field error.
			 */
			showFieldError: function(field) {
				field.addClass("error");
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
		
		return new certInquiryFormView();
	}
);