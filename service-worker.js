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

var precacheConfig = [["D:/blog/public/Coding-Pages申请SSL-TLS证书错误.html","bcd8f939badb63309bc63bec4ee6fe60"],["D:/blog/public/JavaScript面试题收藏.html","f41625773d03dcdffc1673f0161af51c"],["D:/blog/public/Markdown基础语法.html","8db377909a673b37724f51c48de1e0c9"],["D:/blog/public/SASS的基础语法-一.html","0d83a3a918776e4bc29a6a30ec6f59fd"],["D:/blog/public/about/index.html","21faabfda98a2ceef90577fd2171f8d7"],["D:/blog/public/archives/2019/06/index.html","fa7d40a657a413afc0c8eca9f17bba58"],["D:/blog/public/archives/2019/07/index.html","f2cbccb554c331f05837d54f23ebf819"],["D:/blog/public/archives/2019/08/index.html","a711a8f84508c9ce100048a1d02cfb9a"],["D:/blog/public/archives/2019/09/index.html","496880115f32acd22d7e963b45409418"],["D:/blog/public/archives/2019/index.html","112e0d0d09bd023e6c1b4a7d608e81da"],["D:/blog/public/archives/index.html","abc7ee4cdc40b3596e27cd1a40c2c574"],["D:/blog/public/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["D:/blog/public/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["D:/blog/public/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["D:/blog/public/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["D:/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/blog/public/books/index.html","b73a68d0bd75bfd6b04b5a7fda4b8a41"],["D:/blog/public/categories/C/index.html","97dc6ed2beab1d1f987b00c1934de7c2"],["D:/blog/public/categories/CSS/index.html","25b71794927f3c888ac0d3c5cf60d785"],["D:/blog/public/categories/JavaScript/index.html","e6a41be0b0262f10400435d0633a864a"],["D:/blog/public/categories/blog/index.html","36d326c77aac7b36a46799c46e1930d7"],["D:/blog/public/categories/index.html","4ab71cb0cfd2776b582b2df20a6f98e6"],["D:/blog/public/categories/学习笔记/index.html","45db0c9fe568f2bf9dc08b9170c82d72"],["D:/blog/public/categories/踩坑记录/index.html","81befffd238500857144a2f9a2d79f19"],["D:/blog/public/change_log/index.html","ea7df08472e9b006b905dc72c11eab3c"],["D:/blog/public/css/index.css","729fd6b76e48b77292d3e385fcfef12d"],["D:/blog/public/css/var.css","b5f463f95a0cee7407e97525a5ec5b71"],["D:/blog/public/hello-world.html","7c90a7a02e4a32786b619e2263a2cffc"],["D:/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/alipay.jpg","716bd9ffa85a427056d0529e4906d370"],["D:/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/blog/public/img/wechat.png","1ac24fe798d9cd9192a805dfcee73f12"],["D:/blog/public/index.html","29d0c315ea365c4091247f402c78a794"],["D:/blog/public/js/baidupush.js","1fd14d197294647631a5383e7ce3dc8f"],["D:/blog/public/js/main.js","fad811598880d938c0e617c40e7aeb94"],["D:/blog/public/js/runtimeshow.js","a7c8201cca2f78f8d8f0aae624732158"],["D:/blog/public/js/search/algolia.js","f08681e2101343599ce04281563f6e96"],["D:/blog/public/js/search/local-search.js","8944f6877c1fc4700a7636f60d8960c9"],["D:/blog/public/js/third-party/ClickShowText.js","1ecc55743a398037416d09775edc073b"],["D:/blog/public/js/third-party/activate-power-mode.js","a794dc5091a8c6aefddc3462181f2885"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/canvas-nest.js","5acabf0a56bc9626ccb4a3967858b286"],["D:/blog/public/js/third-party/canvas-ribbon.js","a29f37e01b3ea754fcc0fa8cdc1b3bb5"],["D:/blog/public/js/third-party/click_heart.js","3137b74b82f66075e66e265dda0d3a05"],["D:/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/piao.js","b3aaada626163be71892ec151f84c585"],["D:/blog/public/js/tw_cn.js","4e8935b2a02e062892e7f17fb8b79129"],["D:/blog/public/js/utils.js","3f8b21802c37eb8c0b6a6dc5c5536707"],["D:/blog/public/link/index.html","caf4f1061926df40ef979eb97e75fc13"],["D:/blog/public/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/blog/public/messageboard/index.html","7c7d02eb5a1f62e54875c65c0b42b73e"],["D:/blog/public/movies/index.html","683a9fa5a2330a8d4ff049ba0562b1f3"],["D:/blog/public/music/index.html","0142406ae79dc051e61f5e8062ae3e79"],["D:/blog/public/photos/index.html","653a6786f48ff6d7df71240d7158da42"],["D:/blog/public/schedule/index.html","64d042dedd5717e1ccacfa81def01f01"],["D:/blog/public/tags/2019/index.html","cf5561a54dbc63b1d0875b3af01e40d1"],["D:/blog/public/tags/CSS/index.html","e762c4e3ae84f8a7e8716767ef647c7b"],["D:/blog/public/tags/JavaScript-面试题/index.html","b06ba699d11529515f384e91f48910ae"],["D:/blog/public/tags/Markdown/index.html","59bfcb13e857bee29ee6ac17af4f449e"],["D:/blog/public/tags/SSL-TLS/index.html","7367a388f8928c8685b3499994429b5c"],["D:/blog/public/tags/Sass/index.html","26138fafbcab857078d025a7c445022d"],["D:/blog/public/tags/blog/index.html","6d468f552f8af32861a270924a41a2b0"],["D:/blog/public/tags/hexo/index.html","7aae62a2a310419689d330de4d08e887"],["D:/blog/public/tags/index.html","a8dc131c9c3b981780ca6545d5efe13f"],["D:/blog/public/tags/singleton/index.html","3e4d86fd6d974ed3a8b936eed9b8b8d4"],["D:/blog/public/tags/static/index.html","0f4839e3082a5411bef76d94529b754e"],["D:/blog/public/tags/语法/index.html","b05b986ec24690dd41f79a4ea58b1d68"],["D:/blog/public/我也不知道在写什么.html","d96deba9e3eb7fa40a93c207c1e8fb4d"],["D:/blog/public/我的第一篇博文.html","c83896cad1773410e27ac6506eed8fef"]];
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







