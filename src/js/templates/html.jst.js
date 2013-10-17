this["JST"] = this["JST"] || {};

this["JST"]["src/js/templates/archivedPosts.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h1>' +
((__t = ( title )) == null ? '' : __t) +
'</h1>\n<div id="category-posts">\n\t';
 _.each(years, function(year) { ;
__p += '\n\t\t<h2>' +
((__t = ( year.year )) == null ? '' : __t) +
'</h2>\n\t\t';
 _.each(year.posts, function(article) { ;
__p += '\n\t\t<article>\n\t\t\t<h3>' +
((__t = ( article.title )) == null ? '' : __t) +
'</h3>\n\t\t\t' +
((__t = ( article.content )) == null ? '' : __t) +
'\n\t\t</article>\n\t\t';
 }); ;
__p += '\n\t';
 }); ;
__p += '\n</div>\n' +
((__t = ( noneMsg )) == null ? '' : __t);

}
return __p
};

this["JST"]["src/js/templates/banners.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="slideshow">\n\t';
 _.each(banners, function(banner) { ;
__p += '\n\t<img src="' +
((__t = ( banner.src )) == null ? '' : __t) +
'" alt="' +
((__t = ( banner.alt )) == null ? '' : __t) +
'" height="222" width="1060">\n\t';
 }); ;
__p += '\n</div>\n<a id="next"></a>\n<a id="previous"></a>\n<a id="pause"></a>\n<a id="play"></a>';

}
return __p
};

this["JST"]["src/js/templates/categoryPosts.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h1>' +
((__t = ( title )) == null ? '' : __t) +
'</h1>\n<div id="category-posts">\n\t';
 _.each(articles, function(article) { ;
__p += '\n\t<article>\n\t\t<h3>' +
((__t = ( article.title )) == null ? '' : __t) +
'</h3>\n\t\t' +
((__t = ( article.content )) == null ? '' : __t) +
'\n\t</article>\n\t';
 }); ;
__p += '\n</div>\n' +
((__t = ( noneMsg )) == null ? '' : __t);

}
return __p
};

this["JST"]["src/js/templates/certInquiryForm.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>VICADS™ Certification Classes Inquiry Form</h1>\n<form name="cert-inquiry-form" id="cert-inquiry-form" class="contactForm" method="post" action="">\n\t<img src="http://www.openroadsconsulting.com/content/wp-content/uploads/2013/06/vicads.png" alt="VICADS">\n\t<p>Required fields are marked with a red asterisk <span class="req">(</span>).</p>\n\t<ol>\n\t\t<li>\n\t\t\t<label for="first-name" class="req">First Name</label>\n\t\t\t<input type="text" name="first_name" id="first-name">\n\t\t</li>\n\t\t<li>\n\t\t\t<label for="last-name" class="req">Last Name</label>\n\t\t\t<input type="text" name="last_name" id="last-name">\n\t\t</li>\n\t\t<li>\n\t\t\t<label for="company" class="req">Company</label>\n\t\t\t<input type="text" name="company" id="company">\n\t\t</li>\n\t\t<li>\n\t\t\t<label for="email" class="req">Email Address</label>\n\t\t\t<input type="text" name="email" id="email">\n\t\t</li>\n\t\t<li>\n\t\t\t<label for="street-address" class="req">Address</label>\n\t\t\t<input type="text" name="street_address" id="street-address">\n\t\t</li>\n\t\t<li>\n\t\t\t<label for="zip-code" class="req">Zip Code</label>\n\t\t\t<input type="text" name="zip_code" id="zip-code">\n\t\t</li>\n\t\t<li>\n\t\t\t<label for="dates" class="req">Dates</label>\n\t\t\t<select name="dates" id="dates">\n\t\t\t\t<option value="">-</option>\n\t\t\t\t<option value="December 3 - 6">December 3<sup>rd</sup> - 6<sup>th</sup></option>\n\t\t\t</select>\n\t\t</li>\n\t</ol>\n\t<div>\n\t\t<a id="submit">Submit</a>\n\t\t<a id="reset">Reset</a>\n\t\t<input type="hidden" name="fns" value="cert-inquiry-form">\n\t</div>\n</form>';

}
return __p
};

this["JST"]["src/js/templates/default.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>' +
((__t = ( title )) == null ? '' : __t) +
'</h1>\n' +
((__t = ( content )) == null ? '' : __t);

}
return __p
};

this["JST"]["src/js/templates/featuredProducts.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="featured-products">\n\t<div>\n\t\t<h4><strong>Product</strong> Highlight</h4>\n\t\t<p>From distributed monitoring and surveillance using VICADS<sup>TM</sup> to physical network instrusion detection.</p>\n\t\t<a href="integrated-security-systems/products/vicads"><span>&gt;&gt;</span> &nbsp;More</a>\n\t</div>\n\t<div>\n\t\t<h4><strong>Product</strong> Highlight</h4>\n\t\t<p><strong>OpenTMS Enterprise Studio</strong> is a customizable off-the-shelf solution that can be tailored to meet your unique needs.</p>\n\t\t<a href="intelligent-transportation-systems/products/opentms/"><span>&gt;&gt;</span> &nbsp;More</a>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["src/js/templates/newsAndEvents.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h3>News And Events</h3>\n' +
((__t = ( noResultsFound )) == null ? '' : __t) +
'\n';
 _.each(articles, function(article) { ;
__p += '\n<article>\n\t<small>' +
((__t = ( article.date )) == null ? '' : __t) +
'</small>\n\t<p>\n\t\t' +
((__t = ( article.title )) == null ? '' : __t) +
'\n\t\t&nbsp;<a href="' +
((__t = ( article.url )) == null ? '' : __t) +
'">&gt;&gt; More</a>\n\t</p>\n</article>\n';
 }); ;


}
return __p
};

this["JST"]["src/js/templates/productReturnFields.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<table>\n    <tr>\n        <td>\n            <select name="product_item_' +
((__t = ( cnt )) == null ? '' : __t) +
'">\n                <option value="">-</option>\n                <option value="test">This</option>\n            </select>\n        </td>\n        <td><input type="text" name="product_serial_number_' +
((__t = ( cnt )) == null ? '' : __t) +
'"></td>\n        <td><input type="text" name="product_quantity_' +
((__t = ( cnt )) == null ? '' : __t) +
'"></td>\n        <td><input type="text" name="product_reason_for_return_' +
((__t = ( cnt )) == null ? '' : __t) +
'"></td>\n    </tr>\n</table>';

}
return __p
};

this["JST"]["src/js/templates/rmaConfirmation.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="ack-overlay-bg"></div>\n<div id="ack-overlay">\n    <h2>Confirm RMA Request</h2>\n    <p>By clicking Submit Request you are acknowledging that you have read, understand and agree to comply with the <a href="/contact-us/rma-request-form/return-policy" target="_blank">Open Roads Return Policy terms and conditions</a>. Submission of this form is acceptance of the terms, if you do not agree click Cancel Request.</p>\n    <div>\n        <a id="confirm-rma-request">Submit Request</a>\n        <a id="cancel-rma-request">Cancel Request</a>\n    </div>\n</div>';

}
return __p
};

this["JST"]["src/js/templates/termsAndConditions.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Open Roads Consulting, Inc. Return Policy</h1>\n<h3>Instructions</h3>\n<ul class="indented">\n    <li>A Return Material Authorization (RMA) number is REQUIRED for every return shipment to ORCI.</li>\n    <li>The shipment must match the correct amount of units, model types and serial numbers as documented on the RMA.</li>\n    <li>The RMA number must be written and visible on the outside of the box. Shipments received without a RMA number will be refused.</li>\n    <li>RMA numbers are valid for 30 days from the date they are issued.</li>\n    <li>Once items have been shipped, you may check the status of your RMA by calling Product Support at 855.4VICADS or at <a href="mailto:vicadssupport@openroadsconsulting.com">vicadssupport@openroadsconsulting.com</a></li>\n    <li>Ship returns to the following address:</li>\n</ul>\n<p class="indented">\n    Open Roads Consulting<br>\n    3019 Alvin Devane Blvd<br>\n    Bldg 4, Suite 450<br>\n    Attn: Returns, RMA # <span class="italic">(insert your RMA # here)</span><br>\n    Austin, TX 78741\n</p>\n<br><br>\n<h3>Terms &amp; Conditions</h3>\n<ul class="indented">\n    <li>Customer is responsible for all costs associated with return.</li>\n    <li>Returns for any reason other than defective units are subject to a 20% restocking fee.</li>\n    <li>Customer is 100% responsible for the product while in transit to ORCI.</li>\n    <li>Incoming RMAs will be inspected upon arrival and any damage noted.</li>\n    <li>It is <strong>strongly</strong> recommended that the customer insure return shipments <strong>at full replacement value</strong>. Use original <strong>packaging materials and containers</strong> to ship return product. If original package is not available, ensure that the all equipment and components are packed securely. *</li>\n    <li>ALL WARRANTY CLAIMS ARE VOIDED IF PRODUCT IS DAMAGED DURING TRANSPORT AS A RESULT OF <strong>INADEQUATE</strong> PACKAGING <strong>OR IMPROPER HANDLING WHILE IN TRANSIT</strong></li>\n</ul>\n<p class="indented"><strong>* If product return consists of ORCI servers, recorders or workstations it is STRONGLY recommended to repack the chassis in the original carton, using the original packaging material. If these are no longer available, be sure to pack the chassis securely, using packaging material to surround the chassis so that it does not shift within the carton and become damaged during shipping.</strong></p>';

}
return __p
};

this["JST"]["src/js/templates/workOrderRequestForm.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>ISSD Online RMA Request Form</h1>\n<form name="rma-request-form" id="rma-request-form" class="contactForm" method="post" action="">\n    <p>Required fields are marked with a red asterisk <span class="req">(</span>).</p>\n    <ol>\n        <li>\n            <label for="company" class="req">Company</label>\n            <input type="text" name="company" id="company">\n        </li>\n        <li>\n            <label for="contact" class="req">Contact</label>\n            <input type="text" name="contact" id="contact">\n        </li>\n        <li class="clearfix">\n            <input type="checkbox" name="located_in_nonus" id="located-in-nonus" value="1">\n            <label for="located-in-nonus" style="padding-top: 8px;">I am located outside of the United States</label>\n        </li>\n        <li>\n            <label for="street-address" class="req">Address</label>\n            <input type="text" name="street_address" id="street-address">\n        </li>\n        <li>\n            <label for="city" class="req">City</label>\n            <input type="text" name="city" id="city">\n        </li>\n    </ol>\n    <ol id="us-fields">\n        <li>\n            <label for="state" class="req">State</label>\n            <input type="text" name="state" id="state">\n        </li>\n        <li>\n            <label for="zip-code" class="req">Zip Code</label>\n            <input type="text" name="zip_code" id="zip-code">\n        </li>\n    </ol>\n    <ol id="non-us-fields">\n        <li>\n            <label for="state-territory">State / Territory</label>\n            <input type="text" name="state_territory" id="state-territory">\n        </li>\n        <li>\n            <label for="country">Country</label>\n            <input type="text" name="country" id="country">\n        </li>\n        <li>\n            <label for="postal-code">Postal Code</label>\n            <input type="text" name="postal_code" id="postal-code">\n        </li>\n    </ol>\n    <ol>\n        <li>\n            <label for="email" class="req">Email Address</label>\n            <input type="text" name="email" id="email">\n        </li>\n        <li>\n            <label for="phone" class="req">Phone Number</label>\n            <input type="text" name="phone_number" id="phone">\n        </li>\n        <li>\n            <label for="fax">Fax Number</label>\n            <input type="text" name="fax_number" id="fax">\n        </li>\n    </ol>\n    <div id="products-to-return">\n        <h2>Product Details</h2>\n        <table>\n            <tr>\n                <th>Item</th>\n                <th>Serial No.</th>\n                <th>Qty</th>\n                <th>Reason for Return</th>\n            </tr>\n        </table>\n    </div>\n    <p class="clearfix"><a id="add-product">Add Another Product</a></p>\n    <div>\n        <a id="submit">Submit RMA Request</a>\n        <a id="reset">Reset</a>\n        <input type="hidden" name="fns" value="rma-request-form">\n    </div>\n</form>';

}
return __p
};