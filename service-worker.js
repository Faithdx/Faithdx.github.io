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

var precacheConfig = [["D:/blog/public/CSS技巧-一-之隐藏滚动条.html","fe230ab02f61a1c6d3c0d2aa98a172b7"],["D:/blog/public/Coding-Pages申请SSL-TLS证书错误.html","4609fe131d82ba16e04a17135099ec20"],["D:/blog/public/JavaScript面试题收藏.html","9cdd639c60c73d459582b113e78dca89"],["D:/blog/public/Markdown基础语法.html","d4a1a1edad1c381169affa42fbd5b71a"],["D:/blog/public/SASS的基础语法-一.html","498cf7feed41eb8c7c9a1cecb3852a7f"],["D:/blog/public/about/index.html","f517e770d5f942703e785d97b8edbffe"],["D:/blog/public/archives/2019/06/index.html","362d18fd869607c882ef1f6cf86014df"],["D:/blog/public/archives/2019/07/index.html","5b0df9f9f6ae7dd5dc1f7138eba72323"],["D:/blog/public/archives/2019/08/index.html","63012ee823e01a55967b6c72a1b1dc2e"],["D:/blog/public/archives/2019/09/index.html","12040a576ef3ce3b54871fd094350ec9"],["D:/blog/public/archives/2019/12/index.html","a7f1983d22e115d222492acf5ddcc760"],["D:/blog/public/archives/2019/index.html","305fa2b33a9fe4197343096aad0f93c3"],["D:/blog/public/archives/2019/page/2/index.html","954a7e008061d788d0bf98e0c501b179"],["D:/blog/public/archives/index.html","f1d492d8bdc24aab8e0b6aff7fbf3380"],["D:/blog/public/archives/page/2/index.html","0588cab7c04c695b3c6ba6d718cf8f4d"],["D:/blog/public/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["D:/blog/public/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["D:/blog/public/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["D:/blog/public/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["D:/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/blog/public/books/index.html","94bdd7dfaa7b2f16d047e2f082e50238"],["D:/blog/public/categories/CSS/CSS技巧收录/index.html","eef9931a8fd23eb3e1b0ea5825fd8a6c"],["D:/blog/public/categories/CSS/index.html","398f16329e7b482d4e0caca104c1d4c7"],["D:/blog/public/categories/JavaScript/index.html","82aadf50a0dc553e40f78eea38556f57"],["D:/blog/public/categories/Microsoft/C/index.html","9d2d3d01f68799252554133a60ed99e5"],["D:/blog/public/categories/Microsoft/index.html","88a1518b44cf031397edea4454a55896"],["D:/blog/public/categories/blog/index.html","57043ef1098811dbeba597c4f9b16f4b"],["D:/blog/public/categories/index.html","7557125a999755b496f1f3b5b4a8e036"],["D:/blog/public/categories/大前端/index.html","6641f0883ffec127e39b16eeac56c41b"],["D:/blog/public/categories/学习笔记/index.html","39a44bd709a5132bf197c5f03e99ba6f"],["D:/blog/public/categories/生活随笔/index.html","7135925a2cdc5265bafa21ad7acdaf2a"],["D:/blog/public/categories/踩坑记录/index.html","6f56ee9d38629242864c7c6ff2f513c3"],["D:/blog/public/change_log/index.html","134f652038a6b01464c287bf2d1b9e5e"],["D:/blog/public/css/index.css","2afaf0d955d7372ae230d3a0ac57b3fd"],["D:/blog/public/css/var.css","efe5bfca447f474021931dbe4f1954a0"],["D:/blog/public/hello-world.html","990818667274482aec73b2c47c2bd702"],["D:/blog/public/hexo博客常用指令.html","8dbf0cd55214ef674c59378e008cdef3"],["D:/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/alipay.jpg","716bd9ffa85a427056d0529e4906d370"],["D:/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/blog/public/img/wechat.png","1ac24fe798d9cd9192a805dfcee73f12"],["D:/blog/public/index.html","eff6f0fbaece2eb60ad1c0da90d6d07d"],["D:/blog/public/js/baidupush.js","952ec7e316c8f312d74439305f6496e2"],["D:/blog/public/js/main.js","fad811598880d938c0e617c40e7aeb94"],["D:/blog/public/js/runtimeshow.js","52b69bd3b2db562ae10a273e2ce4e367"],["D:/blog/public/js/search/algolia.js","427033ced764deb84d4970ab1deb3f28"],["D:/blog/public/js/search/local-search.js","a9678e5e57d0fee342a685eda117809a"],["D:/blog/public/js/third-party/ClickShowText.js","d24514c68b44bea68351fbc8608c8a2f"],["D:/blog/public/js/third-party/activate-power-mode.js","15bc2511f7833e9e92ff9f1883adc4ab"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/canvas-nest.js","a7110be0d9c57d637ac6881e797eab73"],["D:/blog/public/js/third-party/canvas-ribbon.js","2b9460eb21e2badedf84922b7589d29a"],["D:/blog/public/js/third-party/click_heart.js","f8c971ad06613a9a096b9dc4afdfe0f2"],["D:/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/piao.js","4e2f7c570978bb3af3c220b681dac871"],["D:/blog/public/js/tw_cn.js","2e611537d2dadfd0d7eb29007180fa7f"],["D:/blog/public/js/utils.js","b8b1550d7effd2968d85602d563b94c0"],["D:/blog/public/link/index.html","aa563f3fd657b1b86b9f073eeb01c716"],["D:/blog/public/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/blog/public/messageboard/index.html","bd7688c466a7db5b7b8e73c777df7d96"],["D:/blog/public/movies/index.html","ef81825b9e43ee8fa9402e1172509432"],["D:/blog/public/music/index.html","93a77a08e06e34948ceaf528faa58652"],["D:/blog/public/page/2/index.html","32c03c686b1592b6c52f3116ea90d8d5"],["D:/blog/public/photos/index.html","299c88cc0477857476e047ce71854281"],["D:/blog/public/schedule/index.html","56f657297bebe1849477b37b273c2cb1"],["D:/blog/public/tags/2019/index.html","fc179e80342c96c6524f8344544030f6"],["D:/blog/public/tags/CSS/index.html","72855814463ee11b21267d3d93d57a47"],["D:/blog/public/tags/H5/index.html","b6dc076170c971c09531885c13e237d9"],["D:/blog/public/tags/JavaScript-面试题/index.html","4574dc33ad8647dbb99a070b1bd25d47"],["D:/blog/public/tags/Jay-music/index.html","c53fb1ebc68a8b5d61c1af510e4f057f"],["D:/blog/public/tags/Markdown/index.html","1632356a3d2586d2aa394231031e3122"],["D:/blog/public/tags/SSL-TLS/index.html","7223c417e331978a200690d2185681b9"],["D:/blog/public/tags/Sass/index.html","1e1c7d95c498d19bf5cb92e14deaabdd"],["D:/blog/public/tags/blog/index.html","7c9413116bc8a4b54ce97fc2ba8278f1"],["D:/blog/public/tags/hexo/index.html","107b98341438e51400fef5a7d9b8cba0"],["D:/blog/public/tags/index.html","6626695d9d4fe1aa5be78b5788a6f35b"],["D:/blog/public/tags/singleton/index.html","3a69288899c7049a70448ee268bef565"],["D:/blog/public/tags/static/index.html","646378b312c5eabcbcb119e881851868"],["D:/blog/public/tags/大前端/index.html","784276560255adce4ee795844f96bb92"],["D:/blog/public/tags/指令/index.html","efcf42afc499640464085720e09e42b7"],["D:/blog/public/tags/热评/index.html","8b2ec16275cbc18f3b9b8e86152e803d"],["D:/blog/public/tags/移动端/index.html","fc3cd976a85deabffdc3e632d7b6b050"],["D:/blog/public/tags/语法/index.html","b9c6e7e6060ab3ee7badae34e566b08a"],["D:/blog/public/tags/阅读/index.html","402175d1cf93b18dd5ee82d92b75ca65"],["D:/blog/public/我也不知道在写什么.html","c17de5552cea5a47019f6270a4d3a3ab"],["D:/blog/public/我有属于我的天.html","2318f6bceabba4956d02331c11709616"],["D:/blog/public/我的第一篇博文.html","c6030d0551213c96f25d2430d1f84c89"],["D:/blog/public/所求为何.html","892b7f7b785a07d5dcd0a8c3fcf4342d"],["D:/blog/public/移动端适配方案.html","e56e21cff39581f6dfd32b938c4a159d"],["D:/blog/public/缘来，你也走过这里.html","cbc9e5214faeffbc334a08f236a1154e"]];
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







