// build time:Tue Jan 07 2020 15:06:34 GMT+0800 (GMT+08:00)
!function(){var e=document.getElementById("canvas_nest");var n=e.getAttribute("mobile");if(n=="false"&&/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){return}function t(e,n,t){return e.getAttribute(n)||t}function i(e){return document.getElementsByTagName(e)}function o(){var e=i("script"),n=e.length,o=e[n-1];return{l:n,z:t(o,"zIndex",-1),o:t(o,"opacity",.5),c:t(o,"color","0,0,0"),n:t(o,"count",99)}}function a(){m=u.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,x=u.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}function c(){l.clearRect(0,0,m,x);var e=[y].concat(f);var n,t,i,o,a,u;f.forEach(function(c){c.x+=c.xa,c.y+=c.ya,c.xa*=c.x>m||c.x<0?-1:1,c.ya*=c.y>x||c.y<0?-1:1,l.fillRect(c.x-.5,c.y-.5,1,1);for(t=0;t<e.length;t++){n=e[t];if(c!==n&&null!==n.x&&null!==n.y){o=c.x-n.x,a=c.y-n.y,u=o*o+a*a;u<n.max&&(n===y&&u>=n.max/2&&(c.x-=.03*o,c.y-=.03*a),i=(n.max-u)/n.max,l.beginPath(),l.lineWidth=i/2,l.strokeStyle="rgba("+d.c+","+(i+.2)+")",l.moveTo(c.x,c.y),l.lineTo(n.x,n.y),l.stroke())}}e.splice(e.indexOf(c),1)}),s(c)}var u=document.createElement("canvas"),d=o(),r="c_n"+d.l,l=u.getContext("2d"),m,x,s=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/45)},w=Math.random,y={x:null,y:null,max:2e4};u.id=r;u.style.cssText="position:fixed;top:0;left:0;z-index:"+d.z+";opacity:"+d.o;i("body")[0].appendChild(u);a(),window.onresize=a;window.onmousemove=function(e){e=e||window.event,y.x=e.clientX,y.y=e.clientY},window.onmouseout=function(){y.x=null,y.y=null};for(var f=[],h=0;d.n>h;h++){var g=w()*m,v=w()*x,b=2*w()-1,p=2*w()-1;f.push({x:g,y:v,xa:b,ya:p,max:6e3})}setTimeout(function(){c()},100)}();
//rebuild by neat 