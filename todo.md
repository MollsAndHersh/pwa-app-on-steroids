
## Part 1 - What's wrong with native app

* Half of all U.S. smartphone users download zero apps per month [source](https://www.recode.net/2016/9/16/12933780/average-app-downloads-per-month-comscore)
* [More than 75% of App Downloads Open an App Once And Never Come Back](http://fortune.com/2016/05/19/app-economy/)
* A full 94% of revenue in the App Store comes from just 1% of all publishers (https://sensortower.com/blog/app-store-one-percent)

* need to develop for iPhone then for Androids... wait what about Windows phone, Firefox OS. Stifle > creativity
* what? I need to download 37Mb just to print a ticket?
  ![](./img/problem-native-app.png)
* stupid Geo restriction
  ![](./img/geo-restriction.png)


## Part 2 - Introducing PWA

  ![](./img/hamster-preach.jpg)

* Linkable - Easily shared via a URL and do not require complex installation.
* Responsive - Fit any form factor: desktop, mobile, tablet, or forms yet to emerge.
  * TODO: add water picture: ![responsive is like water](https://whattheux.files.wordpress.com/2015/10/l-water.png)
* App-like - Feel like an app to the user with app-style interactions and navigation.
  * app shell https://developers.google.com/web/fundamentals/architecture/images/appshell.png
  * "Please stop spamming message :("
* Progressive - Work for every user, regardless of browser choice because they’re built with progressive enhancement as a core tenet.

* Safe - Served via HTTPS to prevent snooping and ensure content hasn’t been tampered with.
  * Also: is your mobile app is served over HTTPS?? can you ensure it?
  * let's encrypt ==> 0$ the https certificate!

* Fresh - Always up-to-date thanks to the service worker update process.
  * [](./img/update-app.jpg) ... I already updated this app 4 days ago!!! ...or the installation screen microsoft
  * browser install in background
* Discoverable - Are identifiable as “applications” thanks to W3C manifests[6] and service worker registration scope allowing search engines to find them.
* Re-engageable - Make re-engagement easy through features like push notifications.


* Installable - Allow users to “keep” apps they find most useful on their home screen without the hassle of an app store.
  * can also be on the Windows Store
* Connectivity independent - Service workers allow work offline, or on low quality networks.
  * think offline
  * How ==> service worker!!!
  ==> not only for offline. Can ease low network (i.e. 3G)
  * offline cookbook: https://jakearchibald.com/2014/offline-cookbook/


## Focus - offline

## ReX

- Twitter: https://developers.google.com/web/showcase/2017/twitter
- Tinder: https://medium.com/@addyosmani/a-tinder-progressive-web-app-performance-case-study-78919d98ece0
- Pinterest: https://medium.com/dev-channel/a-pinterest-progressive-web-app-performance-case-study-3bd6ed2e6154

## Tooling

- workbox
- lighthouse

## End

* PWA is just a marketting word.
* Ohhhh I'm a Android/iOS developper... I'm gonna loose my job? NO!




Resources:
https://cloudfour.com/thinks/progressive-web-apps-simply-make-sense/
https://addyosmani.com/blog/getting-started-with-progressive-web-apps/
https://medium.com/dev-channel/why-progressive-web-apps-vs-native-is-the-wrong-question-to-ask-fb8555addcbb
https://jakearchibald.github.io/isserviceworkerready/
https://whatwebcando.today/