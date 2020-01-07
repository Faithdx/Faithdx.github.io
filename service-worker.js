/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/微云同步/Hexo-Blog/blog/public/2019-料你也不想再过一次.html","0749b6f0be533d5244d0d55b212f9c15"],["D:/微云同步/Hexo-Blog/blog/public/CSS技巧-一-之隐藏滚动条.html","7ce1812a43f335ea72a6096139d83e5b"],["D:/微云同步/Hexo-Blog/blog/public/Coding-Pages申请SSL-TLS证书错误.html","47f89d314fe95ea23f52d14ce36f586e"],["D:/微云同步/Hexo-Blog/blog/public/JavaScript面试题收藏.html","bf1d9edd4015c78cd61e3c31e5c92780"],["D:/微云同步/Hexo-Blog/blog/public/Markdown基础语法.html","c1bdfbc2a907042fb274cc2820cb36da"],["D:/微云同步/Hexo-Blog/blog/public/SASS的基础语法-一.html","ab1fd8d992980a43ede2a38bf885c81c"],["D:/微云同步/Hexo-Blog/blog/public/WPF学习笔记-一-入门基础.html","5e5ae4f5aa0150909ef1083b4f01063b"],["D:/微云同步/Hexo-Blog/blog/public/WPF学习笔记-三-WPF模板.html","3dda32456c97502b7375e7172bacac74"],["D:/微云同步/Hexo-Blog/blog/public/WPF学习笔记-二-资源与触发器.html","6adc9b762a77c6246a3252721d7cd478"],["D:/微云同步/Hexo-Blog/blog/public/about/index.html","f2fe3062b5c870629eafe522837160a2"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/06/index.html","fbf23b8427dc2b552786e9d9aa3137b8"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/07/index.html","20ec7529fd5739027d875ee2f0bc5b08"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/08/index.html","5323939b360d66017aa4650cb23880ac"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/09/index.html","5c2b5e35536edda4b1f84be0afc53e04"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/10/index.html","40c4d89a676e71c4c11245aceddc375b"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/12/index.html","39e2cfbee71b0506c6e6ecf5c052e52a"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/index.html","dfaed26d86b2c920631dc6440bb7311d"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/page/2/index.html","6f468d8f360085e6e24be470c37bc168"],["D:/微云同步/Hexo-Blog/blog/public/archives/2020/01/index.html","0cd60b8e1a632a3ac09fa6f6c317cef5"],["D:/微云同步/Hexo-Blog/blog/public/archives/2020/index.html","81f1076b3e5c38a383e7363980ee928b"],["D:/微云同步/Hexo-Blog/blog/public/archives/index.html","dd8c5a9f0cbd653027dfe761994669d9"],["D:/微云同步/Hexo-Blog/blog/public/archives/page/2/index.html","bd665f5f086efce7a2541b8b5f00d7bc"],["D:/微云同步/Hexo-Blog/blog/public/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["D:/微云同步/Hexo-Blog/blog/public/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["D:/微云同步/Hexo-Blog/blog/public/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["D:/微云同步/Hexo-Blog/blog/public/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["D:/微云同步/Hexo-Blog/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/微云同步/Hexo-Blog/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/微云同步/Hexo-Blog/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/微云同步/Hexo-Blog/blog/public/books/index.html","b31a7481a935c99eba1fa1411fe7fbad"],["D:/微云同步/Hexo-Blog/blog/public/categories/Blog/index.html","71978b03a1924903d308b53c0f986e16"],["D:/微云同步/Hexo-Blog/blog/public/categories/CSS/CSS技巧收录/index.html","cc39ccce4488a600f2087a2a776a3567"],["D:/微云同步/Hexo-Blog/blog/public/categories/CSS/index.html","f5483599a449aff55096d62402d63a29"],["D:/微云同步/Hexo-Blog/blog/public/categories/JavaScript/index.html","02525fe638a6e0ec687b6058541c15ec"],["D:/微云同步/Hexo-Blog/blog/public/categories/Microsoft之旅/Asp-NET-Core/index.html","6be42036c55852305a52154d2ee30f94"],["D:/微云同步/Hexo-Blog/blog/public/categories/Microsoft之旅/C/index.html","3b2882d9dc6cf354fc8f48f3ccd2506a"],["D:/微云同步/Hexo-Blog/blog/public/categories/Microsoft之旅/WPF/index.html","93c1a302cce813960483a8ab79839cc3"],["D:/微云同步/Hexo-Blog/blog/public/categories/Microsoft之旅/index.html","0fb10ea60309637d3dd122e019aaabfe"],["D:/微云同步/Hexo-Blog/blog/public/categories/index.html","30769fa7f66cfb56fe4307b681af91c2"],["D:/微云同步/Hexo-Blog/blog/public/categories/大前端/index.html","80397737e609183016401837378e8378"],["D:/微云同步/Hexo-Blog/blog/public/categories/学习笔记/index.html","e03fa3ab6c1bd14f00f65d5b66f72e29"],["D:/微云同步/Hexo-Blog/blog/public/categories/生活随笔/index.html","daf26e2ce617d21cc8799c6e4b0059bb"],["D:/微云同步/Hexo-Blog/blog/public/categories/踩坑记录/index.html","af8bc4e63fe8251f26e73d7501c48fa5"],["D:/微云同步/Hexo-Blog/blog/public/change_log/index.html","0a3c6202fea2ec15c4d3396ee0ee157f"],["D:/微云同步/Hexo-Blog/blog/public/css/index.css","8877fd4c109bb621ba9a4ea1ce8525b9"],["D:/微云同步/Hexo-Blog/blog/public/css/var.css","9bb1e36f8863066ed9f5d5a3d2c6f497"],["D:/微云同步/Hexo-Blog/blog/public/hello-world.html","6d510ab70abef783f0cdb165c1895e22"],["D:/微云同步/Hexo-Blog/blog/public/hexo博客常用指令.html","0993e358dffb6c987c6d9d1e719f487a"],["D:/微云同步/Hexo-Blog/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/微云同步/Hexo-Blog/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/微云同步/Hexo-Blog/blog/public/img/alipay.jpg","716bd9ffa85a427056d0529e4906d370"],["D:/微云同步/Hexo-Blog/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/微云同步/Hexo-Blog/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/微云同步/Hexo-Blog/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/微云同步/Hexo-Blog/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/微云同步/Hexo-Blog/blog/public/img/wechat.png","1ac24fe798d9cd9192a805dfcee73f12"],["D:/微云同步/Hexo-Blog/blog/public/index.html","bf7f82c298e78a7a19e73838d966a2b9"],["D:/微云同步/Hexo-Blog/blog/public/js/baidupush.js","4aa9be523f6023b45ccb3c61127f7708"],["D:/微云同步/Hexo-Blog/blog/public/js/main.js","fad811598880d938c0e617c40e7aeb94"],["D:/微云同步/Hexo-Blog/blog/public/js/runtimeshow.js","a89ce938adbef67a95c31c67ded05d3b"],["D:/微云同步/Hexo-Blog/blog/public/js/search/algolia.js","e6e47a2bbbcfe453e4c79ab7a4f72a6f"],["D:/微云同步/Hexo-Blog/blog/public/js/search/local-search.js","b1acee1d9b8d028b7c991be5fdbfab96"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/ClickShowText.js","6938e67c620a41ba16bb997cc39630d5"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/activate-power-mode.js","d4c4ff3a9f5623927d4283806c5dc416"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/canvas-nest.js","f18b819b1a5448e59d5badd828226941"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/canvas-ribbon.js","5a5f0384bf90288f0a2ae930c7e67fdd"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/click_heart.js","270707ed9ba1da50e0bf6c3bd9f8f7d0"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/piao.js","62d18127a85cbd2f50f0054c23d97ee1"],["D:/微云同步/Hexo-Blog/blog/public/js/tw_cn.js","f4b6d29b165d2f760908f49280b2699c"],["D:/微云同步/Hexo-Blog/blog/public/js/utils.js","3c3b09247874be2920e91062e0694fdf"],["D:/微云同步/Hexo-Blog/blog/public/link/index.html","8d6ff887f7ca14999f6b3976b639f56c"],["D:/微云同步/Hexo-Blog/blog/public/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/微云同步/Hexo-Blog/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/微云同步/Hexo-Blog/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/微云同步/Hexo-Blog/blog/public/messageboard/index.html","123fc79fbd2b024b037b1500c8e28493"],["D:/微云同步/Hexo-Blog/blog/public/movies/index.html","66434c5927ce85d0422870dae39db798"],["D:/微云同步/Hexo-Blog/blog/public/music/index.html","0a3896ab686d19373c2eaace10642fd4"],["D:/微云同步/Hexo-Blog/blog/public/page/2/index.html","592d5d251110c1cfc68d4b8e5e221817"],["D:/微云同步/Hexo-Blog/blog/public/photos/index.html","e4773247bd7237e1bda83358daec88aa"],["D:/微云同步/Hexo-Blog/blog/public/schedule/index.html","ed7ad8c750794fe73fbd482cf314e721"],["D:/微云同步/Hexo-Blog/blog/public/tags/2019/index.html","347d5aef79e62b6cfc780f7a2c791195"],["D:/微云同步/Hexo-Blog/blog/public/tags/2020/index.html","450cd851072559e821b0a60aa18ec810"],["D:/微云同步/Hexo-Blog/blog/public/tags/Blazor/index.html","d59eea73901524e69f103ee9295f6a38"],["D:/微云同步/Hexo-Blog/blog/public/tags/CSS/index.html","d6a8c6b8a43e1a79cae8354c2403f568"],["D:/微云同步/Hexo-Blog/blog/public/tags/H5/index.html","4a668a9f11801f86405042f161560e4e"],["D:/微云同步/Hexo-Blog/blog/public/tags/JavaScript-面试题/index.html","ee380630a38b8c43a0384f14ae11985a"],["D:/微云同步/Hexo-Blog/blog/public/tags/Jay/index.html","d1b4f593020c88aaf6e1e79ff242cd21"],["D:/微云同步/Hexo-Blog/blog/public/tags/Markdown/index.html","9dc33e06e3e07388bb41145dc2e338fa"],["D:/微云同步/Hexo-Blog/blog/public/tags/Microsoft/index.html","f0b35c96afe822f196c0516b94efe7d9"],["D:/微云同步/Hexo-Blog/blog/public/tags/SSL-TLS/index.html","194c3e45970626bd76bb2588c1c1ed29"],["D:/微云同步/Hexo-Blog/blog/public/tags/Sass/index.html","51579056dafcdfa8a296c7ee200ed10e"],["D:/微云同步/Hexo-Blog/blog/public/tags/WPF/index.html","50ec07e2bd31c6ccf8171578d11f5961"],["D:/微云同步/Hexo-Blog/blog/public/tags/XAML/index.html","50f329bb0b159fa642a5cc73ce601fdd"],["D:/微云同步/Hexo-Blog/blog/public/tags/blog/index.html","5391bfde1142dcfb61a0a9535651780e"],["D:/微云同步/Hexo-Blog/blog/public/tags/hexo/index.html","60b918cf9322eb8d53023a2c9d037631"],["D:/微云同步/Hexo-Blog/blog/public/tags/index.html","854589d98d8e13702d900318e131ec75"],["D:/微云同步/Hexo-Blog/blog/public/tags/music/index.html","64b564cb02657a6f51142826a8264c0f"],["D:/微云同步/Hexo-Blog/blog/public/tags/singleton-static/index.html","25df643c7e007a4bc9d516b49221db01"],["D:/微云同步/Hexo-Blog/blog/public/tags/大前端/index.html","4e4796053d1307a0216a91b2d3f1b97d"],["D:/微云同步/Hexo-Blog/blog/public/tags/指令/index.html","c1b85d0e795de63a4d435e00acfcc50c"],["D:/微云同步/Hexo-Blog/blog/public/tags/热评/index.html","5ed0e17920437d319d269ae29c0d74f8"],["D:/微云同步/Hexo-Blog/blog/public/tags/移动端/index.html","4db631b93681ad1ef68664bdaf3e1536"],["D:/微云同步/Hexo-Blog/blog/public/tags/语法/index.html","1fef02049a754cc3c49c0057c0434a86"],["D:/微云同步/Hexo-Blog/blog/public/tags/阅读/index.html","280aa1f5637f19713fe5834fec01b3e1"],["D:/微云同步/Hexo-Blog/blog/public/微软Blazor框架学习笔记-一.html","f83484694c971d480263fffba48d82ff"],["D:/微云同步/Hexo-Blog/blog/public/我也不知道在写什么.html","31f976f4d41addb8f5235996addcc76b"],["D:/微云同步/Hexo-Blog/blog/public/我有属于我的天.html","6c98727d0a1b61fd808cee1596b62a9a"],["D:/微云同步/Hexo-Blog/blog/public/我的第一篇博文.html","8b6cffa55805657ab6764c25ae36bf35"],["D:/微云同步/Hexo-Blog/blog/public/所求为何.html","54db9064ec4524189cb221e7c5b32724"],["D:/微云同步/Hexo-Blog/blog/public/移动端适配方案.html","f5a6a9d05a1ad26ce8402204f202181a"],["D:/微云同步/Hexo-Blog/blog/public/缘来，你也走过这里.html","c9ba66ffd00bc4c772f83bc607f8a0b6"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







