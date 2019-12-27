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

var precacheConfig = [["D:/blog/public/CSS技巧-一-之隐藏滚动条.html","21adfb4efe8365c00e50863471f3da68"],["D:/blog/public/Coding-Pages申请SSL-TLS证书错误.html","87ff2988411059bf96b5d466b424f379"],["D:/blog/public/JavaScript面试题收藏.html","cba99a22a7e8aab13d7b4b3400ae9dbe"],["D:/blog/public/Markdown基础语法.html","ebeee58581925198e08f11061317fefa"],["D:/blog/public/SASS的基础语法-一.html","66a5b6867934a704e0edae5edd99d3cb"],["D:/blog/public/about/index.html","80b792cc1c093f2fa27862a964a23879"],["D:/blog/public/archives/2019/06/index.html","29a2a1d2c76b062c3d625fee424a02e1"],["D:/blog/public/archives/2019/07/index.html","ebffb253ac87c1b0c0c3c204963e4b39"],["D:/blog/public/archives/2019/08/index.html","845b298936affded5a3c45273da7344c"],["D:/blog/public/archives/2019/09/index.html","6bb4cc8ceeaeb7b2d5db3d3e8727f200"],["D:/blog/public/archives/2019/12/index.html","dfa3273a6573b2354799aa9ef229464a"],["D:/blog/public/archives/2019/index.html","54934ac1d7f988c0d5c218173508a41a"],["D:/blog/public/archives/2019/page/2/index.html","ba30fe0bddf2d795de9288ee8a11b4d3"],["D:/blog/public/archives/index.html","e1a3830681c07cd8439b7fc511c356ce"],["D:/blog/public/archives/page/2/index.html","5e3cfe40fe6c0d0c8a27533a5fe05d6f"],["D:/blog/public/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["D:/blog/public/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["D:/blog/public/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["D:/blog/public/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["D:/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/blog/public/books/index.html","f17bac8729d279281866d98d18d53806"],["D:/blog/public/categories/CSS/CSS技巧收录/index.html","b150a6c3f8d70c269ab841f41a88c1da"],["D:/blog/public/categories/CSS/index.html","51cb77eea2495c8d06d59a8943b8588c"],["D:/blog/public/categories/JavaScript/index.html","260c170d8e1f381f6dd393a2447d6314"],["D:/blog/public/categories/Microsoft/C/index.html","0d5e11400f92a129c0c3c4e1dce671cf"],["D:/blog/public/categories/Microsoft/index.html","e021698675279ffd91e01ac4097a6745"],["D:/blog/public/categories/blog/index.html","7c09a33fb38a82459368a301dfaf085c"],["D:/blog/public/categories/index.html","32531c5f645e78288f76e9ee8a644193"],["D:/blog/public/categories/大前端/index.html","2f6b98e36a20988e6653782371993a44"],["D:/blog/public/categories/学习笔记/index.html","8630c952e8091a09aa010cb7be77912c"],["D:/blog/public/categories/生活随笔/index.html","d8e4646a62709a3a6f6b2fafed33add1"],["D:/blog/public/categories/踩坑记录/index.html","b114aa08bf38a1b3105ec86ac2e110d9"],["D:/blog/public/change_log/index.html","f609966e4f2a401c7800a22062eea91f"],["D:/blog/public/css/index.css","804a56ba5ab7b0ff5e866bac88b2c50c"],["D:/blog/public/css/var.css","6ebd18e436aa463349d7a0761fe89e52"],["D:/blog/public/hello-world.html","286aa0a61c1ba37780b217bd8691295d"],["D:/blog/public/hexo博客常用指令.html","e0d1127fb85aaa45fd58bee0c2c8cdb2"],["D:/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/alipay.jpg","716bd9ffa85a427056d0529e4906d370"],["D:/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/blog/public/img/wechat.png","1ac24fe798d9cd9192a805dfcee73f12"],["D:/blog/public/index.html","3996e8e3b183dbaebd34b4ad29294184"],["D:/blog/public/js/baidupush.js","b330a02216207097b0fd14cf84824d70"],["D:/blog/public/js/main.js","fad811598880d938c0e617c40e7aeb94"],["D:/blog/public/js/runtimeshow.js","e7e3682a7d0fb45add51bc801ee2e7c5"],["D:/blog/public/js/search/algolia.js","9afb615b3677a81a505f32f7d1f9ff17"],["D:/blog/public/js/search/local-search.js","2f7b40b12ca78b0c2e69afd244192eff"],["D:/blog/public/js/third-party/ClickShowText.js","d80bcc130f05e9880e27d0c2ee836f12"],["D:/blog/public/js/third-party/activate-power-mode.js","499899253d161a7dd781ac8092e31dd6"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/canvas-nest.js","9873ed3a7d26d80dd8c75004278edf8d"],["D:/blog/public/js/third-party/canvas-ribbon.js","84713a2a38496bd083c6a38187958b22"],["D:/blog/public/js/third-party/click_heart.js","711985c22fddfb286797ea3a06a17791"],["D:/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/piao.js","3a4b5e69ec466bbf41e705cbf7df8d27"],["D:/blog/public/js/tw_cn.js","cecbefce679dc7ca211a4f74380d1c63"],["D:/blog/public/js/utils.js","08b251ca8a933a4a38d834d63ed2b667"],["D:/blog/public/link/index.html","978dba131847d65f3de60a7355110e90"],["D:/blog/public/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/blog/public/messageboard/index.html","1676058e6cc66d2a57bc96eb6560e540"],["D:/blog/public/movies/index.html","63d1d196ea2e7924e0fbe9e69d1c662b"],["D:/blog/public/music/index.html","2d826fe68adaa49f89c8a9c8f6a20578"],["D:/blog/public/page/2/index.html","efcb0166ed1a25c7abca015384b4b797"],["D:/blog/public/photos/index.html","a7a04eb353e24a0d10ac8f0f76804476"],["D:/blog/public/schedule/index.html","175659b6fd6d1669f36fa0774684c305"],["D:/blog/public/tags/2019/index.html","97b5777ec703c0e7aa834b553c5f993f"],["D:/blog/public/tags/CSS/index.html","4a1d680aff12806e818957dbd44c934c"],["D:/blog/public/tags/H5/index.html","3103b2475ebe4d9f609141994d72e5ac"],["D:/blog/public/tags/JavaScript-面试题/index.html","1dbb31feda1e54904ee4caa05e15512a"],["D:/blog/public/tags/Jay/index.html","0ff8012f1b5841393b2d673f3dc11dc1"],["D:/blog/public/tags/Markdown/index.html","8402e7986b3db1782a5e2e4eab196dbb"],["D:/blog/public/tags/SSL-TLS/index.html","7c172ff639a511dcdfad97a09f303ad7"],["D:/blog/public/tags/Sass/index.html","1839a678ccb89f988c1f71adcf24fc4d"],["D:/blog/public/tags/blog/index.html","13617ef8ae1643ec4c33ae94e192eb5a"],["D:/blog/public/tags/hexo/index.html","2bedb30f46691d3b1b47c8bc3004999c"],["D:/blog/public/tags/index.html","c05a839a7d531762920f458e17d728f9"],["D:/blog/public/tags/music/index.html","412674e23a0b764d4048718edad56b14"],["D:/blog/public/tags/singleton/index.html","de3d50abb01c6395f4a40bc624663eee"],["D:/blog/public/tags/static/index.html","2d8f327c2a1e83689105da07e44239d8"],["D:/blog/public/tags/大前端/index.html","693da3c2c6915e872d5c207bca3c3491"],["D:/blog/public/tags/指令/index.html","9d314d9a281cf18f270e71eaadab7a07"],["D:/blog/public/tags/热评/index.html","08d6f260e9da29b20752b7be76e48a87"],["D:/blog/public/tags/移动端/index.html","ee517422460e689498293a502839fef6"],["D:/blog/public/tags/语法/index.html","4feab487b3b56cb82268de9f677a94af"],["D:/blog/public/tags/阅读/index.html","4a2fd92a168bea5d807043f224710093"],["D:/blog/public/我也不知道在写什么.html","07dd85bc6a494e85f633eef4c0f701b4"],["D:/blog/public/我有属于我的天.html","0bc72901dba7cc1ed493f57e8006a5c1"],["D:/blog/public/我的第一篇博文.html","c2d92d54728d0ae08c125add4f4596e0"],["D:/blog/public/所求为何.html","ddba45ecf18893c6de9ed08d4b30929f"],["D:/blog/public/移动端适配方案.html","1f87a9c5608332fbd88ebd3abb7e3461"],["D:/blog/public/缘来，你也走过这里.html","b566f6740e6196be6aeb06c23d711035"]];
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







