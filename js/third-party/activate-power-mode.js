// build time:Sat Nov 23 2019 21:35:27 GMT+0800 (中国标准时间)
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.POWERMODE=e():t.POWERMODE=e()}(this,function(){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}return o.m=t,o.c=e,o.p="",o(0)}([function(t,e,o){"use strict";var n=document.createElement("canvas");n.width=window.innerWidth,n.height=window.innerHeight,n.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:999999",window.addEventListener("resize",function(){n.width=window.innerWidth,n.height=window.innerHeight}),document.body.appendChild(n);var r=n.getContext("2d"),i=[],a=0,d=!1;function l(t,e){return Math.random()*(e-t)+t}function c(t){if(u.colorful){var e=l(0,360);return"hsla("+l(e-10,e+10)+", 100%, "+l(50,80)+"%, 1)"}return window.getComputedStyle(t).color}function u(){for(var t=function(){var t,e=document.activeElement;if("TEXTAREA"===e.tagName||"INPUT"===e.tagName&&"text"===e.getAttribute("type")){var n=o(1)(e,e.selectionEnd);return t=e.getBoundingClientRect(),{x:n.left+t.left,y:n.top+t.top,color:c(e)}}var r=window.getSelection();if(r.rangeCount){var i=r.getRangeAt(0),a=i.startContainer;return a.nodeType===document.TEXT_NODE&&(a=a.parentNode),{x:(t=i.getBoundingClientRect()).left,y:t.top,color:c(a)}}return{x:0,y:0,color:"transparent"}}(),e=5+Math.round(10*Math.random());e--;)i[a]=(n=t.x,r=t.y,l=t.color,{x:n,y:r,alpha:1,color:l,velocity:{x:2*Math.random()-1,y:2*Math.random()-3.5}}),a=(a+1)%500;var n,r,l;if(u.shake){var f=1+2*Math.random(),h=f*(.5<Math.random()?-1:1),s=f*(.5<Math.random()?-1:1);document.body.style.marginLeft=h+"px",document.body.style.marginTop=s+"px",setTimeout(function(){document.body.style.marginLeft="",document.body.style.marginTop=""},75)}d||requestAnimationFrame(p)}function p(){d=!0,r.clearRect(0,0,n.width,n.height);for(var t=!1,e=n.getBoundingClientRect(),o=0;o<i.length;++o){var a=i[o];a.alpha<=.1||(a.velocity.y+=.075,a.x+=a.velocity.x,a.y+=a.velocity.y,a.alpha*=.96,r.globalAlpha=a.alpha,r.fillStyle=a.color,r.fillRect(Math.round(a.x-1.5)-e.left,Math.round(a.y-1.5)-e.top,3,3),t=!0)}t?requestAnimationFrame(p):d=!1}u.shake=!0,u.colorful=!1,t.exports=u},function(t,e){!function(){var e=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],o=null!=window.mozInnerScreenX;function n(t,n,r){var i=r&&r.debug||!1;if(i){var a=document.querySelector("#input-textarea-caret-position-mirror-div");a&&a.parentNode.removeChild(a)}var d=document.createElement("div");d.id="input-textarea-caret-position-mirror-div",document.body.appendChild(d);var l=d.style,c=window.getComputedStyle?getComputedStyle(t):t.currentStyle;l.whiteSpace="pre-wrap","INPUT"!==t.nodeName&&(l.wordWrap="break-word"),l.position="absolute",i||(l.visibility="hidden"),e.forEach(function(t){l[t]=c[t]}),o?t.scrollHeight>parseInt(c.height)&&(l.overflowY="scroll"):l.overflow="hidden",d.textContent=t.value.substring(0,n),"INPUT"===t.nodeName&&(d.textContent=d.textContent.replace(/\s/g," "));var u=document.createElement("span");u.textContent=t.value.substring(n)||".",d.appendChild(u);var p={top:u.offsetTop+parseInt(c.borderTopWidth),left:u.offsetLeft+parseInt(c.borderLeftWidth)};return i?u.style.backgroundColor="#aaa":document.body.removeChild(d),p}void 0!==t&&void 0!==t.exports?t.exports=n:window.getCaretCoordinates=n}()}])});
//rebuild by neat 