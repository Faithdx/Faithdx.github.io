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

var precacheConfig = [["C:/Users/shyne/Desktop/blog/public/2019-料你也不想再过一次.html","b3e2934b0256e94c2cf7c37d1beb1a1a"],["C:/Users/shyne/Desktop/blog/public/CSS技巧-一-之隐藏滚动条.html","7e157c241483a3183534a89ca7fa218b"],["C:/Users/shyne/Desktop/blog/public/Coding-Pages申请SSL-TLS证书错误.html","0c9098afb330f91d39bd7730652b0c52"],["C:/Users/shyne/Desktop/blog/public/Hexo博客升级.html","01abcdf5f69d825f5d32bf80691c62fa"],["C:/Users/shyne/Desktop/blog/public/JavaScript面试题收藏.html","c18da9f2935ff482c799f36685b67703"],["C:/Users/shyne/Desktop/blog/public/Markdown基础语法.html","3d4315d489cf3b372863ad94f4082443"],["C:/Users/shyne/Desktop/blog/public/SASS的基础语法-一.html","c7e8489d90ce5ff05483870e403d026a"],["C:/Users/shyne/Desktop/blog/public/WPF学习笔记(四)字体图标的使用.html","2d3c84038987e4ce76cacbe21993649a"],["C:/Users/shyne/Desktop/blog/public/WPF学习笔记-一-入门基础.html","f3b798e8d0c1418f4cd78644ab00326b"],["C:/Users/shyne/Desktop/blog/public/WPF学习笔记-三-WPF模板.html","9216c214d85e1bab3dd79fd7fcbbedd4"],["C:/Users/shyne/Desktop/blog/public/WPF学习笔记-二-资源与触发器.html","a81210f246524acec4a1d27e0e925350"],["C:/Users/shyne/Desktop/blog/public/about/index.html","b757b0f393154897934fe6a34c5e8d3c"],["C:/Users/shyne/Desktop/blog/public/archives/2019/06/index.html","a9627f4a7a3ce22048fb2559cef005d8"],["C:/Users/shyne/Desktop/blog/public/archives/2019/07/index.html","4c3d4008327f1a4a0f95be958b30e5b1"],["C:/Users/shyne/Desktop/blog/public/archives/2019/08/index.html","7d677e223e8a2fdfcead68579d818086"],["C:/Users/shyne/Desktop/blog/public/archives/2019/09/index.html","faa0dca6f38b88c9771976c190b617f9"],["C:/Users/shyne/Desktop/blog/public/archives/2019/10/index.html","3b76115be1fa4ce8421ff45e1465aee5"],["C:/Users/shyne/Desktop/blog/public/archives/2019/12/index.html","0b1904bfe6bd126040b6a6768dd5d2b5"],["C:/Users/shyne/Desktop/blog/public/archives/2019/index.html","5133d3cb7c6a74106a9b6e2aad49e40a"],["C:/Users/shyne/Desktop/blog/public/archives/2019/page/2/index.html","ec211c4313fdad82b5dcc9737bbe8be2"],["C:/Users/shyne/Desktop/blog/public/archives/2020/01/index.html","5bef9b49dcc75d4297cd544c5d300601"],["C:/Users/shyne/Desktop/blog/public/archives/2020/index.html","2e4e8e601a0cf6315b4b030f8bf8587b"],["C:/Users/shyne/Desktop/blog/public/archives/index.html","eb2f997be0d29824798413369c5d80e8"],["C:/Users/shyne/Desktop/blog/public/archives/page/2/index.html","fea61be68215a6f386702deeccacc142"],["C:/Users/shyne/Desktop/blog/public/archives/page/3/index.html","b125c2abac66a4a987bdd2f64bf0a7e8"],["C:/Users/shyne/Desktop/blog/public/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["C:/Users/shyne/Desktop/blog/public/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["C:/Users/shyne/Desktop/blog/public/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["C:/Users/shyne/Desktop/blog/public/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["C:/Users/shyne/Desktop/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Users/shyne/Desktop/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/Users/shyne/Desktop/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/Users/shyne/Desktop/blog/public/books/index.html","b75fb08c2c692332c338b4b5d4b642df"],["C:/Users/shyne/Desktop/blog/public/categories/Blog/index.html","b77e509b693b1f28dda3643a4e4ec79a"],["C:/Users/shyne/Desktop/blog/public/categories/CSS/CSS技巧收录/index.html","9bbbd11314d8afc5a811452c415411f1"],["C:/Users/shyne/Desktop/blog/public/categories/CSS/index.html","e16f2e2f24ae1447d062da0368d103f9"],["C:/Users/shyne/Desktop/blog/public/categories/JavaScript/index.html","4cea4284811229cbecda6db79898ce46"],["C:/Users/shyne/Desktop/blog/public/categories/Microsoft之旅/Asp-NET-Core/index.html","408c06e34288833348d174bee4ca6063"],["C:/Users/shyne/Desktop/blog/public/categories/Microsoft之旅/C/index.html","1c8e6c052571756fffb827941ce92a6a"],["C:/Users/shyne/Desktop/blog/public/categories/Microsoft之旅/WPF/index.html","234ef1db709800acf190c38d70eeb4cb"],["C:/Users/shyne/Desktop/blog/public/categories/Microsoft之旅/index.html","570aa137eec6cc837aa91f070b9f3729"],["C:/Users/shyne/Desktop/blog/public/categories/index.html","72abae1adbf4b9c66a0961fe1dd5fa38"],["C:/Users/shyne/Desktop/blog/public/categories/大前端/index.html","33d89f6d5cce49e2d6754ab547b65e32"],["C:/Users/shyne/Desktop/blog/public/categories/学习笔记/index.html","0bd8f7dab77bca31546fe3142ac04ff1"],["C:/Users/shyne/Desktop/blog/public/categories/生活随笔/index.html","6ba18a9f3261d296a75e92516e773f71"],["C:/Users/shyne/Desktop/blog/public/categories/踩坑记录/index.html","caeef5e19e1994911193464b3114dc9a"],["C:/Users/shyne/Desktop/blog/public/change_log/index.html","5cdfb4b2f199fd3daea3f0762da9f913"],["C:/Users/shyne/Desktop/blog/public/css/index.css","901ad3ea271ae653dae9842b121c0428"],["C:/Users/shyne/Desktop/blog/public/css/var.css","21c7bd4d3dc2b9877c3aed3800141d2b"],["C:/Users/shyne/Desktop/blog/public/hello-world.html","b163aedb79782900cd0a59ffacc2fa47"],["C:/Users/shyne/Desktop/blog/public/hexo博客常用指令.html","875a343529b40d4aa3cb620b04966442"],["C:/Users/shyne/Desktop/blog/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["C:/Users/shyne/Desktop/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/shyne/Desktop/blog/public/img/alipay.jpg","716bd9ffa85a427056d0529e4906d370"],["C:/Users/shyne/Desktop/blog/public/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["C:/Users/shyne/Desktop/blog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/shyne/Desktop/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/shyne/Desktop/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/shyne/Desktop/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/shyne/Desktop/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/Users/shyne/Desktop/blog/public/img/wechat.png","1ac24fe798d9cd9192a805dfcee73f12"],["C:/Users/shyne/Desktop/blog/public/index.html","579f0744ce5dc7c1f7ebd773b6dac865"],["C:/Users/shyne/Desktop/blog/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["C:/Users/shyne/Desktop/blog/public/js/tw_cn.js","80e4c0ae3ddad397dcc35e7a65b58806"],["C:/Users/shyne/Desktop/blog/public/js/utils.js","4312a47c7349491799e4a07d482374cd"],["C:/Users/shyne/Desktop/blog/public/link/index.html","2b23feb358935fbfa140090b07e43296"],["C:/Users/shyne/Desktop/blog/public/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["C:/Users/shyne/Desktop/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["C:/Users/shyne/Desktop/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["C:/Users/shyne/Desktop/blog/public/messageboard/index.html","cb7477f20a2b84c625c43a5ebdaa136e"],["C:/Users/shyne/Desktop/blog/public/movies/index.html","ec49dc81c3d205f25da7064f618807b7"],["C:/Users/shyne/Desktop/blog/public/music/index.html","d827dd6b68184828c633cada3b62768c"],["C:/Users/shyne/Desktop/blog/public/page/2/index.html","af052a222b904d68ef460e77c63c4b7e"],["C:/Users/shyne/Desktop/blog/public/page/3/index.html","0be4305523802bf3ab6e91ef1ea6b053"],["C:/Users/shyne/Desktop/blog/public/photos/index.html","fce835f1c3c418f616e001cf3eba6b89"],["C:/Users/shyne/Desktop/blog/public/schedule/index.html","39ca3a12c73dc3882bf05fb861acc37e"],["C:/Users/shyne/Desktop/blog/public/tags/2019/index.html","edad7d2d78741a611e6e59e0ff4ca751"],["C:/Users/shyne/Desktop/blog/public/tags/2020/index.html","6b625642279de4353e406cd1ad47b69d"],["C:/Users/shyne/Desktop/blog/public/tags/Blazor/index.html","25ccd999d302c29d19151b637366eb8b"],["C:/Users/shyne/Desktop/blog/public/tags/CSS/index.html","9ea12e07d9d3a69c6babfe7b6443d3da"],["C:/Users/shyne/Desktop/blog/public/tags/H5/index.html","a948fe869697606183d323cea46b8880"],["C:/Users/shyne/Desktop/blog/public/tags/Iconfont/index.html","3176371e3d682387f8305b844dc04b14"],["C:/Users/shyne/Desktop/blog/public/tags/JavaScript-面试题/index.html","140e3119b1e81b81ef5704f898f73218"],["C:/Users/shyne/Desktop/blog/public/tags/Jay/index.html","0bdb30d7c6a998bc99105e663bf0cc89"],["C:/Users/shyne/Desktop/blog/public/tags/Markdown/index.html","78627def2cd4aa2a22dae3fccdebbb32"],["C:/Users/shyne/Desktop/blog/public/tags/Microsoft/index.html","6368f2b38f166eddac6622d63c8b90ef"],["C:/Users/shyne/Desktop/blog/public/tags/SSL-TLS/index.html","88b21b92392ff7de7206599bce3445b4"],["C:/Users/shyne/Desktop/blog/public/tags/Sass/index.html","65bdf576a5db5e9d4a57738bba775bda"],["C:/Users/shyne/Desktop/blog/public/tags/WEB/index.html","414463202a60de1c82d39bbcab4cdc74"],["C:/Users/shyne/Desktop/blog/public/tags/WPF/index.html","03fd2bb3ce442f8a3c381bc8657c16fd"],["C:/Users/shyne/Desktop/blog/public/tags/XAML/index.html","ff8bc48c68890620e9098554afd6c9f3"],["C:/Users/shyne/Desktop/blog/public/tags/blog/index.html","0e210f9d082b634698ec6c07a8741583"],["C:/Users/shyne/Desktop/blog/public/tags/hexo/index.html","48d18d960a58962e22517bd8e5bbe5d8"],["C:/Users/shyne/Desktop/blog/public/tags/index.html","88afb3145ba30f9b973cebaf31e79b3e"],["C:/Users/shyne/Desktop/blog/public/tags/music/index.html","a4ffd8987ac473473c12e5680d3c5d81"],["C:/Users/shyne/Desktop/blog/public/tags/singleton-static/index.html","d795796b987b2f8db14a831990ad6f85"],["C:/Users/shyne/Desktop/blog/public/tags/大前端/index.html","601f06055e8545d0293a57de5d06ce8e"],["C:/Users/shyne/Desktop/blog/public/tags/指令/index.html","5cb0747fbc11508656a98b3a2c3d73fd"],["C:/Users/shyne/Desktop/blog/public/tags/热评/index.html","6b5ec22964ad1a0f1d96262cbd0025d1"],["C:/Users/shyne/Desktop/blog/public/tags/移动端/index.html","18d8c6cb89fbb4f86c46493554f6ee49"],["C:/Users/shyne/Desktop/blog/public/tags/语法/index.html","47d75de312b79129d006be9a6ef5ad9d"],["C:/Users/shyne/Desktop/blog/public/tags/阅读/index.html","2a829185f7da2cb998f97e65e005afa1"],["C:/Users/shyne/Desktop/blog/public/前端性能优化.html","630505ed87360aded4ad4e562e8889ef"],["C:/Users/shyne/Desktop/blog/public/微软Blazor框架学习笔记-一.html","198281b14d2907a6b5e49f2ad40823f1"],["C:/Users/shyne/Desktop/blog/public/我也不知道在写什么.html","5f37b71daa45693f880298bdbc280d59"],["C:/Users/shyne/Desktop/blog/public/我有属于我的天.html","4dfbe2510a6a118edb2b5dd15a031536"],["C:/Users/shyne/Desktop/blog/public/我的第一篇博文.html","e3af333a5efb0b3846afadd232c9200e"],["C:/Users/shyne/Desktop/blog/public/所求为何.html","4f401a37c82f0e8169e1904deb57f390"],["C:/Users/shyne/Desktop/blog/public/移动端适配方案.html","74bbbf7a9f82d73ac5cdaa48fb3a74de"],["C:/Users/shyne/Desktop/blog/public/缘来，你也走过这里.html","bc66fd2d6a0574f10eb8305d8ab41353"]];
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







