// build time:Thu Dec 12 2019 17:35:44 GMT+0800 (GMT+08:00)
$(function(){$("a.social-icon.search").on("click",function(){$("body").css("width","100%");$("body").css("overflow","hidden");$(".search-dialog").animate({},function(){$(".search-dialog").css({display:"block"}),300});$(".ais-search-box--input").focus();$(".search-mask").fadeIn();document.addEventListener("keydown",function i(e){if(e.code=="Escape"){a();document.removeEventListener("keydown",i)}})});var a=function(){$("body").css("width","");$("body").css("overflow","");$(".search-dialog").css({animation:"search_close .5s"});$(".search-dialog").animate({},function(){setTimeout(function(){$(".search-dialog").css({animation:"",display:"none"})},500)});$(".search-mask").fadeOut()};$(".search-mask, .search-close-button").on("click",a);var i=GLOBAL_CONFIG.algolia;var e=i.appId&&i.apiKey&&i.indexName;if(!e){return console.error("Algolia setting is invalid!")}var s=instantsearch({appId:i.appId,apiKey:i.apiKey,indexName:i.indexName,searchParameters:{hitsPerPage:i.hits.per_page||10},searchFunction:function(a){var i=$("#algolia-search-input").find("input");if(i.val()){a.search()}}});s.addWidget(instantsearch.widgets.searchBox({container:"#algolia-search-input",reset:false,magnifier:false,placeholder:GLOBAL_CONFIG.algolia.languages.input_placeholder}));s.addWidget(instantsearch.widgets.hits({container:"#algolia-hits",templates:{item:function(a){var i=a.permalink?a.permalink:GLOBAL_CONFIG.root+a.path;return'<a href="'+i+'" class="algolia-hit-item-link">'+a._highlightResult.title.value+"</a>"},empty:function(a){return'<div id="algolia-hits-empty">'+GLOBAL_CONFIG.algolia.languages.hits_empty.replace(/\$\{query}/,a.query)+"</div>"}},cssClasses:{item:"algolia-hit-item"}}));s.addWidget(instantsearch.widgets.stats({container:"#algolia-stats",templates:{body:function(a){var i=GLOBAL_CONFIG.algolia.languages.hits_stats.replace(/\$\{hits}/,a.nbHits).replace(/\$\{time}/,a.processingTimeMS);return"<hr>"+i+'<span class="algolia-logo pull_right">'+'  <img src="'+GLOBAL_CONFIG.root+'img/algolia.svg" alt="Algolia" />'+"</span>"}}}));s.addWidget(instantsearch.widgets.pagination({container:"#algolia-pagination",scrollTo:false,showFirstLast:false,labels:{first:'<i class="fa fa-angle-double-left"></i>',last:'<i class="fa fa-angle-double-right"></i>',previous:'<i class="fa fa-angle-left"></i>',next:'<i class="fa fa-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",active:"current",disabled:"disabled-item"}}));s.start()});
//rebuild by neat 