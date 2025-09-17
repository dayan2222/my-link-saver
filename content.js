document.addEventListener("click", function (e) {
  let target = e.target.closest("a");
  if (target && target.href) {
    chrome.runtime.sendMessage({ type: "linkClicked", url: target.href });
  }
});
