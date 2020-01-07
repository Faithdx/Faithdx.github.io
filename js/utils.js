// build time:Tue Jan 07 2020 15:06:34 GMT+0800 (GMT+08:00)
function debounce(e,a,t){var i;return function(){var o=this;var n=arguments;var r=function(){i=null;if(!t)e.apply(o,n)};var c=t&&!i;clearTimeout(i);i=setTimeout(r,a);if(c)e.apply(o,n)}}function throttle(e,a,t){var i,o,n,r;var c=0;if(!t)t={};var l=function(){c=t.leading===false?0:(new Date).getTime();i=null;e.apply(o,n);if(!i)o=n=null};var s=function(){var r=(new Date).getTime();if(!c&&t.leading===false)c=r;var s=a-(r-c);o=this;n=arguments;if(s<=0||s>a){if(i){clearTimeout(i);i=null}c=r;e.apply(o,n);if(!i)o=n=null}else if(!i&&t.trailing!==false){i=setTimeout(l,s)}};return s}function isMobile(){var e=false;(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))e=true})(navigator.userAgent||navigator.vendor||window.opera);return e}function scrollTo(e){var a=$(e).offset();$("body,html").animate({scrollTop:a.top})}function loadScript(e,a){var t=document.createElement("script");t.type="text/javascript";if(t.readyState){t.onreadystatechange=function(){if(t.readyState=="loaded"||t.readyState=="complete"){t.onreadystatechange=null;a()}}}else{t.onload=function(){a()}}t.src=e;document.body.appendChild(t)}function snackbarShow(e,a,t){var a=typeof a!=="undefined"?a:false;var t=typeof t!=="undefined"?t:2e3;var i=GLOBAL_CONFIG.Snackbar.position;var o=document.documentElement.getAttribute("data-theme")==="light"?GLOBAL_CONFIG.Snackbar.bgLight:GLOBAL_CONFIG.Snackbar.bgDark;Snackbar.show({text:e,backgroundColor:o,showAction:a,duration:t,pos:i})}window.debounce=debounce;window.throttle=throttle;window.isMobile=isMobile;
//rebuild by neat 