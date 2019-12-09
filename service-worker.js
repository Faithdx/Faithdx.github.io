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

var precacheConfig = [["D:/blog/public/Coding-Pages申请SSL-TLS证书错误.html","5ce25bed43b8d6e753710487fcf4ac79"],["D:/blog/public/JavaScript面试题收藏.html","8b0122e44ded37f24ec141b0b8cff6e0"],["D:/blog/public/Markdown基础语法.html","352515531fac704560698eef060a7de9"],["D:/blog/public/about/index.html","b6ccb741e9e15dd137412998c5ef39a8"],["D:/blog/public/archives/2019/06/index.html","b714384d72a3be0c0c5ae435648569b1"],["D:/blog/public/archives/2019/07/index.html","11a5ee7eaa65bda1bd2ee9c62ea9290d"],["D:/blog/public/archives/2019/08/index.html","cd995e9a614cbd82915ae9885b681419"],["D:/blog/public/archives/2019/index.html","819e452cae4ab357cfd03b0ca96a068e"],["D:/blog/public/archives/index.html","a36ee6d094e2241453b2f1c6ad969413"],["D:/blog/public/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["D:/blog/public/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["D:/blog/public/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["D:/blog/public/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["D:/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/blog/public/books/index.html","7fc7e9ba0ef423fe504673e7e06920a6"],["D:/blog/public/categories/C/index.html","218c4962c562c4b158843b3c2a5309dc"],["D:/blog/public/categories/JavaScript/index.html","815c5f14e44dd0fa769b472c4f0071f0"],["D:/blog/public/categories/blog/index.html","ca402990f0b49c9cf507bc560fb90157"],["D:/blog/public/categories/index.html","431c689d14a15d6c4d6f47daa6bcd6dd"],["D:/blog/public/categories/学习笔记/index.html","fe8dc4b0bca2d64c6561a5b8303e9e62"],["D:/blog/public/categories/踩坑记录/index.html","420721286f619d62b821e40606b7079e"],["D:/blog/public/change_log/index.html","aeb9859aaa4d6e97d2f7ed1b93dc89fe"],["D:/blog/public/css/index.css","f627c8e1b8e92dbac04da38b8dc8869b"],["D:/blog/public/css/var.css","887d9cc89a9e101efa1205f6a663937d"],["D:/blog/public/hello-world.html","7615e0ed2d3dd4560ce93b261a7509c0"],["D:/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/alipay.jpg","716bd9ffa85a427056d0529e4906d370"],["D:/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/blog/public/img/wechat.png","1ac24fe798d9cd9192a805dfcee73f12"],["D:/blog/public/index.html","334045097d61314437cd2704b26b7d48"],["D:/blog/public/js/baidupush.js","1f1df39cad9d0175979d9497ddcdae02"],["D:/blog/public/js/main.js","fad811598880d938c0e617c40e7aeb94"],["D:/blog/public/js/runtimeshow.js","7ce7456f19a7704516b2b479a1ada72a"],["D:/blog/public/js/search/algolia.js","d96f5f711a71a657459a7eeb9e61ee73"],["D:/blog/public/js/search/local-search.js","aeecdb24477f7705a8b4f3c811811f66"],["D:/blog/public/js/third-party/ClickShowText.js","9defb2916e2bcc22015e5409a35d66d8"],["D:/blog/public/js/third-party/activate-power-mode.js","f6ea35477ecb7f2134c093de7f510fea"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/canvas-nest.js","fe80fcf667426b996ec60eede0f6618a"],["D:/blog/public/js/third-party/canvas-ribbon.js","6a183161b87f377571cf851423944903"],["D:/blog/public/js/third-party/click_heart.js","f0b6cadc66e13bc9bde7fbfb3d27296b"],["D:/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/piao.js","864203ff39a5d779561eb60881a4afa5"],["D:/blog/public/js/tw_cn.js","dabb119a42b16693c62264df23ebf4b1"],["D:/blog/public/js/utils.js","c6533efa8a010c863fa11b9c8261b6cd"],["D:/blog/public/link/index.html","d8d66d6d24c9a6fc79a3b582a682a51a"],["D:/blog/public/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/blog/public/messageboard/index.html","98e1125c824ce62776db03b7cf362d0a"],["D:/blog/public/movies/index.html","247e61376b1b72731a0419ec74ca5594"],["D:/blog/public/music/index.html","abb8dd477c331e2a2cd759d3dc66b8ce"],["D:/blog/public/photos/index.html","232cf30d643a4cfa3ab42c99dd882308"],["D:/blog/public/schedule/index.html","22499ac390632c77eabb739dbf8b9bcb"],["D:/blog/public/tags/JavaScript-面试题/index.html","6cc67fd0780b9d70b3ed759b5eeb9f26"],["D:/blog/public/tags/Markdown/index.html","52d15f36512b21f35144c0c40f8afee5"],["D:/blog/public/tags/SSL-TLS/index.html","9f023781c0d2abed702a476a01f32d71"],["D:/blog/public/tags/blog/index.html","3e21b246d8a160e74c64f9c3067a2e0a"],["D:/blog/public/tags/hexo/index.html","483a4a45711e2ed8c24181e3c9ef918d"],["D:/blog/public/tags/index.html","54a4e04fc9d579125bb31a09e1da107d"],["D:/blog/public/tags/singleton/index.html","e552900c8f4bd4d6ddab2e93e50757f8"],["D:/blog/public/tags/static/index.html","1d01a17444d314d05635fe449d639776"],["D:/blog/public/tags/语法/index.html","a3a90306de7d41ba9086aef795c90a3f"],["D:/blog/public/我也不知道在写什么.html","51bb2997613e676547c0192a5bb703e4"],["D:/blog/public/我的第一篇博文.html","da623ea8917a5ca71ada354b2e00bf6f"]];
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







