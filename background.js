'use strict';

chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {urlMatches: 'news.ltn.com.tw|tw.appledaily.com|www.chinatimes.com|udn.com'}
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
