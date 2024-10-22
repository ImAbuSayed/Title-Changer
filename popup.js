document.addEventListener('DOMContentLoaded', function () {
    const newTitleInput = document.getElementById('newTitle');
    const thisTimeBtn = document.getElementById('thisTime');
    const alwaysBtn = document.getElementById('always');
    const statusDiv = document.getElementById('status');

    // Get current tab's title
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currentTab = tabs[0];
        newTitleInput.placeholder = currentTab.title;
    });

    function showStatus(message) {
        statusDiv.textContent = message;
        setTimeout(() => {
            statusDiv.textContent = '';
        }, 2000);
    }

    function normalizeUrl(url) {
        const anchor = document.createElement('a');
        anchor.href = url;
        return anchor.href; // Normalizes the URL
    }

    function updateTitle(permanent = false) {
        const newTitle = newTitleInput.value.trim();
        if (!newTitle) {
            showStatus('Please enter a title');
            return;
        }

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const currentTab = tabs[0];
            const currentUrl = normalizeUrl(currentTab.url);

            // Send message to content script to update title
            chrome.tabs.sendMessage(currentTab.id, {
                action: 'updateTitle',
                title: newTitle
            });

            if (permanent) {
                // Save to storage
                chrome.storage.local.get(['titleMappings'], function (result) {
                    const titleMappings = result.titleMappings || {};
                    titleMappings[currentUrl] = newTitle;

                    chrome.storage.local.set({ titleMappings }, function () {
                        showStatus('Title saved permanently');
                    });
                });
            } else {
                showStatus('Title updated for this session');
            }
        });
    }

    // This time only button
    thisTimeBtn.addEventListener('click', () => updateTitle(false));

    // Always button
    alwaysBtn.addEventListener('click', () => updateTitle(true));
});