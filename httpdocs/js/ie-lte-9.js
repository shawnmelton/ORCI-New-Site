if(typeof Object.create!=="function"){Object.create=function(e){function t(){}t.prototype=e;return new t}}var ua={toString:function(){return navigator.userAgent},test:function(e){return this.toString().toLowerCase().indexOf(e.toLowerCase())>-1}};ua.version=(ua.toString().toLowerCase().match(/[\s\S]+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1];ua.webkit=ua.test("webkit");ua.gecko=ua.test("gecko")&&!ua.webkit;ua.opera=ua.test("opera");ua.ie=ua.test("msie")&&!ua.opera;ua.ie6=ua.ie&&document.compatMode&&typeof document.documentElement.style.maxHeight==="undefined";ua.ie7=ua.ie&&document.documentElement&&typeof document.documentElement.style.maxHeight!=="undefined"&&typeof XDomainRequest==="undefined";ua.ie8=ua.ie&&typeof XDomainRequest!=="undefined";var domReady=function(){var e=[];var t=function(){if(!arguments.callee.done){arguments.callee.done=true;for(var t=0;t<e.length;t++){e[t]()}}};if(document.addEventListener){document.addEventListener("DOMContentLoaded",t,false)}if(ua.ie){(function(){try{document.documentElement.doScroll("left")}catch(e){setTimeout(arguments.callee,50);return}t()})();document.onreadystatechange=function(){if(document.readyState==="complete"){document.onreadystatechange=null;t()}}}if(ua.webkit&&document.readyState){(function(){if(document.readyState!=="loading"){t()}else{setTimeout(arguments.callee,10)}})()}window.onload=t;return function(t){if(typeof t==="function"){e[e.length]=t}return t}}();var cssHelper=function(){var e={BLOCKS:/[^\s{][^{]*\{(?:[^{}]*\{[^{}]*\}[^{}]*|[^{}]*)*\}/g,BLOCKS_INSIDE:/[^\s{][^{]*\{[^{}]*\}/g,DECLARATIONS:/[a-zA-Z\-]+[^;]*:[^;]+;/g,RELATIVE_URLS:/url\(['"]?([^\/\)'"][^:\)'"]+)['"]?\)/g,REDUNDANT_COMPONENTS:/(?:\/\*([^*\\\\]|\*(?!\/))+\*\/|@import[^;]+;)/g,REDUNDANT_WHITESPACE:/\s*(,|:|;|\{|\})\s*/g,MORE_WHITESPACE:/\s{2,}/g,FINAL_SEMICOLONS:/;\}/g,NOT_WHITESPACE:/\S+/g};var t,n=false;var r=[];var i=function(e){if(typeof e==="function"){r[r.length]=e}};var s=function(){for(var e=0;e<r.length;e++){r[e](t)}};var o={};var u=function(e,t){if(o[e]){var n=o[e].listeners;if(n){for(var r=0;r<n.length;r++){n[r](t)}}}};var a=function(e,t,n){if(ua.ie&&!window.XMLHttpRequest){window.XMLHttpRequest=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}if(!XMLHttpRequest){return""}var r=new XMLHttpRequest;try{r.open("get",e,true);r.setRequestHeader("X_REQUESTED_WITH","XMLHttpRequest")}catch(i){n();return}var s=false;setTimeout(function(){s=true},5e3);document.documentElement.style.cursor="progress";r.onreadystatechange=function(){if(r.readyState===4&&!s){if(!r.status&&location.protocol==="file:"||r.status>=200&&r.status<300||r.status===304||navigator.userAgent.indexOf("Safari")>-1&&typeof r.status==="undefined"){t(r.responseText)}else{n()}document.documentElement.style.cursor="";r=null}};r.send("")};var f=function(t){t=t.replace(e.REDUNDANT_COMPONENTS,"");t=t.replace(e.REDUNDANT_WHITESPACE,"$1");t=t.replace(e.MORE_WHITESPACE," ");t=t.replace(e.FINAL_SEMICOLONS,"}");return t};var l={mediaQueryList:function(t){var n={};var r=t.indexOf("{");var i=t.substring(0,r);t=t.substring(r+1,t.length-1);var s=[],o=[];var u=i.toLowerCase().substring(7).split(",");for(var a=0;a<u.length;a++){s[s.length]=l.mediaQuery(u[a],n)}var f=t.match(e.BLOCKS_INSIDE);if(f!==null){for(a=0;a<f.length;a++){o[o.length]=l.rule(f[a],n)}}n.getMediaQueries=function(){return s};n.getRules=function(){return o};n.getListText=function(){return i};n.getCssText=function(){return t};return n},mediaQuery:function(t,n){t=t||"";var r=false,i;var s=[];var o=true;var u=t.match(e.NOT_WHITESPACE);for(var a=0;a<u.length;a++){var f=u[a];if(!i&&(f==="not"||f==="only")){if(f==="not"){r=true}}else{if(!i){i=f}else{if(f.charAt(0)==="("){var l=f.substring(1,f.length-1).split(":");s[s.length]={mediaFeature:l[0],value:l[1]||null}}}}}return{getList:function(){return n||null},getValid:function(){return o},getNot:function(){return r},getMediaType:function(){return i},getExpressions:function(){return s}}},rule:function(e,t){var n={};var r=e.indexOf("{");var i=e.substring(0,r);var s=i.split(",");var o=[];var u=e.substring(r+1,e.length-1).split(";");for(var a=0;a<u.length;a++){o[o.length]=l.declaration(u[a],n)}n.getMediaQueryList=function(){return t||null};n.getSelectors=function(){return s};n.getSelectorText=function(){return i};n.getDeclarations=function(){return o};n.getPropertyValue=function(e){for(var t=0;t<o.length;t++){if(o[t].getProperty()===e){return o[t].getValue()}}return null};return n},declaration:function(e,t){var n=e.indexOf(":");var r=e.substring(0,n);var i=e.substring(n+1);return{getRule:function(){return t||null},getProperty:function(){return r},getValue:function(){return i}}}};var c=function(n){if(typeof n.cssHelperText!=="string"){return}var r={mediaQueryLists:[],rules:[],selectors:{},declarations:[],properties:{}};var i=r.mediaQueryLists;var s=r.rules;var o=n.cssHelperText.match(e.BLOCKS);if(o!==null){for(var u=0;u<o.length;u++){if(o[u].substring(0,7)==="@media "){i[i.length]=l.mediaQueryList(o[u]);s=r.rules=s.concat(i[i.length-1].getRules())}else{s[s.length]=l.rule(o[u])}}}var a=r.selectors;var f=function(e){var t=e.getSelectors();for(var n=0;n<t.length;n++){var r=t[n];if(!a[r]){a[r]=[]}a[r][a[r].length]=e}};for(u=0;u<s.length;u++){f(s[u])}var c=r.declarations;for(u=0;u<s.length;u++){c=r.declarations=c.concat(s[u].getDeclarations())}var h=r.properties;for(u=0;u<c.length;u++){var p=c[u].getProperty();if(!h[p]){h[p]=[]}h[p][h[p].length]=c[u]}n.cssHelperParsed=r;t[t.length]=n;return r};var h=function(e,t){e.cssHelperText=f(t||e.innerHTML);return c(e)};var p=function(){n=true;t=[];var r=[];var i=function(){for(var e=0;e<r.length;e++){c(r[e])}var t=document.getElementsByTagName("style");for(e=0;e<t.length;e++){h(t[e])}n=false;s()};var o=document.getElementsByTagName("link");for(var u=0;u<o.length;u++){var l=o[u];if(l.getAttribute("rel").indexOf("style")>-1&&l.href&&l.href.length!==0&&!l.disabled){r[r.length]=l}}if(r.length>0){var p=0;var d=function(){p++;if(p===r.length){i()}};var v=function(t){var n=t.href;a(n,function(r){r=f(r).replace(e.RELATIVE_URLS,"url("+n.substring(0,n.lastIndexOf("/"))+"/$1)");t.cssHelperText=r;d()},d)};for(u=0;u<r.length;u++){v(r[u])}}else{i()}};var d={mediaQueryLists:"array",rules:"array",selectors:"object",declarations:"array",properties:"object"};var v={mediaQueryLists:null,rules:null,selectors:null,declarations:null,properties:null};var m=function(e,t){if(v[e]!==null){if(d[e]==="array"){return v[e]=v[e].concat(t)}else{var n=v[e];for(var r in t){if(t.hasOwnProperty(r)){if(!n[r]){n[r]=t[r]}else{n[r]=n[r].concat(t[r])}}}return n}}};var g=function(e){v[e]=d[e]==="array"?[]:{};for(var n=0;n<t.length;n++){m(e,t[n].cssHelperParsed[e])}return v[e]};domReady(function(){var e=document.body.getElementsByTagName("*");for(var t=0;t<e.length;t++){e[t].checkedByCssHelper=true}if(document.implementation.hasFeature("MutationEvents","2.0")||window.MutationEvent){document.body.addEventListener("DOMNodeInserted",function(e){var t=e.target;if(t.nodeType===1){u("DOMElementInserted",t);t.checkedByCssHelper=true}},false)}else{setInterval(function(){var e=document.body.getElementsByTagName("*");for(var t=0;t<e.length;t++){if(!e[t].checkedByCssHelper){u("DOMElementInserted",e[t]);e[t].checkedByCssHelper=true}}},1e3)}});var y=function(e){if(typeof window.innerWidth!="undefined"){return window["inner"+e]}else{if(typeof document.documentElement!="undefined"&&typeof document.documentElement.clientWidth!="undefined"&&document.documentElement.clientWidth!=0){return document.documentElement["client"+e]}}};return{addStyle:function(e,t){var n=document.createElement("style");n.setAttribute("type","text/css");document.getElementsByTagName("head")[0].appendChild(n);if(n.styleSheet){n.styleSheet.cssText=e}else{n.appendChild(document.createTextNode(e))}n.addedWithCssHelper=true;if(typeof t==="undefined"||t===true){cssHelper.parsed(function(t){var r=h(n,e);for(var i in r){if(r.hasOwnProperty(i)){m(i,r[i])}}u("newStyleParsed",n)})}else{n.parsingDisallowed=true}return n},removeStyle:function(e){return e.parentNode.removeChild(e)},parsed:function(e){if(n){i(e)}else{if(typeof t!=="undefined"){if(typeof e==="function"){e(t)}}else{i(e);p()}}},mediaQueryLists:function(e){cssHelper.parsed(function(t){e(v.mediaQueryLists||g("mediaQueryLists"))})},rules:function(e){cssHelper.parsed(function(t){e(v.rules||g("rules"))})},selectors:function(e){cssHelper.parsed(function(t){e(v.selectors||g("selectors"))})},declarations:function(e){cssHelper.parsed(function(t){e(v.declarations||g("declarations"))})},properties:function(e){cssHelper.parsed(function(t){e(v.properties||g("properties"))})},broadcast:u,addListener:function(e,t){if(typeof t==="function"){if(!o[e]){o[e]={listeners:[]}}o[e].listeners[o[e].listeners.length]=t}},removeListener:function(e,t){if(typeof t==="function"&&o[e]){var n=o[e].listeners;for(var r=0;r<n.length;r++){if(n[r]===t){n.splice(r,1);r-=1}}}},getViewportWidth:function(){return y("Width")},getViewportHeight:function(){return y("Height")}}}();domReady(function(){var t;var n={LENGTH_UNIT:/[0-9]+(em|ex|px|in|cm|mm|pt|pc)$/,RESOLUTION_UNIT:/[0-9]+(dpi|dpcm)$/,ASPECT_RATIO:/^[0-9]+\/[0-9]+$/,ABSOLUTE_VALUE:/^[0-9]*(\.[0-9]+)*$/};var r=[];var i=function(){var e="css3-mediaqueries-test";var t=document.createElement("div");t.id=e;var n=cssHelper.addStyle("@media all and (width) { #"+e+" { width: 1px !important; } }",false);document.body.appendChild(t);var r=t.offsetWidth===1;n.parentNode.removeChild(n);t.parentNode.removeChild(t);i=function(){return r};return r};var s=function(){t=document.createElement("div");t.style.cssText="position:absolute;top:-9999em;left:-9999em;"+"margin:0;border:none;padding:0;width:1em;font-size:1em;";document.body.appendChild(t);if(t.offsetWidth!==16){t.style.fontSize=16/t.offsetWidth+"em"}t.style.width=""};var o=function(e){t.style.width=e;var n=t.offsetWidth;t.style.width="";return n};var u=function(e,t){var r=e.length;var i=e.substring(0,4)==="min-";var s=!i&&e.substring(0,4)==="max-";if(t!==null){var u;var a;if(n.LENGTH_UNIT.exec(t)){u="length";a=o(t)}else{if(n.RESOLUTION_UNIT.exec(t)){u="resolution";a=parseInt(t,10);var f=t.substring((a+"").length)}else{if(n.ASPECT_RATIO.exec(t)){u="aspect-ratio";a=t.split("/")}else{if(n.ABSOLUTE_VALUE){u="absolute";a=t}else{u="unknown"}}}}}var l,c;if("device-width"===e.substring(r-12,r)){l=screen.width;if(t!==null){if(u==="length"){return i&&l>=a||s&&l<a||!i&&!s&&l===a}else{return false}}else{return l>0}}else{if("device-height"===e.substring(r-13,r)){c=screen.height;if(t!==null){if(u==="length"){return i&&c>=a||s&&c<a||!i&&!s&&c===a}else{return false}}else{return c>0}}else{if("width"===e.substring(r-5,r)){l=document.documentElement.clientWidth||document.body.clientWidth;if(t!==null){if(u==="length"){return i&&l>=a||s&&l<a||!i&&!s&&l===a}else{return false}}else{return l>0}}else{if("height"===e.substring(r-6,r)){c=document.documentElement.clientHeight||document.body.clientHeight;if(t!==null){if(u==="length"){return i&&c>=a||s&&c<a||!i&&!s&&c===a}else{return false}}else{return c>0}}else{if("device-aspect-ratio"===e.substring(r-19,r)){return u==="aspect-ratio"&&screen.width*a[1]===screen.height*a[0]}else{if("color-index"===e.substring(r-11,r)){var h=Math.pow(2,screen.colorDepth);if(t!==null){if(u==="absolute"){return i&&h>=a||s&&h<a||!i&&!s&&h===a}else{return false}}else{return h>0}}else{if("color"===e.substring(r-5,r)){var p=screen.colorDepth;if(t!==null){if(u==="absolute"){return i&&p>=a||s&&p<a||!i&&!s&&p===a}else{return false}}else{return p>0}}else{if("resolution"===e.substring(r-10,r)){var d;if(f==="dpcm"){d=o("1cm")}else{d=o("1in")}if(t!==null){if(u==="resolution"){return i&&d>=a||s&&d<a||!i&&!s&&d===a}else{return false}}else{return d>0}}else{return false}}}}}}}}};var a=function(e){var t=e.getValid();var n=e.getExpressions();var r=n.length;if(r>0){for(var i=0;i<r&&t;i++){t=u(n[i].mediaFeature,n[i].value)}var s=e.getNot();return t&&!s||s&&!t}};var f=function(e){var t=e.getMediaQueries();var n={};for(var i=0;i<t.length;i++){if(a(t[i])){n[t[i].getMediaType()]=true}}var s=[],o=0;for(var u in n){if(n.hasOwnProperty(u)){if(o>0){s[o++]=","}s[o++]=u}}if(s.length>0){r[r.length]=cssHelper.addStyle("@media "+s.join("")+"{"+e.getCssText()+"}",false)}};var l=function(e){for(var t=0;t<e.length;t++){f(e[t])}if(ua.ie){document.documentElement.style.display="block";setTimeout(function(){document.documentElement.style.display=""},0);setTimeout(function(){cssHelper.broadcast("cssMediaQueriesTested")},100)}else{cssHelper.broadcast("cssMediaQueriesTested")}};var c=function(){for(var e=0;e<r.length;e++){cssHelper.removeStyle(r[e])}r=[];cssHelper.mediaQueryLists(l)};var h=0;var p=function(){var e=cssHelper.getViewportWidth();var t=cssHelper.getViewportHeight();if(ua.ie){var n=document.createElement("div");n.style.position="absolute";n.style.top="-9999em";n.style.overflow="scroll";document.body.appendChild(n);h=n.offsetWidth-n.clientWidth;document.body.removeChild(n)}var r;var s=function(){var n=cssHelper.getViewportWidth();var s=cssHelper.getViewportHeight();if(Math.abs(n-e)>h||Math.abs(s-t)>h){e=n;t=s;clearTimeout(r);r=setTimeout(function(){if(!i()){c()}else{cssHelper.broadcast("cssMediaQueriesTested")}},500)}};window.onresize=function(){var e=window.onresize||function(){};return function(){e();s()}}()};var d=document.documentElement;d.style.marginLeft="-32767px";setTimeout(function(){d.style.marginTop=""},2e4);return function(){if(!i()){cssHelper.addListener("newStyleParsed",function(e){l(e.cssHelperParsed.mediaQueryLists)});cssHelper.addListener("cssMediaQueriesTested",function(){if(ua.ie){d.style.width="1px"}setTimeout(function(){d.style.width="";d.style.marginLeft=""},0);cssHelper.removeListener("cssMediaQueriesTested",arguments.callee)});s();c()}else{d.style.marginLeft=""}p()}}());try{document.execCommand("BackgroundImageCache",false,true)}catch(e){}
/*! HTML5 Shiv vpre3.6 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
  Uncompressed source: https://github.com/aFarkas/html5shiv  */
(function(a,b){function h(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function i(){var a=l.elements;return typeof a=="string"?a.split(" "):a}function j(a){var b={},c=a.createElement,f=a.createDocumentFragment,g=f();a.createElement=function(a){if(!l.shivMethods)return c(a);var f;return b[a]?f=b[a].cloneNode():e.test(a)?f=(b[a]=c(a)).cloneNode():f=c(a),f.canHaveChildren&&!d.test(a)?g.appendChild(f):f},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/\w+/g,function(a){return c(a),g.createElement(a),'c("'+a+'")'})+");return n}")(l,g)}function k(a){var b;return a.documentShived?a:(l.shivCSS&&!f&&(b=!!h(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),g||(b=!j(a)),b&&(a.documentShived=b),a)}var c=a.html5||{},d=/^<|^(?:button|form|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,f,g;(function(){var c=b.createElement("a");c.innerHTML="<xyz></xyz>",f="hidden"in c,f&&typeof injectElementWithStyles=="function"&&injectElementWithStyles("#modernizr{}",function(b){b.hidden=!0,f=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).display=="none"}),g=c.childNodes.length==1||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()})();var l={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:k};a.html5=l,k(b)})(this,document)