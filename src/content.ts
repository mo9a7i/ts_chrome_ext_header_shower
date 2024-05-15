chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  let tokenDiv = document.getElementById('x-token-div');
  if (!tokenDiv) {
    tokenDiv = document.createElement('div');
    tokenDiv.id = 'x-token-div';
    tokenDiv.style.position = 'fixed';
    tokenDiv.style.top = '0';
    tokenDiv.style.left = '0';
    tokenDiv.style.backgroundColor = 'yellow';
    tokenDiv.style.padding = '10px';
    tokenDiv.style.zIndex = '1000'; // Make sure it's above most other elements
    document.body.appendChild(tokenDiv);
  }
  tokenDiv.textContent = `X-Token: ${message.xToken}`;
});
