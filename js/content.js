document.addEventListener('keydown', function (event) {
    // Bỏ qua nếu đang nhập vào trường nhập liệu
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return; 
    }

    // Đảm bảo tham chiếu video
    const video = document.querySelector('video'); 

    switch (event.code) {
        case 'KeyF':
            if (localStorage.getItem('featureFollow') === 'true') {
                const followButton = document.querySelector('[data-e2e="browse-follow"] button');
                const followContainer = document.querySelector('[data-e2e="browse-follow"]');
                if (followButton) {
                    followButton.click();
                    console.log('Follow button clicked');
                } else if (followContainer) {
                    followContainer.click();
                    console.log('Follow container clicked');
                }
            }
            break;

        case 'KeyG':
            if (localStorage.getItem('featureNavigate') === 'true') {
                const channelLink = document.querySelector('a[data-e2e="channel-name"]');
                if (channelLink) {
                    window.location.href = channelLink.href;
                    console.log('Navigating to channel');
                }
            }
            break;

        case 'ArrowUp':
            if (localStorage.getItem('featurePrev') === 'true') {
                const prevVideoButton = document.querySelector('button[data-e2e="arrow-left"]');
                if (prevVideoButton) {
                    prevVideoButton.click();
                    console.log('Previous video button clicked');
                }
            }
            break;

        case 'ArrowDown':
            if (localStorage.getItem('featureNext') === 'true') {
                const nextVideoButton = document.querySelector('button[data-e2e="arrow-right"]');
                if (nextVideoButton) {
                    nextVideoButton.click();
                    console.log('Next video button clicked');
                    event.preventDefault(); 
                }
            }
            break;

        case 'Space':
            if (localStorage.getItem('featurePlayPause') === 'true' && video) {
                video.paused ? video.play() : video.pause();
                console.log('Video playback toggled');
                event.preventDefault(); 
            }
            break;

        case 'KeyM':
            if (localStorage.getItem('featureMute') === 'true') {
                if (window.location.href.includes('https://www.tiktok.com/')) {
                    const videoSound = document.querySelector('[data-e2e="video-sound"]');
                    if (videoSound) {
                        videoSound.click();
                        console.log('Video sound button clicked');
                    } else {
                        console.log('Video sound button not found');
                    }
                } else if (window.location.href.includes('https://www.tiktok.com/@')) {
                    const soundButton = document.querySelector('button[data-e2e="browse-sound"]');
                    if (soundButton) {
                        soundButton.click();
                        console.log('Sound toggled');
                    } else {
                        console.log('Sound button not found');
                    }
                } else {
                    const muteButtonXPath = '//*[@id="main-content-video_detail"]/div/div[2]/div[1]/div[1]/div[1]/div[6]/div[2]/div[2]/div[5]/div/div';
                    const muteButton = document.evaluate(muteButtonXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                    if (muteButton) {
                        muteButton.click();
                        console.log('Mute button clicked');
                    } else {
                        console.log('Mute button not found');
                    }
                }
            }
            break;

        case 'ArrowLeft':
            if (localStorage.getItem('featureRewind') === 'true' && video) {
                video.currentTime = Math.max(0, video.currentTime - 10);
                console.log('Skipped backward 10 seconds');
                event.preventDefault(); 
            }
            break;

        case 'ArrowRight':
            if (localStorage.getItem('featureForward') === 'true' && video) {
                video.currentTime = Math.min(video.duration, video.currentTime + 10);
                console.log('Skipped forward 10 seconds');
                event.preventDefault(); 
            }
            break;

        default:
            break;
    }
});
