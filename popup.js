'use strict';

let changeColor = document.getElementById('changeColor');
let text1 = document.getElementById('text');
chrome.storage.sync.get('color', (data) => {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});
chrome.storage.sync.get('domain', (data) => {
  // text1.innerHTML = data.domain;
  text1.innerHTML = document.domain;
  console.log(data);
});


changeColor.onclick = (element) => {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.executeScript(
      tabs[0].id,
      {file: 'executed_script.js'}
    );
  });
};

chrome.webRequest.onCompleted.addListener(() => {
  chrome.storage.sync.set({domain: document.domain}, () => {
    console.log("Domain set to " + document.domain);
  });
},
{urls: ["<all_urls>"]});
