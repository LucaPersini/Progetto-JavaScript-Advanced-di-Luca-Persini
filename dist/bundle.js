(()=>{var e={122:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,'*{padding:0;margin:0;box-sizing:border-box}header{width:100%;position:sticky;top:0;margin-inline:auto;background-color:#fff}header h1{text-align:center;font-family:"IBM Plex Mono",monospace;font-weight:300;font-size:clamp(1.5rem,2.5vw,2.2rem);padding:1rem}body{display:flex;flex-direction:column;align-items:center}.content{width:90%;margin-inline:auto;display:flex;align-items:left;flex-direction:column}.content .article{padding:1.5rem;border-left:1px solid #c9c9c9}.content .article h2{font-size:clamp(1.2rem,2.5vw,1.6rem);font-family:"Playfair Display",serif;font-weight:600;margin-bottom:1.2rem}.content .article p,.content .article strong,.content .article span,.content .article a{font-size:clamp(.7rem,2vw,1rem);font-family:"Roboto",sans-serif}.content .article .date{color:#868686}.content .article .visitButton{text-decoration:none;color:#fff;background-color:#00a2ff;padding:.4rem .6rem;border-radius:50vh;transition:all .1s}.content .loadMore_button{cursor:pointer;border:none;background-color:#d9d9d9;padding:.7rem .9rem;border-radius:50vh;font-size:clamp(.8rem,2vw,1.1rem);font-family:"Roboto",sans-serif;margin:2rem;width:-moz-fit-content;width:fit-content;transition:all .1s;margin-inline:auto}.content .visitButton:active,.content .loadMore_button:active{opacity:.6}.shadow-header{box-shadow:rgba(0,0,0,.4) 0px 2px 4px,rgba(0,0,0,.3) 0px 7px 13px -3px,rgba(0,0,0,.2) 0px -3px 0px inset;transition:all .3s}',""]);const s=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},957:()=>{function e(){return axios.get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty").then((e=>e.data)).catch((e=>{e.response&&(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)),e.request?console.log(e.request):console.log("Error",e.message)}))}let t=document.querySelector(".content"),n=document.querySelector(".loadMore_button");function r(e){return axios.get(`https://hacker-news.firebaseio.com/v0/item/${e}.json?print=pretty`).then((e=>{let t=new Date(1e3*e.data.time);return[e.data.title,e.data.by,e.data.url,t.toLocaleDateString("default")]})).catch((e=>{e.response&&(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)),e.request?console.log(e.request):console.log("Error",e.message)}))}!async function(){let o=await e(),a="",i=0;for(id of o){if(i<10){let e=await r(id);a+=`\n        <div class="article">\n          <div>\n            <p>Published by <strong class="author">${e[1]}</strong> &#183 <span class="date">${e[3]}</span></p>\n            <h2 class="article_title">${e[0]}</h2>\n            <a href="${e[2]}" class="visitButton" target="_blank">Visit</a>\n          </div>\n        </div>\n      `}i++}let s=document.createElement("div");t.insertBefore(s,n),s.innerHTML=a}(),n.addEventListener("click",(()=>{!async function(){let o=await e(),a=document.querySelectorAll(".article").length,i="",s=0;for(id of o){if(s>=a&&s<10+a){let e=await r(id);i+=`\n        <div class="article">\n          <p>Published by <span class="author">${e[1]}</span> &#183 <span class="date">${e[3]}</span></p>\n          <h2 class="article_title">${e[0]}</h2>\n          <a href="${e[2]}" class="visitButton" target="_blank">Visit</a>\n        </div>\n      `}s++}let c=document.createElement("div");t.insertBefore(c,n),c.innerHTML=i,c.style.opacity=0,document.querySelectorAll(".article").length==o.length&&(n.style.display="none"),function(e){let t=0,n=setInterval((function(){t<=1?(t+=.1,e.style.opacity=t):clearInterval(n)}),30)}(c)}()})),window.addEventListener("scroll",(()=>{let e=document.querySelector(".header");window.scrollY>0?e.classList.add("shadow-header"):e.classList.remove("shadow-header")}))}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),s=n(565),c=n.n(s),l=n(216),d=n.n(l),u=n(589),p=n.n(u),f=n(122),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var v=n(957);new(n.n(v)())})()})();