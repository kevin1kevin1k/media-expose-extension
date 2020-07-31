'use strict';

var map = {
  "news.ltn.com.tw": "自由時報",
  "tw.appledaily.com": "蘋果日報",
  "www.chinatimes.com": "中國時報",
  "udn.com": "聯合報",
};

let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
chrome.storage.sync.get('domain', async (data) => {
  let domain = data.domain;
  let url = 'https://media-expose.wancat.cc/api/media?domain=' + domain;
  let response = await fetch(url, {method: 'get'});
  let info = await response.json();
  console.log(info);
  let company = info[0]['Company'];
  text1.innerHTML = company['Name'];
  text2.innerHTML = company['Note'];
});
