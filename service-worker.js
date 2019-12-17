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

var precacheConfig = [["D:/blog/public/Coding-Pages申请SSL-TLS证书错误.html","179f0cd71b292ca5eff2acceb6b49c39"],["D:/blog/public/JavaScript面试题收藏.html","e0064cceff2932bf9e445613d7a95e41"],["D:/blog/public/Markdown基础语法.html","5b52e2531680c6f7ed6ad1592413fe91"],["D:/blog/public/SASS的基础语法-一.html","4ada1066221e4a36398b333d2901dcfb"],["D:/blog/public/about/index.html","30b9b667c5ca1c598f97af4fe3cace0b"],["D:/blog/public/archives/2019/06/index.html","f4bf2bc4cffec015ae028d79c38de0f9"],["D:/blog/public/archives/2019/07/index.html","2dac3dd44c97daede67a92628f06c604"],["D:/blog/public/archives/2019/08/index.html","cd55009c5d4ba103ed8df67bff9cda2f"],["D:/blog/public/archives/2019/09/index.html","af5a64cf620b355864388fb16da78132"],["D:/blog/public/archives/2019/index.html","07bf4a6d04e4965bb809c47ea28a5509"],["D:/blog/public/archives/index.html","61ce2bd961f8b549bbb22768f8253543"],["D:/blog/public/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["D:/blog/public/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["D:/blog/public/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["D:/blog/public/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["D:/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/blog/public/books/index.html","fad486c6ca0d659dd3e2d4d3abe34e79"],["D:/blog/public/categories/C/index.html","8de98dae0ef21bc46e427f9ff47dac9f"],["D:/blog/public/categories/CSS/index.html","d5ca6c9e37a64660a59c77b6b1aac4eb"],["D:/blog/public/categories/JavaScript/index.html","c02ea3e497dc71bcc264dd6249654cb0"],["D:/blog/public/categories/blog/index.html","b7111274cb7e14c37ef2d72eb98332e7"],["D:/blog/public/categories/index.html","78b89035cf811fe816969ed069b8193c"],["D:/blog/public/categories/学习笔记/index.html","fa58ba3b80a8f2843df727fa5a0cb36c"],["D:/blog/public/categories/踩坑记录/index.html","1a88e363c5387899f25ba78d05d1b67f"],["D:/blog/public/change_log/index.html","ccc4700ce20535bd973137141796c620"],["D:/blog/public/css/index.css","ab41fa7f15a076bc5117be531b8487c0"],["D:/blog/public/css/var.css","dad7dba4ca192994930717451ae82908"],["D:/blog/public/hello-world.html","7c90a7a02e4a32786b619e2263a2cffc"],["D:/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/alipay.jpg","716bd9ffa85a427056d0529e4906d370"],["D:/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/blog/public/img/wechat.png","1ac24fe798d9cd9192a805dfcee73f12"],["D:/blog/public/index.html","13fa685a944d2f2de0dafcc2206bed33"],["D:/blog/public/js/baidupush.js","4d1d884575222fa62214de303eddf9c7"],["D:/blog/public/js/main.js","fad811598880d938c0e617c40e7aeb94"],["D:/blog/public/js/runtimeshow.js","4a695ad78be503e7a3bcc6ee10696ad2"],["D:/blog/public/js/search/algolia.js","58350ac5fe66b4a13187826d63dfc4f1"],["D:/blog/public/js/search/local-search.js","ce405ada4398a7856848074de002f349"],["D:/blog/public/js/third-party/ClickShowText.js","020171397bb7c7cf6ceabed238ecf5da"],["D:/blog/public/js/third-party/activate-power-mode.js","2a5cb7d4e014b6ac3e60f10db2f4d0be"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/canvas-nest.js","6bd8de2e6b959a0ba503cd5d7104436f"],["D:/blog/public/js/third-party/canvas-ribbon.js","a7f00e733192ac28dfeb63257dd0afed"],["D:/blog/public/js/third-party/click_heart.js","88dd5a867248879a1f794a2c18e7f71a"],["D:/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/piao.js","18eb649f0063d358657be7ab4e00692d"],["D:/blog/public/js/tw_cn.js","6464df41fbd9262e42809b65ce76af07"],["D:/blog/public/js/utils.js","11ac3129e448b336989fdca26f33ebfd"],["D:/blog/public/link/index.html","6b18a23e5f147a961c66677c51c4c2ec"],["D:/blog/public/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/blog/public/messageboard/index.html","6c20e762e6aa986673d1fc37be2051ab"],["D:/blog/public/movies/index.html","c2a0c2e884a2c0d337ed4b0fe289bb11"],["D:/blog/public/music/index.html","141074b3674b29ddf22f96c07707b370"],["D:/blog/public/photos/index.html","6fc62cdae871ddce35db615d7bba0726"],["D:/blog/public/schedule/index.html","df6786518d9e1c861ced1aefa7e4c67f"],["D:/blog/public/tags/2019/index.html","0798592f339fbc1f58fc04af5be57f74"],["D:/blog/public/tags/CSS/index.html","ed3516586e70adbb3e4cfcd322765b9a"],["D:/blog/public/tags/JavaScript-面试题/index.html","71dad10ae4045be27a906118ead8aa1f"],["D:/blog/public/tags/Markdown/index.html","412505e3984c0c23d9eddd5c2f60db9a"],["D:/blog/public/tags/SSL-TLS/index.html","7471e34a3a159630b673c56b50b0ec8b"],["D:/blog/public/tags/Sass/index.html","28a5c6eda7cd701cd5b0c0c330934c2e"],["D:/blog/public/tags/blog/index.html","bc0d8d73a731802abb7764ad5e362c4e"],["D:/blog/public/tags/hexo/index.html","7c22a874d393000c9634291f693ceb94"],["D:/blog/public/tags/index.html","ec7671937b4cfb330d40d9d83033b9bf"],["D:/blog/public/tags/singleton/index.html","2324e45a48497c493dd358b260e350bf"],["D:/blog/public/tags/static/index.html","dafc9b25c3ef89e4402eb83735f3f0f9"],["D:/blog/public/tags/语法/index.html","ebbed0c27d6adf435a87831c13eaa6b4"],["D:/blog/public/我也不知道在写什么.html","3ad177cb490c2b076297241365ee2bb4"],["D:/blog/public/我的第一篇博文.html","c83896cad1773410e27ac6506eed8fef"]];
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







