(function ($) {
    $(document).ready(() => {

        function showVideo(videoID) {
            let $videoIFrame = $(`#${videoID}`);
            if (!$videoIFrame.hasClass('show')) {
                $videoIFrame.addClass('show');
            }
        }

        function playVideo(playerInstanceKey) {
            window[ playerInstanceKey ] && window[ playerInstanceKey ].playVideo();
        }

        function stopVideo(playerInstanceKey) {
            window[ playerInstanceKey ] && window[ playerInstanceKey ].stopVideo();
        }

        function init() {
            $('[data-click="play-promo-video"]').click(function () {
                if (window.innerWidth < 1000) {
                    $('#play-promo-video-modal').modal('show');
                    playVideo('playerModal');
                    $('#close-promo-video').click(function () {
                        stopVideo('playerModal');
                    });
                    $('#play-promo-video-modal').on('hidden.bs.modal', function () {
                        stopVideo('playerModal');
                    });
                } else {
                    showVideo('promo-video-id');
                    playVideo('player');
                    $('[data-click="play-promo-video"]').hide();
                }
            });
        }

        //////

        init();
    })
})(jQuery);
