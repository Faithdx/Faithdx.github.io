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

var precacheConfig = [["D:/微云同步/Hexo-Blog/blog/public/2019-料你也不想再过一次.html","bbe3bbadfc849369998d1975160642ed"],["D:/微云同步/Hexo-Blog/blog/public/CSS技巧-一-之隐藏滚动条.html","56c24b38cbe7a6bef096dbaf27adbcb9"],["D:/微云同步/Hexo-Blog/blog/public/Coding-Pages申请SSL-TLS证书错误.html","aa3c616e23f0a369a081cae6c1d25aed"],["D:/微云同步/Hexo-Blog/blog/public/JavaScript面试题收藏.html","6bd97d718894956c92f4a6faa45b3a50"],["D:/微云同步/Hexo-Blog/blog/public/Markdown基础语法.html","c5fbb16ca6e486c1484c6026935edfef"],["D:/微云同步/Hexo-Blog/blog/public/SASS的基础语法-一.html","c12cac0b56230354b536ffaeaf32ae9c"],["D:/微云同步/Hexo-Blog/blog/public/WPF学习笔记-一-入门基础.html","7b03a7b7ba480d2c09ac5ba8172cc7b0"],["D:/微云同步/Hexo-Blog/blog/public/WPF学习笔记-二-资源与触发器.html","20b3186917bc8773a0407886a1115387"],["D:/微云同步/Hexo-Blog/blog/public/about/index.html","d3e2071a809dcaef99f9451056a47303"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/06/index.html","e261888d52be05d066c96b280499161e"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/07/index.html","bdc81b5b785d6b254e927726920bf5b9"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/08/index.html","8335ede69c29323335944a03b260a3da"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/09/index.html","e773a95ebfaa6fdd1c9340166f6a25f7"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/10/index.html","6dd25928b7385276b55a4d4ed070b296"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/12/index.html","e621b1aab2c06d37d5db204dba508f73"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/index.html","cc574adc3879b5c84421830d914301ae"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/page/2/index.html","0912d0aeef820f6e73eea4a40537e532"],["D:/微云同步/Hexo-Blog/blog/public/archives/2020/01/index.html","837c961761e1b99a40fc5a4bcf7b8593"],["D:/微云同步/Hexo-Blog/blog/public/archives/2020/index.html","835759d388b85feb34f490322c076ec0"],["D:/微云同步/Hexo-Blog/blog/public/archives/index.html","8dd0e10a42f89f046a8e2e8c9b2391dc"],["D:/微云同步/Hexo-Blog/blog/public/archives/page/2/index.html","74af7af23f18d61ef5ef9eb8eab19627"],["D:/微云同步/Hexo-Blog/blog/public/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["D:/微云同步/Hexo-Blog/blog/public/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["D:/微云同步/Hexo-Blog/blog/public/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["D:/微云同步/Hexo-Blog/blog/public/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["D:/微云同步/Hexo-Blog/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/微云同步/Hexo-Blog/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/微云同步/Hexo-Blog/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/微云同步/Hexo-Blog/blog/public/books/index.html","7a4570fb6709601e83908522d9131e51"],["D:/微云同步/Hexo-Blog/blog/public/categories/Blog/index.html","feaa6d2cf94bd83c62bbc53505a4dcce"],["D:/微云同步/Hexo-Blog/blog/public/categories/CSS/CSS技巧收录/index.html","fc54dff6408379d06bee2d13bcca1452"],["D:/微云同步/Hexo-Blog/blog/public/categories/CSS/index.html","365136015526d221fd8f61577ed5d604"],["D:/微云同步/Hexo-Blog/blog/public/categories/JavaScript/index.html","386c3f8d9e66354c125916b40923b19e"],["D:/微云同步/Hexo-Blog/blog/public/categories/index.html","1bb9763d01706bf8460675102e1318c4"],["D:/微云同步/Hexo-Blog/blog/public/categories/microsoft/Asp-NET-Core/index.html","698f670eea7cc4a9ff91f6fe91332a8d"],["D:/微云同步/Hexo-Blog/blog/public/categories/microsoft/C/index.html","bd8cf854262fc2491ce6e7e05661c0bb"],["D:/微云同步/Hexo-Blog/blog/public/categories/microsoft/WPF/index.html","8c01fab30a6dcd80caf4f15f777ec6c5"],["D:/微云同步/Hexo-Blog/blog/public/categories/microsoft/index.html","d17218ed61ead0aee9b97eeceb650083"],["D:/微云同步/Hexo-Blog/blog/public/categories/大前端/index.html","7a0bd241c47a8a548f0c87d3303ae92f"],["D:/微云同步/Hexo-Blog/blog/public/categories/学习笔记/index.html","53578c6e3b67d620033510aea65bfabc"],["D:/微云同步/Hexo-Blog/blog/public/categories/生活随笔/index.html","620e56cd628fa2cb6dd1586203b46a8b"],["D:/微云同步/Hexo-Blog/blog/public/categories/踩坑记录/index.html","e0dae582d30af4ebef9917d2cf29c74b"],["D:/微云同步/Hexo-Blog/blog/public/change_log/index.html","1750ccd27c2a2617d258f152b98b322f"],["D:/微云同步/Hexo-Blog/blog/public/css/index.css","e683419ec2fbb147ba208bf2c0090214"],["D:/微云同步/Hexo-Blog/blog/public/css/var.css","97c7d67799150fb869a9d5919d33a190"],["D:/微云同步/Hexo-Blog/blog/public/hello-world.html","ab96515e1d4fb760cd2c6b77d326aa21"],["D:/微云同步/Hexo-Blog/blog/public/hexo博客常用指令.html","5b71572879f56b007e4f9adfe774973d"],["D:/微云同步/Hexo-Blog/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/微云同步/Hexo-Blog/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/微云同步/Hexo-Blog/blog/public/img/alipay.jpg","716bd9ffa85a427056d0529e4906d370"],["D:/微云同步/Hexo-Blog/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/微云同步/Hexo-Blog/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/微云同步/Hexo-Blog/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/微云同步/Hexo-Blog/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/微云同步/Hexo-Blog/blog/public/img/wechat.png","1ac24fe798d9cd9192a805dfcee73f12"],["D:/微云同步/Hexo-Blog/blog/public/index.html","77e0b8ca30486b3f9790ab804dc8763f"],["D:/微云同步/Hexo-Blog/blog/public/js/baidupush.js","21f8dd0dcdcb53e5275d2cfbceb3a965"],["D:/微云同步/Hexo-Blog/blog/public/js/main.js","fad811598880d938c0e617c40e7aeb94"],["D:/微云同步/Hexo-Blog/blog/public/js/runtimeshow.js","995801d286a73fca228263da3948710a"],["D:/微云同步/Hexo-Blog/blog/public/js/search/algolia.js","d7600e74a63dd4bba92c9f5e1bc818e8"],["D:/微云同步/Hexo-Blog/blog/public/js/search/local-search.js","de70e7d6d7774866641cc69685d0c638"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/ClickShowText.js","1495769593abaec1b15ea61a0af5acff"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/activate-power-mode.js","b8a05a2a1bb9a38ade44e301ca9678e8"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/canvas-nest.js","442c5294e346c9120c3d5691ef6fb5a1"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/canvas-ribbon.js","60893acb3047c4af1b3f6e7c1ce999d2"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/click_heart.js","5a8a7a6e50d5a78e13a2cc110f29b759"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/piao.js","9303c9cf5414a82c494ef627af13fd7b"],["D:/微云同步/Hexo-Blog/blog/public/js/tw_cn.js","e8cc3d8f7307459f82c2e4b9aba84ed8"],["D:/微云同步/Hexo-Blog/blog/public/js/utils.js","70153d083f02a2cde70e13eb30730fbd"],["D:/微云同步/Hexo-Blog/blog/public/link/index.html","83ed5145f45ece462581ded34ec5d544"],["D:/微云同步/Hexo-Blog/blog/public/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/微云同步/Hexo-Blog/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/微云同步/Hexo-Blog/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/微云同步/Hexo-Blog/blog/public/messageboard/index.html","48cf901024ace1c14f66c88990d1a796"],["D:/微云同步/Hexo-Blog/blog/public/movies/index.html","cb40470feddfd956bedcfe5a02325cea"],["D:/微云同步/Hexo-Blog/blog/public/music/index.html","e747810b4c86da9142cc5242f1fb9d80"],["D:/微云同步/Hexo-Blog/blog/public/page/2/index.html","3cd8628adbcd087710d7561d2e23ba58"],["D:/微云同步/Hexo-Blog/blog/public/photos/index.html","1327e95315a64491a59df55ddba8a493"],["D:/微云同步/Hexo-Blog/blog/public/schedule/index.html","2251cd757d3b6910516fb0b954cbe304"],["D:/微云同步/Hexo-Blog/blog/public/tags/2019/index.html","e746f871813b5b52547e79612f48ff4a"],["D:/微云同步/Hexo-Blog/blog/public/tags/2020/index.html","6565c7e02b9a343736fe2e682f497e6e"],["D:/微云同步/Hexo-Blog/blog/public/tags/Blazor/index.html","2f51ac2137a0035b6f59bf31038116a7"],["D:/微云同步/Hexo-Blog/blog/public/tags/CSS/index.html","ecf31e839fa52dcbd22eb40b79e436e3"],["D:/微云同步/Hexo-Blog/blog/public/tags/H5/index.html","769ab97ee1cd8ad5568a17292a148749"],["D:/微云同步/Hexo-Blog/blog/public/tags/JavaScript-面试题/index.html","599d241f908502e5a5c0a0d049ac826c"],["D:/微云同步/Hexo-Blog/blog/public/tags/Jay/index.html","328275dae71c716cde9e3791603d3dde"],["D:/微云同步/Hexo-Blog/blog/public/tags/Markdown/index.html","3789e8dfc7c2faf4bb8fb2df67aaf7ce"],["D:/微云同步/Hexo-Blog/blog/public/tags/Microsoft/index.html","386e27587980cd92632ecec29bd9f1b4"],["D:/微云同步/Hexo-Blog/blog/public/tags/SSL-TLS/index.html","8b15d4b7273dde7dd88a3fc7cba4865f"],["D:/微云同步/Hexo-Blog/blog/public/tags/Sass/index.html","4fe584fc836f30ca26cd96520f9c971e"],["D:/微云同步/Hexo-Blog/blog/public/tags/WPF/index.html","2c74b1f915b77668acc96805d1ba0c8a"],["D:/微云同步/Hexo-Blog/blog/public/tags/XAML/index.html","789c714d73b098dc91ebb90a739244a5"],["D:/微云同步/Hexo-Blog/blog/public/tags/blog/index.html","09bde7ef608bc7f2498c6ffa318b75a7"],["D:/微云同步/Hexo-Blog/blog/public/tags/hexo/index.html","c944145d845f9f3ff197477e497f5d5b"],["D:/微云同步/Hexo-Blog/blog/public/tags/index.html","cd957a0cae7315c8da15a0477c7af797"],["D:/微云同步/Hexo-Blog/blog/public/tags/music/index.html","f5a8c8adc88e93e72a6579b7ddcc05ce"],["D:/微云同步/Hexo-Blog/blog/public/tags/singleton-static/index.html","f12330f1ee16a7d35b3bca3dd9e9baee"],["D:/微云同步/Hexo-Blog/blog/public/tags/大前端/index.html","eb20446931ac2fb835cb5bd041ab0fcc"],["D:/微云同步/Hexo-Blog/blog/public/tags/指令/index.html","961f21e0bbcb71e1cb5a97b6df594dec"],["D:/微云同步/Hexo-Blog/blog/public/tags/热评/index.html","aa657937b643d8b85e0ada1396b55567"],["D:/微云同步/Hexo-Blog/blog/public/tags/移动端/index.html","aefdc4138e9f70eb9f4fa63f2c7c204c"],["D:/微云同步/Hexo-Blog/blog/public/tags/语法/index.html","87f60941725a258d36c9af09c197d379"],["D:/微云同步/Hexo-Blog/blog/public/tags/阅读/index.html","afae6ab2732a4146a22e77ea065447b7"],["D:/微云同步/Hexo-Blog/blog/public/微软Blazor框架学习笔记-一.html","221319e8c9317e110b20b8a88e3befda"],["D:/微云同步/Hexo-Blog/blog/public/我也不知道在写什么.html","9d90c0c1f3e66d2d8ea176323292e4ab"],["D:/微云同步/Hexo-Blog/blog/public/我有属于我的天.html","6cb9e6f1f1f1d4dd4034c3b0ffe953ed"],["D:/微云同步/Hexo-Blog/blog/public/我的第一篇博文.html","dac57a8a05eed133892c7b429c085004"],["D:/微云同步/Hexo-Blog/blog/public/所求为何.html","a1200de403ab33e240ee68d4a97bb306"],["D:/微云同步/Hexo-Blog/blog/public/移动端适配方案.html","0fabd893f52427fcdae38a328d04495c"],["D:/微云同步/Hexo-Blog/blog/public/缘来，你也走过这里.html","bf5200431f661d240b798c7ef7be6365"]];
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







