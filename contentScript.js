var author = document.getElementsByClassName("author")[0];
chrome.storage.sync.set({
  domain: document.domain,
  author: author.innerHTML
});
