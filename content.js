function updateTitle(newTitle) {
    if (newTitle) {
      document.title = newTitle;
      
      // Create MutationObserver to maintain title even if page tries to change it
      const observer = new MutationObserver(() => {
        if (document.title !== newTitle) {
          document.title = newTitle;
        }
      });
      
      observer.observe(document.querySelector('title') || document.head, {
        subtree: true,
        childList: true,
        characterData: true
      });
    }
  }
  
  // Check for saved title on page load
  function normalizeUrl(url) {
    const anchor = document.createElement('a');
    anchor.href = url;
    return anchor.href; // Normalizes the URL
  }
  
  chrome.storage.local.get(['titleMappings'], function(result) {
    const titleMappings = result.titleMappings || {};
    const currentUrl = normalizeUrl(window.location.href);
    const savedTitle = titleMappings[currentUrl];
  
    if (savedTitle) {
      updateTitle(savedTitle);
    }
  });
  
  // Listen for messages from popup or background script
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'updateTitle') {
      updateTitle(request.title);
      sendResponse({success: true});
    }
  });