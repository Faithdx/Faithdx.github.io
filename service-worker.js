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

var precacheConfig = [["D:/blog/public/2019-料你也不想再过一次.html","5c07534d36298e50a4ba2f2905972f79"],["D:/blog/public/CSS技巧-一-之隐藏滚动条.html","e53bbc676e7ac94f58e85f2a5c35e2dc"],["D:/blog/public/Coding-Pages申请SSL-TLS证书错误.html","92201f77b69906534503a3fb242be7ab"],["D:/blog/public/JavaScript面试题收藏.html","82d194c29a0833cdeb6ed9c9b513cf75"],["D:/blog/public/Markdown基础语法.html","7af4272ed37cfb359250513853872434"],["D:/blog/public/SASS的基础语法-一.html","db2e9cca78211889fbc13518e9eaeb4c"],["D:/blog/public/about/index.html","6906195502f24dadc1a98d2f4936a1b8"],["D:/blog/public/archives/2019/06/index.html","dbab02111b0a4d708b6a7aa5767caafe"],["D:/blog/public/archives/2019/07/index.html","fbe6b3e75d9bc5639185d1a15f145ac8"],["D:/blog/public/archives/2019/08/index.html","d795a28a748bedce9a8b650d1839b568"],["D:/blog/public/archives/2019/09/index.html","c620771d185f658f9b7ae85888981e87"],["D:/blog/public/archives/2019/12/index.html","ba948bf2fa453da62be09402e73580d7"],["D:/blog/public/archives/2019/index.html","9859d1f3304c4d1a9b8ca4bc7a29a93e"],["D:/blog/public/archives/2019/page/2/index.html","5f4777d36f09f17befbd141176d28f56"],["D:/blog/public/archives/2020/01/index.html","a5ab44b28dbcc018d4bcba8f07029d5c"],["D:/blog/public/archives/2020/index.html","0f6141e2f74ede5645ed71b586944537"],["D:/blog/public/archives/index.html","88cded27280ce1087d6c2c034fb0902b"],["D:/blog/public/archives/page/2/index.html","7e8913b7b6515ad26d0e23fd25863cc2"],["D:/blog/public/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["D:/blog/public/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["D:/blog/public/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["D:/blog/public/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["D:/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/blog/public/books/index.html","d8510f20fd3083b150dabb01470d279e"],["D:/blog/public/categories/CSS/CSS技巧收录/index.html","2197c61836734b96173bb913bbf898c9"],["D:/blog/public/categories/CSS/index.html","a7d40418622c1009471f45cb3edfa23f"],["D:/blog/public/categories/JavaScript/index.html","8dee7ef8a9f515d2aa611509d3b4c06e"],["D:/blog/public/categories/Microsoft/C/index.html","9169ff3537e46a86b3ba0d9052db9530"],["D:/blog/public/categories/Microsoft/index.html","63d3d8429eda6a79868695d349339d5a"],["D:/blog/public/categories/blog/index.html","86bdaddca39ebc962009d434ed93f2b8"],["D:/blog/public/categories/index.html","0e7b3d7586d7a75f769281cb9f48a935"],["D:/blog/public/categories/大前端/index.html","a8edca4f48a8f24c3777a7c5186ff738"],["D:/blog/public/categories/学习笔记/index.html","13d2f729037249784acc759e8fef1ff3"],["D:/blog/public/categories/生活随笔/index.html","4bd86890360c759ece2eeee894aa7961"],["D:/blog/public/categories/踩坑记录/index.html","60f2c493984db0e900563d204969b145"],["D:/blog/public/change_log/index.html","6560c2c59f79bc6eeee99244c83f3124"],["D:/blog/public/css/index.css","7d01baedc2dc9108508b241b9c0bf3d0"],["D:/blog/public/css/var.css","7947c4b94a44e155cdfb88a63b677f20"],["D:/blog/public/hello-world.html","87f76802ac3257196880a6c0c280034f"],["D:/blog/public/hexo博客常用指令.html","a866220e0a98f8d739a566afc1e978ed"],["D:/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/alipay.jpg","716bd9ffa85a427056d0529e4906d370"],["D:/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/blog/public/img/wechat.png","1ac24fe798d9cd9192a805dfcee73f12"],["D:/blog/public/index.html","a83f4601b144e7db21b0ccb96d1a9f49"],["D:/blog/public/js/baidupush.js","b7bb7c1099e86026e02c4df08faa7a34"],["D:/blog/public/js/main.js","fad811598880d938c0e617c40e7aeb94"],["D:/blog/public/js/runtimeshow.js","f421bee873d57e11bea37547df242555"],["D:/blog/public/js/search/algolia.js","955cd1232fe380ace0aae51eb3b91398"],["D:/blog/public/js/search/local-search.js","24464eac0477b83e5ab067700d5741ae"],["D:/blog/public/js/third-party/ClickShowText.js","318056d92f7bdbf1396bd08fafd2d19f"],["D:/blog/public/js/third-party/activate-power-mode.js","6ffa4eb82aed35edd5d42ff8bbec3606"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/canvas-nest.js","7a2c815fb6d9e4e6488d2fa7fc768d44"],["D:/blog/public/js/third-party/canvas-ribbon.js","9f2952569aa5813df7e0eb8e8d92d1e9"],["D:/blog/public/js/third-party/click_heart.js","434e31a00f1e3b6b437f4ed3d4997c4e"],["D:/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/piao.js","d8747790153011f81701ea798f83fa97"],["D:/blog/public/js/tw_cn.js","597050d8ea85f720fcb1022e04ac91eb"],["D:/blog/public/js/utils.js","3fdbb66a2f37ffb30989a2ef4e676a3d"],["D:/blog/public/link/index.html","e653c0bdfdc6e30bda258fe824570a8b"],["D:/blog/public/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/blog/public/messageboard/index.html","625dab5f68d2df020b1b153e54b1a3ab"],["D:/blog/public/movies/index.html","f77abc8d1467ddb5a6d054baad4a2d15"],["D:/blog/public/music/index.html","d6c6011ca274a0e503b303a1ea2f5f14"],["D:/blog/public/page/2/index.html","e89b58cf8d47e16ad4742a2a2ecfe077"],["D:/blog/public/photos/index.html","d77e3ca4ddeb510cc71fba47b5c86afc"],["D:/blog/public/schedule/index.html","3be448d592ce4a4c8e61caeed08be8e0"],["D:/blog/public/tags/2019/index.html","fe9bcf939e11ea91a6b4609848c3e0b5"],["D:/blog/public/tags/2020/index.html","16a97c5b70927caa10e9335ccbb729c7"],["D:/blog/public/tags/CSS/index.html","708dd37e3e6e955cb810f7dea634244c"],["D:/blog/public/tags/H5/index.html","42e1c894d97e965057b1e5c93a133f27"],["D:/blog/public/tags/JavaScript-面试题/index.html","10e3a9f6eb6d68187b2bbe46d19513f7"],["D:/blog/public/tags/Jay/index.html","24960925a55ed46f2fa361416b5a4cab"],["D:/blog/public/tags/Markdown/index.html","a74f261b1fcb04d92c3536093fade74c"],["D:/blog/public/tags/SSL-TLS/index.html","d3388f4d4d4f5dc04b0976fdb83607d3"],["D:/blog/public/tags/Sass/index.html","fb1e063ce3c0336fafa8d328bb54d65f"],["D:/blog/public/tags/blog/index.html","55644e35dcff76b3a9676019759ebf08"],["D:/blog/public/tags/hexo/index.html","e8c4a86a1427dbddd40842a6b08f5ba2"],["D:/blog/public/tags/index.html","24a4d469a70d3a5acb9faa60e8ca3a4b"],["D:/blog/public/tags/music/index.html","9d5572907037bb260a602025f61d6c1d"],["D:/blog/public/tags/singleton/index.html","24644d30ee00b857745ddbe23fc0090a"],["D:/blog/public/tags/static/index.html","734436f0671fd7581e210a58c049028a"],["D:/blog/public/tags/大前端/index.html","39d5d10c04b023d6e97823c79fb36351"],["D:/blog/public/tags/指令/index.html","299c3afb5ff6fdb28a7ca294f7c0982c"],["D:/blog/public/tags/热评/index.html","13ae6859343dac2df0bcc6d2bd3ecf65"],["D:/blog/public/tags/移动端/index.html","a659fdb1a871e1f6c2b5e121c6edf98f"],["D:/blog/public/tags/语法/index.html","4f5bf0611ae0832faa20f7d780efc387"],["D:/blog/public/tags/阅读/index.html","50d3b09f9a6a441023cef30128b3cc55"],["D:/blog/public/我也不知道在写什么.html","5138012423d752d3f48c4e49a0652790"],["D:/blog/public/我有属于我的天.html","b8d32a5d1cadb32c178e14b1d2a227ca"],["D:/blog/public/我的第一篇博文.html","b3adb99924b0af0619455e74cc2716ea"],["D:/blog/public/所求为何.html","3ede716e9aa2e70f39b0da94ee4c51d5"],["D:/blog/public/移动端适配方案.html","e9c283b9e537957f7f243e63ce0dfca6"],["D:/blog/public/缘来，你也走过这里.html","92e59ba7bf8f784ccc0ebec2e7fe957a"]];
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







