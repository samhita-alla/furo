!function(e,t){"function"==typeof define&&define.amd?define([],function(){return t(e)}):"object"==typeof exports?module.exports=t(e):e.Gumshoe=t(e)}("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,function(u){"use strict";function d(e,t,n){n.settings.events&&(n=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n}),t.dispatchEvent(n))}function n(e){var t=0;if(e.offsetParent)for(;e;)t+=e.offsetTop,e=e.offsetParent;return 0<=t?t:0}function f(e){e&&e.sort(function(e,t){return n(e.content)<n(t.content)?-1:1})}function l(e,t,n){return e=e.getBoundingClientRect(),t="function"==typeof(t=t).offset?parseFloat(t.offset()):parseFloat(t.offset),n?parseInt(e.bottom,10)<(u.innerHeight||document.documentElement.clientHeight):parseInt(e.top,10)<=t}function s(){return Math.ceil(u.innerHeight+u.pageYOffset)>=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)}function m(e,t){var n,o,r=e[e.length-1];if(n=r,o=t,!(!s()||!l(n.content,o,!0)))return r;for(var c=e.length-1;0<=c;c--)if(l(e[c].content,t))return e[c]}function h(e,t){var n;!e||(n=e.nav.closest("li"))&&(n.classList.remove(t.navClass),e.content.classList.remove(t.contentClass),o(n,t),d("gumshoeDeactivate",n,{link:e.nav,content:e.content,settings:t}))}var v={navClass:"active",contentClass:"active",nested:!1,nestedClass:"active",offset:0,reflow:!1,events:!0},o=function(e,t){t.nested&&e.parentNode&&((e=e.parentNode.closest("li"))&&(e.classList.remove(t.nestedClass),o(e,t)))},p=function(e,t){!t.nested||(e=e.parentNode.closest("li"))&&(e.classList.add(t.nestedClass),p(e,t))};return function(e,t){var n,r,c,o,l,s={setup:function(){n=document.querySelectorAll(e),r=[],Array.prototype.forEach.call(n,function(e){var t=document.getElementById(decodeURIComponent(e.hash.substr(1)));t&&r.push({nav:e,content:t})}),f(r)}};s.detect=function(){var e,t,n,o=m(r,l);o?c&&o.content===c.content||(h(c,l),t=l,!(e=o)||(n=e.nav.closest("li"))&&(n.classList.add(t.navClass),e.content.classList.add(t.contentClass),p(n,t),d("gumshoeActivate",n,{link:e.nav,content:e.content,settings:t})),c=o):c&&(h(c,l),c=null)};function i(e){o&&u.cancelAnimationFrame(o),o=u.requestAnimationFrame(s.detect)}function a(e){o&&u.cancelAnimationFrame(o),o=u.requestAnimationFrame(function(){f(r),s.detect()})}s.destroy=function(){c&&h(c,l),u.removeEventListener("scroll",i,!1),l.reflow&&u.removeEventListener("resize",a,!1),l=o=c=n=r=null};return l=function(){var n={};return Array.prototype.forEach.call(arguments,function(e){for(var t in e){if(!e.hasOwnProperty(t))return;n[t]=e[t]}}),n}(v,t||{}),s.setup(),s.detect(),u.addEventListener("scroll",i,!1),l.reflow&&u.addEventListener("resize",a,!1),s}});var tocScroll=null,header=null;function scrollHandlerForHeader(){0==Math.floor(header.getBoundingClientRect().top)?header.classList.add("scrolled"):header.classList.remove("scrolled")}function scrollHandlerForTOC(e){null!==tocScroll&&(0==e?tocScroll.scrollTo(0,0):Math.ceil(e)>=Math.floor(document.documentElement.scrollHeight-window.innerHeight)?tocScroll.scrollTo(0,tocScroll.scrollHeight):document.querySelector(".scroll-current"))}function scrollHandler(e){scrollHandlerForHeader(),scrollHandlerForTOC(e)}function setupScrollHandler(){var t,n=!1;window.addEventListener("scroll",function(e){t=window.scrollY,n||(window.requestAnimationFrame(function(){scrollHandler(t),n=!1}),n=!0)}),window.scroll()}function setupScrollSpy(){null!==tocScroll&&new Gumshoe(".toc-tree a",{reflow:!0,recursive:!0,navClass:"scroll-current"})}function setup(){setupScrollHandler(),setupScrollSpy()}function main(){document.body.parentNode.classList.remove("no-js"),header=document.querySelector("header"),tocScroll=document.querySelector(".toc-scroll"),setup()}document.addEventListener("DOMContentLoaded",main);var toggleCurrentSubsection=function(){$(".sidebar-tree").children("ul.current").each(function(){$(this).css("display","block"),$(this).prev("p.caption").css("display","block")})},highlightCurrentSubsection=function(){var e=$(".sidebar-tree").children("ul.current").prev("p.caption").text();$(".sidebar-tree").children("ul").first().find("li a").each(function(){$(this).text()===e&&$(this).css("font-weight","bold")})};$(document).ready(function(){toggleCurrentSubsection(),highlightCurrentSubsection()});
//# sourceMappingURL=main.js.map
