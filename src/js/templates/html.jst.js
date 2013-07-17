this["JST"] = this["JST"] || {};

this["JST"]["src/js/templates/archivedPosts.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h1>' +
((__t = ( title )) == null ? '' : __t) +
'</h1>\r\n<div id="category-posts">\r\n\t';
 _.each(years, function(year) { ;
__p += '\r\n\t\t<h2>' +
((__t = ( year.year )) == null ? '' : __t) +
'</h2>\r\n\t\t';
 _.each(year.posts, function(article) { ;
__p += '\r\n\t\t<article>\r\n\t\t\t<h3>' +
((__t = ( article.title )) == null ? '' : __t) +
'</h3>\r\n\t\t\t' +
((__t = ( article.content )) == null ? '' : __t) +
'\r\n\t\t</article>\r\n\t\t';
 }); ;
__p += '\r\n\t';
 }); ;
__p += '\r\n</div>\r\n' +
((__t = ( noneMsg )) == null ? '' : __t);

}
return __p
};

this["JST"]["src/js/templates/banners.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="slideshow">\r\n\t';
 _.each(banners, function(banner) { ;
__p += '\r\n\t<img src="' +
((__t = ( banner.src )) == null ? '' : __t) +
'" alt="' +
((__t = ( banner.alt )) == null ? '' : __t) +
'" height="222" width="1060">\r\n\t';
 }); ;
__p += '\r\n</div>\r\n<a id="next"></a>\r\n<a id="previous"></a>\r\n<a id="pause"></a>\r\n<a id="play"></a>';

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
'</h1>\r\n<div id="category-posts">\r\n\t';
 _.each(articles, function(article) { ;
__p += '\r\n\t<article>\r\n\t\t<h3>' +
((__t = ( article.title )) == null ? '' : __t) +
'</h3>\r\n\t\t' +
((__t = ( article.content )) == null ? '' : __t) +
'\r\n\t</article>\r\n\t';
 }); ;
__p += '\r\n</div>\r\n' +
((__t = ( noneMsg )) == null ? '' : __t);

}
return __p
};

this["JST"]["src/js/templates/default.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>' +
((__t = ( title )) == null ? '' : __t) +
'</h1>\r\n' +
((__t = ( content )) == null ? '' : __t);

}
return __p
};

this["JST"]["src/js/templates/featuredProducts.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="featured-products">\r\n\t<div>\r\n\t\t<h4><strong>Product</strong> Highlight</h4>\r\n\t\t<p>From distributed monitoring and surveillance using VICADS<sup>TM</sup> to physical network instrusion detection.</p>\r\n\t\t<a href="integrated-security-systems/products/vicads"><span>&gt;&gt;</span> &nbsp;More</a>\r\n\t</div>\r\n\t<div>\r\n\t\t<h4><strong>Product</strong> Highlight</h4>\r\n\t\t<p><strong>OpenTMS Enterprise Studio</strong> is a customizable off-the-shelf solution that can be tailored to meet your unique needs.</p>\r\n\t\t<a href="intelligent-transportation-systems/products/opentms/"><span>&gt;&gt;</span> &nbsp;More</a>\r\n\t</div>\r\n</div>';

}
return __p
};

this["JST"]["src/js/templates/newsAndEvents.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h3>News And Events</h3>\r\n' +
((__t = ( noResultsFound )) == null ? '' : __t) +
'\r\n';
 _.each(articles, function(article) { ;
__p += '\r\n<article>\r\n\t<small>' +
((__t = ( article.date )) == null ? '' : __t) +
'</small>\r\n\t<p>\r\n\t\t' +
((__t = ( article.title )) == null ? '' : __t) +
'\r\n\t\t&nbsp;<a href="' +
((__t = ( article.url )) == null ? '' : __t) +
'">&gt;&gt; More</a>\r\n\t</p>\r\n</article>\r\n';
 }); ;


}
return __p
};