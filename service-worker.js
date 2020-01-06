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

var precacheConfig = [["D:/微云同步/Hexo-Blog/blog/public/2019-料你也不想再过一次.html","baa2ddb1eaa24a145ef79d5b611cda2e"],["D:/微云同步/Hexo-Blog/blog/public/CSS技巧-一-之隐藏滚动条.html","49f6dd3a2cd92e38e085cccccc12d0c5"],["D:/微云同步/Hexo-Blog/blog/public/Coding-Pages申请SSL-TLS证书错误.html","e3f0355df662fe16d0ce15c02c6424b4"],["D:/微云同步/Hexo-Blog/blog/public/JavaScript面试题收藏.html","5b4c160e857ce83fa161906ccb808b53"],["D:/微云同步/Hexo-Blog/blog/public/Markdown基础语法.html","49abf7762ca6d70ccd451e0d433062e0"],["D:/微云同步/Hexo-Blog/blog/public/SASS的基础语法-一.html","ac4f0ef4f7a70d40bcbdea7fc4a52b68"],["D:/微云同步/Hexo-Blog/blog/public/WPF学习笔记-一-入门基础.html","d890ada08fa7499a4e223a53ebaae87c"],["D:/微云同步/Hexo-Blog/blog/public/WPF学习笔记-二-资源与触发器.html","84c6c6c68ae2f4eff1bf33881d66a38a"],["D:/微云同步/Hexo-Blog/blog/public/about/index.html","749915e9993bf32bff611300bb9d0a1d"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/06/index.html","f07ab4efbeb770c1ca6a4069e8604253"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/07/index.html","cb0c459baf65bfdccebe3c396108c439"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/08/index.html","3173ce33b3eade8475f5806c85496a4c"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/09/index.html","0f5afc414424282c35246e70785d5666"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/10/index.html","14dedde44a91ffd84b6afa8ae6748f6b"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/12/index.html","1cd762be4113ad6658b55bf768bb38ee"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/index.html","c80d972460adbb7280edeab36c011531"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/page/2/index.html","99af0046ad836aa02d3d613b43f6df04"],["D:/微云同步/Hexo-Blog/blog/public/archives/2020/01/index.html","517e8a187dcdbe5e61a6fd448190429d"],["D:/微云同步/Hexo-Blog/blog/public/archives/2020/index.html","0b3ee8e366e9586f873185b7bd31ddf7"],["D:/微云同步/Hexo-Blog/blog/public/archives/index.html","15480a573610ae0fb9819916f19a4fcc"],["D:/微云同步/Hexo-Blog/blog/public/archives/page/2/index.html","15cccf06472c51b41a3a4aa48b4f31a8"],["D:/微云同步/Hexo-Blog/blog/public/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["D:/微云同步/Hexo-Blog/blog/public/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["D:/微云同步/Hexo-Blog/blog/public/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["D:/微云同步/Hexo-Blog/blog/public/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["D:/微云同步/Hexo-Blog/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/微云同步/Hexo-Blog/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/微云同步/Hexo-Blog/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/微云同步/Hexo-Blog/blog/public/books/index.html","ba0b70ead30da23561647658b3cd49f6"],["D:/微云同步/Hexo-Blog/blog/public/categories/Blog/index.html","84ffb4e0283a810bcfc96d61557460e6"],["D:/微云同步/Hexo-Blog/blog/public/categories/CSS/CSS技巧收录/index.html","4246a2e48502479275d67b83a35ced3a"],["D:/微云同步/Hexo-Blog/blog/public/categories/CSS/index.html","dba64792fe72514d7cde950e4d868398"],["D:/微云同步/Hexo-Blog/blog/public/categories/JavaScript/index.html","86df259794f3079858cd1a5a0aece4d3"],["D:/微云同步/Hexo-Blog/blog/public/categories/Microsoft/C/index.html","a6fb3cc823170611cdda28886bd84a92"],["D:/微云同步/Hexo-Blog/blog/public/categories/Microsoft/index.html","ba5a8666c301ea75fccb8b0543984940"],["D:/微云同步/Hexo-Blog/blog/public/categories/index.html","967420fce6d87cb48d261d0d16068217"],["D:/微云同步/Hexo-Blog/blog/public/categories/大前端/index.html","e0957358e2097e6d3cb690e2a91f4cd2"],["D:/微云同步/Hexo-Blog/blog/public/categories/学习笔记/index.html","3ddeb43a42791d71c481cbb4055d6fa7"],["D:/微云同步/Hexo-Blog/blog/public/categories/微软/Asp-NET-Core/index.html","25773aa1b49fe9f3a9739cc73c4707e3"],["D:/微云同步/Hexo-Blog/blog/public/categories/微软/WPF/index.html","1938b4a8ec955130d3dd4e20b0657c0b"],["D:/微云同步/Hexo-Blog/blog/public/categories/微软/index.html","3a0eb7b89fb9ae00af7bdfebfcd893ae"],["D:/微云同步/Hexo-Blog/blog/public/categories/生活随笔/index.html","91b975a44369b33a87a6b0fdbd445370"],["D:/微云同步/Hexo-Blog/blog/public/categories/踩坑记录/index.html","2d87e1bc12fe3b1683ee6578a1904b1f"],["D:/微云同步/Hexo-Blog/blog/public/change_log/index.html","4142667e108bc3be08df77497eaedd46"],["D:/微云同步/Hexo-Blog/blog/public/css/index.css","faa7b4f9bdc14e7950be69a3ef569341"],["D:/微云同步/Hexo-Blog/blog/public/css/var.css","5708df1b796e48286ca8a9d8d41149b2"],["D:/微云同步/Hexo-Blog/blog/public/hello-world.html","bbf31111b2288f01553f50f958840eda"],["D:/微云同步/Hexo-Blog/blog/public/hexo博客常用指令.html","45262f4399bb0c0d89c42034ab9b571e"],["D:/微云同步/Hexo-Blog/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/微云同步/Hexo-Blog/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/微云同步/Hexo-Blog/blog/public/img/alipay.jpg","716bd9ffa85a427056d0529e4906d370"],["D:/微云同步/Hexo-Blog/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/微云同步/Hexo-Blog/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/微云同步/Hexo-Blog/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/微云同步/Hexo-Blog/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/微云同步/Hexo-Blog/blog/public/img/wechat.png","1ac24fe798d9cd9192a805dfcee73f12"],["D:/微云同步/Hexo-Blog/blog/public/index.html","42b71824cbb24edda575195398cb4509"],["D:/微云同步/Hexo-Blog/blog/public/js/baidupush.js","8e933a5979a91c2c99dc6ecd1d4df913"],["D:/微云同步/Hexo-Blog/blog/public/js/main.js","fad811598880d938c0e617c40e7aeb94"],["D:/微云同步/Hexo-Blog/blog/public/js/runtimeshow.js","a0a3d683431de43333639dc97f5c92ec"],["D:/微云同步/Hexo-Blog/blog/public/js/search/algolia.js","78335b885cd3ffc598653a21247e7475"],["D:/微云同步/Hexo-Blog/blog/public/js/search/local-search.js","1c961aa2f985533bab99502c4c4a0848"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/ClickShowText.js","f92975df9eae592d47f2853ae24814f2"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/activate-power-mode.js","17c255c10ba8d30ec77be85a67bcb95d"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/canvas-nest.js","08b4d76929c32fc3dc8966b48daf9f8a"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/canvas-ribbon.js","199d6585bd6f07ce295dfe050553267d"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/click_heart.js","fdc56955d757ac5134b816192050e66b"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/piao.js","11dc0a516a02e27a8a4437c1894182e6"],["D:/微云同步/Hexo-Blog/blog/public/js/tw_cn.js","2263162aff6f2e04dee77d3aa205b26f"],["D:/微云同步/Hexo-Blog/blog/public/js/utils.js","53a37394d091e1d50aee36cba988df64"],["D:/微云同步/Hexo-Blog/blog/public/link/index.html","c6fb1b49245b01ba0f38ae150b97ad74"],["D:/微云同步/Hexo-Blog/blog/public/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/微云同步/Hexo-Blog/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/微云同步/Hexo-Blog/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/微云同步/Hexo-Blog/blog/public/messageboard/index.html","3aa8976abec509b90451cc8df41bec37"],["D:/微云同步/Hexo-Blog/blog/public/movies/index.html","f496f171a91b9b901ac5467f003de51d"],["D:/微云同步/Hexo-Blog/blog/public/music/index.html","7e59ab5b786ba4bb7fabb4364af0eec3"],["D:/微云同步/Hexo-Blog/blog/public/page/2/index.html","135681fc400320afbf48880763f93db3"],["D:/微云同步/Hexo-Blog/blog/public/photos/index.html","f0ba9532ddae62955760faa7d2f66f92"],["D:/微云同步/Hexo-Blog/blog/public/schedule/index.html","9c9d5bd4ee2e2e9601825e9411a3834d"],["D:/微云同步/Hexo-Blog/blog/public/tags/2019/index.html","0837f0af9c95ed818947cfb013ddbd42"],["D:/微云同步/Hexo-Blog/blog/public/tags/2020/index.html","4d6ff67e1e54a232338fc30b060b465d"],["D:/微云同步/Hexo-Blog/blog/public/tags/Blazor/index.html","ffaf904ed0d6502525cbd6c1ced702b2"],["D:/微云同步/Hexo-Blog/blog/public/tags/CSS/index.html","bbd1b6a2899eacbaa53e1ab8c39e3b94"],["D:/微云同步/Hexo-Blog/blog/public/tags/H5/index.html","6844ef52ec0128f8f5e9e92f2d767ef9"],["D:/微云同步/Hexo-Blog/blog/public/tags/JavaScript-面试题/index.html","47c7334f1ca014ec12f4d042e1187055"],["D:/微云同步/Hexo-Blog/blog/public/tags/Jay/index.html","4d364ee90ee9dc1a6055a1a510974772"],["D:/微云同步/Hexo-Blog/blog/public/tags/Markdown/index.html","42d7e42f6621478673569c7a4101042e"],["D:/微云同步/Hexo-Blog/blog/public/tags/Microsoft/index.html","4e8e756b0655e1815daf5f5d28c8e0bc"],["D:/微云同步/Hexo-Blog/blog/public/tags/SSL-TLS/index.html","67319fe34f5f5ad603271e7904fa929a"],["D:/微云同步/Hexo-Blog/blog/public/tags/Sass/index.html","733f1946daa24aa517dc22ba876ab8c4"],["D:/微云同步/Hexo-Blog/blog/public/tags/WPF/index.html","c0d9c0d852c42dac102cdbb64a05666e"],["D:/微云同步/Hexo-Blog/blog/public/tags/XAML/index.html","7dff47fc5c3783d2934592bddd0b0a7a"],["D:/微云同步/Hexo-Blog/blog/public/tags/blog/index.html","6c3b9ca2c2c7e6ef27e68b7ca0648597"],["D:/微云同步/Hexo-Blog/blog/public/tags/hexo/index.html","cb601808a109dfea428ea3e82ec96baf"],["D:/微云同步/Hexo-Blog/blog/public/tags/index.html","f3a37116149bc06d0832b04152e8d5a4"],["D:/微云同步/Hexo-Blog/blog/public/tags/music/index.html","16424f9fbb9b5cf7e151bc937e3f16d0"],["D:/微云同步/Hexo-Blog/blog/public/tags/singleton-static/index.html","a716b5f5db8266a51afb1cd2893d1f32"],["D:/微云同步/Hexo-Blog/blog/public/tags/大前端/index.html","61e18a13222ccc6569530c5730cab01d"],["D:/微云同步/Hexo-Blog/blog/public/tags/指令/index.html","ff2e1e7ecef83043015d81bb799bb8d0"],["D:/微云同步/Hexo-Blog/blog/public/tags/热评/index.html","2ff6bb29919b38f1836fd35fa7743fc4"],["D:/微云同步/Hexo-Blog/blog/public/tags/移动端/index.html","d9e3554518926207ffa1164624c65d9c"],["D:/微云同步/Hexo-Blog/blog/public/tags/语法/index.html","c85ea0f459451f6b484f17717567dc34"],["D:/微云同步/Hexo-Blog/blog/public/tags/阅读/index.html","2b12102e47d7cd582a625d88fdca4286"],["D:/微云同步/Hexo-Blog/blog/public/微软Blazor框架学习笔记-一.html","1059d8f4edfa5fcdaffdd091cbc6a3f2"],["D:/微云同步/Hexo-Blog/blog/public/我也不知道在写什么.html","52e34ac76f46d6f518c2cff2e412296c"],["D:/微云同步/Hexo-Blog/blog/public/我有属于我的天.html","3183fc35aa02c1c52248441e712d605d"],["D:/微云同步/Hexo-Blog/blog/public/我的第一篇博文.html","0ea7b468bef57d8f79e00d11631c9540"],["D:/微云同步/Hexo-Blog/blog/public/所求为何.html","ffdebde576316f9ff302c66d925229a8"],["D:/微云同步/Hexo-Blog/blog/public/移动端适配方案.html","5fc7bcaafe6e65aea64ff07195830011"],["D:/微云同步/Hexo-Blog/blog/public/缘来，你也走过这里.html","0dcd4e3898e10df373379661fb1c5580"]];
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







