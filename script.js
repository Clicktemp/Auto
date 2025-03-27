function startIframes() {
    const url = document.getElementById('urlInput').value;
    const container = document.getElementById('container');
    container.innerHTML = '';

    for (let i = 0; i < 4; i++) {
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.onload = () => automateIframe(iframe);
        container.appendChild(iframe);
    }
}

function automateIframe(iframe) {
    setInterval(() => {
        iframe.contentWindow.scrollBy(0, 50); // Scroll down by 50 pixels
    }, 2000);
    
    setTimeout(() => {
        const event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
        });
        iframe.contentWindow.document.body.dispatchEvent(event);
    }, 3000);
}
