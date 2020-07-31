'use strict';

var map = {
  "news.ltn.com.tw": "自由時報",
  "tw.appledaily.com": "蘋果日報",
  "www.chinatimes.com": "中國時報",
  "udn.com": "聯合報",
};

let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
let text3 = document.getElementById('text3');
let text4 = document.getElementById('text4');
chrome.storage.sync.get(['domain'], async (data) => {
  let domain = data.domain;
  let url = 'https://media-expose.wancat.cc/api/media?domain=' + domain;
  let response = await fetch(url, {method: 'get'});
  let info = await response.json();
  console.log(info);
  let company = info[0]['Company'];
  text1.innerHTML = `${company['Name']} (${info[0]['Country']})`;
  text2.innerHTML = company['Owner'];
  text3.innerHTML = company['Note'];
});

chrome.storage.sync.get('author', (data) => {
  let author = data.author;
  text4.innerHTML = author;
  console.log(author);
});
