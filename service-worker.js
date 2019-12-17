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

var precacheConfig = [["D:/blog/public/Coding-Pages申请SSL-TLS证书错误.html","179f0cd71b292ca5eff2acceb6b49c39"],["D:/blog/public/JavaScript面试题收藏.html","092fa1b9e2271872a6e02450a1e840d1"],["D:/blog/public/Markdown基础语法.html","f49d5970e25d11a7613d50520df03621"],["D:/blog/public/SASS的基础语法-一.html","d73846c2671dd24bcb3b6510467f3fe6"],["D:/blog/public/about/index.html","c2ca5204ced424fb223f39c180c18a72"],["D:/blog/public/archives/2019/06/index.html","e1a6839639948ec80f7b2ba016446879"],["D:/blog/public/archives/2019/07/index.html","804dcccb1806af02e4774ea10830bf68"],["D:/blog/public/archives/2019/08/index.html","e1e1d49691efcad7f68466d07a6b6bb0"],["D:/blog/public/archives/2019/09/index.html","9d14920b10a08af9420ea1476de02f38"],["D:/blog/public/archives/2019/index.html","50b644506f577f7fef3e87d6811ecd27"],["D:/blog/public/archives/index.html","23d531931472e036795d6f0cf1b78622"],["D:/blog/public/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["D:/blog/public/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["D:/blog/public/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["D:/blog/public/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["D:/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/blog/public/books/index.html","b6171400fbb00049e1590e65dd2370c2"],["D:/blog/public/categories/C/index.html","de2f3af91291bee8f62a8914a11637d1"],["D:/blog/public/categories/CSS/index.html","14c9cfa575a4d8333a585e148a5225aa"],["D:/blog/public/categories/JavaScript/index.html","193588fd5c167be0b9f0fd6d19c3f577"],["D:/blog/public/categories/blog/index.html","a6735cd7e70930d2fedcf9276b223e3c"],["D:/blog/public/categories/index.html","3901e3a5ec5ba11871919f82ed76102d"],["D:/blog/public/categories/学习笔记/index.html","64ee6ac99aa6768446469b16f3f0a63f"],["D:/blog/public/categories/踩坑记录/index.html","fd588b58eeb24587bc5b5c915e142eb2"],["D:/blog/public/change_log/index.html","46ee3de2afa24da9923d62ecf8fead01"],["D:/blog/public/css/index.css","52f8822a59fbd930e0c61571cafbf354"],["D:/blog/public/css/var.css","7b63d1c78e1c14b0636579de880902e3"],["D:/blog/public/hello-world.html","cb761feac0eb8c67f5176c0115b8a5cf"],["D:/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/alipay.jpg","716bd9ffa85a427056d0529e4906d370"],["D:/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/blog/public/img/wechat.png","1ac24fe798d9cd9192a805dfcee73f12"],["D:/blog/public/index.html","47066877dd3af1f7ac7e17367f87cd6f"],["D:/blog/public/js/baidupush.js","d27df78d70d173f0aa26166af1b55eeb"],["D:/blog/public/js/main.js","fad811598880d938c0e617c40e7aeb94"],["D:/blog/public/js/runtimeshow.js","61bf3b21bd3ac1e5a0c7230bdd8519b2"],["D:/blog/public/js/search/algolia.js","a2e92b8fd994d16d4f6fa028374b5598"],["D:/blog/public/js/search/local-search.js","7fda1ae6b0ade45c5a65ddd1fba519c2"],["D:/blog/public/js/third-party/ClickShowText.js","593596ce9815baea7cdbcec9c78b72f1"],["D:/blog/public/js/third-party/activate-power-mode.js","b83a23bab54aa8d146f30f5532ea3b93"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/canvas-nest.js","e72f3de12a25d399b4f5285df1ccaaa2"],["D:/blog/public/js/third-party/canvas-ribbon.js","f3e84d0645eeb49f3daf43c0f037659b"],["D:/blog/public/js/third-party/click_heart.js","98867866904cd6d13cf2497c8c4e03cb"],["D:/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/piao.js","7e69fe84e11750cc25dd395bd54ce78f"],["D:/blog/public/js/tw_cn.js","b3958d1a25d61d62b4bc31b43f23476b"],["D:/blog/public/js/utils.js","fa5558dede379ba85bf9131410030471"],["D:/blog/public/link/index.html","21ebd199fabdc80b067698044089b946"],["D:/blog/public/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/blog/public/messageboard/index.html","a9500d07c1df848f228ba022a4b95619"],["D:/blog/public/movies/index.html","6f90230502b73793b7871d8dbcd84dbe"],["D:/blog/public/music/index.html","70b741bb260444fb144301d82ec56899"],["D:/blog/public/photos/index.html","df843d9433eb6a2d1b9ca82d28f8cb18"],["D:/blog/public/schedule/index.html","99dffb2f89075275b0ce721ab192df30"],["D:/blog/public/tags/2019/index.html","ae187b1028b5dab86622201478f96545"],["D:/blog/public/tags/CSS/index.html","a764b3a152f6581dcff2092dd405188b"],["D:/blog/public/tags/JavaScript-面试题/index.html","94443c58d23dd4929d6f5c82dac0f74c"],["D:/blog/public/tags/Markdown/index.html","4b90cbe55d0c26bef22dc66933cf9be6"],["D:/blog/public/tags/SSL-TLS/index.html","82ac5ce5c5d4e9cfe11ef82559cdf026"],["D:/blog/public/tags/Sass/index.html","4db0771b960e3db64ba7d60e4966c160"],["D:/blog/public/tags/blog/index.html","c4a41f5e6f4bcb31420bed71d4f3c787"],["D:/blog/public/tags/hexo/index.html","09bc8c0fdcbd545b4afa20c06851d313"],["D:/blog/public/tags/index.html","9e25891f4266bff9bf7365a1e9a43f92"],["D:/blog/public/tags/singleton/index.html","86dd7c41ee9796f2f35cc7922ea672e6"],["D:/blog/public/tags/static/index.html","42722cbf2e8053d5df523eb8609a5b02"],["D:/blog/public/tags/语法/index.html","c41b1595980016fc521da818e67ffdd9"],["D:/blog/public/我也不知道在写什么.html","e961bbec9206df06a9e7010b7b7f525a"],["D:/blog/public/我的第一篇博文.html","12936e3ca64b68e939b93642f4014cb6"]];
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







