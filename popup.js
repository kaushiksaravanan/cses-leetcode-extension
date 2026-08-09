(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const statusEl = document.getElementById('status');
    if (!statusEl) return;

    // Check if we're on a CSES problem page
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (!tabs || !tabs.length) {
        statusEl.textContent = 'No active tab';
        return;
      }

      const tab = tabs[0];
      const url = tab.url || '';

      if (url.match(/^https?:\/\/cses\.fi\/problemset\/task\//)) {
        statusEl.textContent = '✅ Editor active on this page';
        statusEl.style.color = '#00ff88';
      } else {
        statusEl.textContent = 'ℹ️ Open a CSES problem to use the editor';
        statusEl.style.color = '#ffaa44';
      }
    });
  });
})();
