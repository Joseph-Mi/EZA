document.getElementById('login-button').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login check (replace with actual login logic)
    if (username === 'admin' && password === 'password') {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('logged-in').style.display = 'block';
    } else {
        alert('Invalid login credentials');
    }
});

document.getElementById('write-button').addEventListener('click', function() {
    // Send a message to the content script to scrape data
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'scrapeData' });
    });
});
