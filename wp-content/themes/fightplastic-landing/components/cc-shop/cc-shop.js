(function ($) {
    $(document).ready(function () {
        console.log('==> DOM is ready!');

        var $countrySelect = $('#cc-shop__select');
        $countrySelect.change(function (e) {
            var $countrySelected = $('#cc-shop__select option:selected')[ 0 ];
            $(".cc-shop a").attr("href", $countrySelected.value);
        });

        let $countryLink = $('#cc-shop__link');
        $countryLink.click(function () {
            var $countrySelected = $('#cc-shop__select option:selected')[ 0 ];
            $(".cc-shop a").attr("href", $countrySelected.value);

            window.dataLayer = (window && window.dataLayer) || [];
            window.dataLayer.push({
                'event': 'shopByCountry',
                'Country': $countrySelected.text
            });
        })
    });
})(jQuery);
