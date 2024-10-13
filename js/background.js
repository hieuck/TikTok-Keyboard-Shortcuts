chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: handleCommand,
            args: [command]
        });
    });
});

function handleCommand(command) {
    switch (command) {
        case 'follow':
            const followButton = document.querySelector('[data-e2e="browse-follow"] button');
            if (followButton) followButton.click();
            break;
        case 'go-to-channel':
            const channelLink = document.querySelector('a[href*="/@"]');
            if (channelLink) window.location.href = channelLink.href;
            break;
        case 'previous-video':
            const prevButton = document.querySelector('[data-e2e="arrow-left"]');
            if (prevButton) prevButton.click();
            break;
        case 'next-video':
            const nextButton = document.querySelector('[data-e2e="arrow-right"]');
            if (nextButton) nextButton.click();
            break;
        case 'toggle-play-pause':
            const video = document.querySelector('video');
            if (video) video.paused ? video.play() : video.pause();
            break;
        case 'toggle-mute':
            const videoElement = document.querySelector('video');
            if (videoElement) videoElement.muted = !videoElement.muted;
            break;
    }
}
