/*

 ██████  ████████   █████ 
██            ███  ██   ██ 
███████    ████    ███████ 
██       ███       ██   ██ 
 ██████  ████████  ██   ██ 
                        
File: content.js
Auth: Joseph Mi
Desc: scrape text from a webpage (need work)

*/
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'scrapeData') {
        // Example: Scrape all paragraph text
        const data = [];
        document.querySelectorAll('p').forEach(p => data.push(p.innerText));
        
        // You can replace this with more sophisticated scraping logic as needed
        console.log('Scraped Data:', data);
        
        // Optionally, you can send the scraped data back to the popup or somewhere else
        sendResponse({ data: data });
    }
});
