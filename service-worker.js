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

var precacheConfig = [["D:/微云同步/Hexo-Blog/blog/public/2019-料你也不想再过一次.html","45c5136553c3c1074962ed99626623ab"],["D:/微云同步/Hexo-Blog/blog/public/CSS技巧-一-之隐藏滚动条.html","75834e52e5955c250bf5e9a2c261fb24"],["D:/微云同步/Hexo-Blog/blog/public/Coding-Pages申请SSL-TLS证书错误.html","fd50cee1a412a99f286deeab4db89838"],["D:/微云同步/Hexo-Blog/blog/public/JavaScript面试题收藏.html","1c54a5ddd24b6a2d2377c98b4827f5bd"],["D:/微云同步/Hexo-Blog/blog/public/Markdown基础语法.html","b6f3c1176ce28fb2521aa8278609c176"],["D:/微云同步/Hexo-Blog/blog/public/SASS的基础语法-一.html","5c892dee8c83e82bcfbdf5f17c52bfeb"],["D:/微云同步/Hexo-Blog/blog/public/WPF学习笔记-一-入门基础.html","6e475889e331a7a98b6b90d52943c57b"],["D:/微云同步/Hexo-Blog/blog/public/WPF学习笔记-三-WPF模板.html","3116c08bebdb657adbe9a60f32a62766"],["D:/微云同步/Hexo-Blog/blog/public/WPF学习笔记-二-资源与触发器.html","40d24d3f38f2d079c7a1f300eacc6880"],["D:/微云同步/Hexo-Blog/blog/public/about/index.html","8852d82fa5f7f2b71e6c6aea41efb3d4"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/06/index.html","96a678be64f78edbbde56351641bf65c"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/07/index.html","3082c7f0e3c15d0e9eb0e595f55be038"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/08/index.html","f1accf45da776e68da31b6abdcf77d0e"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/09/index.html","f8ec8ea6f6b898db5c6ebd268fba314b"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/10/index.html","74ea49e9ca0328f77bf0dba30f627806"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/12/index.html","d42b0264d48a1dbe398eb6d0f45236de"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/index.html","5c28ab35e4c221aa6bc008f199ac08ee"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/page/2/index.html","4e6df262264c66333deb1548621485b8"],["D:/微云同步/Hexo-Blog/blog/public/archives/2020/01/index.html","9c7442c9a5445355cb755268c6ed06b2"],["D:/微云同步/Hexo-Blog/blog/public/archives/2020/index.html","f587a619587a7571139e97e256d79e19"],["D:/微云同步/Hexo-Blog/blog/public/archives/index.html","4b79cc3c102a2826d3bef43809c3eecd"],["D:/微云同步/Hexo-Blog/blog/public/archives/page/2/index.html","88dd37a0d9c660c207d72f3ace2e4c25"],["D:/微云同步/Hexo-Blog/blog/public/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["D:/微云同步/Hexo-Blog/blog/public/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["D:/微云同步/Hexo-Blog/blog/public/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["D:/微云同步/Hexo-Blog/blog/public/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["D:/微云同步/Hexo-Blog/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/微云同步/Hexo-Blog/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/微云同步/Hexo-Blog/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/微云同步/Hexo-Blog/blog/public/books/index.html","b08558bf95b2efb1ec6b2ff10112e61f"],["D:/微云同步/Hexo-Blog/blog/public/categories/Blog/index.html","8856cef49e263c9c6a574636c3c9223b"],["D:/微云同步/Hexo-Blog/blog/public/categories/CSS/CSS技巧收录/index.html","61ca5f557fb40b8d6c7f627f3c30720d"],["D:/微云同步/Hexo-Blog/blog/public/categories/CSS/index.html","f1d866a68ac95e58ba1b18a8f2ed4eca"],["D:/微云同步/Hexo-Blog/blog/public/categories/JavaScript/index.html","9ef76be758fc2182aac492376279c156"],["D:/微云同步/Hexo-Blog/blog/public/categories/Microsoft之旅/Asp-NET-Core/index.html","89c49405c0440889489f2109a4ad676c"],["D:/微云同步/Hexo-Blog/blog/public/categories/Microsoft之旅/C/index.html","d7711f39cbf68d06b925a50326d0f68c"],["D:/微云同步/Hexo-Blog/blog/public/categories/Microsoft之旅/WPF/index.html","ac64cb8e2082d5d48f778b018215ee6f"],["D:/微云同步/Hexo-Blog/blog/public/categories/Microsoft之旅/index.html","357dea522a3b752e3aff780eb039e35c"],["D:/微云同步/Hexo-Blog/blog/public/categories/index.html","121b87a080ba4c0b3122f283b86cbe0a"],["D:/微云同步/Hexo-Blog/blog/public/categories/大前端/index.html","a7ee71847816e3010c0979a4a28ee8f3"],["D:/微云同步/Hexo-Blog/blog/public/categories/学习笔记/index.html","0d4bca1c0bb046b88b440f9c61ea0b2e"],["D:/微云同步/Hexo-Blog/blog/public/categories/生活随笔/index.html","22d1bf8d53b44122b3988e0f8ada3fc3"],["D:/微云同步/Hexo-Blog/blog/public/categories/踩坑记录/index.html","facdc4f634b396ca58f9f34cadd3789e"],["D:/微云同步/Hexo-Blog/blog/public/change_log/index.html","5c3971ff98618f0441ca6ee0bf4f5e69"],["D:/微云同步/Hexo-Blog/blog/public/css/index.css","d66f418b1dfa7624453961703eca3f6f"],["D:/微云同步/Hexo-Blog/blog/public/css/var.css","99f439b7b33281a4dac47cab7a76db76"],["D:/微云同步/Hexo-Blog/blog/public/hello-world.html","7fbe592d27e70ff9b65a16547f26e871"],["D:/微云同步/Hexo-Blog/blog/public/hexo博客常用指令.html","d8f6c16ee41cab96870d5c06e5abfa46"],["D:/微云同步/Hexo-Blog/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/微云同步/Hexo-Blog/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/微云同步/Hexo-Blog/blog/public/img/alipay.jpg","716bd9ffa85a427056d0529e4906d370"],["D:/微云同步/Hexo-Blog/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/微云同步/Hexo-Blog/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/微云同步/Hexo-Blog/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/微云同步/Hexo-Blog/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/微云同步/Hexo-Blog/blog/public/img/wechat.png","1ac24fe798d9cd9192a805dfcee73f12"],["D:/微云同步/Hexo-Blog/blog/public/index.html","9b0d4f4a7a209ad98e04aaf5b4f4a29f"],["D:/微云同步/Hexo-Blog/blog/public/js/baidupush.js","c128515649a9301245eaa9db1866a84d"],["D:/微云同步/Hexo-Blog/blog/public/js/main.js","fad811598880d938c0e617c40e7aeb94"],["D:/微云同步/Hexo-Blog/blog/public/js/runtimeshow.js","3031182c4b7fd2d7480e75d6c94123a0"],["D:/微云同步/Hexo-Blog/blog/public/js/search/algolia.js","56c23703dc5efeb32d13003df6d5db93"],["D:/微云同步/Hexo-Blog/blog/public/js/search/local-search.js","e054877624ac0a0ec573bb0a00ce8ff3"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/ClickShowText.js","c5e6ac91b515505cd852acf882468e15"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/activate-power-mode.js","76c474da0d23b45942aab68638e3c2f8"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/canvas-nest.js","1ef294cbb3912087e5d980f26fbf8e23"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/canvas-ribbon.js","bbb0792247b8209d28858e7fdb44c8c7"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/click_heart.js","194984057a0a9591c6101d11525bd79e"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/piao.js","736f35bbdcda709a25cc159d6de48a6f"],["D:/微云同步/Hexo-Blog/blog/public/js/tw_cn.js","dece64848d4891e3ea3d3ee808dba15c"],["D:/微云同步/Hexo-Blog/blog/public/js/utils.js","c10259fb6294dc9b8ba88b2e4ccb315c"],["D:/微云同步/Hexo-Blog/blog/public/link/index.html","e80a94c129dfd0a0ea37b9bd72033777"],["D:/微云同步/Hexo-Blog/blog/public/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/微云同步/Hexo-Blog/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/微云同步/Hexo-Blog/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/微云同步/Hexo-Blog/blog/public/messageboard/index.html","5938b34f840e3f7791daf597afbe055e"],["D:/微云同步/Hexo-Blog/blog/public/movies/index.html","a84cd78b74556d5c7d2ca360602f29e4"],["D:/微云同步/Hexo-Blog/blog/public/music/index.html","98ef333acba376c9f102cae1ad12a3ed"],["D:/微云同步/Hexo-Blog/blog/public/page/2/index.html","9e6f1a7774dd8a61133ff10dc142c4dd"],["D:/微云同步/Hexo-Blog/blog/public/photos/index.html","e0003ec3b347666c01df9a4362f3d708"],["D:/微云同步/Hexo-Blog/blog/public/schedule/index.html","6535dc84f3fb5b8e3ec3d30f4bbed49e"],["D:/微云同步/Hexo-Blog/blog/public/tags/2019/index.html","a1b6efd9868e283a8b9804a772ff6ce5"],["D:/微云同步/Hexo-Blog/blog/public/tags/2020-WEB/index.html","05ba6fd0527111c50b00a5b94aed5300"],["D:/微云同步/Hexo-Blog/blog/public/tags/2020/index.html","ce711e31cca33af9f0543c41d8c6a347"],["D:/微云同步/Hexo-Blog/blog/public/tags/Blazor/index.html","76af25f3de8a84dfba1da7228d51ed8f"],["D:/微云同步/Hexo-Blog/blog/public/tags/CSS/index.html","371664272ad14fb1b274912d42e583c9"],["D:/微云同步/Hexo-Blog/blog/public/tags/H5/index.html","ae6181de9fea9f70f6dfab2501940217"],["D:/微云同步/Hexo-Blog/blog/public/tags/JavaScript-面试题/index.html","79112ab344500dfd7e696716cb7023df"],["D:/微云同步/Hexo-Blog/blog/public/tags/Jay/index.html","6077d34919838d1b39e1e822ab6d107a"],["D:/微云同步/Hexo-Blog/blog/public/tags/Markdown/index.html","bc2c18d5f8f2bec04ddce7df5815090f"],["D:/微云同步/Hexo-Blog/blog/public/tags/Microsoft/index.html","188fc7e7525a9c7724a2cfa5767baada"],["D:/微云同步/Hexo-Blog/blog/public/tags/SSL-TLS/index.html","85705b165333a9e4e567065ef35636c1"],["D:/微云同步/Hexo-Blog/blog/public/tags/Sass/index.html","3ed047c68f7db2f431f75f0389376cbf"],["D:/微云同步/Hexo-Blog/blog/public/tags/WPF/index.html","c711b052f3b143847aeea4dbe0bd2908"],["D:/微云同步/Hexo-Blog/blog/public/tags/XAML/index.html","1f582b1028285295e1787106ae9469ad"],["D:/微云同步/Hexo-Blog/blog/public/tags/blog/index.html","341ebc1cae7dc9df93a89af56d399f30"],["D:/微云同步/Hexo-Blog/blog/public/tags/hexo/index.html","f0a1501a5dceec94b8987b9a772fd9fd"],["D:/微云同步/Hexo-Blog/blog/public/tags/index.html","fbfe91e273fb72bb1a6a56b91220318a"],["D:/微云同步/Hexo-Blog/blog/public/tags/music/index.html","1417b41a4e123e1c41e491ed4b0455a5"],["D:/微云同步/Hexo-Blog/blog/public/tags/singleton-static/index.html","899b1801dca93fa6abc9d7b5e4bc3e55"],["D:/微云同步/Hexo-Blog/blog/public/tags/大前端/index.html","6518f8b0ad9e417c212ea860fee5de81"],["D:/微云同步/Hexo-Blog/blog/public/tags/指令/index.html","c747686cb458e821233cc7c8fb480ad9"],["D:/微云同步/Hexo-Blog/blog/public/tags/热评/index.html","3aaf2c2ec4e5ac777a55d3592909577c"],["D:/微云同步/Hexo-Blog/blog/public/tags/移动端/index.html","87c7286893a50abdd8de60ec954cf4c0"],["D:/微云同步/Hexo-Blog/blog/public/tags/语法/index.html","0fbc07a1abbb319fdad2c08716042b88"],["D:/微云同步/Hexo-Blog/blog/public/tags/阅读/index.html","e0c57677b9a2d1d436487afb7d9ee55e"],["D:/微云同步/Hexo-Blog/blog/public/前端性能优化.html","5f6810db80c063ff429b46c303301e81"],["D:/微云同步/Hexo-Blog/blog/public/微软Blazor框架学习笔记-一.html","4fad19f35ce406139924bb6c9e059bdc"],["D:/微云同步/Hexo-Blog/blog/public/我也不知道在写什么.html","234d6675be1ffae57b2fba22dfb17ed3"],["D:/微云同步/Hexo-Blog/blog/public/我有属于我的天.html","107a58d811107c0669060626a63dbca2"],["D:/微云同步/Hexo-Blog/blog/public/我的第一篇博文.html","0fd12b477c75cd9720f4b587a1daf325"],["D:/微云同步/Hexo-Blog/blog/public/所求为何.html","5453e7473cd1597e3908cf64ef625693"],["D:/微云同步/Hexo-Blog/blog/public/移动端适配方案.html","64583e537f34c7bb55f422af5e6eae39"],["D:/微云同步/Hexo-Blog/blog/public/缘来，你也走过这里.html","662eae424c910475eb236212f67d8746"]];
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







