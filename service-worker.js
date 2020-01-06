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

var precacheConfig = [["D:/微云同步/Hexo-Blog/blog/public/2019-料你也不想再过一次.html","bbe3bbadfc849369998d1975160642ed"],["D:/微云同步/Hexo-Blog/blog/public/CSS技巧-一-之隐藏滚动条.html","b9cf4919e105d2867276cf83f24b195d"],["D:/微云同步/Hexo-Blog/blog/public/Coding-Pages申请SSL-TLS证书错误.html","aa3c616e23f0a369a081cae6c1d25aed"],["D:/微云同步/Hexo-Blog/blog/public/JavaScript面试题收藏.html","8fa0eb8b43de99680731692bcdf0d752"],["D:/微云同步/Hexo-Blog/blog/public/Markdown基础语法.html","825baefcac1995d28393ba989af08a6b"],["D:/微云同步/Hexo-Blog/blog/public/SASS的基础语法-一.html","594bf9f3e4899c0bb709a882b5a2cb56"],["D:/微云同步/Hexo-Blog/blog/public/WPF学习笔记-一-入门基础.html","64db6e91e6ad5e10ff95b388550e032d"],["D:/微云同步/Hexo-Blog/blog/public/WPF学习笔记-二-资源与触发器.html","51a5c79af28df4febc987e55b61d24df"],["D:/微云同步/Hexo-Blog/blog/public/about/index.html","3ad59d040872b9729ca9b132fa5d8b9f"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/06/index.html","790b27df0f9142defe087e6ccc7fd3dd"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/07/index.html","5b5e47363d2e3faaa39de36ee2aeac4d"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/08/index.html","274864ae8e08907383cf3a0b22ee7fbe"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/09/index.html","0fea120d7bd5669f1d6d18ff2332b8f5"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/10/index.html","06eec6b6991101659989b3e4cd7a8bb6"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/12/index.html","e31ea52b4fa58a0cc7de562b1b7c7346"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/index.html","874b350c942a5ff39b714dba4bfee89e"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/page/2/index.html","7bde8d4a76c4e83454f6dafcbbbdee91"],["D:/微云同步/Hexo-Blog/blog/public/archives/2020/01/index.html","b3da07e58a5aa8813b8413c52cff3b56"],["D:/微云同步/Hexo-Blog/blog/public/archives/2020/index.html","025e6c4526e289e2f53ad13f7d7f50f9"],["D:/微云同步/Hexo-Blog/blog/public/archives/index.html","407b779f08de99e05338feb5b07dd3ae"],["D:/微云同步/Hexo-Blog/blog/public/archives/page/2/index.html","4e621914e4de9f80be02407a07d5f40d"],["D:/微云同步/Hexo-Blog/blog/public/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["D:/微云同步/Hexo-Blog/blog/public/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["D:/微云同步/Hexo-Blog/blog/public/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["D:/微云同步/Hexo-Blog/blog/public/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["D:/微云同步/Hexo-Blog/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/微云同步/Hexo-Blog/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/微云同步/Hexo-Blog/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/微云同步/Hexo-Blog/blog/public/books/index.html","5d66481b4a3f6845eafd2982d87b2093"],["D:/微云同步/Hexo-Blog/blog/public/categories/Blog/index.html","5aef298024c7f79702c2afb9ab0f4729"],["D:/微云同步/Hexo-Blog/blog/public/categories/CSS/CSS技巧收录/index.html","ee74ab311bbbbcfadd0e6ded700f367f"],["D:/微云同步/Hexo-Blog/blog/public/categories/CSS/index.html","12f2b6154ff0e47b399746d0031094fb"],["D:/微云同步/Hexo-Blog/blog/public/categories/JavaScript/index.html","7378a4e6ddc62fd16176c75dcf04200a"],["D:/微云同步/Hexo-Blog/blog/public/categories/Microsoft/Asp-NET-Core/index.html","1c15647b82050c3348def74bc4f3b9b8"],["D:/微云同步/Hexo-Blog/blog/public/categories/Microsoft/C/index.html","f55eb2277a161f268ad833632c6d50c9"],["D:/微云同步/Hexo-Blog/blog/public/categories/Microsoft/WPF/index.html","f3e7b45efd48040bf67d9eee675f4103"],["D:/微云同步/Hexo-Blog/blog/public/categories/Microsoft/index.html","23b6a05de257489938f2d62075657e7e"],["D:/微云同步/Hexo-Blog/blog/public/categories/index.html","5d37241303b9545f91666658656ca9ec"],["D:/微云同步/Hexo-Blog/blog/public/categories/大前端/index.html","e78d29fd85ebfed9520d1eea6025810d"],["D:/微云同步/Hexo-Blog/blog/public/categories/学习笔记/index.html","5cffe41726b4686a5d5b2ca5f4580cf8"],["D:/微云同步/Hexo-Blog/blog/public/categories/生活随笔/index.html","dad032f0f701cd49129936644a6c69e7"],["D:/微云同步/Hexo-Blog/blog/public/categories/踩坑记录/index.html","a571af84518df8058edb012bc473c0f7"],["D:/微云同步/Hexo-Blog/blog/public/change_log/index.html","069b212dbfeb28d0282ccb04ff907cea"],["D:/微云同步/Hexo-Blog/blog/public/css/index.css","5d81e1c7649bf97b647192bbb23cacbf"],["D:/微云同步/Hexo-Blog/blog/public/css/var.css","32e047da6c154503e1b61f21a0e442c5"],["D:/微云同步/Hexo-Blog/blog/public/hello-world.html","6996df24b08f9ed024102cbf185b2636"],["D:/微云同步/Hexo-Blog/blog/public/hexo博客常用指令.html","253f3168aaf0a85462c07b10ee7e5f24"],["D:/微云同步/Hexo-Blog/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/微云同步/Hexo-Blog/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/微云同步/Hexo-Blog/blog/public/img/alipay.jpg","716bd9ffa85a427056d0529e4906d370"],["D:/微云同步/Hexo-Blog/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/微云同步/Hexo-Blog/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/微云同步/Hexo-Blog/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/微云同步/Hexo-Blog/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/微云同步/Hexo-Blog/blog/public/img/wechat.png","1ac24fe798d9cd9192a805dfcee73f12"],["D:/微云同步/Hexo-Blog/blog/public/index.html","733920b44e309c21f4cea8e7ae3494f5"],["D:/微云同步/Hexo-Blog/blog/public/js/baidupush.js","8b2cf34605b21b596ad2cb7f8f50adaa"],["D:/微云同步/Hexo-Blog/blog/public/js/main.js","fad811598880d938c0e617c40e7aeb94"],["D:/微云同步/Hexo-Blog/blog/public/js/runtimeshow.js","ddee9c33f9334fdf7b7424d57b4420f8"],["D:/微云同步/Hexo-Blog/blog/public/js/search/algolia.js","dc8abb5202f45f6ee2042286b0515b30"],["D:/微云同步/Hexo-Blog/blog/public/js/search/local-search.js","2afb3f61feb01908997c7a1bf8305b90"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/ClickShowText.js","00503e5ed625e3d5ec610e8ee7fcbfca"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/activate-power-mode.js","828c75dec816cf0006d932974694781e"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/canvas-nest.js","7d3494534ab8242ca1a4b74113bab3fe"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/canvas-ribbon.js","a437297cc3ffb7b43138cd914b4135d2"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/click_heart.js","14a9a6841253357084e8d2bb4f9eaffa"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/piao.js","022d3c8edfd45ac0b6d3b656f57bd8bd"],["D:/微云同步/Hexo-Blog/blog/public/js/tw_cn.js","cdde008f841fc67746619a5ebed43b0c"],["D:/微云同步/Hexo-Blog/blog/public/js/utils.js","a3968767ee91c1df42f7f3fdccc2f416"],["D:/微云同步/Hexo-Blog/blog/public/link/index.html","8d797a796ea26d4c600767fbc7645c6c"],["D:/微云同步/Hexo-Blog/blog/public/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/微云同步/Hexo-Blog/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/微云同步/Hexo-Blog/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/微云同步/Hexo-Blog/blog/public/messageboard/index.html","bfe54e3061821700fde5861339e3357b"],["D:/微云同步/Hexo-Blog/blog/public/movies/index.html","ef22c825c5cad85c1fc176f33a9fa34c"],["D:/微云同步/Hexo-Blog/blog/public/music/index.html","02429ca8d4a31abe291a09ec1c6fa889"],["D:/微云同步/Hexo-Blog/blog/public/page/2/index.html","d5994d9f28072e5daf8c69f550c79b6a"],["D:/微云同步/Hexo-Blog/blog/public/photos/index.html","ff954aa477017551b74783b2ae9db493"],["D:/微云同步/Hexo-Blog/blog/public/schedule/index.html","21442f92ed9d512c33b552c6db5460a1"],["D:/微云同步/Hexo-Blog/blog/public/tags/2019/index.html","f8b2220a7c328b4274f824624493818b"],["D:/微云同步/Hexo-Blog/blog/public/tags/2020/index.html","1f108870e2f64e22446d45755ff2913c"],["D:/微云同步/Hexo-Blog/blog/public/tags/Blazor/index.html","29911e4f842584145012519dbc17a44e"],["D:/微云同步/Hexo-Blog/blog/public/tags/CSS/index.html","da5a934483b399aa84b06865836021e8"],["D:/微云同步/Hexo-Blog/blog/public/tags/H5/index.html","87697c1e901cc1e283087f7d798dce6e"],["D:/微云同步/Hexo-Blog/blog/public/tags/JavaScript-面试题/index.html","f6ea252261dcef003a464ba4e7889ddb"],["D:/微云同步/Hexo-Blog/blog/public/tags/Jay/index.html","b1684e7c1604c47844ad183bcb758a48"],["D:/微云同步/Hexo-Blog/blog/public/tags/Markdown/index.html","daaa8e92d587c76f0443975b17451e96"],["D:/微云同步/Hexo-Blog/blog/public/tags/Microsoft/index.html","f1d1b077f2c771dd7530c1e5a856824a"],["D:/微云同步/Hexo-Blog/blog/public/tags/SSL-TLS/index.html","9102c3225804e513f414960be1beb165"],["D:/微云同步/Hexo-Blog/blog/public/tags/Sass/index.html","c6966aac615fbcfbea73bb0981986ec8"],["D:/微云同步/Hexo-Blog/blog/public/tags/WPF/index.html","cedf5041e0e4782de189c1193a267e16"],["D:/微云同步/Hexo-Blog/blog/public/tags/XAML/index.html","758b16e261eab32dfe8b7111d576b0f7"],["D:/微云同步/Hexo-Blog/blog/public/tags/blog/index.html","0765f8cad8a0a68cc7bbdf3b26c0da1f"],["D:/微云同步/Hexo-Blog/blog/public/tags/hexo/index.html","cbc94213a80fb9c2d33c03db85ad839a"],["D:/微云同步/Hexo-Blog/blog/public/tags/index.html","0d0c2fe50f2eaec51442aec1d4dbc76b"],["D:/微云同步/Hexo-Blog/blog/public/tags/music/index.html","e8a8a2aadabd9c42c74fbadba2aeb652"],["D:/微云同步/Hexo-Blog/blog/public/tags/singleton-static/index.html","1c8c2756300792b928d3ebb02f1d2aa4"],["D:/微云同步/Hexo-Blog/blog/public/tags/大前端/index.html","0a5c3a56d719eb905bc8fb24e4aedffb"],["D:/微云同步/Hexo-Blog/blog/public/tags/指令/index.html","62ed0d91d6c90eb76d7a85fe2db81680"],["D:/微云同步/Hexo-Blog/blog/public/tags/热评/index.html","c95a1ee3bbbd07a7dbda442942bef617"],["D:/微云同步/Hexo-Blog/blog/public/tags/移动端/index.html","fbd21d8500f410aed34d10fe727c9ad7"],["D:/微云同步/Hexo-Blog/blog/public/tags/语法/index.html","a0181676eb562d5671aa720e2625f90e"],["D:/微云同步/Hexo-Blog/blog/public/tags/阅读/index.html","a12ae12191d856e85fe278df988e622c"],["D:/微云同步/Hexo-Blog/blog/public/微软Blazor框架学习笔记-一.html","e0ff598cca7dd92ec3a365d93985af39"],["D:/微云同步/Hexo-Blog/blog/public/我也不知道在写什么.html","4d5d908da7ac2e7c96e0eda0e33cdbe6"],["D:/微云同步/Hexo-Blog/blog/public/我有属于我的天.html","6cb9e6f1f1f1d4dd4034c3b0ffe953ed"],["D:/微云同步/Hexo-Blog/blog/public/我的第一篇博文.html","9ca03041c7cc94b812b2edaceba4f742"],["D:/微云同步/Hexo-Blog/blog/public/所求为何.html","a1200de403ab33e240ee68d4a97bb306"],["D:/微云同步/Hexo-Blog/blog/public/移动端适配方案.html","0fabd893f52427fcdae38a328d04495c"],["D:/微云同步/Hexo-Blog/blog/public/缘来，你也走过这里.html","bf5200431f661d240b798c7ef7be6365"]];
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







