chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
      chrome.storage.local.get(['titleMappings'], function(result) {
        const titleMappings = result.titleMappings || {};
        const savedTitle = titleMappings[tab.url];
  
        if (savedTitle) {
          chrome.tabs.sendMessage(tabId, {
            action: 'updateTitle',
            title: savedTitle
          });
        }
      });
    }
  });
  
  // Listen for installation or update
  chrome.runtime.onInstalled.addListener(() => {
    // Initialize storage if needed
    chrome.storage.local.get(['titleMappings'], function(result) {
      if (!result.titleMappings) {
        chrome.storage.local.set({ titleMappings: {} });
      }
    });
  });