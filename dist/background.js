"use strict";
chrome.webRequest.onBeforeSendHeaders.addListener((details) => {
    var _a;
    const xTokenHeader = (_a = details.requestHeaders) === null || _a === void 0 ? void 0 : _a.find(header => header.name.toLowerCase() === 'x-auth-token');
    if (xTokenHeader && details.tabId > 0) {
        chrome.tabs.sendMessage(details.tabId, { xToken: xTokenHeader.value });
    }
}, { urls: ["<all_urls>"] }, ["requestHeaders"]);
//# sourceMappingURL=background.js.map