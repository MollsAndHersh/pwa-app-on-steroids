module.exports = {
  "globDirectory": "./",
  "globPatterns": [
    "**/*.{css,eot,svg,ttf,woff,woff2,otf,html,png,jpg,gif,pptx,json,md,scss,js}"
  ],
  "runtimeCaching": [{
    urlPattern: new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    handler: 'cacheFirst'
  }],
  "runtimeCaching": [{
    urlPattern: new RegExp('https://www.google-analytics.com/analytics.js '),
    handler: 'staleWhileRevalidate',
    options: {
      cacheableResponse: {
        statuses: [0, 200]
      }
    }
  }],
  "swDest": "sw.js"
};