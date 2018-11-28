(function ($) {
    $(document).ready(function () {
        const $mobileSlider = $('.cc-modal-slider');

        $('[modal-slider="click-prev"]').click(function () {
            $mobileSlider.slick('slickPrev');
            console.log('==> Slick show previous slide');
        });

        $('[modal-slider="click-next"]').click(function () {
            $mobileSlider.slick('slickNext');
            console.log('==> Slick show next slide');
        });

        const $modalWindow = $('#modal-window');
        let isSliderInitialized = false;

        $modalWindow.on('shown.bs.modal', function () {
            const sliderIndex = parseInt($modalWindow.attr('data-slide-index'));

            if (!isSliderInitialized) {
                isSliderInitialized = true;
                $mobileSlider.slick({
                    initialSlide: sliderIndex,
                    arrows: false,
                });
                console.log('==> Slick was successfully initialized');
                hideLoaderGif();
            }
        });

        $modalWindow.on('hidden.bs.modal', function () {
            $mobileSlider.slick('unslick');
            isSliderInitialized = false;
            showLoaderGif();
            console.log('==> Slick was successfully destroyed');
            console.log('==> Modal window closed');
        });

        /**
         * Add Event Listener to open modal window with predefined slider
         */

        $('[data-click="open-modal"]').click(function () {
            const sliderIndex = parseInt($(this).attr('data-slider-index'));
            $modalWindow.attr('data-slide-index', sliderIndex);
            $modalWindow.modal('show');
        });

        function hideLoaderGif() {
            const $modalLoaderGif = $('.cc-modal-slider__loader');
            if (!$modalLoaderGif.hasClass('cc-modal-slider__loader--hidden')) {
                $modalLoaderGif.addClass('cc-modal-slider__loader--hidden')
            }
        }

        function showLoaderGif() {
            const $modalLoaderGif = $('.cc-modal-slider__loader');
            if ($modalLoaderGif.hasClass('cc-modal-slider__loader--hidden')) {
                $modalLoaderGif.removeClass('cc-modal-slider__loader--hidden')
            }
        }

    });
})(jQuery);
