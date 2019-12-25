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

var precacheConfig = [["D:/blog/public/CSS技巧-一-之隐藏滚动条.html","8acb254ac24b3bd61ebb1dead2a158e6"],["D:/blog/public/Coding-Pages申请SSL-TLS证书错误.html","0ad746bc2bd5c8d1bc5db1ec7798b491"],["D:/blog/public/JavaScript面试题收藏.html","a923450b63890f55911068cfb3629302"],["D:/blog/public/Markdown基础语法.html","f0a84ced9812bf73a85189bcfb976fbf"],["D:/blog/public/SASS的基础语法-一.html","69d662ebccb2e5374150966cb3d722eb"],["D:/blog/public/about/index.html","71366de3ccd92b86be5b7a73dc336244"],["D:/blog/public/archives/2019/06/index.html","111ceed4b83b30fe3884fe9af68cae73"],["D:/blog/public/archives/2019/07/index.html","1c479b8521daccd62f72f48cf7b76933"],["D:/blog/public/archives/2019/08/index.html","954768233dc3aca5eda8fa4eea49591b"],["D:/blog/public/archives/2019/09/index.html","123bb495d54475cbb0ef6007c1c0b412"],["D:/blog/public/archives/2019/12/index.html","201a565f41cc539d95b0d6a12129ec99"],["D:/blog/public/archives/2019/index.html","463438a1743e8130ce4233df801b92f7"],["D:/blog/public/archives/2019/page/2/index.html","6da66c5048bfda1c1e139e24cdbc0762"],["D:/blog/public/archives/index.html","1916c1c2b36f33fdd81d8c0b6f07bd1e"],["D:/blog/public/archives/page/2/index.html","1eaeaee0f4e4942e167af1720dc5e6c4"],["D:/blog/public/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["D:/blog/public/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["D:/blog/public/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["D:/blog/public/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["D:/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/blog/public/books/index.html","f12325187b3cb655ec271c999f474285"],["D:/blog/public/categories/CSS/CSS技巧收录/index.html","dcc437b3dc488da2330f4c9453dcb575"],["D:/blog/public/categories/CSS/index.html","8b5c0371d102cfc5091226fb45e00aeb"],["D:/blog/public/categories/JavaScript/index.html","60e1a711936c8e1c7f5306251ff2c72e"],["D:/blog/public/categories/Microsoft/C/index.html","51c0ee16ce7416f454eda12f96b9ea35"],["D:/blog/public/categories/Microsoft/index.html","11eb3b6aae52b29637c61a4c508708dc"],["D:/blog/public/categories/blog/index.html","ad01446aad990811fefd2c3af99bf4bd"],["D:/blog/public/categories/index.html","a52236e1b1c13c1b3c383a924f5cae24"],["D:/blog/public/categories/大前端/index.html","b639215780001acd901c98785069efec"],["D:/blog/public/categories/学习笔记/index.html","d94a697cdcad4b0d0df5db183b8de150"],["D:/blog/public/categories/生活随笔/index.html","e078d7bfa3c792fe3e8feb5e8bed4dc2"],["D:/blog/public/categories/踩坑记录/index.html","da83756028ac6cf7a511092fb18f7896"],["D:/blog/public/change_log/index.html","09ab124a566f5937c72aacf30546b113"],["D:/blog/public/css/index.css","4940fd1bdbdf3caa63a3c400897b5d9b"],["D:/blog/public/css/var.css","448299714a9139a05fb3ce5969afbd36"],["D:/blog/public/hello-world.html","f55a402c190e0b21f7758628bdc0afc6"],["D:/blog/public/hexo博客常用指令.html","85567260cd938a0b284d32369d3a2706"],["D:/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/alipay.jpg","716bd9ffa85a427056d0529e4906d370"],["D:/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/blog/public/img/wechat.png","1ac24fe798d9cd9192a805dfcee73f12"],["D:/blog/public/index.html","c8e8c17f7449bdee4c54a5261b0f7ed9"],["D:/blog/public/js/baidupush.js","fe757db664afc91c1147f15c728aedf0"],["D:/blog/public/js/main.js","fad811598880d938c0e617c40e7aeb94"],["D:/blog/public/js/runtimeshow.js","6e62712fc296f815cb90289426106d4e"],["D:/blog/public/js/search/algolia.js","b46db84af2f4d36f209e4118efb9cdb6"],["D:/blog/public/js/search/local-search.js","98a665662bd279c31178e0b5f0596f81"],["D:/blog/public/js/third-party/ClickShowText.js","b810ee4eb64e6c851188578c46f335b2"],["D:/blog/public/js/third-party/activate-power-mode.js","0f2f668d2453e89ad895458b712dc15a"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/canvas-nest.js","74c35c3e97478a3015267005303399bf"],["D:/blog/public/js/third-party/canvas-ribbon.js","914a0b92d9c95068368bea046ae19924"],["D:/blog/public/js/third-party/click_heart.js","a747d6633879cf9c871362db4174c394"],["D:/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/piao.js","b228b03fc53da6fd74a7a77680f8886b"],["D:/blog/public/js/tw_cn.js","6344493357d98bf5dbf82da1dd753862"],["D:/blog/public/js/utils.js","13b774325f9e21b0bf2a6235cb305431"],["D:/blog/public/link/index.html","24a72057a96c9f5bbe86ffdd8f34ed43"],["D:/blog/public/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/blog/public/messageboard/index.html","6e945b03104a3d871ae3b3e6cd3bca2b"],["D:/blog/public/movies/index.html","577f07e9a82a2879624bd97f3537f546"],["D:/blog/public/music/index.html","65542327dc250cde20ac361145a668c2"],["D:/blog/public/page/2/index.html","3cc6d95796bb710cff45e511d7eef904"],["D:/blog/public/photos/index.html","3e597dd1acc3a69d971dadcc57627de2"],["D:/blog/public/schedule/index.html","b1796b601b19cd0250b614a6c447ed3b"],["D:/blog/public/tags/2019/index.html","7b97b862a09bb886a647d13bb40e2248"],["D:/blog/public/tags/CSS/index.html","5f5bde82e829d17f052e28f276336e6d"],["D:/blog/public/tags/H5/index.html","af8d48717d5067c61fce4f3a3f21075d"],["D:/blog/public/tags/JavaScript-面试题/index.html","9d3380b203bb66138439ce067a1b8c46"],["D:/blog/public/tags/Markdown/index.html","231ec1eec30a8bbd52a528d9cdb71ef9"],["D:/blog/public/tags/SSL-TLS/index.html","7c2ba6a0684e8ba74cdd60f283e19c7b"],["D:/blog/public/tags/Sass/index.html","696c646deb1895fd5f6f638076bbe1f1"],["D:/blog/public/tags/blog/index.html","758690e5710295e7a8416102c2541064"],["D:/blog/public/tags/hexo/index.html","479d49901e315cba4ed9d193d68fd681"],["D:/blog/public/tags/index.html","2948cd984a88336aeeba131bf6066638"],["D:/blog/public/tags/singleton/index.html","2f59c86bb9ba7e5cf1b0f3a762ffbc95"],["D:/blog/public/tags/static/index.html","a48d463a9a1b03a13b7096bc4baf20f5"],["D:/blog/public/tags/大前端/index.html","903b8a2a7026255b4e219161a77196b1"],["D:/blog/public/tags/指令/index.html","d6dda203113b722e943ef7997441d648"],["D:/blog/public/tags/热评/index.html","430721d2cfad93a673c259daf11dc7b2"],["D:/blog/public/tags/移动端/index.html","1ae9ca7ec4465f35e526021a6a71dcd4"],["D:/blog/public/tags/语法/index.html","1b7dd5619cddade18c1c95b7a073483b"],["D:/blog/public/tags/阅读/index.html","5cf38a6675f15171dba231e5aeb8cce7"],["D:/blog/public/我也不知道在写什么.html","adcabe951df6170deaa5aa46f6c05036"],["D:/blog/public/我的第一篇博文.html","0d63bd3269604c93d20c6b9100325184"],["D:/blog/public/所求为何.html","2a657cc5215ced228ff4868655d5cda5"],["D:/blog/public/移动端适配方案.html","8850d1204c7f673df5b33afca9ba4daf"],["D:/blog/public/缘来，你也走过这里.html","5d1087a85c5f069eba7b70889bd973bf"]];
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







