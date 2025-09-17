chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "linkClicked") {
    chrome.storage.local.get(["savedLinks"], (result) => {
      let links = result.savedLinks || [];
      if (!links.includes(message.url)) {
        links.push(message.url);
        chrome.storage.local.set({ savedLinks: links });
      }
    });
  }
});
