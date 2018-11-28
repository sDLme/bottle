(function ($) {
    $(document).ready(function () {

        $(".cc-arrow-down").on("click", function (event) {
            event.preventDefault();

            const id = $(this).attr('href');
            const top = $(id).offset().top;

            $('body,html').animate({
                scrollTop: top
            }, 500);
        });

    })
})(jQuery);
