document.addEventListener('DOMContentLoaded', function () {
    const featureFollowCheckbox = document.getElementById('featureFollow');
    const featureNavigateCheckbox = document.getElementById('featureNavigate');
    const featurePrevCheckbox = document.getElementById('featurePrev');
    const featureNextCheckbox = document.getElementById('featureNext');
    const featurePlayPauseCheckbox = document.getElementById('featurePlayPause');
    const featureMuteCheckbox = document.getElementById('featureMute');
    const featureRewindCheckbox = document.getElementById('featureRewind');
    const featureForwardCheckbox = document.getElementById('featureForward');
    const saveButton = document.getElementById('saveButton');

    // Khôi phục trạng thái từ chrome.storage.local
    chrome.storage.local.get(['featureFollow', 'featureNavigate', 'featurePrev', 'featureNext', 
                               'featurePlayPause', 'featureMute', 'featureRewind', 'featureForward'], 
        function (result) {
            featureFollowCheckbox.checked = result.featureFollow === true;
            featureNavigateCheckbox.checked = result.featureNavigate === true;
            featurePrevCheckbox.checked = result.featurePrev === true;
            featureNextCheckbox.checked = result.featureNext === true;
            featurePlayPauseCheckbox.checked = result.featurePlayPause === true;
            featureMuteCheckbox.checked = result.featureMute === true;
            featureRewindCheckbox.checked = result.featureRewind === true;
            featureForwardCheckbox.checked = result.featureForward === true;
        }
    );

    // Lưu trạng thái khi nhấn nút Save
    saveButton.addEventListener('click', function () {
        chrome.storage.local.set({
            featureFollow: featureFollowCheckbox.checked,
            featureNavigate: featureNavigateCheckbox.checked,
            featurePrev: featurePrevCheckbox.checked,
            featureNext: featureNextCheckbox.checked,
            featurePlayPause: featurePlayPauseCheckbox.checked,
            featureMute: featureMuteCheckbox.checked,
            featureRewind: featureRewindCheckbox.checked,
            featureForward: featureForwardCheckbox.checked
        }, function () {
            console.log('Settings saved');
        });
    });
    // Hàm cập nhật trạng thái các tính năng
    function updateFeatures() {
        const features = {
            follow: featureFollowCheckbox.checked,
            navigate: featureNavigateCheckbox.checked,
            prev: featurePrevCheckbox.checked,
            next: featureNextCheckbox.checked,
            playPause: featurePlayPauseCheckbox.checked,
            mute: featureMuteCheckbox.checked,
            rewind: featureRewindCheckbox.checked,
            forward: featureForwardCheckbox.checked,
        };

        // Đăng ký các sự kiện phím tắt tương ứng dựa trên trạng thái
        chrome.storage.local.set(features, () => {
            console.log('Features updated:', features);
        });
    }

    // Gọi updateFeatures khi nhấn nút Save
    saveButton.addEventListener('click', function () {
        // Lưu trạng thái checkbox
        chrome.storage.local.set({
            featureFollow: featureFollowCheckbox.checked,
            featureNavigate: featureNavigateCheckbox.checked,
            featurePrev: featurePrevCheckbox.checked,
            featureNext: featureNextCheckbox.checked,
            featurePlayPause: featurePlayPauseCheckbox.checked,
            featureMute: featureMuteCheckbox.checked,
            featureRewind: featureRewindCheckbox.checked,
            featureForward: featureForwardCheckbox.checked
        }, function () {
            console.log('Settings saved');
            updateFeatures(); // Cập nhật trạng thái các tính năng
        });
    });

});
