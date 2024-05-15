chrome.webRequest.onBeforeSendHeaders.addListener(
    (details) => {
      const xTokenHeader = details.requestHeaders?.find(header => header.name.toLowerCase() === 'x-auth-token');
      if (xTokenHeader && details.tabId > 0) {
        chrome.tabs.sendMessage(details.tabId, { xToken: xTokenHeader.value });
      }
    },
    { urls: ["<all_urls>"] },
    ["requestHeaders"]
  );
