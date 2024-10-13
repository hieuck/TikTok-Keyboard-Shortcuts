document.addEventListener('keydown', function (event) {
    console.log("Key pressed:", event.code); // Ghi lại phím nhấn

    // Bỏ qua nếu đang nhập vào trường nhập liệu
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return; 
    }

    // Đảm bảo tham chiếu video
    const video = document.querySelector('video'); 
    const controller = document.querySelector('.vsc-controller'); 
    console.log("Video element:", video); // Kiểm tra xem video có được tìm thấy không
    console.log("Controller element:", controller); // Kiểm tra xem thanh tìm kiếm có không

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
                event.preventDefault(); // Ngăn chặn hành vi mặc định (cuộn trang)
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

            const muteButton = document.querySelector('css-1ij1wng-DivVoiceControlContainer e1ya9dnw12'); // Thêm biến mới ở đây
            if (muteButton) { // Kiểm tra nếu muteButton tồn tại
                muteButton.click(); // Hoặc thực hiện một hành động nào đó
                console.log('Mute button clicked');
            } else {
                console.log("Mute button not found.");
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

    // Đảm bảo tham chiếu thanh video
    const seekBarContainer = document.querySelector('.css-qaoss2-DivVideoControlContainer.e1rpry1m5');
    console.log("Seek Bar Container:", seekBarContainer); // Kiểm tra xem thanh tìm kiếm có được tìm thấy không
});
