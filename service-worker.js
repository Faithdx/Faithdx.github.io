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

var precacheConfig = [["D:/blog/public/CSS技巧-一-之隐藏滚动条.html","699a952da1decbb4b197f4300dcadcb7"],["D:/blog/public/Coding-Pages申请SSL-TLS证书错误.html","858547a22ea1731daaa84fbc56a79687"],["D:/blog/public/JavaScript面试题收藏.html","a61c020d8e3902b248e97e0ef5a73e76"],["D:/blog/public/Markdown基础语法.html","0c7a13ca774cc72d01e120adc2044260"],["D:/blog/public/SASS的基础语法-一.html","17d46dc7a7dba10fc93bcbb25cfa257e"],["D:/blog/public/about/index.html","97d6e8baddc44632eacebad429bb581f"],["D:/blog/public/archives/2019/06/index.html","d2f3acf8e9d699318966cb81d2d60605"],["D:/blog/public/archives/2019/07/index.html","2941c6c88b4d2df1d2fae6257db55c66"],["D:/blog/public/archives/2019/08/index.html","2995186b161edf39c644ba91a5b38f14"],["D:/blog/public/archives/2019/09/index.html","68a09a8d3ae39f986ff1730784398177"],["D:/blog/public/archives/2019/12/index.html","9a5b6fff2557b9b886893ea36221eb05"],["D:/blog/public/archives/2019/index.html","90da9dedbee8c6fbef838df8be386f05"],["D:/blog/public/archives/index.html","8b16c90b5906a3f21c723a8b8324fd9a"],["D:/blog/public/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["D:/blog/public/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["D:/blog/public/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["D:/blog/public/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["D:/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/blog/public/books/index.html","f77906f5a910b5d55dd56429fa8bc02d"],["D:/blog/public/categories/CSS/CSS技巧收录/index.html","a6284ee36c7e491da683cd7bdaf20818"],["D:/blog/public/categories/CSS/index.html","923f6877cbef700c026ae80d0ef60f46"],["D:/blog/public/categories/JavaScript/index.html","eedf89f96873f4e6c0117b14225b1afb"],["D:/blog/public/categories/Microsoft/C/index.html","c6e7a34356cc4a6ce9699fcc853b11fe"],["D:/blog/public/categories/Microsoft/index.html","6e92fed26e0ee16db0d1515d5222aae7"],["D:/blog/public/categories/blog/index.html","267e55397c21bd0fe6f9d25db104aa36"],["D:/blog/public/categories/index.html","1cf7e187e588a7757cc57c98eb107b31"],["D:/blog/public/categories/学习笔记/index.html","1aac31b4822f7d591fd98c3e5a1140f8"],["D:/blog/public/categories/生活随笔/index.html","4bc7e8c99b5c936d5aa73601153afc32"],["D:/blog/public/categories/踩坑记录/index.html","09343f5fafacc59e7d9de8f177a3d3a2"],["D:/blog/public/change_log/index.html","38ca9d4ae75404d78bf1b486ac4e7c8f"],["D:/blog/public/css/index.css","ea1bc8056942323fbf4bfb9b1c015a42"],["D:/blog/public/css/var.css","9c35698567c4bb7b0b6f085b6b80c4f2"],["D:/blog/public/hello-world.html","8b47dfa549a34860ee6a0e816922ae75"],["D:/blog/public/hexo博客常用指令.html","9c1e90d197078f855aece027facdf30b"],["D:/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/alipay.jpg","716bd9ffa85a427056d0529e4906d370"],["D:/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/blog/public/img/wechat.png","1ac24fe798d9cd9192a805dfcee73f12"],["D:/blog/public/index.html","2adbd4173ed42d8774906944f216a714"],["D:/blog/public/js/baidupush.js","3a7e9881c1a994a644cdcc67dc12ae7e"],["D:/blog/public/js/main.js","fad811598880d938c0e617c40e7aeb94"],["D:/blog/public/js/runtimeshow.js","688a99b5f17b6b4d0caffe84e1f783ac"],["D:/blog/public/js/search/algolia.js","2a97841e6a464d44a743b29a317462ba"],["D:/blog/public/js/search/local-search.js","8fa79c3343c6ead8a2a7b28fd71731fe"],["D:/blog/public/js/third-party/ClickShowText.js","9c6f907f3152bade21fa8dceba167fe1"],["D:/blog/public/js/third-party/activate-power-mode.js","dbbd3f0ca43cb31e7c619df679ee9d5e"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/canvas-nest.js","559ca0b4762237f23dbd12bd2953ad16"],["D:/blog/public/js/third-party/canvas-ribbon.js","e3de184e79d65e6d280dc9173ed19590"],["D:/blog/public/js/third-party/click_heart.js","4aec589be0466a4fadc318789b2849bc"],["D:/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/piao.js","1c6fdd5b5dfe6d2032a7e26b587cb764"],["D:/blog/public/js/tw_cn.js","2c68643018a08c02e6cf61658eef00c1"],["D:/blog/public/js/utils.js","ee5b60d9cba083a954ee3794ccd2b3ac"],["D:/blog/public/link/index.html","2e5cd836ede4e64c91b014664d11524d"],["D:/blog/public/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/blog/public/messageboard/index.html","01cfc8ee480db7013421be2f8f4b32b2"],["D:/blog/public/movies/index.html","2367b60a35a9aa9f2998804fe99c3279"],["D:/blog/public/music/index.html","a2550369e86c395cfadf198c3806c2c8"],["D:/blog/public/photos/index.html","64b6d637c155ae9ea67efef780535f46"],["D:/blog/public/schedule/index.html","8667d29859f103216b9e57cd7b700485"],["D:/blog/public/tags/2019/index.html","8bd7248d9c2215f3d496c8282bbf65fe"],["D:/blog/public/tags/CSS/index.html","c2884855a62a5d78edf8872700c4dbeb"],["D:/blog/public/tags/JavaScript-面试题/index.html","e33ad363c33f57e667a44ab0fc66327c"],["D:/blog/public/tags/Markdown/index.html","5b90d8e4ae585d389d01b063ceacf46b"],["D:/blog/public/tags/SSL-TLS/index.html","3b67a489e5de19f64a7186de29464c29"],["D:/blog/public/tags/Sass/index.html","785d2e54a0ff01ba1dca1db5807d90df"],["D:/blog/public/tags/blog/index.html","4234b21cd5c45728c665b0ba044f8d5e"],["D:/blog/public/tags/hexo/index.html","86a2936484b8cd7ab1de9e4dac43eed0"],["D:/blog/public/tags/index.html","e727da1f2e0e1b4de93b250beb2ee30f"],["D:/blog/public/tags/singleton/index.html","8f3fc5e49b6bc21eeb3c2972a0bdc5b7"],["D:/blog/public/tags/static/index.html","aa152c99ddb71eb4407504f612866513"],["D:/blog/public/tags/指令/index.html","be2c940f92fd330d5d7cc247caa36d8d"],["D:/blog/public/tags/热评/index.html","cbd042e39e4314b2a112f0824b96da67"],["D:/blog/public/tags/语法/index.html","89f4565825a927d0b4c634bcd1440239"],["D:/blog/public/我也不知道在写什么.html","87c880a65c18f8319adc6a2aa8e0c8b5"],["D:/blog/public/我的第一篇博文.html","a16f0c7b2d72f3bd1b91262561f82782"],["D:/blog/public/所求为何.html","59fcd51a6a2d9a34cc207160d2425224"]];
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







