(function ($) {
    $(document).ready(function () {
        const sliderSelectors = [ '.cc-tattoo__slider', ];

        for (let sliderSelector of sliderSelectors) {
            $(sliderSelector).slick({
                infinite: true,
                variableWidth: true,
                slidesToShow: 4,
                slidesToScroll: 2,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 1000,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 2,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 2,
                            arrows: false,

                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 2,
                            arrows: false,
                        }
                    }
                ]
            });
        }
    })
})($);
