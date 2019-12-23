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

var precacheConfig = [["D:/blog/public/CSS技巧-一-之隐藏滚动条.html","699a952da1decbb4b197f4300dcadcb7"],["D:/blog/public/Coding-Pages申请SSL-TLS证书错误.html","858547a22ea1731daaa84fbc56a79687"],["D:/blog/public/JavaScript面试题收藏.html","6aa5f5e2294509168c92b99cacbdd417"],["D:/blog/public/Markdown基础语法.html","5781b96bc552269d3d35c951e25c4ad5"],["D:/blog/public/SASS的基础语法-一.html","1ca221d8e422c78afa445983985a264c"],["D:/blog/public/about/index.html","4ba1c33fa928efce95d894ceba3cff59"],["D:/blog/public/archives/2019/06/index.html","32fcf0e19daf562e0e880cfd21bdeb29"],["D:/blog/public/archives/2019/07/index.html","73efc55f2affcda1a556fdb17027580d"],["D:/blog/public/archives/2019/08/index.html","b4637e16b0617eb791cc1a6d24980728"],["D:/blog/public/archives/2019/09/index.html","6175591d1c216a11b625c7b121723852"],["D:/blog/public/archives/2019/12/index.html","983746f94b5f8d1ae816becc32c95732"],["D:/blog/public/archives/2019/index.html","9069d32fe07d68d95478cf627953c286"],["D:/blog/public/archives/index.html","bd710daf8ad613393b2a9b23a609f059"],["D:/blog/public/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["D:/blog/public/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["D:/blog/public/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["D:/blog/public/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["D:/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/blog/public/books/index.html","74bd71790f22b542b0aa9c0a288eec90"],["D:/blog/public/categories/CSS/CSS技巧收录/index.html","eea8db1eace3851cf8c1895f7c575600"],["D:/blog/public/categories/CSS/index.html","be62af45ca71c35c50aba0419b5a4811"],["D:/blog/public/categories/JavaScript/index.html","669c29c2c1b17338c90b78825e5cee6c"],["D:/blog/public/categories/Microsoft/C/index.html","cbf5f68c122b3afeef3a18bd7cd77a25"],["D:/blog/public/categories/Microsoft/index.html","5851a2d7fa74544676f5b547a0606395"],["D:/blog/public/categories/blog/index.html","038bc8e3f5f808baa55ee35e9644b06e"],["D:/blog/public/categories/index.html","e05a40a9a88b8a65fe6820d0c95ea449"],["D:/blog/public/categories/学习笔记/index.html","592a3a9b3c67167537af43161935f37f"],["D:/blog/public/categories/生活随笔/index.html","456469f74e201afc09de7a38ec55338a"],["D:/blog/public/categories/踩坑记录/index.html","fafca4cdadc450a995f050f93f125c29"],["D:/blog/public/change_log/index.html","9dd94fbc02da0ce45a0441e6b99c95c9"],["D:/blog/public/css/index.css","11d09d552a72364c9b7a21249616a4f7"],["D:/blog/public/css/var.css","98860da7386f4404fbff40135a09e0e0"],["D:/blog/public/hello-world.html","5628f549b8693f3a51a7cb3575bd9900"],["D:/blog/public/hexo博客常用指令.html","af31083024fe24a1fcc07a0c7d845cdc"],["D:/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/alipay.jpg","716bd9ffa85a427056d0529e4906d370"],["D:/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/blog/public/img/wechat.png","1ac24fe798d9cd9192a805dfcee73f12"],["D:/blog/public/index.html","d4af72973f668103f64247ea2ba2fd28"],["D:/blog/public/js/baidupush.js","799e997c7dcc3edc857fe81f0dceb232"],["D:/blog/public/js/main.js","fad811598880d938c0e617c40e7aeb94"],["D:/blog/public/js/runtimeshow.js","2c9a724739720b4b771ede851033c49b"],["D:/blog/public/js/search/algolia.js","74f4acf5b30b3732a4d6d3f816259fdc"],["D:/blog/public/js/search/local-search.js","77cc88ea6e9a3ff1a0fb50d2838ba629"],["D:/blog/public/js/third-party/ClickShowText.js","076f729740b3c81a74f5fd92201c9696"],["D:/blog/public/js/third-party/activate-power-mode.js","444a0c820d4d06695e5365bd94b3b774"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/canvas-nest.js","cb3bb87e5bb48bdebc97eb44faec19c5"],["D:/blog/public/js/third-party/canvas-ribbon.js","8eb045e464469be09286f915bdbb8631"],["D:/blog/public/js/third-party/click_heart.js","b801b248d629734b827b58e1dd51a48f"],["D:/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/piao.js","df714364dc500941c43dcaab263656f9"],["D:/blog/public/js/tw_cn.js","e6dbf4d8e9829a883a86f83691f6d14f"],["D:/blog/public/js/utils.js","1838182c58344818d6d0cafd5e74653a"],["D:/blog/public/link/index.html","5d62757c1071fe0cb43c435f29f9c989"],["D:/blog/public/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/blog/public/messageboard/index.html","98ab34042c2811dbea46cab9ab6f26bf"],["D:/blog/public/movies/index.html","7aff236250e92c42a6120ae8beb446a5"],["D:/blog/public/music/index.html","e4163563bd82f065cee70f4cb8e4344f"],["D:/blog/public/photos/index.html","d2a546097e2670a172770460b77a3e21"],["D:/blog/public/schedule/index.html","cf7411d6eebaf60b48f8514041e5ec4d"],["D:/blog/public/tags/2019/index.html","0780ccbf3897d2fd6ded194265769413"],["D:/blog/public/tags/CSS/index.html","fc58d7fd5b01988215ce57ed80216a76"],["D:/blog/public/tags/JavaScript-面试题/index.html","7c6dfed26782198cdb1f8ce052b7b001"],["D:/blog/public/tags/Markdown/index.html","b673010004a27d96996970fa4d5edad5"],["D:/blog/public/tags/SSL-TLS/index.html","69b246747c31f805c2bf8c60bdb163ed"],["D:/blog/public/tags/Sass/index.html","690cd125e9752a28a3d593ef7d84ee87"],["D:/blog/public/tags/blog/index.html","c46ab9ddd458c5dd0cc00aa75607636b"],["D:/blog/public/tags/hexo/index.html","947d4aee29f78e7feea3ca5797037f7e"],["D:/blog/public/tags/index.html","c44e69d8796b529c1adbdb359b97c337"],["D:/blog/public/tags/singleton/index.html","71e46ba1b2a9c7f293e9d361d3862f9a"],["D:/blog/public/tags/static/index.html","fa24e957d5c2fb0f7f47229c32511b1b"],["D:/blog/public/tags/指令/index.html","f0a535330ba128e788ff92cc9ed02d77"],["D:/blog/public/tags/热评/index.html","8b5b0c4a3330868355eb9ad87a3e5d3a"],["D:/blog/public/tags/语法/index.html","cf878a5044bda3206a0f5656b4be1c05"],["D:/blog/public/我也不知道在写什么.html","8f18c83ce058af047fd84971c6ccf806"],["D:/blog/public/我的第一篇博文.html","d7d66a26a3a1115c239b51fb36eccf56"],["D:/blog/public/所求为何.html","266f3f478825f56cb113c3217c8bb7af"]];
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







