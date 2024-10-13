document.addEventListener('keydown', function (event) {
    // Bỏ qua nếu đang nhập vào trường nhập liệu
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return; 
    }

    const video = document.querySelector('video'); // Đảm bảo tham chiếu video

    switch (event.code) {
        case 'KeyF':
            // Nhấn phím F để theo dõi kênh
            const followButton = document.querySelector('[data-e2e="browse-follow"] button');
            if (followButton) {
                followButton.click();
                console.log('Follow button clicked');
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
            }
            break;

        case 'Space':
            // Nhấn phím cách để tạm dừng/phát video
            if (video) {
                video.paused ? video.play() : video.pause();
                console.log('Video playback toggled');
            }
            break;

        case 'KeyM':
            // Nhấn phím M để bật/tắt âm thanh
            const soundButton = document.querySelector('button[data-e2e="browse-sound"]');
            if (soundButton) {
                soundButton.click();
                console.log('Sound toggled');
            }
            break;

        case 'ArrowRight':
            // Nhấn phím mũi tên phải để tiến 10 giây
            if (video) {
                video.currentTime = Math.min(video.duration, video.currentTime + 10);
                console.log('Skipped forward 10 seconds');
            }
            break;

        case 'ArrowLeft':
            // Nhấn phím mũi tên trái để lùi lại 10 giây
            if (video) {
                video.currentTime = Math.max(0, video.currentTime - 10);
                console.log('Skipped backward 10 seconds');
            }
            break;

        default:
            break;
    }
});
