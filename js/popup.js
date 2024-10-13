document.addEventListener('DOMContentLoaded', function() {
    // Lấy các checkbox từ popup
    const featureFollowCheckbox = document.getElementById('featureFollow');
    const featureNavigateCheckbox = document.getElementById('featureNavigate');
    const featurePrevCheckbox = document.getElementById('featurePrev');
    const featureNextCheckbox = document.getElementById('featureNext');
    const featurePlayPauseCheckbox = document.getElementById('featurePlayPause');
    const featureMuteCheckbox = document.getElementById('featureMute');
    const featureRewindCheckbox = document.getElementById('featureRewind');
    const featureForwardCheckbox = document.getElementById('featureForward');

    // Khôi phục trạng thái từ localStorage
    featureFollowCheckbox.checked = localStorage.getItem('featureFollow') === 'true';
    featureNavigateCheckbox.checked = localStorage.getItem('featureNavigate') === 'true';
    featurePrevCheckbox.checked = localStorage.getItem('featurePrev') === 'true';
    featureNextCheckbox.checked = localStorage.getItem('featureNext') === 'true';
    featurePlayPauseCheckbox.checked = localStorage.getItem('featurePlayPause') === 'true';
    featureMuteCheckbox.checked = localStorage.getItem('featureMute') === 'true';
    featureRewindCheckbox.checked = localStorage.getItem('featureRewind') === 'true';
    featureForwardCheckbox.checked = localStorage.getItem('featureForward') === 'true';

    // Lắng nghe sự kiện thay đổi cho từng checkbox
    [featureFollowCheckbox, featureNavigateCheckbox, featurePrevCheckbox, featureNextCheckbox,
     featurePlayPauseCheckbox, featureMuteCheckbox, featureRewindCheckbox, featureForwardCheckbox]
    .forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            localStorage.setItem(this.id, this.checked);
            console.log(`${this.id} set to ${this.checked}`);
        });
    });
});
