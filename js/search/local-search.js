// build time:Wed Dec 11 2019 18:18:23 GMT+0800 (GMT+08:00)
$(function(){var e=false;$("a.social-icon.search").on("click",function(){$("body").css("width","100%");$("body").css("overflow","hidden");$(".search-dialog").animate({},function(){$(".search-dialog").css({display:"block"}),300});$("#local-search-input input").focus();$(".search-mask").fadeIn();if(!e){t(GLOBAL_CONFIG.localSearch.path);e=true}document.addEventListener("keydown",function i(e){if(e.code==="Escape"){a();document.removeEventListener("keydown",i)}})});var a=function(){$("body").css("width","");$("body").css("overflow","");$(".search-dialog").css({animation:"search_close .5s"});$(".search-dialog").animate({},function(){setTimeout(function(){$(".search-dialog").css({animation:"",display:"none"})},500)});$(".search-mask").fadeOut()};$(".search-mask, .search-close-button").on("click",a);function t(e){$.ajax({url:GLOBAL_CONFIG.root+e,dataType:"xml",success:function(e){var a=$("entry",e).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get();var t=$("#local-search-input input")[0];var i=$("#local-hits")[0];t.addEventListener("input",function(){var e='<div class="search-result-list">';var t=this.value.trim().toLowerCase().split(/[\s]+/);i.innerHTML="";if(this.value.trim().length<=0){$(".local-search-stats__hr").hide();return}var s=0;a.forEach(function(a){var i=true;var c=a.title.trim().toLowerCase();var r=a.content.trim().replace(/<[^>]+>/g,"").toLowerCase();var n=a.url;var o=-1;var l=-1;if(c!==""&&r!==""){t.forEach(function(e,a){o=c.indexOf(e);l=r.indexOf(e);if(o<0&&l<0){i=false}else{if(l<0){l=0}}})}if(i){e+='<div class="local-search__hit-item"><a href="'+n+'" class="search-result-title">'+c+"</a>"+"</div>";s+=1;$(".local-search-stats__hr").show()}});if(s===0){e+='<div id="local-search__hits-empty">'+GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/,this.value.trim())+"</div>"}i.innerHTML=e})}})}});
//rebuild by neat 