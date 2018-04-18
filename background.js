/*
From https://github.com/ITPNYU/hacking-the-browser/blob/master/content-script-via-browser-action/background.js
*/

console.log('Content Script via Browser Action background page, version 1');
// Docs for 'onClicked' are here:
// https://developer.chrome.com/extensions/browserAction#event-onClicked

chrome.browserAction.onClicked.addListener(function() {
  console.log('Clicked the browser action!');

    chrome.tabs.executeScript({file: 'flyingLinks.js'}, function() {
      console.log('background script injected flyingLinks');
    });
  }
