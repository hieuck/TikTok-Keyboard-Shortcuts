// Hàm theo dõi kênh hiện tại
function followCurrentChannel() {
    const followButton = document.querySelector('button[data-e2e="browse-follow"]');
    if (followButton) {
      followButton.click();
      console.log("Đã nhấn Follow kênh");
    } else {
      console.log("Không tìm thấy nút Follow");
    }
  }
  
  // Hàm bật/tắt âm lượng
  function toggleMute() {
    const muteButton = document.querySelector('button[data-e2e="browse-sound"]');
    if (muteButton) {
      muteButton.click();
      console.log("Đã bật/tắt âm lượng");
    } else {
      console.log("Không tìm thấy nút âm lượng");
    }
  }
  
  // Hàm chuyển video
  function nextVideo() {
    const nextButton = document.querySelector('button[data-e2e="arrow-right"]');
    if (nextButton) {
      nextButton.click();
      console.log("Chuyển sang video tiếp theo");
    } else {
      console.log("Không tìm thấy nút chuyển video");
    }
  }
  
  // Hàm phát/tạm dừng video
  function togglePlayPause() {
    const videoElement = document.querySelector('video');
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
        console.log("Đang phát video");
      } else {
        videoElement.pause();
        console.log("Đã tạm dừng video");
      }
    } else {
      console.log("Không tìm thấy phần tử video");
    }
  }
  
  // Hàm tua video
  function seekVideo(seconds) {
    const videoElement = document.querySelector('video');
    if (videoElement) {
      videoElement.currentTime += seconds;
      console.log(`Đã tua ${seconds > 0 ? 'tiến' : 'lùi'} ${Math.abs(seconds)} giây`);
    } else {
      console.log("Không tìm thấy phần tử video");
    }
  }
  
  // Lắng nghe sự kiện phím bấm
  document.addEventListener('keydown', (event) => {
    const isInVideoMode = document.querySelector('.vsc-controller');
    if (!isInVideoMode) return;  // Chỉ hoạt động khi đang xem video
  
    switch (event.key) {
      case 'F':  // Nhấn F để theo dõi kênh
        followCurrentChannel();
        break;
      case 'M':  // Nhấn M để bật/tắt âm thanh
        toggleMute();
        break;
      case ' ':  // Phím cách để phát/tạm dừng video
        event.preventDefault();  // Ngăn trang cuộn khi nhấn phím cách
        togglePlayPause();
        break;
      case 'ArrowDown':  // Mũi tên xuống để chuyển video
        nextVideo();
        break;
      case 'ArrowRight':  // Phím phải để tua tiến 10 giây
        seekVideo(10); 
        break;
      case 'ArrowLeft':  // Phím trái để tua lùi 10 giây
        seekVideo(-10);
        break;
      default:
        break;
    }
  });
  