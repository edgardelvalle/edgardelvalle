(window.webpackJsonp=window.webpackJsonp||[]).push([[9,8,10],{"5hz7":function(e,t,r){e.exports=r.p+"static/Memoji-b8f2190e0308a14cacc8bad3ded88e37.png"},"66XX":function(e,t,r){},"8+s/":function(e,t,r){"use strict";var n,a=r("q1tI"),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){s.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},o.render=function(){return i.createElement(n,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(f,"canUseDOM",c),f}}},Dtc0:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),i=r("qhky"),o=r("Wbzz"),c=r("vOnD"),l=r("qPr+"),s=r.n(l),u=c.a.aside.withConfig({displayName:"Navbar__Container",componentId:"gs30e0-0"})(["position:sticky;top:0;font-weight:400;background-color:rgba(255,255,255,0.95);height:7vh;min-height:50px;display:flex;justify-content:space-between;align-items:center;width:100%;.logo-container{margin-left:20px;.name{color:#353535;font-weight:700;padding:0;margin:0;text-transform:uppercase;font-size:1.5rem;letter-spacing:-1px;.last-name{font-weight:300;}@media screen and (max-width:700px){display:none;}}.logo{margin-right:10px;height:30px;display:flex;align-items:center;justify-content:center;}a{text-decoration:none;display:flex;align-items:center;}}.link-list{margin:0;padding:0;list-style-type:none;display:flex;}.link-item{color:#484848;font-weight:600;font-size:0.9rem;text-transform:uppercase;transition:ease 0.1s;a{color:inherit;text-decoration:none;}a:hover{color:#767676;}a:visited{color:inherit;}a:first-child{margin-right:20px;}}"]),f=function(){return a.a.createElement(u,null,a.a.createElement("div",{className:"logo-container"},a.a.createElement("a",{href:"#"},a.a.createElement("img",{className:"logo",src:s.a,alt:""}),a.a.createElement("p",{className:"name"},"Edgar",a.a.createElement("span",{className:"last-name"},"DelValle")))),a.a.createElement("ul",{className:"link-list"},a.a.createElement("li",{className:"link-item"},a.a.createElement(o.a,{to:"#contact"},"Contact")),a.a.createElement("li",{className:"link-item"},a.a.createElement(o.a,{to:"#projects"},"Projects")),a.a.createElement("li",{className:"link-item"},a.a.createElement(o.a,{to:"#about-me"},"About Me"))))},p=r("en70"),m=(r("66XX"),r("f1HW")),d=r("mB/J");t.default=function(){return n.createElement(n.Fragment,null,n.createElement(i.a,null,n.createElement("title",null,"Edgar Del Valle")),n.createElement(f,null),n.createElement(d.default,null),n.createElement(p.default,null),n.createElement(m.default,null))}},"S+ay":function(e,t,r){e.exports=r.p+"static/MovieLibrary-58061595a06c53b53d154c0df5987f0b.png"},bmMU:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,a="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;var c,l,s,u;if(Array.isArray(t)){if((c=t.length)!=o.length)return!1;for(l=c;0!=l--;)if(!e(t[l],o[l]))return!1;return!0}if(n&&t instanceof Map&&o instanceof Map){if(t.size!==o.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;for(u=t.entries();!(l=u.next()).done;)if(!e(l.value[1],o.get(l.value[0])))return!1;return!0}if(a&&t instanceof Set&&o instanceof Set){if(t.size!==o.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(o)){if((c=t.length)!=o.length)return!1;for(l=c;0!=l--;)if(t[l]!==o[l])return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(o,s[l]))return!1;if(r&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!t.$$typeof)&&!e(t[s[l]],o[s[l]]))return!1;return!0}return t!=t&&o!=o}(e,t)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}},en70:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),i=r("vOnD"),o=r("S+ay"),c=r.n(o),l=[{title:"Movie Library",tools:["React","React-Router","Redux","styled-components","Axios"],site:"https://movies.edgardelvalle.com",sourcecode:"https://github.com/edgardelvalle/moviesearch3"}],s=i.a.div.withConfig({displayName:"Projects__Container",componentId:"sc-17twvtk-0"})(["height:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;background-color:#f7f7f7;.header{align-self:flex-start;font-size:3rem;margin-top:7%;margin-left:5%;}.project-list{margin-top:3%;}.project{width:80vw;display:flex;flex-wrap:wrap;margin-bottom:10%;@media (max-width:768px){width:100vw;}}.project-screenshot{width:60%;height:100%;flex-grow:4;border-radius:20px;margin:1rem;box-shadow:0 2.8px 2.2px rgba(0,0,0,0.034),0 6.7px 5.3px rgba(0,0,0,0.048),0 12.5px 10px rgba(0,0,0,0.06),0 22.3px 17.9px rgba(0,0,0,0.072),0 41.8px 33.4px rgba(0,0,0,0.086),0 100px 80px rgba(0,0,0,0.12);@media (max-width:768px){width:100vw;margin:0;border-radius:0;box-shadow:none;left:0;}}.project-details{@media (max-width:768px){padding:5%;}}.project-tools{color:#6a6a6a;display:flex;flex-direction:row;flex-wrap:wrap;list-style-type:none;padding:0;}.tool{font-weight:300;margin-right:10px;margin-bottom:10px;}.project-link{text-decoration:none;font-weight:700;padding:10px 13px;border-radius:20px;border:2px solid #0088ff;margin:20px 20px 0 0;color:#0088ff;transition:all ease-in-out 50ms;:visited{color:#0088ff;}:hover{background-color:#0088ff;color:white;}a{padding:0;margin:0;}}"]);t.default=function(){return a.a.createElement(s,{id:"projects"},a.a.createElement("h1",{className:"header"},"Projects"),a.a.createElement("div",{className:"project-list"},l.map((function(e){return a.a.createElement("div",{className:"project"},a.a.createElement("img",{className:"project-screenshot",src:c.a,alt:"Movie Library Screenshot"}),a.a.createElement("div",{className:"project-details"},a.a.createElement("h1",{className:"project-title"},e.title),a.a.createElement("ul",{className:"project-tools"},e.tools.map((function(e){return a.a.createElement("li",{className:"tool"},e)}))),a.a.createElement("a",{rel:"noreferrer",target:"_blank",className:"project-link",href:e.site},"Demo"),a.a.createElement("a",{rel:"noreferrer",target:"_blank",className:"project-link",href:e.sourcecode},"Source Code")))}))))}},f1HW:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),i=r("vOnD"),o=r("5hz7"),c=r.n(o),l=i.a.div.withConfig({displayName:"AboutMe__Container",componentId:"j233a7-0"})(["height:100%;display:flex;justify-content:center;color:#242424;flex-direction:column;align-items:center;.header{align-self:flex-start;font-size:3rem;margin-left:5%;margin-top:7%;}.hero{width:80vw;border-radius:25px;padding:20px;margin-top:3%;}.info{display:flex;flex-wrap:wrap;justify-content:center;}.memoji{height:200px;}.summary{flex-grow:2;}.greeting{font-size:1.5rem;}.name{font-weight:700;}.summary-statement{line-height:2rem;}.skill-list{margin:0;padding:0;list-style-type:none;display:flex;}.skill-item{margin:10px;}"]);t.default=function(){return a.a.createElement(l,{id:"about-me"},a.a.createElement("h1",{className:"header"},"About me..."),a.a.createElement("div",{className:"hero"},a.a.createElement("div",{className:"info"},a.a.createElement("img",{className:"memoji",src:c.a,alt:"Edgar's memoji"}),a.a.createElement("div",{className:"summary"},a.a.createElement("p",{className:"greeting"},"Hello, I'm ",a.a.createElement("span",{className:"name"},"Edgar Del Valle"),"."),a.a.createElement("p",{className:"summary-statement"},"I am a student at California State University San Marcos majoring in Computer Science: Computer Information Systems. I am currently searching for my first web developer role."),a.a.createElement("p",{className:"skill-statement"},"My skills include:"),a.a.createElement("ul",{className:"skill-list"},a.a.createElement("li",{className:"skill-item"},"HTML"),a.a.createElement("li",{className:"skill-item"},"CSS"),a.a.createElement("li",{className:"skill-item"},"JavaScript"),a.a.createElement("li",{className:"skill-item"},"ReactJS"))))))}},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return he}));r("E9XD");var n,a,i,o,c=r("17x9"),l=r.n(c),s=r("8+s/"),u=r.n(s),f=r("bmMU"),p=r.n(f),m=r("q1tI"),d=r.n(m),h=r("YVoz"),y=r.n(h),g="bodyAttributes",b="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(w).map((function(e){return w[e]})),"charset"),E="cssText",x="href",C="http-equiv",A="innerHTML",j="itemprop",O="name",S="property",k="rel",N="src",I="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",M="defer",R="encodeSpecialCharacters",_="onChangeClientState",D="titleTemplate",q=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),H=[w.NOSCRIPT,w.SCRIPT,w.STYLE],z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},F=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=Q(e,w.TITLE),r=Q(e,D);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,L);return t||n||void 0},J=function(e){return Q(e,_)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},G=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],l=c.toLowerCase();-1===t.indexOf(l)||r===k&&"canonical"===e[r].toLowerCase()||l===k&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==A&&c!==E&&c!==j||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][s]&&(a[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],l=y()({},n[c],a[c]);n[c]=l}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Z=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){Z(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:e.requestAnimationFrame||Z,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;le(w.BODY,n),le(w.HTML,a),ce(f,p);var m={baseTag:se(w.BASE,r),linkTags:se(w.LINK,i),metaTags:se(w.META,o),noscriptTags:se(w.NOSCRIPT,c),scriptTags:se(w.SCRIPT,s),styleTags:se(w.STYLE,u)},d={},h={};Object.keys(m).forEach((function(e){var t=m[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(h[e]=m[e].oldTags)})),t&&t(),l(e,d,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),le(w.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var l=o[c],s=t[l]||"";r.getAttribute(l)!==s&&r.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=i.indexOf(l);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);a.length===i.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==o.join(",")&&r.setAttribute("data-react-helmet",o.join(","))}},se=function(e,t){var r=document.head||document.querySelector(w.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===A)r.innerHTML=t.innerHTML;else if(n===E)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[P[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=fe(r,n),[d.a.createElement(w.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=ue(r),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+K(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case g:case b:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=P[e]||e;if(r===A||r===E){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),d.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===A||e===E)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+K(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},me=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:pe(w.BASE,t,n),bodyAttributes:pe(g,r,n),htmlAttributes:pe(b,a,n),link:pe(w.LINK,i,n),meta:pe(w.META,o,n),noscript:pe(w.NOSCRIPT,c,n),script:pe(w.SCRIPT,l,n),style:pe(w.STYLE,s,n),title:pe(w.TITLE,{title:f,titleAttributes:p},n)}},de=u()((function(e){return{baseTag:$([x,I],e),bodyAttributes:X(g,e),defer:Q(e,M),encode:Q(e,R),htmlAttributes:X(b,e),linkTags:G(w.LINK,[k,x],e),metaTags:G(w.META,[O,T,C,S,j],e),noscriptTags:G(w.NOSCRIPT,[A],e),onChangeClientState:J(e),scriptTags:G(w.SCRIPT,[N,A],e),styleTags:G(w.STYLE,[E],e),title:W(e),titleAttributes:X(v,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),me)((function(){return null})),he=(a=de,o=i=function(e){function t(){return B(this,t),V(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return Y({},n,((t={})[r.type]=[].concat(n[r.type]||[],[Y({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case w.TITLE:return Y({},a,((t={})[n.type]=o,t.titleAttributes=Y({},i),t));case w.BODY:return Y({},a,{bodyAttributes:Y({},i)});case w.HTML:return Y({},a,{htmlAttributes:Y({},i)})}return Y({},a,((r={})[n.type]=Y({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=Y({},t);return Object.keys(e).forEach((function(t){var n;r=Y({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return d.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[q[r]||r]=e[r],t}),t)}(F(a,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=F(e,["children"]),n=Y({},r);return t&&(n=this.mapChildrenToProps(t,n)),d.a.createElement(a,n)},U(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(d.a.Component),i.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind}).call(this,r("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-index-jsx-16315b329c1d0f0379f6.js.map