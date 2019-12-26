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

var precacheConfig = [["D:/blog/public/CSS技巧-一-之隐藏滚动条.html","8acb254ac24b3bd61ebb1dead2a158e6"],["D:/blog/public/Coding-Pages申请SSL-TLS证书错误.html","0ad746bc2bd5c8d1bc5db1ec7798b491"],["D:/blog/public/JavaScript面试题收藏.html","e4111587c0eaf9d347e1da9c5afbdbc5"],["D:/blog/public/Markdown基础语法.html","b3eb12e8326ba59c4fb36b49e26347b1"],["D:/blog/public/SASS的基础语法-一.html","b30491537a68b6ab876ce6a0e302c72d"],["D:/blog/public/about/index.html","71366de3ccd92b86be5b7a73dc336244"],["D:/blog/public/archives/2019/06/index.html","0d2f914e08f283b338e01ebcc04f1b02"],["D:/blog/public/archives/2019/07/index.html","eb73b7ac83d3a0d3275d687dad30fa8f"],["D:/blog/public/archives/2019/08/index.html","3cef17cc10933af372b4897887708bdd"],["D:/blog/public/archives/2019/09/index.html","123bb495d54475cbb0ef6007c1c0b412"],["D:/blog/public/archives/2019/12/index.html","201a565f41cc539d95b0d6a12129ec99"],["D:/blog/public/archives/2019/index.html","e44cd9a966caddadb193de79359f20e9"],["D:/blog/public/archives/2019/page/2/index.html","f9438ef2ad3c77f447b15cdda0bb1169"],["D:/blog/public/archives/index.html","0b43038bce988e178e60426b1dfe9abf"],["D:/blog/public/archives/page/2/index.html","dd33f73e1d758ebeb70242b4c0b94c52"],["D:/blog/public/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["D:/blog/public/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["D:/blog/public/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["D:/blog/public/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["D:/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/blog/public/books/index.html","f12325187b3cb655ec271c999f474285"],["D:/blog/public/categories/CSS/CSS技巧收录/index.html","dcc437b3dc488da2330f4c9453dcb575"],["D:/blog/public/categories/CSS/index.html","8b5c0371d102cfc5091226fb45e00aeb"],["D:/blog/public/categories/JavaScript/index.html","60e1a711936c8e1c7f5306251ff2c72e"],["D:/blog/public/categories/Microsoft/C/index.html","1c42f644e4977b762c572efc2df955a3"],["D:/blog/public/categories/Microsoft/index.html","a0b631a3f44751a537b38d214df89a0d"],["D:/blog/public/categories/blog/index.html","7fd78e9af4840779b6cb5ade1022d487"],["D:/blog/public/categories/index.html","a52236e1b1c13c1b3c383a924f5cae24"],["D:/blog/public/categories/大前端/index.html","b639215780001acd901c98785069efec"],["D:/blog/public/categories/学习笔记/index.html","b08eaa80aeed5c26d7d6593a649d4934"],["D:/blog/public/categories/生活随笔/index.html","e078d7bfa3c792fe3e8feb5e8bed4dc2"],["D:/blog/public/categories/踩坑记录/index.html","da83756028ac6cf7a511092fb18f7896"],["D:/blog/public/change_log/index.html","09ab124a566f5937c72aacf30546b113"],["D:/blog/public/css/index.css","9d2438691ba7cee00118b095c8783da7"],["D:/blog/public/css/var.css","f5ca03b354f10ae1c17dba1027dafdb1"],["D:/blog/public/hello-world.html","fe0296f44ac9b8bcd99b2aae4234fdf1"],["D:/blog/public/hexo博客常用指令.html","4c0e455f705754b53f3dbecb8bbf6b34"],["D:/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/alipay.jpg","716bd9ffa85a427056d0529e4906d370"],["D:/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/blog/public/img/wechat.png","1ac24fe798d9cd9192a805dfcee73f12"],["D:/blog/public/index.html","0491e9238405a59e793a260f57b6c980"],["D:/blog/public/js/baidupush.js","c066784ac98d8a77494b282c169fc6bc"],["D:/blog/public/js/main.js","fad811598880d938c0e617c40e7aeb94"],["D:/blog/public/js/runtimeshow.js","c49559ee599501650e2c8cb59421bbda"],["D:/blog/public/js/search/algolia.js","885b17849ab32395bc1552c702b97f31"],["D:/blog/public/js/search/local-search.js","56de7c2d21832c6d063bd5c5a291ea3b"],["D:/blog/public/js/third-party/ClickShowText.js","2089bc0f733aece5799be17f48cf60e1"],["D:/blog/public/js/third-party/activate-power-mode.js","f918e73cb4e093e62a8ce100b1079576"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/canvas-nest.js","ca4faee64a04e93bef87858dcf7631f8"],["D:/blog/public/js/third-party/canvas-ribbon.js","3458d374f2d18fe911d7e94cb676695a"],["D:/blog/public/js/third-party/click_heart.js","5d6f273fd2e7a0c21369154cd1c3e43e"],["D:/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/piao.js","e86669135b5a9c5da1a4fabf3cd7f34c"],["D:/blog/public/js/tw_cn.js","b5aefce0694ccf36f200b24a7ad87a1e"],["D:/blog/public/js/utils.js","29325d731567c89286b1b2302eb8e960"],["D:/blog/public/link/index.html","24a72057a96c9f5bbe86ffdd8f34ed43"],["D:/blog/public/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/blog/public/messageboard/index.html","6e945b03104a3d871ae3b3e6cd3bca2b"],["D:/blog/public/movies/index.html","577f07e9a82a2879624bd97f3537f546"],["D:/blog/public/music/index.html","7df2536149583f391846cfcc524ea646"],["D:/blog/public/page/2/index.html","749e6d322b34ffc18f635c32070d1503"],["D:/blog/public/photos/index.html","3e597dd1acc3a69d971dadcc57627de2"],["D:/blog/public/schedule/index.html","b1796b601b19cd0250b614a6c447ed3b"],["D:/blog/public/tags/2019/index.html","7b97b862a09bb886a647d13bb40e2248"],["D:/blog/public/tags/CSS/index.html","5f5bde82e829d17f052e28f276336e6d"],["D:/blog/public/tags/H5/index.html","af8d48717d5067c61fce4f3a3f21075d"],["D:/blog/public/tags/JavaScript-面试题/index.html","9d3380b203bb66138439ce067a1b8c46"],["D:/blog/public/tags/Markdown/index.html","231ec1eec30a8bbd52a528d9cdb71ef9"],["D:/blog/public/tags/SSL-TLS/index.html","7c2ba6a0684e8ba74cdd60f283e19c7b"],["D:/blog/public/tags/Sass/index.html","696c646deb1895fd5f6f638076bbe1f1"],["D:/blog/public/tags/blog/index.html","bfae8608a530baea6d6c259540ddea20"],["D:/blog/public/tags/hexo/index.html","479d49901e315cba4ed9d193d68fd681"],["D:/blog/public/tags/index.html","70c956a1000940480dce176403e0fea0"],["D:/blog/public/tags/singleton/index.html","ad4fe0db1eb95a6a91867b0af7dd702b"],["D:/blog/public/tags/static/index.html","ec24e6b8bb7edb3f4a8617717bf44ed6"],["D:/blog/public/tags/大前端/index.html","903b8a2a7026255b4e219161a77196b1"],["D:/blog/public/tags/指令/index.html","d6dda203113b722e943ef7997441d648"],["D:/blog/public/tags/热评/index.html","430721d2cfad93a673c259daf11dc7b2"],["D:/blog/public/tags/移动端/index.html","1ae9ca7ec4465f35e526021a6a71dcd4"],["D:/blog/public/tags/语法/index.html","1b7dd5619cddade18c1c95b7a073483b"],["D:/blog/public/tags/阅读/index.html","5cf38a6675f15171dba231e5aeb8cce7"],["D:/blog/public/我也不知道在写什么.html","9a5d3ca66305b96efe85725c3703969d"],["D:/blog/public/我的第一篇博文.html","77ccacdb18233f4b87d26cbb6dd76f06"],["D:/blog/public/所求为何.html","2a657cc5215ced228ff4868655d5cda5"],["D:/blog/public/移动端适配方案.html","c3176084cfda19936f1a32e03c25c670"],["D:/blog/public/缘来，你也走过这里.html","5d1087a85c5f069eba7b70889bd973bf"]];
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







