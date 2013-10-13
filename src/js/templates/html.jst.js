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
__p += '<ol class="table">\n    <li>\n        <select name="item_' +
((__t = ( cnt )) == null ? '' : __t) +
'">\n            <option value="">-</option>\n            <option value="10-10000-000">VICADS Management Server</option>\n            <option value="10-20000-00T">VICADS Personal Viewer Workstation, Tower</option>\n            <option value="10-20000-00R">VICADS Personal Viewer Workstation, Rack Mount</option>\n            <option value="10-20003-00T">VICADS Softwall Workstation, Tower</option>\n            <option value="10-20003-00R">VICADS Softwall Workstation, Rack Mount</option>\n            <option value="10-20003-000">VICADS Broadcast Server &amp; Software</option>\n            <option value="10-31000-000">VICADS Video Analytics Server, 24 Channel</option>\n        </select>\n    </li>\n    <li><input type="text" name="serial_number_' +
((__t = ( cnt )) == null ? '' : __t) +
'"></li>\n    <li><input type="text" name="quantity_' +
((__t = ( cnt )) == null ? '' : __t) +
'"></li>\n    <li><input type="text" name="reason_for_return_' +
((__t = ( cnt )) == null ? '' : __t) +
'"></li>\n</ol>';

}
return __p
};

this["JST"]["src/js/templates/workOrderRequestForm.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Work Order Request Form</h1>\n<form name="work-order-form" id="work-order-form" class="contactForm" method="post" action="">\n    <p>Required fields are marked with a red asterisk <span class="req">(</span>).</p>\n    <ol>\n        <li>\n            <label for="company" class="req">Company</label>\n            <input type="text" name="company" id="company">\n        </li>\n        <li>\n            <label for="contact" class="req">Contact</label>\n            <input type="text" name="contact" id="contact">\n        </li>\n        <li>\n            <input type="checkbox" name="located_in_us" id="located-in-us" value="1">\n            <label for="located-in-us">I am located in the United States</label>\n        </li>\n        <li>\n            <label for="street-address" class="req">Address</label>\n            <input type="text" name="street_address" id="street-address">\n        </li>\n        <li>\n            <label for="city" class="req">City</label>\n            <input type="text" name="city" id="city">\n        </li>\n    </ol>\n    <ol id="us-fields">\n        <li>\n            <label for="state" class="req">State</label>\n            <input type="text" name="state" id="state">\n        </li>\n        <li>\n            <label for="zip-code" class="req">Zip Code</label>\n            <input type="text" name="zip_code" id="zip-code">\n        </li>\n    </ol>\n    <ol id="non-us-fields">\n        <li>\n            <label for="state-territory" class="req">State / Territory</label>\n            <input type="text" name="state_territory" id="state-territory">\n        </li>\n        <li>\n            <label for="country" class="req">Country</label>\n            <input type="text" name="country" id="country">\n        </li>\n        <li>\n            <label for="postal-code" class="req">Postal Code</label>\n            <input type="text" name="postal_code" id="postal-code">\n        </li>\n    </ol>\n    <ol>\n        <li>\n            <label for="email" class="req">Email Address</label>\n            <input type="text" name="email" id="email">\n        </li>\n        <li>\n            <label for="phone" class="req">Phone Number</label>\n            <input type="text" name="phone_number" id="phone">\n        </li>\n        <li>\n            <label for="fax">Fax Number</label>\n            <input type="text" name="fax_number" id="fax">\n        </li>\n    </ol>\n    <div id="products-to-return">\n        <h2>Product Details</h2>\n        <ol class="table header">\n            <li>Item</li>\n            <li>Serial No.</li>\n            <li>Qty</li>\n            <li>Reason for Return</li>\n        </ol>\n    </div>\n    <p><a id="add-product">Add Another Product</a></p>\n    <div>\n        <a id="submit">Submit</a>\n        <a id="reset">Reset</a>\n        <input type="hidden" name="fns" value="cert-inquiry-form">\n    </div>\n</form>';

}
return __p
};