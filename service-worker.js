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

var precacheConfig = [["D:/blog/public/2019-料你也不想再过一次.html","6af9bf796f6cf88d2a84a7663ca0ff56"],["D:/blog/public/CSS技巧-一-之隐藏滚动条.html","be3234c9a8870153b572892e53e7a251"],["D:/blog/public/Coding-Pages申请SSL-TLS证书错误.html","c0b47cab59d2ee26faa1847b1c858cf4"],["D:/blog/public/JavaScript面试题收藏.html","9cbdcd6e1efb703576efbc6b2acd8944"],["D:/blog/public/Markdown基础语法.html","d4c334e91d122c29b2bdbdcee0162e13"],["D:/blog/public/SASS的基础语法-一.html","5bed57d8cb16c59c6b78067afd53cc32"],["D:/blog/public/WPF学习笔记-一-入门基础.html","2b925ace43983fce935b2626642f5bd5"],["D:/blog/public/about/index.html","d061ddb39a3665cfdea2b6862f780472"],["D:/blog/public/archives/2019/06/index.html","e8caabbe10e69efec574c09ed93b2e37"],["D:/blog/public/archives/2019/07/index.html","5f207a952eef34c424fa92f17e429d5e"],["D:/blog/public/archives/2019/08/index.html","efe471d73deb711acf5b7f5bb5e5f876"],["D:/blog/public/archives/2019/09/index.html","556511e455833b1c3d9987f8be618581"],["D:/blog/public/archives/2019/10/index.html","614e18daa637c2c95c99c7e071ddff71"],["D:/blog/public/archives/2019/12/index.html","f854b9892125f4807bdb56c92962a822"],["D:/blog/public/archives/2019/index.html","28e2125018dd5bf77a7138636bff1945"],["D:/blog/public/archives/2019/page/2/index.html","c8417c25e7896f597441446ee5568f5e"],["D:/blog/public/archives/2020/01/index.html","d282a2928f1da69aec926c18a024762c"],["D:/blog/public/archives/2020/index.html","9a58c8cddd6afcc27a5db4749c96ff46"],["D:/blog/public/archives/index.html","b71815b97189abfc4919f21e2cc95ada"],["D:/blog/public/archives/page/2/index.html","d60b2660ccbef24f5cc3e6b5798bfa0f"],["D:/blog/public/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["D:/blog/public/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["D:/blog/public/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["D:/blog/public/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["D:/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/blog/public/books/index.html","c5172a90b08339fb4114f754480779ed"],["D:/blog/public/categories/CSS/CSS技巧收录/index.html","dd6d56c15f566c884f09415d6292d976"],["D:/blog/public/categories/CSS/index.html","135e240c574a0b56309f32b6f93907d7"],["D:/blog/public/categories/JavaScript/index.html","ce55b7f6add0ca82aa06f762092a514a"],["D:/blog/public/categories/Microsoft/Asp-NET-Core/index.html","0049dc3160cfca0c259fdc93095bfa39"],["D:/blog/public/categories/Microsoft/C/index.html","2e4a505201ae1731ed91c4ed3d504a3f"],["D:/blog/public/categories/Microsoft/WPF/index.html","37d8214fd75fe1c1e84dc60aed390059"],["D:/blog/public/categories/Microsoft/index.html","88b8bbb73c8ba14422f6a9bfa6a5e5ce"],["D:/blog/public/categories/blog/index.html","5ede851fb7b852ee65b747e8d7c367a7"],["D:/blog/public/categories/index.html","5713fdc76a5bbc5452e5350fd26dbb0c"],["D:/blog/public/categories/大前端/index.html","34174ea0abe1fa5e79713fb7a53777ce"],["D:/blog/public/categories/学习笔记/index.html","0e522e21a93590945e120ed3f500ea04"],["D:/blog/public/categories/生活随笔/index.html","e83aa1169d4b0eb2b58c6c040efa133a"],["D:/blog/public/categories/踩坑记录/index.html","e412f18b1e756561920c4ade6d8005c0"],["D:/blog/public/change_log/index.html","ee2bb8249db669644dfade9c2c374867"],["D:/blog/public/css/index.css","9a252262d87b6795ebefa2058081d11d"],["D:/blog/public/css/var.css","4002e628614b9c1c2281da856ae7a567"],["D:/blog/public/hello-world.html","ef361afaef949a7199b04b0a22de9fc3"],["D:/blog/public/hexo博客常用指令.html","695d9db4e3561decb1411a47dcd4c7da"],["D:/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/alipay.jpg","716bd9ffa85a427056d0529e4906d370"],["D:/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/blog/public/img/wechat.png","1ac24fe798d9cd9192a805dfcee73f12"],["D:/blog/public/index.html","aa4a8cfedb8a011e8f37845ccfcc3a02"],["D:/blog/public/js/baidupush.js","fd8dc7b8513181b12699ce084f631df9"],["D:/blog/public/js/main.js","fad811598880d938c0e617c40e7aeb94"],["D:/blog/public/js/runtimeshow.js","3cdf938c6206f5fd6ee2ec5cfb507318"],["D:/blog/public/js/search/algolia.js","6767e3c30102f13b6dfc48769422b52e"],["D:/blog/public/js/search/local-search.js","f03bcb0837cdc2f307100b23a1fde714"],["D:/blog/public/js/third-party/ClickShowText.js","01cbc443b2c397f508a476d8d591115e"],["D:/blog/public/js/third-party/activate-power-mode.js","099a7aea4972664f08eb98d492c824f5"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/canvas-nest.js","f2dfed860c5e39dcb9c753991f4b48e9"],["D:/blog/public/js/third-party/canvas-ribbon.js","18a043fdc69970b6a1446c1c16989a3c"],["D:/blog/public/js/third-party/click_heart.js","674435c32d9bfc01cf05f42f014b007c"],["D:/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/piao.js","6a0d36083be3450a5c3dd2c143738ca7"],["D:/blog/public/js/tw_cn.js","21216c31ea6bcfccc877046729d3f6bf"],["D:/blog/public/js/utils.js","0104de333a08301cd10561a2f1462300"],["D:/blog/public/link/index.html","ee700fad7fb2c0093db712be401433e6"],["D:/blog/public/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/blog/public/messageboard/index.html","05976fb93f15b9b9bf119d10bd025ead"],["D:/blog/public/movies/index.html","aa52f2b4264bd85c2c3c96abdc51b2d4"],["D:/blog/public/music/index.html","513177a0e26fab80e6e04ec95e914619"],["D:/blog/public/page/2/index.html","29b40de04126b6f718cd89e42bcdb2bb"],["D:/blog/public/photos/index.html","34a9287bdb3d617ac7554f60ed37202b"],["D:/blog/public/schedule/index.html","e87741cae1e203695e46b5177dee02b1"],["D:/blog/public/tags/2019/index.html","a3ac3224a9f4fa06902e2703736bacee"],["D:/blog/public/tags/2020/index.html","7d4452169f080b75f7303271dbc4c9ba"],["D:/blog/public/tags/Blazor/index.html","7a481eeb4ee386f905c42947eb6f0d29"],["D:/blog/public/tags/CSS/index.html","db3177a05ffc3fce009c0a2b26f351d7"],["D:/blog/public/tags/H5/index.html","26adf972170a48d89b77f0daca9f0cbc"],["D:/blog/public/tags/JavaScript-面试题/index.html","9479ec15284dac142a146ba31a2ec3b6"],["D:/blog/public/tags/Jay/index.html","965c95f4a1796311f351a31711d528d9"],["D:/blog/public/tags/Markdown/index.html","f7b91f0f5c56a3c30ad6f060bcdc4092"],["D:/blog/public/tags/Microsoft/index.html","82347890a02f066c9084e75cb34c4902"],["D:/blog/public/tags/SSL-TLS/index.html","92c8546d95e8d3f4c8f8041187671c25"],["D:/blog/public/tags/Sass/index.html","0f90a8fc2aa72cb2bbda2b2920672f6c"],["D:/blog/public/tags/WPF/index.html","8d0ebca0e08f9a49c93eaace0dd99336"],["D:/blog/public/tags/XAML/index.html","099da06fe058c05369324489445205c7"],["D:/blog/public/tags/blog/index.html","c883c47db5c7c93e6d0cd6ac819c6324"],["D:/blog/public/tags/hexo/index.html","ee425b8b4d0659ffb2a4b7f5cbc69a04"],["D:/blog/public/tags/index.html","eefa141fc189850915b3bb2086c7a6f6"],["D:/blog/public/tags/music/index.html","63ed7d57eb8f4c5aa63e3360e08295bf"],["D:/blog/public/tags/singleton-static/index.html","c7426a3f0743edcae8b9a27f9913bbde"],["D:/blog/public/tags/大前端/index.html","c3c64d3d6804b432a6cd1d035d61a888"],["D:/blog/public/tags/指令/index.html","6e16cc90dcfa375c3965315dc96e02fa"],["D:/blog/public/tags/热评/index.html","ebc9ec20853a248ce279439537b6e856"],["D:/blog/public/tags/移动端/index.html","bda61edc79544a0a61a6a28ca86a529b"],["D:/blog/public/tags/语法/index.html","6e9312ef845dbe2047eb9006f6a41570"],["D:/blog/public/tags/阅读/index.html","9fd116b70bb98bb46c5de0ec28e4abe1"],["D:/blog/public/微软Blazor框架学习笔记-一.html","2a905551457dc48737e58571f5d623e6"],["D:/blog/public/我也不知道在写什么.html","6d0fe9e7a72f642a3d6c2a78be6c7fad"],["D:/blog/public/我有属于我的天.html","86a09d29eb6157a77121b40df5cd29ab"],["D:/blog/public/我的第一篇博文.html","ef669129b13a14691510be3309ed5e33"],["D:/blog/public/所求为何.html","f449ffdc5cb18186e28b1595e069ee7d"],["D:/blog/public/移动端适配方案.html","829f30a3660382be93d105b0d4a91cad"],["D:/blog/public/缘来，你也走过这里.html","ed11f03c73db2b80d7f5b476c837246b"]];
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







