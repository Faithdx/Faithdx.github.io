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

var precacheConfig = [["D:/blog/public/Coding-Pages申请SSL-TLS证书错误.html","179f0cd71b292ca5eff2acceb6b49c39"],["D:/blog/public/JavaScript面试题收藏.html","092fa1b9e2271872a6e02450a1e840d1"],["D:/blog/public/Markdown基础语法.html","91427a360ab58197d7ce189566485542"],["D:/blog/public/SASS的基础语法-一.html","a080ab25f43ac927b66362d39d73d88e"],["D:/blog/public/about/index.html","532da42290d86020581fc6b4759150c8"],["D:/blog/public/archives/2019/06/index.html","de3f950e45f89cf5b836ed6d2ccc40c3"],["D:/blog/public/archives/2019/07/index.html","984fdf6f95fcdd9b418ca6af63b710a9"],["D:/blog/public/archives/2019/08/index.html","d4021a8c240f0352838d278841c7412d"],["D:/blog/public/archives/2019/09/index.html","fb7cbbf4518be6d6e7a0f1a852e5e341"],["D:/blog/public/archives/2019/index.html","3277e43b6af53193f65673f76f427f13"],["D:/blog/public/archives/index.html","69114bbcd3dfff937a3a90706ab25b76"],["D:/blog/public/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["D:/blog/public/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["D:/blog/public/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["D:/blog/public/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["D:/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/blog/public/books/index.html","7ef6575e66c1f409d537d837a12246aa"],["D:/blog/public/categories/C/index.html","8ed1e464da1d20c8078be311d96f40c2"],["D:/blog/public/categories/CSS/index.html","5e82c556582b0885b29e825b1577f569"],["D:/blog/public/categories/JavaScript/index.html","be4c163025122a7718287f31615f884f"],["D:/blog/public/categories/blog/index.html","67b7b49496f438976a2b3fc86827a275"],["D:/blog/public/categories/index.html","df59293cee555d569e4a47071e421139"],["D:/blog/public/categories/学习笔记/index.html","6196df4c056a826732f789476a75d7c9"],["D:/blog/public/categories/踩坑记录/index.html","acd58cef1f014fd5b63ad0547bdefbfe"],["D:/blog/public/change_log/index.html","df696ae47f1af945e6b87590aee4df3e"],["D:/blog/public/css/index.css","301b755b9868a8058471750ba6965b6f"],["D:/blog/public/css/var.css","e2ab9709426aac0ae178dd712d4d717b"],["D:/blog/public/hello-world.html","7c90a7a02e4a32786b619e2263a2cffc"],["D:/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/alipay.jpg","716bd9ffa85a427056d0529e4906d370"],["D:/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/blog/public/img/wechat.png","1ac24fe798d9cd9192a805dfcee73f12"],["D:/blog/public/index.html","16977044cf6b7193659399bda19c515d"],["D:/blog/public/js/baidupush.js","0f706e891621828d80e15440ec440ab2"],["D:/blog/public/js/main.js","fad811598880d938c0e617c40e7aeb94"],["D:/blog/public/js/runtimeshow.js","aa8eb8ba8e0cb1a26cd32e1b52ef0e76"],["D:/blog/public/js/search/algolia.js","481d9d5b6c3faeb2a718051d2290753c"],["D:/blog/public/js/search/local-search.js","162410ceb447784709f16d99fba9614d"],["D:/blog/public/js/third-party/ClickShowText.js","c328e323813bf30f2ac9681e028e99c2"],["D:/blog/public/js/third-party/activate-power-mode.js","0af4602ce6693405c0595c04e16341b0"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/canvas-nest.js","ab44fa8d417527bc35b42df4d19f2e69"],["D:/blog/public/js/third-party/canvas-ribbon.js","3ac38325a560b5601bcb5b0e37cd1c9f"],["D:/blog/public/js/third-party/click_heart.js","60b2994d20a54af403efe0f408665de9"],["D:/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/piao.js","0efff36ce0a99a43592ec542c8a31e77"],["D:/blog/public/js/tw_cn.js","bfd12fa20a052b276eb43e74dedcacc3"],["D:/blog/public/js/utils.js","2eedeec9e9ed1db062ed203efc36c7e4"],["D:/blog/public/link/index.html","1811fa9cd5160da4d3b1101049ae3fac"],["D:/blog/public/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/blog/public/messageboard/index.html","5f150875d8144fa3f83c8093d8bad5a3"],["D:/blog/public/movies/index.html","faa81de9d78951699a8df70017c48c58"],["D:/blog/public/music/index.html","1809e7bf09450c84d4d6cd2cb1c0bc82"],["D:/blog/public/photos/index.html","fe93524c1035fbe51f53c00724ecfb8c"],["D:/blog/public/schedule/index.html","6571c1ce13888b34f00a92c38c50f387"],["D:/blog/public/tags/2019/index.html","d12fe4f26f0829c943ed42cfe544db5a"],["D:/blog/public/tags/CSS/index.html","ae135e54523248dc623022648e10a636"],["D:/blog/public/tags/JavaScript-面试题/index.html","bb6782cb7141f6fb62a827ad4b12816d"],["D:/blog/public/tags/Markdown/index.html","b4543e25f0b6c5e0be2a29c63f63e2b3"],["D:/blog/public/tags/SSL-TLS/index.html","e24a99b4577de989a5a88f8f33283552"],["D:/blog/public/tags/Sass/index.html","12a7c9c8fbb6e57efba296ca90d104e9"],["D:/blog/public/tags/blog/index.html","0d0fe8803a611eebd3684299a7efb232"],["D:/blog/public/tags/hexo/index.html","04b07df0efab9e747f27c88b1eab5c99"],["D:/blog/public/tags/index.html","56c5e3bf1347f572a09d0b2b3db7dc60"],["D:/blog/public/tags/singleton/index.html","b5651a8181f8944ea8a0a17ec0097635"],["D:/blog/public/tags/static/index.html","20fd285248544b8c39bbc83e252c1efe"],["D:/blog/public/tags/语法/index.html","501fad9031bc64ed2523dfd5620615c6"],["D:/blog/public/我也不知道在写什么.html","d96deba9e3eb7fa40a93c207c1e8fb4d"],["D:/blog/public/我的第一篇博文.html","c83896cad1773410e27ac6506eed8fef"]];
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







