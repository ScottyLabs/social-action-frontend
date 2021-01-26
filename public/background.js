chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.create({ url: "chrome://newtab" });
});

chrome.storage.sync.set({ restaurant: false }, function () {
  // Notify that we saved.
  console.log("initialization");
});
