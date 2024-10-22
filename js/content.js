document.addEventListener('keydown', function (event) {
    // Bỏ qua nếu đang nhập vào trường nhập liệu hoặc phần tử có contenteditable="true"
    const isInputField = event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA';
    const isEditableDiv = event.target.getAttribute('contenteditable') === 'true';

    if (isInputField || isEditableDiv) {
        return; 
    }

    // Đảm bảo tham chiếu video
    const video = document.querySelector('video'); 
    const controller = document.querySelector('.vsc-controller'); 

    switch (event.code) {
        case 'KeyF':
            // Nhấn phím F để theo dõi kênh
            const followButton = document.querySelector('[data-e2e="browse-follow"] button'); 
            const followContainer = document.querySelector('[data-e2e="browse-follow"]');

            if (followButton) {
                followButton.click();
                console.log('Follow button clicked');
            } else if (followContainer) {
                followContainer.click();
                console.log('Follow container clicked');
            }
            break;

        case 'KeyG':
            // Nhấn phím G để truy cập kênh
            const channelLink = document.querySelector('a[data-e2e="channel-name"]');
            if (channelLink) {
                window.location.href = channelLink.href;
                console.log('Navigating to channel');
            }
            break;

        case 'ArrowUp':
            // Nhấn phím mũi tên lên để xem video trước
            const prevVideoButton = document.querySelector('button[data-e2e="arrow-left"]');
            if (prevVideoButton) {
                prevVideoButton.click();
                console.log('Previous video button clicked');
            }
            break;

        case 'ArrowDown':
            // Nhấn phím mũi tên xuống để xem video tiếp theo
            const nextVideoButton = document.querySelector('button[data-e2e="arrow-right"]');
            if (nextVideoButton) {
                nextVideoButton.click();
                console.log('Next video button clicked');
                event.preventDefault(); // Ngăn chặn hành vi mặc định (cuộn trang)
            }
            break;

        case 'Space':
            // Nhấn phím cách để tạm dừng/phát video
            if (video) {
                video.paused ? video.play() : video.pause();
                console.log('Video playback toggled');
                event.preventDefault(); // Ngăn chặn hành vi mặc định (cuộn trang)
            }
            break;

        case 'KeyM':
            if (localStorage.getItem('featureMute') === 'true') {
                // Kiểm tra nếu URL là dạng https://www.tiktok.com/
                if (window.location.href.includes('https://www.tiktok.com/')) {
                    const videoSound = document.querySelector('[data-e2e="video-sound"]');
                    if (videoSound) {
                        videoSound.click(); // Nhấp vào nút âm thanh
                        console.log('Video sound button clicked');
                    } else {
                        console.log('Video sound button not found');
                    }
                } else if (window.location.href.includes('https://www.tiktok.com/@')) {
                    const soundButton = document.querySelector('button[data-e2e="browse-sound"]');
                    if (soundButton) {
                        soundButton.click(); // Nhấp vào nút âm thanh
                        console.log('Sound toggled');
                    } else {
                        console.log('Sound button not found');
                    }
                } else {
                    const muteButtonXPath = '//*[@id="main-content-video_detail"]/div/div[2]/div[1]/div[1]/div[1]/div[6]/div[2]/div[2]/div[5]/div/div';
                    const muteButton = document.evaluate(muteButtonXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

                    if (muteButton) {
                        muteButton.click(); // Nhấp vào nút mute
                        console.log('Mute button clicked');
                    } else {
                        console.log('Mute button not found');
                    }
                }
            } else {
                localStorage.setItem('featureMute', 'true');
                console.log('Mute feature enabled');
            }
            break;

        case 'ArrowLeft':
            // Nhấn phím mũi tên trái để lùi lại 10 giây
            if (video) {
                video.currentTime = Math.max(0, video.currentTime - 10);
                console.log('Skipped backward 10 seconds');
                event.preventDefault(); // Ngăn chặn hành vi mặc định
            }
            break;

        case 'ArrowRight':
            // Nhấn phím mũi tên phải để tiến 10 giây
            if (video) {
                video.currentTime = Math.min(video.duration, video.currentTime + 10);
                console.log('Skipped forward 10 seconds');
                event.preventDefault(); // Ngăn chặn hành vi mặc định
            }
            break;

        default:
            break;
    }
});
