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

var precacheConfig = [["D:/blog/public/Coding-Pages申请SSL-TLS证书错误.html","57d38ad57a34f6f3a5cc7d913b5640de"],["D:/blog/public/JavaScript面试题收藏.html","7cc8760fd33960bf9b01053a57740fb6"],["D:/blog/public/Markdown基础语法.html","31ba1501e658d03e730af1a236532f8d"],["D:/blog/public/SASS的基础语法-一.html","8d1a5974abd0228a65eccfaba66be442"],["D:/blog/public/about/index.html","e868bd925822143efc190746abcbd6e4"],["D:/blog/public/archives/2019/06/index.html","5b44a62e53df22d6cc3d445cfb8ea3f3"],["D:/blog/public/archives/2019/07/index.html","d36873469f45b4fe6cbeb8119ab9ea6d"],["D:/blog/public/archives/2019/08/index.html","e649bcdebd3b99e5992e6eaf0db5d166"],["D:/blog/public/archives/2019/09/index.html","a28bbd2360dfb56f4c7070c49b6381d6"],["D:/blog/public/archives/2019/12/index.html","b7920226f3bcde87dfb0a4200b01bcbb"],["D:/blog/public/archives/2019/index.html","558f782f9a7e919cef4a30b4bf19ead5"],["D:/blog/public/archives/index.html","f61d852d8833f08baf3b73c831224dd7"],["D:/blog/public/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["D:/blog/public/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["D:/blog/public/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["D:/blog/public/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["D:/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/blog/public/books/index.html","63df64fc48200624f5c8675d5b1c0935"],["D:/blog/public/categories/C/index.html","aca6b25a96e3b9743dc66685d5d1a9eb"],["D:/blog/public/categories/CSS/index.html","ef8ac0d8d33def533732587b1113db88"],["D:/blog/public/categories/JavaScript/index.html","240a82059e6372ea4860927f464a2f97"],["D:/blog/public/categories/blog/index.html","0ae828025d215f2881ee930076cbf266"],["D:/blog/public/categories/index.html","4cb34875d8074d82b7acd5442ddbd9d7"],["D:/blog/public/categories/学习笔记/index.html","427d1656106dc3792be97acc02692fe4"],["D:/blog/public/categories/踩坑记录/index.html","5a323e79abb33d4c97857b2c9c2b0603"],["D:/blog/public/change_log/index.html","e969d7ed1b5326d572821f83c89901eb"],["D:/blog/public/css/index.css","ebfc9b44fab49c02681943e1d3126181"],["D:/blog/public/css/var.css","a7d718de5dc7cadcd14bf0e66259b943"],["D:/blog/public/hello-world.html","9b68668a196ef44c88412ff6eb17e907"],["D:/blog/public/hexo博客发布指令.html","0f711a75214019e43de049bb97694afe"],["D:/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/alipay.jpg","716bd9ffa85a427056d0529e4906d370"],["D:/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/blog/public/img/wechat.png","1ac24fe798d9cd9192a805dfcee73f12"],["D:/blog/public/index.html","46ffe70e7da020fe19967750745d5a94"],["D:/blog/public/js/baidupush.js","d2ec4585ffba6bfec147c296b538fef1"],["D:/blog/public/js/main.js","fad811598880d938c0e617c40e7aeb94"],["D:/blog/public/js/runtimeshow.js","46667399a13703b2ff250b5cad8c6ff5"],["D:/blog/public/js/search/algolia.js","0c11e121fc49a913cb3b2070f8623cca"],["D:/blog/public/js/search/local-search.js","bed566ef9173deb09d410bbeaa9958e5"],["D:/blog/public/js/third-party/ClickShowText.js","8aeabd48e46b40417c0378ac0441215f"],["D:/blog/public/js/third-party/activate-power-mode.js","4d1e26ef0716feb7d097360c2e341c18"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/canvas-nest.js","2aea2955687d7bfa3bce3c40b7785048"],["D:/blog/public/js/third-party/canvas-ribbon.js","7edcae6d40d90ba4106ea96dedaea7ba"],["D:/blog/public/js/third-party/click_heart.js","8fbada2b227d91e479b10fa79eb2afe1"],["D:/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/piao.js","cf9b732aeb0587fdf56b04b99f801b47"],["D:/blog/public/js/tw_cn.js","b2ce5d6554ca018991e27b6704139c6d"],["D:/blog/public/js/utils.js","a5f2cfec17722bf411fc428ee70c1f5b"],["D:/blog/public/link/index.html","736afc35b29092c8f8b61e57e4d702b6"],["D:/blog/public/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/blog/public/messageboard/index.html","67b63ff270c6c612c0e8ebbf3bd80184"],["D:/blog/public/movies/index.html","7c0928e258fe966d003e2583ba9b9ca6"],["D:/blog/public/music/index.html","798b0e22c1bbe6bdc3761689246e9fe1"],["D:/blog/public/photos/index.html","f5e7640460933f2cb9e17e02e145ca5a"],["D:/blog/public/schedule/index.html","ace85b5d7e7a741ea0d5cf3cf512cda3"],["D:/blog/public/tags/2019/index.html","b84dd3af89ac0461d06aab0bad856b14"],["D:/blog/public/tags/CSS/index.html","42fdc0b91897d2781e70ce26efa75dc7"],["D:/blog/public/tags/JavaScript-面试题/index.html","6121bf81af1f615cc572ef1f80e8d503"],["D:/blog/public/tags/Markdown/index.html","9155d2c4e41f4c1108c6e20970ae5a6b"],["D:/blog/public/tags/SSL-TLS/index.html","1071647539bba5aa65b90da828fcdcac"],["D:/blog/public/tags/Sass/index.html","a805a705fe7763303c4a1a263a1a23db"],["D:/blog/public/tags/blog/index.html","e14bc744c90ec1b4eb133d8c49004892"],["D:/blog/public/tags/hexo/index.html","9a7108600dbc11ce2046b685534d8f0b"],["D:/blog/public/tags/index.html","176635467cc4359c3c71994ed233ec1d"],["D:/blog/public/tags/singleton/index.html","ba8b1a8ef4d7e1276addbf7e3f1f4386"],["D:/blog/public/tags/static/index.html","6547802575e06475d8f741925dab2888"],["D:/blog/public/tags/指令/index.html","1de519972ee74390ef25b48d824d109f"],["D:/blog/public/tags/语法/index.html","415314320f70dccf923b071fffa5554a"],["D:/blog/public/我也不知道在写什么.html","1aef9b9b118f1b933028dbbe8e48e5d8"],["D:/blog/public/我的第一篇博文.html","d3cbdc324efdced1189f5393467d165c"]];
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







