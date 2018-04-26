cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-customurlscheme.LaunchMyApp",
    "file": "plugins/cordova-plugin-customurlscheme/www/ios/LaunchMyApp.js",
    "pluginId": "cordova-plugin-customurlscheme",
    "clobbers": [
      "window.plugins.launchmyapp"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-plugin-keychain-touch-id.TouchID",
    "file": "plugins/cordova-plugin-keychain-touch-id/www/touchid.js",
    "pluginId": "cordova-plugin-keychain-touch-id",
    "clobbers": [
      "window.plugins.touchid"
    ]
  },
  {
    "id": "es6-promise-plugin.Promise",
    "file": "plugins/es6-promise-plugin/www/promise.js",
    "pluginId": "es6-promise-plugin",
    "runs": true
  },
  {
    "id": "cordova-plugin-x-socialsharing.SocialSharing",
    "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
    "pluginId": "cordova-plugin-x-socialsharing",
    "clobbers": [
      "window.plugins.socialsharing"
    ]
  },
  {
    "id": "cordova-clipboard-monya.Clipboard",
    "file": "plugins/cordova-clipboard-monya/www/clipboard.js",
    "pluginId": "cordova-clipboard-monya",
    "clobbers": [
      "cordova.plugins.clipboard"
    ]
  },
  {
    "id": "cordova-plugin-browsertab.BrowserTab",
    "file": "plugins/cordova-plugin-browsertab/www/browsertab.js",
    "pluginId": "cordova-plugin-browsertab",
    "clobbers": [
      "cordova.plugins.browsertab"
    ]
  },
  {
    "id": "cordova-plugin-qrscanner-monya.QRScanner",
    "file": "plugins/cordova-plugin-qrscanner-monya/www/www.min.js",
    "pluginId": "cordova-plugin-qrscanner-monya",
    "clobbers": [
      "QRScanner"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-splashscreen": "4.1.0",
  "cordova-plugin-customurlscheme": "4.3.0",
  "cordova-plugin-statusbar": "2.4.1",
  "cordova-plugin-keychain-touch-id": "3.2.1",
  "es6-promise-plugin": "4.2.2",
  "cordova-plugin-x-socialsharing": "5.3.2",
  "cordova-clipboard-monya": "1.1.7",
  "cordova-plugin-browsertab": "0.2.3",
  "cordova-plugin-swift-support": "3.1.1",
  "cordova-plugin-qrscanner-monya": "2.5.7"
};
// BOTTOM OF METADATA
});