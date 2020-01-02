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

var precacheConfig = [["D:/blog/public/2019-料你也不想再过一次.html","0c7d4d24a5b0400ed950a192a25cb1fe"],["D:/blog/public/CSS技巧-一-之隐藏滚动条.html","b288ff10d44d1e0b595a5881abb5bcfd"],["D:/blog/public/Coding-Pages申请SSL-TLS证书错误.html","941325aa45057c779fa26dc051ac52b9"],["D:/blog/public/JavaScript面试题收藏.html","9e23169fc0b1d962c461cf0f41654389"],["D:/blog/public/Markdown基础语法.html","0e7f2e98d15fc69e9af61416a7328082"],["D:/blog/public/SASS的基础语法-一.html","22e57fc1c0417d5d2c809a66d7e12ca0"],["D:/blog/public/about/index.html","8807ed4ab81353f7d716a692814316e3"],["D:/blog/public/archives/2019/06/index.html","d3e79899be24f2a8f8e1c5b10e021ac0"],["D:/blog/public/archives/2019/07/index.html","e6ffb44ff356857c3f4857d67ad32e11"],["D:/blog/public/archives/2019/08/index.html","8e3ca9e1587a2b8174fef038c27b53ac"],["D:/blog/public/archives/2019/09/index.html","9ded5fc735fb63fcf991a4506965d2e8"],["D:/blog/public/archives/2019/10/index.html","e2430a8df8ad4e0647a21abc9e1f0520"],["D:/blog/public/archives/2019/12/index.html","3a52e764abeed5138d04d5409311fa98"],["D:/blog/public/archives/2019/index.html","7e78e3c63f2757c19133e52f8552ca5a"],["D:/blog/public/archives/2019/page/2/index.html","42eaa7b36ec645727e78ce3f3595f6d5"],["D:/blog/public/archives/2020/01/index.html","143d82cab3100e8f9296c9a7ac5bb374"],["D:/blog/public/archives/2020/index.html","001cdfe74a2e8e4abb3fec09929e1f5b"],["D:/blog/public/archives/index.html","461da4df5ab1caae92d2709dd565f984"],["D:/blog/public/archives/page/2/index.html","0a2777f950c897d7de4b43a7bae45e7e"],["D:/blog/public/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["D:/blog/public/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["D:/blog/public/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["D:/blog/public/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["D:/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/blog/public/books/index.html","3900c6d0fdf545142c20b35b3d5f337b"],["D:/blog/public/categories/CSS/CSS技巧收录/index.html","32dde6a9c57f7a1322e8a4ffbfe2ada9"],["D:/blog/public/categories/CSS/index.html","7874562f1bc5206be31361ea883ef879"],["D:/blog/public/categories/JavaScript/index.html","b030dc6aed7023c96691c5ec8eb641e4"],["D:/blog/public/categories/Microsoft/C/index.html","1502b330612993b5e64749b52f2519cb"],["D:/blog/public/categories/Microsoft/index.html","83b40be72d3542b5b2e5bc915c3d3606"],["D:/blog/public/categories/blog/index.html","57305b0150a685df2f64675ed467ff51"],["D:/blog/public/categories/index.html","47627cc42ad46e83aa8ae687a340fb77"],["D:/blog/public/categories/大前端/index.html","ae76626357a4425108baa59d0b9ecc7e"],["D:/blog/public/categories/学习笔记/index.html","3db2019bd1f4587743abe56e3d7ee8a0"],["D:/blog/public/categories/生活随笔/index.html","dadf8bac914e63758f9dba6a65642af1"],["D:/blog/public/categories/踩坑记录/index.html","67032acdb26923169b5de44d1ddb64d6"],["D:/blog/public/change_log/index.html","29e5b0d930ead1c759fbc368c31a510c"],["D:/blog/public/css/index.css","e0b08257a92e1021970d912403a6b65e"],["D:/blog/public/css/var.css","d037b8234c627a323cc1b9ad35cbaf1a"],["D:/blog/public/hello-world.html","add9f2823aaadce867af8b00dca737bf"],["D:/blog/public/hexo博客常用指令.html","a30cb2efdc41c5721f04a60e869d3f96"],["D:/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/alipay.jpg","716bd9ffa85a427056d0529e4906d370"],["D:/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/blog/public/img/wechat.png","1ac24fe798d9cd9192a805dfcee73f12"],["D:/blog/public/index.html","efb0ecd90c9d9e7c839f5cfc47f6eae2"],["D:/blog/public/js/baidupush.js","4dd8d35cc3361456ac25575d39f48980"],["D:/blog/public/js/main.js","fad811598880d938c0e617c40e7aeb94"],["D:/blog/public/js/runtimeshow.js","9e60d77d50a798813ef41ec274ebbdc0"],["D:/blog/public/js/search/algolia.js","c0a37d915824373ce91a44cc11b1522e"],["D:/blog/public/js/search/local-search.js","60822800227eb1378dbb104eeb304c18"],["D:/blog/public/js/third-party/ClickShowText.js","5cef238daf417e8eae85f700ea7f42b9"],["D:/blog/public/js/third-party/activate-power-mode.js","f5824e01bef180083db876ec623aa04a"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/canvas-nest.js","639fdc82f5723eb781fcffeae4ca3584"],["D:/blog/public/js/third-party/canvas-ribbon.js","e2148ed7c7fcf974f648461515df1716"],["D:/blog/public/js/third-party/click_heart.js","487f46f72dcd0281efc59e6ed8edb397"],["D:/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/piao.js","8d2496c2bfa0fe176f666354181675f8"],["D:/blog/public/js/tw_cn.js","4a68a567501decddbcae5a8bfd20ab19"],["D:/blog/public/js/utils.js","65d9bb20f83d3c39184bfbb06c7d9ac8"],["D:/blog/public/link/index.html","b643fafb299384fc0da74acc17bcbc42"],["D:/blog/public/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/blog/public/messageboard/index.html","bd1ce1545e0c2a07983fd72a42b41456"],["D:/blog/public/movies/index.html","4922355670b6743d84d53c3606ce9120"],["D:/blog/public/music/index.html","5700149d8cd4537752e6ae7254218198"],["D:/blog/public/page/2/index.html","2e1403025e91ebf79f142a63ea0b0500"],["D:/blog/public/photos/index.html","68afaf4f0a128e8f04215964e36350eb"],["D:/blog/public/schedule/index.html","a967cba99154586cf31a313ca22e4617"],["D:/blog/public/tags/2019/index.html","b7b269ba052d6a7eb3172e3ad9ee0dee"],["D:/blog/public/tags/2020/index.html","ae518867d1e96b1b8297f7bdfa6acdd9"],["D:/blog/public/tags/Blazor/index.html","3d2e2b95b1b021ff3d4892e343c2610e"],["D:/blog/public/tags/CSS/index.html","394958a3a627c4e39ffec97ce823caf8"],["D:/blog/public/tags/H5/index.html","d72ff93c49948e95781947810632190f"],["D:/blog/public/tags/JavaScript-面试题/index.html","a8fd6ec0f270a887dd40ffeeedd04d60"],["D:/blog/public/tags/Jay/index.html","a0997060e27af7dc2a4bad04fdc4cdaf"],["D:/blog/public/tags/Markdown/index.html","ec34a1a9d65b00217a5c25a85ac749d5"],["D:/blog/public/tags/Microsoft/index.html","1aa7c1ff375ae262a81639449c990f9f"],["D:/blog/public/tags/SSL-TLS/index.html","f4508c7f0bcdd0e704087d8bcf4628a1"],["D:/blog/public/tags/Sass/index.html","46606be6b01b41d0bf8f3e1bf9506127"],["D:/blog/public/tags/blog/index.html","1f2738a708bd52eff4e1df4b4334d3a9"],["D:/blog/public/tags/hexo/index.html","4096d8d247c018548755e734f7b4e183"],["D:/blog/public/tags/index.html","e465f65b91aff82bb59b3984a7637d6c"],["D:/blog/public/tags/music/index.html","db2b2cf9a75747fd02a9fa3fd5f6dc44"],["D:/blog/public/tags/singleton/index.html","f0d9f46f98f7a363b0a44c29d0f7fe19"],["D:/blog/public/tags/static/index.html","c048ef9ea41c8d24d5decf7de9e95ead"],["D:/blog/public/tags/大前端/index.html","6b58e6c1e2d574ef1b6b734711d19f1d"],["D:/blog/public/tags/指令/index.html","a76fd09f00032cbad0500c6047c4158e"],["D:/blog/public/tags/热评/index.html","9cb1ba9da4362175c9ca70e7bf4828dd"],["D:/blog/public/tags/移动端/index.html","05cf0fc6ded2a0feb6cda9701cc55fff"],["D:/blog/public/tags/语法/index.html","4b32dfc9ea42547405893a67bf85b180"],["D:/blog/public/tags/阅读/index.html","83e56421d2eb928feccfe5d52cb82f49"],["D:/blog/public/微软Blazor框架学习笔记-一.html","decdac43735edfea055cad70d2843e7e"],["D:/blog/public/我也不知道在写什么.html","ee01cbc26c7e3a9081c9d08b2b0857ec"],["D:/blog/public/我有属于我的天.html","404cddcc526404fc16f697b79c156d42"],["D:/blog/public/我的第一篇博文.html","06c47fcfdece10db755f0f5d0ce44578"],["D:/blog/public/所求为何.html","bc8287ea84d69fdd76a8cb87042ca2aa"],["D:/blog/public/移动端适配方案.html","18bfdaa2bef9343c9c590248cc02d90d"],["D:/blog/public/缘来，你也走过这里.html","fab68472b8e3665d2d83d12fcb91880f"]];
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







