'use strict';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({color: '#3aa757'}, () => {
    console.log("The color is green.");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {urlMatches: 'news.ltn.com.tw|tw.appledaily.com|www.chinatimes.com|udn.com'}
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
