chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
      const hostname = new URL(tab.url).hostname;
      
      chrome.storage.sync.get('titleMappings', function(data) {
        const titleMappings = data.titleMappings || {};
        const savedTitle = titleMappings[hostname];
        
        if (savedTitle) {
          chrome.scripting.executeScript({
            target: { tabId },
            func: (title) => {
              document.title = title;
            },
            args: [savedTitle]
          });
        }
      });
    }
  });