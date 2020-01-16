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

var precacheConfig = [["D:/微云同步/Hexo-Blog/blog/public/2019-料你也不想再过一次.html","f769a2a4e45f46ed3a94b1446673cd6b"],["D:/微云同步/Hexo-Blog/blog/public/CSS技巧-一-之隐藏滚动条.html","803f09f694752c932d7ed0eb3faf148f"],["D:/微云同步/Hexo-Blog/blog/public/Coding-Pages申请SSL-TLS证书错误.html","024657dc026f79923c2bf4e4b95191c0"],["D:/微云同步/Hexo-Blog/blog/public/JavaScript面试题收藏.html","da93fcb3431cebe6f4e460c760dae2a1"],["D:/微云同步/Hexo-Blog/blog/public/Markdown基础语法.html","cbc0fe7c660d0f8789b35888519cbbb8"],["D:/微云同步/Hexo-Blog/blog/public/SASS的基础语法-一.html","2aec48b4e4236b5d08af96afe5433e40"],["D:/微云同步/Hexo-Blog/blog/public/WPF学习笔记(四)字体图标的使用.html","20084f9144bf58b59c3e4186b7d0dba5"],["D:/微云同步/Hexo-Blog/blog/public/WPF学习笔记-一-入门基础.html","3d078814e14c69ff5aace57a1609fbc3"],["D:/微云同步/Hexo-Blog/blog/public/WPF学习笔记-三-WPF模板.html","6f20eba2d70e632d270644814040543f"],["D:/微云同步/Hexo-Blog/blog/public/WPF学习笔记-二-资源与触发器.html","8365bdde3bd7362d2b8f6b86c81cbc9d"],["D:/微云同步/Hexo-Blog/blog/public/about/index.html","5dd3ae5b442a6be9fc93574992cb9c87"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/06/index.html","b6a9b6eb058a1e5293e8b25b8f2cfc75"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/07/index.html","52a6f0c618bd5ad203380fc6c435bcd7"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/08/index.html","741df1cd5ce792da4c15a90e1bc94f75"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/09/index.html","03bc285b21e375d576a9966bee5069ea"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/10/index.html","21bb142e31ea2f5be05d5382807ab086"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/12/index.html","2b6c34bcddb2a1d8d5a2b60da048eb8d"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/index.html","d440be462cd154b7db0040f5fa19ebe2"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/page/2/index.html","e72105d1f888cf04dea7f7fc1929dfa1"],["D:/微云同步/Hexo-Blog/blog/public/archives/2020/01/index.html","2a6af6559a3cdd4d7ebd723a442ca5b5"],["D:/微云同步/Hexo-Blog/blog/public/archives/2020/index.html","f43504a92f221c48e4859e1077f38381"],["D:/微云同步/Hexo-Blog/blog/public/archives/index.html","41c846f09d1044ce35594fccc9d6407e"],["D:/微云同步/Hexo-Blog/blog/public/archives/page/2/index.html","03afc741fadd931ea332ef4364665bc6"],["D:/微云同步/Hexo-Blog/blog/public/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["D:/微云同步/Hexo-Blog/blog/public/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["D:/微云同步/Hexo-Blog/blog/public/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["D:/微云同步/Hexo-Blog/blog/public/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["D:/微云同步/Hexo-Blog/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/微云同步/Hexo-Blog/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/微云同步/Hexo-Blog/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/微云同步/Hexo-Blog/blog/public/books/index.html","7186c78329fdb8aca5746226a4d0e89a"],["D:/微云同步/Hexo-Blog/blog/public/categories/Blog/index.html","40a5b98f0ccb38636da5a29c8baead02"],["D:/微云同步/Hexo-Blog/blog/public/categories/CSS/CSS技巧收录/index.html","fece2dfd4556c415848098ff1c577d09"],["D:/微云同步/Hexo-Blog/blog/public/categories/CSS/index.html","cd53c0d4d5c56fc407aa46c12d8282f3"],["D:/微云同步/Hexo-Blog/blog/public/categories/JavaScript/index.html","562801eaea90eb49b4d35ea8dbcb4141"],["D:/微云同步/Hexo-Blog/blog/public/categories/Microsoft之旅/Asp-NET-Core/index.html","570b33c4f4bad79b4482381ccae03a48"],["D:/微云同步/Hexo-Blog/blog/public/categories/Microsoft之旅/C/index.html","803c4e946869335e90f5d43c72a96937"],["D:/微云同步/Hexo-Blog/blog/public/categories/Microsoft之旅/WPF/index.html","8c8ace9adcd45dd4563631c8b9ff8f63"],["D:/微云同步/Hexo-Blog/blog/public/categories/Microsoft之旅/index.html","b19eb77233898233de2361e6362bdd19"],["D:/微云同步/Hexo-Blog/blog/public/categories/index.html","43e91e8fbc5fe3d8454bd95b6f5528ae"],["D:/微云同步/Hexo-Blog/blog/public/categories/大前端/index.html","dfe62025a89a13565c80fb683332ce3f"],["D:/微云同步/Hexo-Blog/blog/public/categories/学习笔记/index.html","b44f6580fbe52725c38e8efe18223425"],["D:/微云同步/Hexo-Blog/blog/public/categories/生活随笔/index.html","6be5c83e3dfd229f7ba15b79cb6e1aa5"],["D:/微云同步/Hexo-Blog/blog/public/categories/踩坑记录/index.html","feedeb9e918f2a36b210ed7eba1b6c35"],["D:/微云同步/Hexo-Blog/blog/public/change_log/index.html","b55fbc08f478c4d2f951c35dc0bef424"],["D:/微云同步/Hexo-Blog/blog/public/css/index.css","87cf573b24b744cb7f4b34f6e13456c8"],["D:/微云同步/Hexo-Blog/blog/public/css/var.css","6ef013f89aa7835d6b6b3fdacea04cd3"],["D:/微云同步/Hexo-Blog/blog/public/hello-world.html","13296cda5d9834fdfce3b0a588b8e1af"],["D:/微云同步/Hexo-Blog/blog/public/hexo博客常用指令.html","4da65a38251e318ba6ca3f492752bda7"],["D:/微云同步/Hexo-Blog/blog/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/微云同步/Hexo-Blog/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/微云同步/Hexo-Blog/blog/public/img/alipay.jpg","716bd9ffa85a427056d0529e4906d370"],["D:/微云同步/Hexo-Blog/blog/public/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["D:/微云同步/Hexo-Blog/blog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/微云同步/Hexo-Blog/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/微云同步/Hexo-Blog/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/微云同步/Hexo-Blog/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/微云同步/Hexo-Blog/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/微云同步/Hexo-Blog/blog/public/img/wechat.png","1ac24fe798d9cd9192a805dfcee73f12"],["D:/微云同步/Hexo-Blog/blog/public/index.html","c913f78559925b160a044e3a66cb2716"],["D:/微云同步/Hexo-Blog/blog/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["D:/微云同步/Hexo-Blog/blog/public/js/tw_cn.js","c067b8552ac47d3b9c3c98c47988f30d"],["D:/微云同步/Hexo-Blog/blog/public/js/utils.js","0024ab070b94de84772e066c3466f563"],["D:/微云同步/Hexo-Blog/blog/public/link/index.html","44d1282eff0d17c6b7686067f38eba9a"],["D:/微云同步/Hexo-Blog/blog/public/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/微云同步/Hexo-Blog/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/微云同步/Hexo-Blog/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/微云同步/Hexo-Blog/blog/public/messageboard/index.html","2d4f867f16864288a5733cb0efc970db"],["D:/微云同步/Hexo-Blog/blog/public/movies/index.html","1a5ec138eb93b2cd4f7cb5be58da2f92"],["D:/微云同步/Hexo-Blog/blog/public/music/index.html","8ee65fa75b934b120db595693067b604"],["D:/微云同步/Hexo-Blog/blog/public/page/2/index.html","30ec10d00537e3fba3c9ff985087fd3b"],["D:/微云同步/Hexo-Blog/blog/public/photos/index.html","1124e635bbfbf2e18ebdf9104b2a7475"],["D:/微云同步/Hexo-Blog/blog/public/schedule/index.html","9174bee3e2a6acfac41c5bc1300e4038"],["D:/微云同步/Hexo-Blog/blog/public/tags/2019/index.html","3c6ea9d1b13068f04585fd0e932b58ab"],["D:/微云同步/Hexo-Blog/blog/public/tags/2020/index.html","788519e483eac275b44649bc11d17ad4"],["D:/微云同步/Hexo-Blog/blog/public/tags/Blazor/index.html","ec9a7a92cc68b1e64ac080afcb5408fb"],["D:/微云同步/Hexo-Blog/blog/public/tags/CSS/index.html","68ca8e32ba31fc49b04042a56450b005"],["D:/微云同步/Hexo-Blog/blog/public/tags/H5/index.html","844a2b023b5a55f33ab4aa065a0f82a2"],["D:/微云同步/Hexo-Blog/blog/public/tags/Iconfont/index.html","754b58af9c0f3e3ce22588697f86c1cb"],["D:/微云同步/Hexo-Blog/blog/public/tags/JavaScript-面试题/index.html","f608b4da0e82fbdc3945a366a4ba2e6c"],["D:/微云同步/Hexo-Blog/blog/public/tags/Jay/index.html","3f84db00e1e34b3b8d968f60c9b2e682"],["D:/微云同步/Hexo-Blog/blog/public/tags/Markdown/index.html","89acb9b22150f97511492bd1d986881b"],["D:/微云同步/Hexo-Blog/blog/public/tags/Microsoft/index.html","67de716f2febc82dad2b605f2c3f4625"],["D:/微云同步/Hexo-Blog/blog/public/tags/SSL-TLS/index.html","decaddda0cf1aa06eb0702241758b6fd"],["D:/微云同步/Hexo-Blog/blog/public/tags/Sass/index.html","13a71b35aabf493593215eea4cb0714f"],["D:/微云同步/Hexo-Blog/blog/public/tags/WEB/index.html","ed01ca9a1a3795fa06c5bf6ebc773d63"],["D:/微云同步/Hexo-Blog/blog/public/tags/WPF/index.html","a86ca7a65b814e53ec9aaf071a81a59e"],["D:/微云同步/Hexo-Blog/blog/public/tags/XAML/index.html","61eab80ac6df1edfd7f7e480e5efde2d"],["D:/微云同步/Hexo-Blog/blog/public/tags/blog/index.html","df394bf21a8410345ebeeed096de71ac"],["D:/微云同步/Hexo-Blog/blog/public/tags/hexo/index.html","79d7d412851d80587844611e868c265a"],["D:/微云同步/Hexo-Blog/blog/public/tags/index.html","e6870ed57e090a9fff4871dacd07c5e0"],["D:/微云同步/Hexo-Blog/blog/public/tags/music/index.html","4293fb32eb09db0eeba32f2a13d6f15b"],["D:/微云同步/Hexo-Blog/blog/public/tags/singleton-static/index.html","739021368d9edba64c3016e2492b8eb5"],["D:/微云同步/Hexo-Blog/blog/public/tags/大前端/index.html","818bd18377dccdc02fca55c45a1dbae6"],["D:/微云同步/Hexo-Blog/blog/public/tags/指令/index.html","deb00bac1e7a678ed0b6b4ff1b1fa094"],["D:/微云同步/Hexo-Blog/blog/public/tags/热评/index.html","ad2e9e3148560292f494c6fa1e8962f5"],["D:/微云同步/Hexo-Blog/blog/public/tags/移动端/index.html","081f551dfd9fd7c2388bc1cdf643c403"],["D:/微云同步/Hexo-Blog/blog/public/tags/语法/index.html","62cd45932cbcf51260d8bc5f87927dc8"],["D:/微云同步/Hexo-Blog/blog/public/tags/阅读/index.html","c929ed8f61659ee699ececf81b94ced8"],["D:/微云同步/Hexo-Blog/blog/public/前端性能优化.html","2668af92b68b198061e886940cc041c2"],["D:/微云同步/Hexo-Blog/blog/public/微软Blazor框架学习笔记-一.html","5884c54c155e35aa90b5352a008c8ea4"],["D:/微云同步/Hexo-Blog/blog/public/我也不知道在写什么.html","c9a55fe8e37c74580777e40026743cde"],["D:/微云同步/Hexo-Blog/blog/public/我有属于我的天.html","84cd39e5b7218c519cd5f928017e12bc"],["D:/微云同步/Hexo-Blog/blog/public/我的第一篇博文.html","da5bb7f52682040bc87e13f89b1c22ec"],["D:/微云同步/Hexo-Blog/blog/public/所求为何.html","5e538f9f26827ad10db5e0b51bd9f08f"],["D:/微云同步/Hexo-Blog/blog/public/移动端适配方案.html","a3c9f1ee7d5e5cf8a99457d12c18acf6"],["D:/微云同步/Hexo-Blog/blog/public/缘来，你也走过这里.html","6c0c9587292c471b9b583c78b582d8dd"]];
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







