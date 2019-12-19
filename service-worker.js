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

var precacheConfig = [["D:/blog/public/CSS技巧-一-之隐藏滚动条.html","4158af6da1376186318646adfe440e4b"],["D:/blog/public/Coding-Pages申请SSL-TLS证书错误.html","e3a0655997661bb46c5e530f49d47abe"],["D:/blog/public/JavaScript面试题收藏.html","14358486dfd35215c7076e57fc8f2373"],["D:/blog/public/Markdown基础语法.html","5f5399cb33f426b6449963c74428d25a"],["D:/blog/public/SASS的基础语法-一.html","9386f7dd896ff16d1ca55b7e60be78d7"],["D:/blog/public/about/index.html","6e2987631d6744e4aef490ae05aea331"],["D:/blog/public/archives/2019/06/index.html","3fbbccf6a7754766d503177897a24602"],["D:/blog/public/archives/2019/07/index.html","c96d2725cf856dacdf1b91213929486b"],["D:/blog/public/archives/2019/08/index.html","63f325bc7a4e2ccf0b4f3699d547e589"],["D:/blog/public/archives/2019/09/index.html","0896fbc830751b437e15c9362e42329a"],["D:/blog/public/archives/2019/12/index.html","4743c6654e6d0b896a581a4cb803f3e4"],["D:/blog/public/archives/2019/index.html","e5b3365d3fbdecfe93ce621fda336a3e"],["D:/blog/public/archives/index.html","e4338b5f1c5db1c4e524d8262aaeab49"],["D:/blog/public/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["D:/blog/public/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["D:/blog/public/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["D:/blog/public/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["D:/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/blog/public/books/index.html","8ffd7a7f7e34ff2dc66831a327c0e433"],["D:/blog/public/categories/CSS/CSS技巧收录/index.html","7830ed11799e74cdf890669ad05d4a55"],["D:/blog/public/categories/CSS/index.html","e7ab1769a450670897f6e02c77e907d0"],["D:/blog/public/categories/JavaScript/index.html","21be8800c88d47c099d9367abb79ea98"],["D:/blog/public/categories/MicroSoft/C/index.html","884ad30706499a6d66e8f134e4e5e674"],["D:/blog/public/categories/MicroSoft/index.html","dfcbac08bf2bdc76c7e6d91e99349c0c"],["D:/blog/public/categories/blog/index.html","8351ec978cbe2186c656ac4e92c300e9"],["D:/blog/public/categories/index.html","3870be4c59f381c5983d6b0b0c2687ab"],["D:/blog/public/categories/学习笔记/index.html","6a1bbe64f57a0b029585ca5fef5e0a35"],["D:/blog/public/categories/踩坑记录/index.html","530bde16c1f77f212d7df568d8b0d79c"],["D:/blog/public/change_log/index.html","c7b95b7b04302d3dc0872947c4109865"],["D:/blog/public/css/index.css","5ee7b5e3564017ad7bbc89f6ead5d21a"],["D:/blog/public/css/var.css","d5553bd2d9a47424257d09e660cbf42f"],["D:/blog/public/hello-world.html","7d415a41bab558c1d5aeba49c5f8357f"],["D:/blog/public/hexo博客常用指令.html","61e62ffc29628c97093d2776f86ecf38"],["D:/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/alipay.jpg","716bd9ffa85a427056d0529e4906d370"],["D:/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/blog/public/img/wechat.png","1ac24fe798d9cd9192a805dfcee73f12"],["D:/blog/public/index.html","289bcec90b57799d6f59378e9a866680"],["D:/blog/public/js/baidupush.js","6219dd70b9be9cc3f98b64e9cefef33e"],["D:/blog/public/js/main.js","fad811598880d938c0e617c40e7aeb94"],["D:/blog/public/js/runtimeshow.js","63142aea9aa233bc27c349f9a5d3ecf2"],["D:/blog/public/js/search/algolia.js","44459f6ebb8c2e7cf20baaf746b59b63"],["D:/blog/public/js/search/local-search.js","10a6bd7d651a51463a3d1759664e8e4e"],["D:/blog/public/js/third-party/ClickShowText.js","57f8602ba7ada99ab46be826d8c73fdf"],["D:/blog/public/js/third-party/activate-power-mode.js","8617e5b3ff998cd9306bde8d09c98616"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/canvas-nest.js","3e5c58fd486698745d7d3f8ba434fe92"],["D:/blog/public/js/third-party/canvas-ribbon.js","396bb3af5a079add85eef8d3132b9917"],["D:/blog/public/js/third-party/click_heart.js","fb564e3c13b96bd9cb4a39c2384a5709"],["D:/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/piao.js","81f6d364a6271c00637924ea72dc6fb5"],["D:/blog/public/js/tw_cn.js","b01516264dc25d6bee3d4236d1092528"],["D:/blog/public/js/utils.js","bda92c3ef0c7dcaf565faf84ce60aefa"],["D:/blog/public/link/index.html","6d5fb5266473449df657fb682bd2ae5b"],["D:/blog/public/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/blog/public/messageboard/index.html","1ef3bfaaee15e5cd6958e533480f05fd"],["D:/blog/public/movies/index.html","a0bf7b9f0e402c3cad6b839e22260b8f"],["D:/blog/public/music/index.html","662ba839f6acb8376b3ec1cd4b15350e"],["D:/blog/public/photos/index.html","2b11d6ca1bc46b4bcf552266ad48733e"],["D:/blog/public/schedule/index.html","a070a4a6590e10fcac816d0af6a8afe8"],["D:/blog/public/tags/2019/index.html","181bdff236fa1459465614773d7c93d9"],["D:/blog/public/tags/CSS/index.html","477acc4d97cfa9b4a93835bad98f6020"],["D:/blog/public/tags/JavaScript-面试题/index.html","a874f09f537355096b6da6db9a5eb905"],["D:/blog/public/tags/Markdown/index.html","2ab9e1c5ff76437a1f99d3a5edeae6ac"],["D:/blog/public/tags/SSL-TLS/index.html","c5c9d22d87bb71ceeaec393ef13d5e7c"],["D:/blog/public/tags/Sass/index.html","aa2fd0b258fada1b45dfb095da57a509"],["D:/blog/public/tags/blog/index.html","b7b327c2602e80f9bcbec411c7e07c51"],["D:/blog/public/tags/hexo/index.html","9bc3bc941bd75a93746173d89f023205"],["D:/blog/public/tags/index.html","d0c4093e470c842bb7fca9387bfc3dc6"],["D:/blog/public/tags/singleton/index.html","06dbc792655c58fb6aea8684e53efbf8"],["D:/blog/public/tags/static/index.html","02d4a23999c34ffbc2dc51bbc3bc0737"],["D:/blog/public/tags/指令/index.html","b5b08ec0ee19960d1580860f864e0c4b"],["D:/blog/public/tags/语法/index.html","2ce07be8b843e3796e8abb98dc3b3667"],["D:/blog/public/我也不知道在写什么.html","cf17e9da712836cb01ec0ce7b30fac84"],["D:/blog/public/我的第一篇博文.html","bd63f4e735ca7fa4d6012c90658629e0"]];
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







