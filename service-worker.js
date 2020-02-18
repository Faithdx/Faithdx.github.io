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

var precacheConfig = [["C:/Users/shyne/Desktop/blog/public/2019-料你也不想再过一次.html","b9a16a8933ae94f4d0f34288d8ff5873"],["C:/Users/shyne/Desktop/blog/public/CSS技巧-一-之隐藏滚动条.html","604a930457adcce208eeae4165e0d801"],["C:/Users/shyne/Desktop/blog/public/Coding-Pages申请SSL-TLS证书错误.html","561889abd069869c82c408b022954cb8"],["C:/Users/shyne/Desktop/blog/public/Hexo博客升级.html","69a9b48c91e8b73ddd6101cf9a229794"],["C:/Users/shyne/Desktop/blog/public/JavaScript面试题收藏.html","8eb86b5a14a3290aba281bc3f9b1780b"],["C:/Users/shyne/Desktop/blog/public/Markdown基础语法.html","93338fd0697ab897fbd7371994e91ea1"],["C:/Users/shyne/Desktop/blog/public/SASS的基础语法-一.html","ca97bc0e9171c639e530fc263bdcea20"],["C:/Users/shyne/Desktop/blog/public/WPF学习笔记(四)字体图标的使用.html","a6955909c1f5049035783079ea28bf96"],["C:/Users/shyne/Desktop/blog/public/WPF学习笔记-一-入门基础.html","3c8d4f64ba21ba825c8312c230aeb5c0"],["C:/Users/shyne/Desktop/blog/public/WPF学习笔记-三-WPF模板.html","6544d0c4dda679265bad235fd73da746"],["C:/Users/shyne/Desktop/blog/public/WPF学习笔记-二-资源与触发器.html","31d5c2309d40d12344e3a05d610df28a"],["C:/Users/shyne/Desktop/blog/public/about/index.html","002abc5fe19e2e1056d41c51ea668e7b"],["C:/Users/shyne/Desktop/blog/public/archives/2019/06/index.html","863eb64268e234a8a98b327accce589d"],["C:/Users/shyne/Desktop/blog/public/archives/2019/07/index.html","d647bd50073ce76ebee9415f4eaff836"],["C:/Users/shyne/Desktop/blog/public/archives/2019/08/index.html","549b1ed42d9fa36d3dd1636f2e27a824"],["C:/Users/shyne/Desktop/blog/public/archives/2019/09/index.html","fe8f91753793e36df7d693a711f96ea9"],["C:/Users/shyne/Desktop/blog/public/archives/2019/10/index.html","30548a1cad68e76c6452f1418cb89381"],["C:/Users/shyne/Desktop/blog/public/archives/2019/12/index.html","9b597e654f80c7cb2de6cf366a697cae"],["C:/Users/shyne/Desktop/blog/public/archives/2019/index.html","a3ddc49ca6451bd06f891fbe9e362faf"],["C:/Users/shyne/Desktop/blog/public/archives/2019/page/2/index.html","0af901d344fce17de8d0c6bc7d0e8b51"],["C:/Users/shyne/Desktop/blog/public/archives/2020/01/index.html","798e07e5b1fe3b35afc39ffa270e18aa"],["C:/Users/shyne/Desktop/blog/public/archives/2020/index.html","2d102fdb45c34053c96943343f99b245"],["C:/Users/shyne/Desktop/blog/public/archives/index.html","43566d2fd6ee4876704835473f2a286c"],["C:/Users/shyne/Desktop/blog/public/archives/page/2/index.html","548adaa3965236303ab29169684561ce"],["C:/Users/shyne/Desktop/blog/public/archives/page/3/index.html","2db02323a0b82a4a6db4a604ac2f6e1a"],["C:/Users/shyne/Desktop/blog/public/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["C:/Users/shyne/Desktop/blog/public/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["C:/Users/shyne/Desktop/blog/public/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["C:/Users/shyne/Desktop/blog/public/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["C:/Users/shyne/Desktop/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Users/shyne/Desktop/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/Users/shyne/Desktop/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/Users/shyne/Desktop/blog/public/books/index.html","ae3c60e6301661c695f538caeb19ac69"],["C:/Users/shyne/Desktop/blog/public/categories/Blog/index.html","d4586b7decaab24aef7401d7beafe650"],["C:/Users/shyne/Desktop/blog/public/categories/CSS/CSS技巧收录/index.html","227b6760b55eba1b96eb5068dfea8873"],["C:/Users/shyne/Desktop/blog/public/categories/CSS/index.html","253a6494642830d3682a9ed0bc7bb1bc"],["C:/Users/shyne/Desktop/blog/public/categories/JavaScript/index.html","39fce0abd16dad129f1072da218f75ed"],["C:/Users/shyne/Desktop/blog/public/categories/Microsoft之旅/Asp-NET-Core/index.html","92783e28b9620244bd5d3b94e09c6629"],["C:/Users/shyne/Desktop/blog/public/categories/Microsoft之旅/C/index.html","df3a20014ef9a7c3e16993373655c260"],["C:/Users/shyne/Desktop/blog/public/categories/Microsoft之旅/WPF/index.html","408b2d2046c491fbb3b23e38e8630f83"],["C:/Users/shyne/Desktop/blog/public/categories/Microsoft之旅/index.html","44bc82f84fe366e272ee4b9e05a95c68"],["C:/Users/shyne/Desktop/blog/public/categories/index.html","de41bb314c99eada79cbd4df7c375423"],["C:/Users/shyne/Desktop/blog/public/categories/大前端/index.html","b2101647da7c6f470269de56beb55c1a"],["C:/Users/shyne/Desktop/blog/public/categories/学习笔记/index.html","a0bc9463126039902e6a33c13dfab17e"],["C:/Users/shyne/Desktop/blog/public/categories/生活随笔/index.html","fb72985b146d3d62f5bcb1ac1c85b3e3"],["C:/Users/shyne/Desktop/blog/public/categories/踩坑记录/index.html","e0b584f056949009f69d53467a27f9c6"],["C:/Users/shyne/Desktop/blog/public/change_log/index.html","71e0ecc23aa1d2ad29176a000d8aa0f1"],["C:/Users/shyne/Desktop/blog/public/css/index.css","bef87848f2a866d0498fa645c2a44092"],["C:/Users/shyne/Desktop/blog/public/css/var.css","f63697c735309a35fd67acaed85b2c73"],["C:/Users/shyne/Desktop/blog/public/hello-world.html","7c17e59239d35778bfe4d0d41fd137c1"],["C:/Users/shyne/Desktop/blog/public/hexo博客常用指令.html","fe16feaba7d39904bf421b55b8c5ce1c"],["C:/Users/shyne/Desktop/blog/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["C:/Users/shyne/Desktop/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/shyne/Desktop/blog/public/img/alipay.jpg","716bd9ffa85a427056d0529e4906d370"],["C:/Users/shyne/Desktop/blog/public/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["C:/Users/shyne/Desktop/blog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/shyne/Desktop/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/shyne/Desktop/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/shyne/Desktop/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/shyne/Desktop/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/Users/shyne/Desktop/blog/public/img/wechat.png","1ac24fe798d9cd9192a805dfcee73f12"],["C:/Users/shyne/Desktop/blog/public/index.html","7278483951aa82d068f2221ea569935e"],["C:/Users/shyne/Desktop/blog/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["C:/Users/shyne/Desktop/blog/public/js/tw_cn.js","1607810f99cb1a0e768649264e40c2b7"],["C:/Users/shyne/Desktop/blog/public/js/utils.js","62871c0202381d0e7ac44bdf5e2274ea"],["C:/Users/shyne/Desktop/blog/public/link/index.html","d7ba843f820baad10dc205130d8a5584"],["C:/Users/shyne/Desktop/blog/public/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["C:/Users/shyne/Desktop/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["C:/Users/shyne/Desktop/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["C:/Users/shyne/Desktop/blog/public/messageboard/index.html","afc29862d0e29e6c74f63c32ae9bdf75"],["C:/Users/shyne/Desktop/blog/public/movies/index.html","ed6902a0d738912016d50683faff6f42"],["C:/Users/shyne/Desktop/blog/public/music/index.html","a3c88679b98dfbbe1d99adabcfe1fd61"],["C:/Users/shyne/Desktop/blog/public/page/2/index.html","a338300e51838b701bba75d3101e3160"],["C:/Users/shyne/Desktop/blog/public/page/3/index.html","40b17a191023a0bd512de08bafa04d80"],["C:/Users/shyne/Desktop/blog/public/photos/index.html","aa35bfc15c64234a34e3b7e81274034b"],["C:/Users/shyne/Desktop/blog/public/schedule/index.html","8de86882ef3c86c0bc8712db9b450153"],["C:/Users/shyne/Desktop/blog/public/tags/2019/index.html","bbbfef682f265ed298bb359185bde627"],["C:/Users/shyne/Desktop/blog/public/tags/2020/index.html","4d43a19978dbcb0779e780ae0e99d092"],["C:/Users/shyne/Desktop/blog/public/tags/Blazor/index.html","da70cd315a46cfddb31c4bec731df1df"],["C:/Users/shyne/Desktop/blog/public/tags/CSS/index.html","3dd3b44f149f285186303ed054e35e91"],["C:/Users/shyne/Desktop/blog/public/tags/H5/index.html","9918b5f91569639c4c4e6b2e01fb27a3"],["C:/Users/shyne/Desktop/blog/public/tags/Iconfont/index.html","caa93639b59ffccfaeaea3142f08bdcb"],["C:/Users/shyne/Desktop/blog/public/tags/JavaScript-面试题/index.html","0e6e99e195bc5da354ab9459ef87018b"],["C:/Users/shyne/Desktop/blog/public/tags/Jay/index.html","e0ee601e60808ce1d5a8c5a5c83108f6"],["C:/Users/shyne/Desktop/blog/public/tags/Markdown/index.html","82e3c34bf2dd1b986da50d6aeea9b8f1"],["C:/Users/shyne/Desktop/blog/public/tags/Microsoft/index.html","6273f9c11d7c95687fdb2e24839d7183"],["C:/Users/shyne/Desktop/blog/public/tags/SSL-TLS/index.html","19db1b1412a40ea7f4df4451e4f98860"],["C:/Users/shyne/Desktop/blog/public/tags/Sass/index.html","7fa63fcc19a7475122f7fecb54f35196"],["C:/Users/shyne/Desktop/blog/public/tags/WEB/index.html","b610b92a793aed3910747f24f4b214e6"],["C:/Users/shyne/Desktop/blog/public/tags/WPF/index.html","f975627be605764b645defb2d8ca840d"],["C:/Users/shyne/Desktop/blog/public/tags/XAML/index.html","0e7f38ec3e5846c430ef9da5712664c9"],["C:/Users/shyne/Desktop/blog/public/tags/blog/index.html","665194a6efecedf9c0d56351f5550599"],["C:/Users/shyne/Desktop/blog/public/tags/hexo/index.html","c787518ccad8821f57be366f7bec1bb4"],["C:/Users/shyne/Desktop/blog/public/tags/index.html","b0de1f6e070ef6d6ff7aee91938d1979"],["C:/Users/shyne/Desktop/blog/public/tags/music/index.html","8f449b3e4141787bf965bd3b70a08fc8"],["C:/Users/shyne/Desktop/blog/public/tags/singleton-static/index.html","bcb5136f784b358d6c0330265a9d06f4"],["C:/Users/shyne/Desktop/blog/public/tags/大前端/index.html","48cd69d6cb07d579468e02a400c53fcc"],["C:/Users/shyne/Desktop/blog/public/tags/指令/index.html","d2b808ce90582653ad7e233c3a26399e"],["C:/Users/shyne/Desktop/blog/public/tags/热评/index.html","454a77ddb745fa062be1b08bf46f43f7"],["C:/Users/shyne/Desktop/blog/public/tags/移动端/index.html","8f1e04961c70f230ecf1b6c6ef3d59d2"],["C:/Users/shyne/Desktop/blog/public/tags/语法/index.html","c9e439c2dbcbd15bd8e7c33dc7d7b639"],["C:/Users/shyne/Desktop/blog/public/tags/阅读/index.html","d82873e829864914e0da40fbb85c991f"],["C:/Users/shyne/Desktop/blog/public/前端性能优化.html","b007cce0d0b48a092ba449651c10f5d8"],["C:/Users/shyne/Desktop/blog/public/微软Blazor框架学习笔记-一.html","ba6f86a538b8b4c57c8a0044b731a8e4"],["C:/Users/shyne/Desktop/blog/public/我也不知道在写什么.html","80974f7888bbf72a4283d06ebd3ce24b"],["C:/Users/shyne/Desktop/blog/public/我有属于我的天.html","55454f3e380382f7d42ca8248cb01abf"],["C:/Users/shyne/Desktop/blog/public/我的第一篇博文.html","b0f8379ad431dd3ea57bb68f7d7fa443"],["C:/Users/shyne/Desktop/blog/public/所求为何.html","fd2a67a1ed7975aa951e5ac17bf1bab0"],["C:/Users/shyne/Desktop/blog/public/移动端适配方案.html","cbf18ef45d2e338382cebfdd910fc3c1"],["C:/Users/shyne/Desktop/blog/public/缘来，你也走过这里.html","b642eac1a281928e4694a175bb04095c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
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

var createCacheKey = function (originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function (originalUrl,
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







