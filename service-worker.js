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

var precacheConfig = [["D:/微云同步/Hexo-Blog/blog/public/2019-料你也不想再过一次.html","6ce8886cb2796eb7a2dae047c5592ca7"],["D:/微云同步/Hexo-Blog/blog/public/CSS技巧-一-之隐藏滚动条.html","fb4611ca9e3a037e4836f270e2cb37ce"],["D:/微云同步/Hexo-Blog/blog/public/Coding-Pages申请SSL-TLS证书错误.html","71511c5f8640b619f8d46212df89b131"],["D:/微云同步/Hexo-Blog/blog/public/JavaScript面试题收藏.html","23fc11180f116a1d191d384125a5a042"],["D:/微云同步/Hexo-Blog/blog/public/Markdown基础语法.html","8a99b99084049306f88cac68a27aa81d"],["D:/微云同步/Hexo-Blog/blog/public/SASS的基础语法-一.html","110199f0eb02dc8bca877d23cda6f419"],["D:/微云同步/Hexo-Blog/blog/public/WPF学习笔记(四)字体图标的使用.html","a3c85acc0d556f43c796a65cd301ff42"],["D:/微云同步/Hexo-Blog/blog/public/WPF学习笔记-一-入门基础.html","37a410a38e353e2d63c8ac822ae3fc0b"],["D:/微云同步/Hexo-Blog/blog/public/WPF学习笔记-三-WPF模板.html","601a3fd7e0a34c0061e7fe19803d52f6"],["D:/微云同步/Hexo-Blog/blog/public/WPF学习笔记-二-资源与触发器.html","4433cd044972b771f64a8c52103ed86a"],["D:/微云同步/Hexo-Blog/blog/public/about/index.html","28f7b5211090ec88d127f0a7c5156e25"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/06/index.html","e1e85fe52ea876be6001713ff129d6cb"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/07/index.html","a09755e8a837be4768e35db9e9947b52"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/08/index.html","62eb42df17d92119c5e2e67ce1ec1fd6"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/09/index.html","072ea17ea0a0d5a9f2a33878247d2a6a"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/10/index.html","ab90e581a4e0992a7d3491d70d821c13"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/12/index.html","aeded1694f7247717338c265f5057f33"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/index.html","972b803f62f90221567d39ad507c88bd"],["D:/微云同步/Hexo-Blog/blog/public/archives/2019/page/2/index.html","1a433387055794eb7dd99183a175235a"],["D:/微云同步/Hexo-Blog/blog/public/archives/2020/01/index.html","70d60c1b3966b9f176df61449c156639"],["D:/微云同步/Hexo-Blog/blog/public/archives/2020/index.html","5aaad12e86e742a8f485afdfab16eb17"],["D:/微云同步/Hexo-Blog/blog/public/archives/index.html","6f7d25b836f83c7a4f87b6a88f52d267"],["D:/微云同步/Hexo-Blog/blog/public/archives/page/2/index.html","d3235c4f1377e980d83d09ddd41cf062"],["D:/微云同步/Hexo-Blog/blog/public/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["D:/微云同步/Hexo-Blog/blog/public/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["D:/微云同步/Hexo-Blog/blog/public/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["D:/微云同步/Hexo-Blog/blog/public/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["D:/微云同步/Hexo-Blog/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/微云同步/Hexo-Blog/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/微云同步/Hexo-Blog/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/微云同步/Hexo-Blog/blog/public/books/index.html","2dde3826d12e4548ada23aef1aeb7ced"],["D:/微云同步/Hexo-Blog/blog/public/categories/Blog/index.html","c45b59c8f8555a4d96e8eddffb903f1c"],["D:/微云同步/Hexo-Blog/blog/public/categories/CSS/CSS技巧收录/index.html","0e6cafdd15d9b81657e1d007236eba0f"],["D:/微云同步/Hexo-Blog/blog/public/categories/CSS/index.html","54d900dec13b50f9969809b4fdef9c6c"],["D:/微云同步/Hexo-Blog/blog/public/categories/JavaScript/index.html","79a928f72b8f10c6b097b6a2606f509b"],["D:/微云同步/Hexo-Blog/blog/public/categories/Microsoft之旅/Asp-NET-Core/index.html","5bb96445540817cc94a558cf59a02d2c"],["D:/微云同步/Hexo-Blog/blog/public/categories/Microsoft之旅/C/index.html","e8b79d386560f07e83f5cd166ae4e2ef"],["D:/微云同步/Hexo-Blog/blog/public/categories/Microsoft之旅/WPF/index.html","bdced3a49ceadaf9d65ee87901686bdc"],["D:/微云同步/Hexo-Blog/blog/public/categories/Microsoft之旅/index.html","afa94e0793655781396ad36cdee004bc"],["D:/微云同步/Hexo-Blog/blog/public/categories/index.html","528a609f37b22ae898d947b1bc521b7b"],["D:/微云同步/Hexo-Blog/blog/public/categories/大前端/index.html","36ba2666765fe218c22cddeaf33ee848"],["D:/微云同步/Hexo-Blog/blog/public/categories/学习笔记/index.html","4cf059bb57450fef9547979a51e39129"],["D:/微云同步/Hexo-Blog/blog/public/categories/生活随笔/index.html","22227e15c6a9ce3044d81dd29344dc75"],["D:/微云同步/Hexo-Blog/blog/public/categories/踩坑记录/index.html","6f2c9ca3c74d60a5df2fea6c0bbc057f"],["D:/微云同步/Hexo-Blog/blog/public/change_log/index.html","4c0e0f1777741fb1635c21f645cdcbf7"],["D:/微云同步/Hexo-Blog/blog/public/css/index.css","c5dab0f8dd00d932df953b86fa64f968"],["D:/微云同步/Hexo-Blog/blog/public/css/var.css","f7fcfd351c0c21b586056e0e5fccbbf3"],["D:/微云同步/Hexo-Blog/blog/public/hello-world.html","8b611d073ca96bda8732239e0e7d2d32"],["D:/微云同步/Hexo-Blog/blog/public/hexo博客常用指令.html","7d50c20b743ece41063d8826c2c7c0e3"],["D:/微云同步/Hexo-Blog/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/微云同步/Hexo-Blog/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/微云同步/Hexo-Blog/blog/public/img/alipay.jpg","716bd9ffa85a427056d0529e4906d370"],["D:/微云同步/Hexo-Blog/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/微云同步/Hexo-Blog/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/微云同步/Hexo-Blog/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/微云同步/Hexo-Blog/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/微云同步/Hexo-Blog/blog/public/img/wechat.png","1ac24fe798d9cd9192a805dfcee73f12"],["D:/微云同步/Hexo-Blog/blog/public/index.html","d57348add0cc4d90f5c26e218ae197dc"],["D:/微云同步/Hexo-Blog/blog/public/js/baidupush.js","ffd74f106297c4cb706f55a5fe72ba70"],["D:/微云同步/Hexo-Blog/blog/public/js/main.js","fad811598880d938c0e617c40e7aeb94"],["D:/微云同步/Hexo-Blog/blog/public/js/runtimeshow.js","8f9922e03a95d096237d1999f3634a4c"],["D:/微云同步/Hexo-Blog/blog/public/js/search/algolia.js","7bb54c02d6dfdd0b6e3ad4ee490f7018"],["D:/微云同步/Hexo-Blog/blog/public/js/search/local-search.js","c230131c65870851014f7cc684a7a5b8"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/ClickShowText.js","c27c15e0bd4c75cbbaa81f4a2463e320"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/activate-power-mode.js","fec89706c9bcb3b0584b3f8f8995da89"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/canvas-nest.js","85fb7a4577514de487d00342ebfd03d5"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/canvas-ribbon.js","627e64e2152b0939f5a8e952b3cc9dc1"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/click_heart.js","47e0ea03f7d7a0912bef1df37b6209c8"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/微云同步/Hexo-Blog/blog/public/js/third-party/piao.js","55553a7ab8af6dbc9db53dbde0080001"],["D:/微云同步/Hexo-Blog/blog/public/js/tw_cn.js","69a44a388377da5749445ac24b500dd1"],["D:/微云同步/Hexo-Blog/blog/public/js/utils.js","585327841b38c6d6b2bbda8583ad5718"],["D:/微云同步/Hexo-Blog/blog/public/link/index.html","704bfec1b2c8f4c34c201d4f40c678a6"],["D:/微云同步/Hexo-Blog/blog/public/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/微云同步/Hexo-Blog/blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/微云同步/Hexo-Blog/blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/微云同步/Hexo-Blog/blog/public/messageboard/index.html","6b2e8ef5a3181c29b75c40636d1aed5b"],["D:/微云同步/Hexo-Blog/blog/public/movies/index.html","287b023f3ebc3b65b65d5f8e74705f45"],["D:/微云同步/Hexo-Blog/blog/public/music/index.html","7532120ef320455eaf7259b530a2dbb3"],["D:/微云同步/Hexo-Blog/blog/public/page/2/index.html","ffbcf4b92968c90169ca4beb2c0c668f"],["D:/微云同步/Hexo-Blog/blog/public/photos/index.html","2c5e3f3b466f12325f9efa68da53adbb"],["D:/微云同步/Hexo-Blog/blog/public/schedule/index.html","86a5d2e3211fea24f167192fb894961c"],["D:/微云同步/Hexo-Blog/blog/public/tags/2019/index.html","f5f0b78be5368d1cf62495aac7801bd5"],["D:/微云同步/Hexo-Blog/blog/public/tags/2020/index.html","a89c38e3872b145e9a8660d9fe5d84cd"],["D:/微云同步/Hexo-Blog/blog/public/tags/Blazor/index.html","ecf63a7ecc7d8aa0f9724af5d9aa1c14"],["D:/微云同步/Hexo-Blog/blog/public/tags/CSS/index.html","a1e0b2b1864d3e857a1579be01f100d7"],["D:/微云同步/Hexo-Blog/blog/public/tags/H5/index.html","0aa9e2e56b675e0156b6a0ba340941b7"],["D:/微云同步/Hexo-Blog/blog/public/tags/Iconfont/index.html","2f0fd4a23a945eb311c4961936761dfd"],["D:/微云同步/Hexo-Blog/blog/public/tags/JavaScript-面试题/index.html","c207416b72696fff2afc7fa8d61f641f"],["D:/微云同步/Hexo-Blog/blog/public/tags/Jay/index.html","12144297e76abe3fa0ef185426cb0dd6"],["D:/微云同步/Hexo-Blog/blog/public/tags/Markdown/index.html","9d127ac0eef91e32d015a599ee193b69"],["D:/微云同步/Hexo-Blog/blog/public/tags/Microsoft/index.html","3f0cdd7e60166ad76b16a3a9e78275a3"],["D:/微云同步/Hexo-Blog/blog/public/tags/SSL-TLS/index.html","74ca9f6e9132e2b4b8f2efc12e932ae2"],["D:/微云同步/Hexo-Blog/blog/public/tags/Sass/index.html","9416d9c96324edfeb98773b1af14065b"],["D:/微云同步/Hexo-Blog/blog/public/tags/WEB/index.html","d9f9a56d188cc6a1de9dbaaff1c97c56"],["D:/微云同步/Hexo-Blog/blog/public/tags/WPF/index.html","f60761a1c4e6718a79e586bb6f0cf478"],["D:/微云同步/Hexo-Blog/blog/public/tags/XAML/index.html","edd2713cc3761bb47b1c9c74e2e06d39"],["D:/微云同步/Hexo-Blog/blog/public/tags/blog/index.html","37b9ecfa7679c116183f2d088f18c877"],["D:/微云同步/Hexo-Blog/blog/public/tags/hexo/index.html","2ff39081a8d7a0fa7cbead384ad5aaee"],["D:/微云同步/Hexo-Blog/blog/public/tags/index.html","d244e9e911136d5764c54cd442d03d93"],["D:/微云同步/Hexo-Blog/blog/public/tags/music/index.html","46ea05d7857a2c498e73b6a25730dca4"],["D:/微云同步/Hexo-Blog/blog/public/tags/singleton-static/index.html","1b5765996e8c4d5e1f6f8c45f3e86507"],["D:/微云同步/Hexo-Blog/blog/public/tags/大前端/index.html","71a728e502172b2bdd3d6da930a41a22"],["D:/微云同步/Hexo-Blog/blog/public/tags/指令/index.html","28bedce25e4404fed2a0bb0028c52efd"],["D:/微云同步/Hexo-Blog/blog/public/tags/热评/index.html","ba29a9d27ba46084815f96d5c40b8777"],["D:/微云同步/Hexo-Blog/blog/public/tags/移动端/index.html","0816325d2883873d95273158baba94ce"],["D:/微云同步/Hexo-Blog/blog/public/tags/语法/index.html","3997ddb80764f815b6f0034f3b13ef27"],["D:/微云同步/Hexo-Blog/blog/public/tags/阅读/index.html","7b6fabc5a7163c8820fd8f0c4407a5cf"],["D:/微云同步/Hexo-Blog/blog/public/前端性能优化.html","28ea17282cd401e83d5c41821ce2e060"],["D:/微云同步/Hexo-Blog/blog/public/微软Blazor框架学习笔记-一.html","f280a275476598e6099fe9f717bdb538"],["D:/微云同步/Hexo-Blog/blog/public/我也不知道在写什么.html","aa4962a57e08596b99e6f7d004422fdc"],["D:/微云同步/Hexo-Blog/blog/public/我有属于我的天.html","7adf575a004e01da2de4f545eee0d605"],["D:/微云同步/Hexo-Blog/blog/public/我的第一篇博文.html","b4a9a2150b352cd7c59be8af78635840"],["D:/微云同步/Hexo-Blog/blog/public/所求为何.html","16864e823144dfca4ad3cbfd3007f327"],["D:/微云同步/Hexo-Blog/blog/public/移动端适配方案.html","5675179fbd8becf31d3d8a6f2c005c0d"],["D:/微云同步/Hexo-Blog/blog/public/缘来，你也走过这里.html","454b3264f06f17676b7b051af56056ad"]];
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







