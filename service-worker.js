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

var precacheConfig = [["D:/blog/public/2019-料你也不想再过一次.html","6af9bf796f6cf88d2a84a7663ca0ff56"],["D:/blog/public/CSS技巧-一-之隐藏滚动条.html","911cd031d280f6680cf76b7b7d917ee9"],["D:/blog/public/Coding-Pages申请SSL-TLS证书错误.html","20942162a10820da54de5c3773f611b0"],["D:/blog/public/JavaScript面试题收藏.html","7d381dbda955b8daec61eb11c4a5952e"],["D:/blog/public/Markdown基础语法.html","7060080d86e0dce2c158574ea2159f35"],["D:/blog/public/SASS的基础语法-一.html","d4b74c2cdc915e65bf56fd064ff330cb"],["D:/blog/public/WPF学习笔记-一-入门基础.html","2ae9e007c035e8178fadfe56419f40b5"],["D:/blog/public/about/index.html","d061ddb39a3665cfdea2b6862f780472"],["D:/blog/public/archives/2019/06/index.html","e8caabbe10e69efec574c09ed93b2e37"],["D:/blog/public/archives/2019/07/index.html","4f4a2cab6aea84f10d161e8b9bb7fcab"],["D:/blog/public/archives/2019/08/index.html","1d3000a34abf1ddbebf0a3bcc9bf7519"],["D:/blog/public/archives/2019/09/index.html","556511e455833b1c3d9987f8be618581"],["D:/blog/public/archives/2019/10/index.html","614e18daa637c2c95c99c7e071ddff71"],["D:/blog/public/archives/2019/12/index.html","f854b9892125f4807bdb56c92962a822"],["D:/blog/public/archives/2019/index.html","201f35402fb1cb0afc7df62cf3e7ecb9"],["D:/blog/public/archives/2019/page/2/index.html","3110fcec80b57d38dec5fd4678ba8e60"],["D:/blog/public/archives/2020/01/index.html","d282a2928f1da69aec926c18a024762c"],["D:/blog/public/archives/2020/index.html","9a58c8cddd6afcc27a5db4749c96ff46"],["D:/blog/public/archives/index.html","b71815b97189abfc4919f21e2cc95ada"],["D:/blog/public/archives/page/2/index.html","ddf0ca07741bf5d4b65d74bfde3b87d9"],["D:/blog/public/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["D:/blog/public/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["D:/blog/public/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["D:/blog/public/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["D:/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/blog/public/books/index.html","33a6e5b86c6aaf5c944d4ed3aa1090eb"],["D:/blog/public/categories/CSS/CSS技巧收录/index.html","dd6d56c15f566c884f09415d6292d976"],["D:/blog/public/categories/CSS/index.html","135e240c574a0b56309f32b6f93907d7"],["D:/blog/public/categories/JavaScript/index.html","ce55b7f6add0ca82aa06f762092a514a"],["D:/blog/public/categories/Microsoft/Asp-NET-Core/index.html","0049dc3160cfca0c259fdc93095bfa39"],["D:/blog/public/categories/Microsoft/C/index.html","c8e63085dc8f0984d074160e208e9712"],["D:/blog/public/categories/Microsoft/WPF/index.html","37d8214fd75fe1c1e84dc60aed390059"],["D:/blog/public/categories/Microsoft/index.html","f3fb071664a70705cf6ed23a5a4866f1"],["D:/blog/public/categories/blog/index.html","5ede851fb7b852ee65b747e8d7c367a7"],["D:/blog/public/categories/index.html","5713fdc76a5bbc5452e5350fd26dbb0c"],["D:/blog/public/categories/大前端/index.html","34174ea0abe1fa5e79713fb7a53777ce"],["D:/blog/public/categories/学习笔记/index.html","3e5d717e6bba272b53b067caaa3c87f4"],["D:/blog/public/categories/生活随笔/index.html","e83aa1169d4b0eb2b58c6c040efa133a"],["D:/blog/public/categories/踩坑记录/index.html","c75d400c53ca000c3756707828f62b92"],["D:/blog/public/change_log/index.html","ee2bb8249db669644dfade9c2c374867"],["D:/blog/public/css/index.css","0b781a323a5018adab3a434c4fd6d078"],["D:/blog/public/css/var.css","dc417d492ab044eff6832cd4c905075d"],["D:/blog/public/hello-world.html","78d8b14acbd15782b44d5023d72003f2"],["D:/blog/public/hexo博客常用指令.html","d9ad81ca9ef76904dc58ce5671d469eb"],["D:/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/public/img/alipay.jpg","716bd9ffa85a427056d0529e4906d370"],["D:/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/blog/public/img/wechat.png","1ac24fe798d9cd9192a805dfcee73f12"],["D:/blog/public/index.html","d3471c96dc42dbe55aa688799563b662"],["D:/blog/public/js/baidupush.js","414572845587add20388069c1fea7148"],["D:/blog/public/js/main.js","fad811598880d938c0e617c40e7aeb94"],["D:/blog/public/js/runtimeshow.js","acc6333e30d0144d1d02dd19d3d1f85e"],["D:/blog/public/js/search/algolia.js","5bd08dc506b3717772e90f5f9e2596c6"],["D:/blog/public/js/search/local-search.js","7b0397fdecbce2fbdfcc75a78e5f8746"],["D:/blog/public/js/third-party/ClickShowText.js","c8b094ca4ad2483f653acd78fdee22ab"],["D:/blog/public/js/third-party/activate-power-mode.js","504938245b8452e8fff9a84cb3b2a790"],["D:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/blog/public/js/third-party/canvas-nest.js","d2e472d34d7841e0cac6c6348249facd"],["D:/blog/public/js/third-party/canvas-ribbon.js","b26d72d364c33856a80387c8c54f62c4"],["D:/blog/public/js/third-party/click_heart.js","43457b35371669522fd158133b3ffaef"],["D:/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/blog/public/js/third-party/piao.js","9df20a18d3f9e51ad68634ec03460b10"],["D:/blog/public/js/tw_cn.js","d654d3f1f5d58e7ce8dd6dcf1d20e41f"],["D:/blog/public/js/utils.js","bac1034db9e1ddb2bca19cdb16eb985f"],["D:/blog/public/link/index.html","ee700fad7fb2c0093db712be401433e6"],["D:/blog/public/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/blog/public/messageboard/index.html","05976fb93f15b9b9bf119d10bd025ead"],["D:/blog/public/movies/index.html","2ff5dfe32de8649d3b6a4989cfba7112"],["D:/blog/public/music/index.html","cebf6ee8f712a19f3a5bdc503ffbd6ae"],["D:/blog/public/page/2/index.html","91c5c319d32a8c0e0496150d79c3a6fe"],["D:/blog/public/photos/index.html","34a9287bdb3d617ac7554f60ed37202b"],["D:/blog/public/schedule/index.html","e87741cae1e203695e46b5177dee02b1"],["D:/blog/public/tags/2019/index.html","a3ac3224a9f4fa06902e2703736bacee"],["D:/blog/public/tags/2020/index.html","7d4452169f080b75f7303271dbc4c9ba"],["D:/blog/public/tags/Blazor/index.html","7a481eeb4ee386f905c42947eb6f0d29"],["D:/blog/public/tags/CSS/index.html","db3177a05ffc3fce009c0a2b26f351d7"],["D:/blog/public/tags/H5/index.html","26adf972170a48d89b77f0daca9f0cbc"],["D:/blog/public/tags/JavaScript-面试题/index.html","9479ec15284dac142a146ba31a2ec3b6"],["D:/blog/public/tags/Jay/index.html","965c95f4a1796311f351a31711d528d9"],["D:/blog/public/tags/Markdown/index.html","f7b91f0f5c56a3c30ad6f060bcdc4092"],["D:/blog/public/tags/Microsoft/index.html","82347890a02f066c9084e75cb34c4902"],["D:/blog/public/tags/SSL-TLS/index.html","752c2ffc94cfb6cd07e9c832617df05c"],["D:/blog/public/tags/Sass/index.html","0f90a8fc2aa72cb2bbda2b2920672f6c"],["D:/blog/public/tags/WPF/index.html","8d0ebca0e08f9a49c93eaace0dd99336"],["D:/blog/public/tags/XAML/index.html","099da06fe058c05369324489445205c7"],["D:/blog/public/tags/blog/index.html","38e04c27f86bb37c72304c4c2972b608"],["D:/blog/public/tags/hexo/index.html","0066db69cab477c782de5bdc992bda7d"],["D:/blog/public/tags/index.html","ad7928540a0da0de5fc07ea6e94c285a"],["D:/blog/public/tags/music/index.html","63ed7d57eb8f4c5aa63e3360e08295bf"],["D:/blog/public/tags/singleton-static/index.html","0a0ef07f680fd2953439953dce509804"],["D:/blog/public/tags/大前端/index.html","c3c64d3d6804b432a6cd1d035d61a888"],["D:/blog/public/tags/指令/index.html","6e16cc90dcfa375c3965315dc96e02fa"],["D:/blog/public/tags/热评/index.html","ebc9ec20853a248ce279439537b6e856"],["D:/blog/public/tags/移动端/index.html","bda61edc79544a0a61a6a28ca86a529b"],["D:/blog/public/tags/语法/index.html","6e9312ef845dbe2047eb9006f6a41570"],["D:/blog/public/tags/阅读/index.html","9fd116b70bb98bb46c5de0ec28e4abe1"],["D:/blog/public/微软Blazor框架学习笔记-一.html","3dd69981e4418132670fddcb5f58b9c8"],["D:/blog/public/我也不知道在写什么.html","c47af4debbc3bb21f648f1839eceae4d"],["D:/blog/public/我有属于我的天.html","86a09d29eb6157a77121b40df5cd29ab"],["D:/blog/public/我的第一篇博文.html","bc464381968d46b1a4f21082cf2d6e3e"],["D:/blog/public/所求为何.html","f449ffdc5cb18186e28b1595e069ee7d"],["D:/blog/public/移动端适配方案.html","829f30a3660382be93d105b0d4a91cad"],["D:/blog/public/缘来，你也走过这里.html","ed11f03c73db2b80d7f5b476c837246b"]];
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







