### Source tutorial

[PWA Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7)

### Start project

- launch project with [live-server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) on VSC
- Using [Materialize](https://materializecss.com/)

### Documentation

#### Web App

web.dev PWA [docs](https://web.dev/progressive-web-apps/)

#### webapp manifest

- [manifest options and properties](https://web.dev/add-manifest/)
- [adaptative icons](https://web.dev/maskable-icon/)
- [how to debug a PWA](https://developers.google.com/web/tools/chrome-devtools/progressive-web-apps)

#### iOs support

ios support [options](https://medium.com/appscope/designing-native-like-progressive-web-apps-for-ios-1b3cdda1d0e8)

#### auto install banner

- installable criterias [list](https://web.dev/install-criteria/)
- on-device developer [options guide](https://developer.android.com/studio/debug/dev-options)

PWA must be installed on a https protocol that can be simulated from `localhost` in the browser but not on a device emulator.

To emulate `localhost` on a Android Studio Virtual device, go in `chrome://inspect/#devices` in Chrome. In devices, enable port forwarding and add a `5500 localhost:5500` port forward.

Next, in Android Emulator, replace the url with `localhost:5500`. Https protocol is now accessible and the app can be auto-installed.
