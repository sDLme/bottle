(function ($) {
    $(document).ready(function () {

        function hidePlaceholder(blockName, placeholderID) {
            let $videoPlaceholder = $(`[placeholder-id=${blockName}__${placeholderID}]`);
            if ($videoPlaceholder.hasClass(`${blockName}__video-placeholder--show`)) {
                $videoPlaceholder.removeClass(`${blockName}__video-placeholder--show`);
            }
        }

        function showPlaceholder(blockName, placeholderID) {
            let $videoPlaceholder = $(`[placeholder-id=${blockName}__${placeholderID}]`);
            if ($videoPlaceholder.hasClass(`${blockName}__video-placeholder--show`)) {
                $videoPlaceholder.removeClass(`${blockName}__video-placeholder--show`);
            }
        }

        function hideVideoPlaceholderAndPlayVideo(blockName, placeholderID) {
            window.onUsPlayer && window.onUsPlayer.playVideo();
            setTimeout(() => {
                hidePlaceholder(blockName, placeholderID);
            }, 400)
        }

        function playVideo(playerInstanceKey) {
            window[ playerInstanceKey ] && window[ playerInstanceKey ].playVideo();
        }

        function stopVideo(playerInstanceKey) {
            window[ playerInstanceKey ] && window[ playerInstanceKey ].stopVideo();
        }

        function init() {
            $('[click="cc-on-us__video-placeholder"]').click(() => {
                if (window.innerWidth < 1000) {
                    $('#play-on-us-video-modal').modal('show');
                    playVideo('onUsPlayerModal');
                    $('#close-on-us-video').click(function () {
                        stopVideo('onUsPlayerModal');
                    });
                    $('#play-on-us-video-modal').on('hidden.bs.modal', function () {
                        stopVideo('onUsPlayerModal');
                    });
                } else {
                    hideVideoPlaceholderAndPlayVideo('cc-on-us', 'video-placeholder');
                }
            });
        }

        init();
    })
})($);
