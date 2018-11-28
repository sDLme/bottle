(function ($) {
    $(document).ready(function () {
        // function hidePanel(...panelClasses) {
        //     panelClasses.forEach(panelClass => {
        //         $(`.${panelClass}`).removeClass(`${panelClass}--show`);
        //     });
        // }
        //
        // function showPanel(panelClass, panelID) {
        //     console.log(`==> Show panel with id "${panelID}"`);
        //     let $panel = $(`[panel-id=${panelID}]`);
        //     if (!$panel.hasClass(`${panelClass}--show`)) {
        //         hidePanel('cc-share-panel', 'cc-share-tooltip', 'cc-language-panel', 'cc-language-tooltip');
        //         $panel.addClass(`${panelClass}--show`);
        //     } else {
        //         $panel.removeClass(`${panelClass}--show`);
        //     }
        // }
        //
        // /**
        //  * Share section
        //  */
        // function initShareSection($document) {
        //     let $sharePanel = $('[click="share-panel"]');
        //     $sharePanel.off('click', '**');
        //     $sharePanel.click(() => {
        //         const isMobile = $document.width() <= 1000;
        //         if (isMobile) {
        //             showPanel('cc-share-panel', 'share-panel')
        //         } else {
        //             showPanel('cc-share-tooltip', 'share-tooltip')
        //         }
        //     });
        //     let $closeSharePanel = $('[click="close-share-panel"]');
        //     $closeSharePanel.off('click', '**');
        //     $closeSharePanel.click(() => {
        //         const isMobile = $document.width() <= 1000;
        //         if (isMobile) {
        //             hidePanel('cc-share-panel')
        //         }
        //     });
        // }
        //
        // /**
        //  * Language section
        //  */
        // function initLanguageSection($document) {
        //     let $languagePanel = $('[click="language-panel"]');
        //     $languagePanel.off('click', '**');
        //     $languagePanel.click(() => {
        //         const isMobile = $document.width() <= 1000;
        //         if (isMobile) {
        //             showPanel('cc-language-panel', 'language-panel')
        //         } else {
        //             showPanel('cc-language-tooltip', 'language-tooltip')
        //         }
        //     });
        //     let $closeLanguagePanel = $('[click="close-language-panel"]');
        //     $closeLanguagePanel.off('click', '**');
        //     $closeLanguagePanel.click(() => {
        //         const isMobile = $document.width() <= 1000;
        //         if (isMobile) {
        //             hidePanel('cc-language-panel')
        //         }
        //     });
        // }
        //
        // function init() {
        //     const $document = $(document);
        //
        //     initShareSection($document);
        //     initLanguageSection($document);
        //
        //     $(window).resize(() => {
        //         initShareSection($document);
        //         initLanguageSection($document);
        //     })
        // }
        //
        // init();
        //

        var width = $(window).width();

        if (width <= 1000) {
            $('[click="language-panel"]').click(function () {
                $('.cc-language-panel').addClass("cc-language-panel--show");
            });
            $('[click="close-language-panel"]').click(function () {
                $('.cc-language-panel').removeClass("cc-language-panel--show");
            });

            $('[click="share-panel"]').click(function () {
                $('.cc-share-panel').addClass("cc-share-panel--show");
            })
            $('[click="close-share-panel"]').click(function () {
                $('.cc-share-panel').removeClass("cc-share-panel--show");
            })

        } else {
            $('[click="language-panel"]').click(function () {
                if ($('.cc-language-tooltip').hasClass("cc-language-tooltip--show") || $('.cc-share-tooltip').hasClass("cc-share-tooltip--show")) {
                    $('.cc-language-tooltip').toggleClass("cc-language-tooltip--show");
                    $('.cc-share-tooltip').removeClass("cc-share-tooltip--show");
                } else {
                    $('.cc-language-tooltip').addClass("cc-language-tooltip--show");
                }
            });

            $('[click="share-panel"]').click(function () {
                if ($('.cc-share-tooltip').hasClass("cc-share-tooltip--show") || $('.cc-language-tooltip').hasClass("cc-language-tooltip--show")) {
                    $('.cc-share-tooltip').toggleClass("cc-share-tooltip--show");
                    $('.cc-language-tooltip').removeClass("cc-language-tooltip--show");
                } else {
                    $('.cc-share-tooltip').addClass("cc-share-tooltip--show");
                }
            });

        }

    })
})($);