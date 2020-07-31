'use strict';

var map = {
  "news.ltn.com.tw": "自由時報",
  "tw.appledaily.com": "蘋果日報",
  "www.chinatimes.com": "中國時報",
  "udn.com": "聯合報",
};

let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
chrome.storage.sync.get('domain', (data) => {
  var domain = data.domain;
  text1.innerHTML = domain;
  text2.innerHTML = map[domain];
});
