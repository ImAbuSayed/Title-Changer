document.addEventListener('DOMContentLoaded', function() {
    const newTitleInput = document.getElementById('newTitle');
    const thisTimeBtn = document.getElementById('thisTime');
    const alwaysBtn = document.getElementById('always');
  
    // Get current tab's title
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      const currentTab = tabs[0];
      newTitleInput.placeholder = currentTab.title;
    });
  
    // This time only button
    thisTimeBtn.addEventListener('click', function() {
      const newTitle = newTitleInput.value;
      if (!newTitle) return;
  
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        const currentTab = tabs[0];
        chrome.scripting.executeScript({
          target: { tabId: currentTab.id },
          func: (title) => {
            document.title = title;
          },
          args: [newTitle]
        });
      });
    });
  
    // Always button
    alwaysBtn.addEventListener('click', function() {
      const newTitle = newTitleInput.value;
      if (!newTitle) return;
  
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        const currentTab = tabs[0];
        const hostname = new URL(currentTab.url).hostname;
  
        // Save to storage
        chrome.storage.sync.get('titleMappings', function(data) {
          const titleMappings = data.titleMappings || {};
          titleMappings[hostname] = newTitle;
          
          chrome.storage.sync.set({ titleMappings }, function() {
            // Apply the change immediately
            chrome.scripting.executeScript({
              target: { tabId: currentTab.id },
              func: (title) => {
                document.title = title;
              },
              args: [newTitle]
            });
          });
        });
      });
    });
  });