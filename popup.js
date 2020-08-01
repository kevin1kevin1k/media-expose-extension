'use strict';

let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
let text3 = document.getElementById('text3');
let text4 = document.getElementById('text4');
let text5 = document.getElementById('text5');
let text6 = document.getElementById('text6');
let button = document.getElementById('button');
chrome.storage.local.get(['domain'], async (data) => {
  let domain = data.domain;
  let url = `https://media-expose.wancat.cc/api/media?domain=${domain}`;
  let response = await fetch(url, {method: 'get'});
  let info = await response.json();
  let media = info[0];
  console.log(media);
  let company = media['Company'];
  text1.innerHTML = domain;
  text2.innerHTML = media['Name'];
  company['Owner'];
  text3.innerHTML = media['Country'];
  text4.innerHTML = company['Name'];
  text5.innerHTML = company['Owner'];
  text6.innerHTML = company['invested_by_china'] ? '是' : '否';
  button.href = `https://media-expose.wancat.cc/media/${media['ID']}`;
});

// chrome.storage.local.get('author', (data) => {
//   let author = data.author;
//   text7.innerHTML = author;
//   console.log(author);
//   console.log(typeof(author));
// });
