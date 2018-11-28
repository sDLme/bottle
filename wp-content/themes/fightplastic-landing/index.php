<?php


$language               = get_field('language');

$intro_title            = get_field('intro_title');
$intro_video_id         = get_field('intro_video_id');
$play_button_name       = get_field('play_button_name');
$share_bloc             = get_field('share_bloc');
$sharing_video_for_facebook_page            = get_field('sharing_video_for_facebook_page');

$about_title              = get_field('about_title');
$about_subtitle           = get_field('about_subtitle');
$about_video_id           = get_field('about_video_id');
$short_description        = get_field('short_description');
$fighter_slider_check_box = get_field('fighter_slider_check');


$fighter_slider         = get_field('fighter_slider', 'option');



$action_title           = get_field('action_title');
$action_sub_title       = get_field('action_sub-title');
$action_list            = get_field('action_list');
$action_banner          = get_field('action_banner');

$to_do_list_title       = get_field('to_do_list_title');
$to_do_list             = get_field('to_do_list');

$desktop_product_image  = get_field('desktop_product_image');
$mobile_product_image   = get_field('mobile_product_image');

$country_section_title      = get_field('country_section_title');
$button_text                = get_field('button_text');
$button_link                = get_field('button_link');
$product_image_group        = get_field('product_image_group');
$product_image_for_desktop  = get_field('product_image_for_desktop');
$product_image_for_mobile   = get_field('product_image_for_mobile');

$term_link              = get_field('term_link');
$policy_link            = get_field('policy_link');

$desktop_background_images = get_field('desktop_background_images');
$mobile_background_images  = get_field('mobile_background_images');


$actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";


?>

<?php get_header(); ?>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W6VVZD3"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<style>
    main {
        background: url("<?php echo $mobile_background_images?>") top center ;*/
    background-repeat: no-repeat;
        background-size: 100% 100%;
        min-height: 400px;
    }
    @media (min-width: 1000px) {
        main {
            background: url("<?php echo $desktop_background_images?>") top center no-repeat;
            background-size: 100% 100%;
        }
    }

    .cc-on-us__video-placeholder {
        background: url("/wp-content/themes/fightplastic-landing/images/mountain--mobile--<?php echo strtolower($language); ?>.png") center center no-repeat;
        background-size: cover;
    }
    @media (min-width: 1000px) {
        .cc-on-us__video-placeholder {
            background: url("/wp-content/themes/fightplastic-landing/images/mountain--desktop--<?php echo strtolower($language); ?>.png") center center no-repeat;
            background-size: cover;
        }
    }

</style>

<script>
    var pageLanguage = "<?php echo $language ?>"
</script>

<?php
if ($language == 'DE' || $language == 'FR' ) {?>
    <style>
        .cc-commitment__title,
        .cc-on-us__title,
        .cc-about__title,
        .cc-shop__title
        {
            font-size: 30px!important;
        }
    </style>
    <?php
}
?>

<div class="cc-header">
    <div class="cc-header__container">
        <div class="cc-header__container-item cc-header__container-item--visible">&nbsp</div>
        <!-- Logo -->
        <div class="cc-header__container-item
                cc-header__container-item--center">
            <a href="#" class="cc-header__link">
                <img src="<?php echo get_stylesheet_directory_uri() ?>/images/sodastream_logo.svg"
                     alt="Logo"
                     class="cc-header__icon cc-header__icon--logo">
            </a>
        </div>

        <!-- Buttons -->
        <div class="cc-header__container-item
                cc-header__container-item--right">
            <a href="javascript:void(0);"
               class="cc-header__link"
               click="share-panel">
                <img src="<?php echo get_stylesheet_directory_uri() ?>/images/icon_share.svg"
                     alt="Share"
                     class="cc-header__icon
                     cc-header__icon--share">
            </a>
            <a href="javascript:void(0);"
               class="cc-header__link
                cc-header__link--padding-right-15"
               click="language-panel">
                <img src="<?php echo get_stylesheet_directory_uri() ?>/images/icon_network.svg"
                     alt="Network"
                     class="cc-header__icon
                    cc-header__icon--network">
            </a>

            <!-- CC-SHARE-TOOLTIP SECTION BEGIN -->
            <section class="cc-share-tooltip" panel-id="share-tooltip">
                <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $actual_link?>"
                   target="_blank"
                   class="cc-share-tooltip__link">
                    <img src="https://www.fightplastic.com/wp-content/themes/fightplastic-landing/images/cc-share-panel__icon-facebook.svg"
                         alt="Icon"
                         class="cc-share-tooltip__icon">
                </a>
                <a href="https://twitter.com/home?status=<?php echo $actual_link?>"
                   target="_blank"
                   class="cc-share-tooltip__link">
                    <img src="https://www.fightplastic.com/wp-content/themes/fightplastic-landing/images/cc-share-panel__icon-twitter.svg"
                         alt="Icon"
                         class="cc-share-tooltip__icon">
                </a>
            </section><!-- CC-SHARE-TOOLTIP SECTION END -->

            <!-- CC-LANGUAGE-TOOLTIP SECTION BEGIN -->
            <section class="cc-language-tooltip" panel-id="language-tooltip">

                <a href="<?php echo get_permalink('7') ?>" class="cc-language-tooltip__link">
                    <div class="cc-language-tooltip__link-text">En</div>
                </a>
                <a href="<?php echo get_permalink('130') ?>" class="cc-language-tooltip__link">
                    <div class="cc-language-tooltip__link-text">Fr</div>
                </a>
                <a href="<?php echo get_permalink('128') ?>" class="cc-language-tooltip__link">
                    <div class="cc-language-tooltip__link-text">De</div>
                </a>
                <a href="<?php echo get_permalink('537') ?>" class="cc-language-tooltip__link">
                    <div class="cc-language-tooltip__link-text">Es</div>
                </a>
            </section><!-- CC-LANGUAGE-TOOLTIP SECTION END -->

        </div>
    </div>
</div><!-- cc-header -->


<div class="cc-share-panel" panel-id="share-panel">
    <div class="cc-share-panel__header">
        <div class="cc-share-panel__header-item"></div>
        <div class="cc-share-panel__header-item">
            <img src="<?php echo get_stylesheet_directory_uri() ?>/images/sodastream_logo.svg"
                 alt="Logo"
                 class="cc-share-panel__header-logo">
        </div>
        <div class="cc-share-panel__header-item cc-share-panel__header-item--flex-end"
             click="close-share-panel">
            <img src="<?php echo get_stylesheet_directory_uri() ?>/images/icon-close.svg"
                 alt="Close"
                 class="cc-share-panel__header-close">
        </div>
    </div>

    <div class="cc-share-panel__body">
        <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $actual_link ?>"
           target="_blank"
           class="cc-share-panel__link">
            <img src="<?php echo get_stylesheet_directory_uri() ?>/images/cc-share-panel__icon-facebook.svg"
                 alt="Icon"
                 class="cc-share-panel__icon">
        </a>
        <a href="https://twitter.com/home?status=<?php echo $actual_link ?>"
           target="_blank"
           class="cc-share-panel__link">
            <img src="<?php echo get_stylesheet_directory_uri() ?>/images/cc-share-panel__icon-twitter.svg"
                 alt="Icon"
                 class="cc-share-panel__icon">
        </a>
        <a href="whatsapp://send?text=<?php echo $actual_link ?>" data-action="share/whatsapp/share"
           target="_blank"
           class="cc-share-panel__link">
            <img src="<?php echo get_stylesheet_directory_uri() ?>/images/cc-share-panel__icon-whatsapp.svg"
                 alt="Icon"
                 class="cc-share-panel__icon">
        </a>
    </div>
</div><!-- cc-share-panel -->

<div class="cc-language-panel" panel-id="language-panel">
    <div class="cc-language-panel__header">
        <div class="cc-language-panel__header-item"></div>
        <div class="cc-language-panel__header-item">
            <img src="<?php echo get_stylesheet_directory_uri() ?>/images/sodastream_logo.svg"
                 alt="Logo"
                 class="cc-language-panel__header-logo">
        </div>
        <div class="cc-language-panel__header-item cc-language-panel__header-item--flex-end"
             click="close-language-panel">
            <img src="<?php echo get_stylesheet_directory_uri() ?>/images/icon-close.svg"
                 alt="Close"
                 class="cc-language-panel__header-close">
        </div>
    </div>

    <div class="cc-language-panel__body">

        <a href="<?php echo get_permalink('7') ?>" class="cc-language-tooltip__link">
            <div class="cc-language-tooltip__link-text">En</div>
        </a>
        <a href="<?php echo get_permalink('130') ?>" class="cc-language-tooltip__link">
            <div class="cc-language-tooltip__link-text">Fr</div>
        </a>
        <a href="<?php echo get_permalink('128') ?>" class="cc-language-tooltip__link">
            <div class="cc-language-tooltip__link-text">De</div>
        </a>
        <a href="<?php echo get_permalink('537') ?>" class="cc-language-tooltip__link">
            <div class="cc-language-tooltip__link-text">Es</div>
        </a>
    </div>
</div><!-- cc-language-panel -->


<main >

    <section class="cc-promo">
        <?php if ( $intro_title ) { ?>
            <h1 class="cc-promo__title"><?php echo $intro_title ?></h1>
        <?php } ?>
        <div class="cc-promo__description" data-click="play-promo-video">
        </div>
        <?php if ( $intro_video_id ) { ?>
            <div class="cc-promo__video-player"
                 id="promo-video-id"
                 video-id="<?php echo $intro_video_id ?>"></div>
        <?php } ?>
    </section><!-- cc-promo -->

    <section class="cc-social">
        <ul class="cc-social__list">
            <li class="cc-social__elem">
                <?php if ( $share_bloc ) { ?>
                    <div class="cc-social__text"><?php echo $share_bloc ?></div>
                <?php } ?>
            </li>
            <li class="cc-social__elem">
                <a class="cc-social__link"
                   target="_blank"
                   href="https://www.facebook.com/sharer/sharer.php?u=<?php  echo $sharing_video_for_facebook_page ?>">
                    <img class="cc-social__icon"
                         src="<?php echo get_stylesheet_directory_uri() ?>/images/icon_facebook.svg"
                         alt="Icon">
                </a>
            </li>
            <li class="cc-social__elem">
                <a href="https://twitter.com/home?status=https://youtu.be/<?php echo $intro_video_id?>"
                   target="_blank"
                   class="cc-social__link">
                    <img src="<?php echo get_stylesheet_directory_uri() ?>/images/icon_twitter.svg"
                         alt="Icon"
                         class="cc-social__icon">
                </a>
            </li>
            <li class="cc-social__elem mobile-only">
                <a href="whatsapp://send?text=https://youtu.be/<?php echo $intro_video_id?>" data-action="share/whatsapp/share"
                   target="_blank"
                   class="cc-social__link">
                    <img src="<?php echo get_stylesheet_directory_uri() ?>/images/icon_whatsup.svg"
                         alt="Icon"
                         class="cc-social__icon">
                </a>
            </li>
        </ul>
    </section><!-- cc-social -->

    <section class="cc-about" id="scroll-down">
        <a class="cc-arrow-down" href="#scroll-down">
            <img class="cc-arrow-down__icon"
                 alt="arrow down"
                 src="<?php echo get_stylesheet_directory_uri() ?>/images/arrow-down.svg">
        </a>


        <?php if ( $to_do_list_title ) { ?>
            <label class="cc-commitment__title" for="cc-shop__select"><?php echo $to_do_list_title ?></label>
        <?php } ?>

        <div class="cc-commitment__options">
            <?php if ( $to_do_list['to-do-icone'] || $to_do_list['to_do_description'] ) { ?>
                <!-- Sign In -->
                <div class="cc-commitment__options-item">
                    <img src="<?php echo $to_do_list['to-do-icone'] ?>" alt="Sign In"
                         class="cc-commitment__options-icon">
                    <div class="cc-commitment__options-text">
                        <?php echo $to_do_list['to_do_description'] ?>
                        <br>
                        <a href="<?php echo $to_do_list['to_do_link'] ?>"
                           target="_blank"
                           class="cc-commitment__options-link"><?php echo $to_do_list['to_do_text'] ?></a>
                    </div>
                </div><!-- End of Sign In -->
            <?php } ?>

            <?php if ( $to_do_list['to_do_icone_one'] || $to_do_list['to_do_description_one'] ) { ?>
                <!-- Heart -->
                <div class="cc-commitment__options-item">
                    <img src="<?php echo $to_do_list['to_do_icone_one'] ?>"
                         alt="SignIn"
                         class="cc-commitment__options-icon">
                    <div class="cc-commitment__options-text">
                        <?php echo $to_do_list['to_do_description_one'] ?>
                        <br>
                        <a href="<?php echo $to_do_list['to_do_link_one'] ?>"
                           target="_blank"
                           class="cc-commitment__options-link"><?php echo $to_do_list['to_do_text_one'] ?></a>
                    </div>
                </div><!-- End of Heart -->
            <?php } ?>

            <?php if ( $to_do_list['to_do_icone_two'] || $to_do_list['to_do_description_two'] ) { ?>
                <!-- CleanUp -->
                <div class="cc-commitment__options-item">
                    <img src="<?php echo $to_do_list['to_do_icone_two'] ?>"
                         alt="SignIn"
                         class="cc-commitment__options-icon">
                    <div class="cc-commitment__options-text">
                        <?php echo $to_do_list['to_do_description_two'] ?>
                        <br>
                        <a href="<?php echo $to_do_list['to_do_link_two'] ?>"
                           target="_blank"
                           class="cc-commitment__options-link"><?php echo $to_do_list['to_do_text_two'] ?></a>
                    </div>
                </div><!-- End of CleanUp -->
            <?php } ?>

            <?php if ( $to_do_list['to_do_icone_three'] || $to_do_list['to_do_description_three'] ) { ?>
                <!-- Share -->
                <div class="cc-commitment__options-item">
                    <img src="<?php echo $to_do_list['to_do_icone_three'] ?>"
                         alt="SignIn"
                         class="cc-commitment__options-icon">
                    <div class="cc-commitment__options-text">
                        <?php echo $to_do_list['to_do_description_three'] ?>
                        <br>
                        <a href="<?php echo $to_do_list['to_do_link_three'] ?>"
                           target="_blank"
                           class="cc-commitment__options-link"><?php echo $to_do_list['to_do_text_three'] ?></a>
                    </div>
                </div><!-- End of Share -->
            <?php } ?>

            <?php if ( $to_do_list['to_do_icone_four'] || $to_do_list['to_do_description_four'] ) { ?>
                <!-- Shop -->
                <div class="cc-commitment__options-item">
                    <img src="<?php echo $to_do_list['to_do_icone_four'] ?>" alt="Signin"
                         class="cc-commitment__options-icon">
                    <div class="cc-commitment__options-text"><?php echo $to_do_list['to_do_description_four'] ?></div>
                </div><!-- End of Shop -->
            <?php } ?>
        </div>

        <!--        --><?php //if ( $language !== 'FR' ) { ?>
        <hr class="cc-about__underline">
        <!--        --><?php //} ?>


        <?php if ( $about_title ) { ?>
            <h2 class="cc-on-us__title"><?php echo $about_title ?></h2>
        <?php } ?>

        <?php if ( $about_subtitle ) { ?>
            <p class="cc-on-us__subtitle">
                <?php echo $about_subtitle ?>
            </p>
        <?php } ?>
        <?php if ( $about_video_id ) { ?>
            <div class="cc-on-us__video">
                <div class="cc-on-us__video-placeholder cc-on-us__video-placeholder--show"
                     placeholder-id="cc-on-us__video-placeholder"
                     click="cc-on-us__video-placeholder">
                </div>
                <div class="cc-on-us__video-player"
                     id="cc-on-us__player"
                     video-id="<?php echo $about_video_id ?>"></div>
            </div>
        <?php } ?>
    </section><!-- cc-about -->

    <section class="cc-tattoo">
        <?php if ( $fighter_slider_check_box ) { ?>
            <p class="cc-tattoo__subtitle"><?php echo $short_description ?></p>
        <?php } ?>

        <?php if ( $fighter_slider_check_box  ) { ?>
            <div class="cc-tattoo__slider">
                <?php $index = 0; ?>
                <?php foreach ( $fighter_slider as $slide ) { ?>
                    <div class="cc-tattoo__slider-item">

                        <div class="mobile-only" data-click="open-modal" data-slider-index="<?php echo $index; ?>">
                            <?php if ( $slide['fighter_mobile_media']['type_of_media'] === 'video' ) { ?>
                                <!-- TODO: replace src with $slide.fighter_mobile_media.fighter_thumbnail_for_mobile -->
                                <img src="<?php echo $slide['fighter_mobile_media']['fighter_images_for_mobile'] ?>"
                                     alt="Turtle"
                                     class="cc-tattoo__slider-image">
                            <?php } else { ?>
                                <img src="<?php echo $slide['fighter_mobile_media']['fighter_images_for_mobile'] ?>"
                                     alt="Turtle"
                                     class="cc-tattoo__slider-image">
                            <?php } ?>
                        </div>

                        <div class="desktop-only" data-click="open-modal" data-slider-index="<?php echo $index; ?>">
                            <?php if ( $slide['fighter_desktop_media']['type_of_media'] === 'video' ) { ?>
                                <!-- TODO: replace src with $slide.fighter_mobile_media.fighter_thumbnail_for_mobile -->
                                <img src="<?php echo $slide['fighter_desktop_media']['fighter_images_for_desktop'] ?>"
                                     alt="Turtle"
                                     class="cc-tattoo__slider-image">
                            <?php } else { ?>
                                <img src="<?php echo $slide['fighter_desktop_media']['fighter_images_for_desktop'] ?>"
                                     alt="Turtle"
                                     class="cc-tattoo__slider-image">
                            <?php } ?>
                        </div>

                        <?php if ( $slide['fighter_mobile_media']['type_of_media'] === 'image' ) { ?>
                            <div class="cc-tattoo__slider-info">
                                <p class="cc-tattoo__slider-name"><?php echo $slide['fighter_name'] ?> </p>
                                <p class="cc-tattoo__slider-age"><?php echo $slide['fighter_description'] ?> </p>
                            </div>
                        <?php } ?>
                    </div>
                    <?php $index ++; ?>
                <?php } ?>
            </div>
        <?php } ?>


    </section><!-- cc-tattoo -->

    <section class="cc-commitment">
        <?php if ( $action_title and $language !== 'FR' ) { ?>
            <h2 class="cc-about__title cc-about__title--uppercase"><?php echo $action_title ?></h2>
        <?php } ?>

        <?php if ( $action_sub_title and $language !== 'FR' ) { ?>
            <p class="cc-about__subtitle"><?php echo $action_sub_title ?></p>
        <?php } ?>

        <?php if ( $action_list and $language !== 'FR' ) { ?>
            <ol class="cc-about__flow">
                <?php foreach ( $action_list as $action_list_item ) { ?>
                    <li class="cc-about__flow-item">
                        <span class="flow-item__icon">
                            <img alt="flow icon" src="<?php echo $action_list_item['action_list_icon'] ?>">
                        </span>
                        <p><?php echo $action_list_item['action_list_item'] ?><a href="<?php echo $action_list_item['action_list_link'] ?>" target="_blank"><?php echo $action_list_item['action_list_text'] ?></a></p>

                    </li>
                <?php } ?>
            </ol>
        <?php } ?>

        <hr class="cc-about__underline">


    </section><!-- cc-commitment -->

    <section class="buy-area">
        <?php if ( $country_section_title ) { ?>
            <h2 class="cc-shop__title cc-shop__title--mobile-only"><?php echo $country_section_title ?></h2>
        <?php } ?>
        <div class="buy-area__elem">

            <section class="cc-product">

                <img src="<?php echo $product_image_group['product_image_for_desktop'] ?>"
                     alt="Product"
                     class="cc-product__image cc-product__image--desktop ">
                <img src="<?php echo $product_image_group['product_image_for_mobile'] ?>"
                     alt="Product"
                     class="cc-product__image cc-product__image--mobile ">
            </section><!-- cc-product -->

        </div>
        <div class="buy-area__elem">

            <section class="cc-shop">
                <?php if ( $country_section_title ) { ?>
                    <h2 class="cc-shop__title desktop-only"><?php echo $country_section_title ?></h2>
                <?php } ?>
                <select name="cc-shop__select" id="cc-shop__select" class="cc-shop__select">
                    <option value="" class="cc-shop__select-option" disabled selected>Choose your country</option>
                </select>

                <a href="#" target="_blank" id="cc-shop__link" class="cc-shop__link"><?php echo $button_text ?></a>
            </section><!-- cc-shop -->

        </div>
    </section><!-- buy-area -->

</main>

<footer class="cc-footer">
    <?php if ( $term_link && $policy_link ) { ?>
        <a href="<?php echo $term_link['term_link'] ?>"
           target="_blank"
           class="cc-footer__item cc-footer__item--link">
            <?php echo $term_link['term_text'] ?>
        </a>
        <a href="<?php echo $policy_link['policy_link'] ?>"
           target="_blank"
           class="cc-footer__item cc-footer__item--link">
            <?php echo $policy_link['policy_text'] ?>
        </a>
    <?php } ?>
</footer><!-- cc-footer -->

<div class="modal fade" tabindex="-1" role="dialog" id="modal-window" data-slide-index="0">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">

                <div class="cc-modal-slider__loader">
                    <img src="<?php echo get_stylesheet_directory_uri() ?>/images/modal__loader.gif"
                         alt="Loader"
                         class="cc-modal-slider__loader-image">
                </div>

                <button class="cc-modal-slider__prev" type="button" modal-slider="click-prev"></button>

                <!-- Slider SECTION BEGIN -->
                <?php if ( $fighter_slider ) { ?>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" modal-slider="close-modal">
                    <span aria-hidden="true"></span>
                </button>
                <div class="cc-modal-slider" id="cc-mobile-slider">
                    <?php $index = 0; ?>
                    <?php foreach ( $fighter_slider as $slide ) { ?>
                        <div class="cc-modal-slider__item">
                            <div class="cc-modal-slider__item-body">
                                <?php if ( $slide['fighter_desktop_media']['type_of_media'] === 'image' ) { ?>
                                    <img src="<?php echo $slide['fighter_desktop_media']['fighter_images_for_desktop'] ?>"
                                         alt="Turtle"
                                         class="cc-modal-slider__image">
                                    <div class="cc-modal-slider__person">
                                        <div class="cc-modal-slider__person-name"><?php echo $slide['fighter_name'] ?> </div>
                                        <div class="cc-modal-slider__person-age"><?php echo $slide['fighter_description'] ?> </div>
                                    </div>
                                <?php } else { ?>
                                    <div class="cc-modal-slider__video"
                                         id="cc-modal-slider__player-id-<?php echo $index ?>"></div>
                                <?php } ?>
                            </div>
                            <div class="cc-modal-slider__item-footer">
                                <div class="cc-modal-slider__description"><?php echo $slide['twitter_comment'] ?></div>
                                <div class="cc-modal-slider__description">
                                    <a class="cc-modal-slider__link"
                                       href="https://twitter.com/home?status=<?php echo $slide['twitter_comment'] ?>"
                                       target="_blank">
                                        <?php echo $slide['twitter_hash_tag'] ?>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <?php $index ++; ?>
                    <?php } ?>
                </div>
                <?php } ?><!-- Slider SECTION END -->

                <button class="cc-modal-slider__next" type="button" modal-slider="click-next"></button>

            </div>
        </div>
    </div>
</div><!-- modal -->

<div class="modal fade" tabindex="-1" role="dialog" id="play-promo-video-modal" data-slide-index="0">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">

                <button type="button" class="close" id="close-promo-video" data-dismiss="modal" aria-label="Close" modal-slider="close-modal">
                    <span aria-hidden="true"></span>
                </button>

                <div class="cc-promo__video-player show" id="promo-video-id-2" video-id="<?php echo $intro_video_id ?>"></div>

            </div>
        </div>
    </div>
</div><!-- modal -->

<div class="modal fade" tabindex="-1" role="dialog" id="play-on-us-video-modal" data-slide-index="0">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">

                <button type="button" class="close" id="close-on-us-video" data-dismiss="modal" aria-label="Close" modal-slider="close-modal">
                    <span aria-hidden="true"></span>
                </button>

                <div class="cc-on-us__video-player cc-on-us__video-player--wide" id="cc-on-us__player-2" video-id="<?php echo $about_video_id ?>"></div>

            </div>
        </div>
    </div>
</div><!-- modal -->

<script>
    /**
     * YouTube API
     *
     * @links
     *  Player Parameters - https://developers.google.com/youtube/player_parameters
     *  iFrame API        - https://developers.google.com/youtube/iframe_api_reference
     */
    let tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[ 0 ];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    function onYouTubeIframeAPIReady() {
        const videos = [
            {
                selectorID: 'promo-video-id',
                videoID: $('#promo-video-id').attr('video-id'),
                windowKey: 'player',
                blockName: 'promo-video-id',
                placeholderID: '',
            },
            {
                selectorID: 'promo-video-id-2',
                videoID: $('#promo-video-id-2').attr('video-id'),
                windowKey: 'playerModal',
                blockName: '',
                placeholderID: '',
            },
            {
                selectorID: 'cc-on-us__player',
                videoID: $('#cc-on-us__player').attr('video-id'),
                windowKey: 'onUsPlayer',
                blockName: 'cc-on-us',
                placeholderID: 'video-placeholder',
            },
            {
                selectorID: 'cc-on-us__player-2',
                videoID: $('#cc-on-us__player-2').attr('video-id'),
                windowKey: 'onUsPlayerModal',
                blockName: '',
                placeholderID: '',
            },
        ];

        <?php $index = 0; foreach ($fighter_slider as $slide) { ?>
        <?php if ($slide['fighter_desktop_media']['type_of_media'] === 'video') { ?>
        videos.push({
            selectorID: "cc-modal-slider__player-id-<?php echo $index ?>",
            videoID: "<?php echo $slide['fighter_desktop_media']['fighters_video_for_desktop']?>",
            windowKey: '',
        });
        <?php } ?>
        <?php $index ++;?>
        <?php } ?>

        videos.forEach(video => {
            setTimeout(function () {
                window[ video.windowKey ] = new YT.Player(video.selectorID, {
                    height: '390',
                    width: '640',
                    host: 'https://www.youtube.com',
                    videoId: video.videoID,
                    playerVars: {
                        rel: 0, // hide related videos https://developers.google.com/youtube/player_parameters#release_notes_08_23_2018
                        showinfo: 0, // hide video title at the top of video
                        playsinline: 1, // play inline for iOS devices
                        modestbranding: 0, // show YT icon on control panel instead of on video
                    },
                    events: {
                        'onReady': () => { },
                        'onStateChange': (state) => {
                            const $ = window.jQuery;

                            function showMainVideo() {
                                $('[data-click="play-promo-video"]').show();
                                let $videoIFrame = $(`#promo-video-id`);
                                if ($videoIFrame.hasClass('show')) {
                                    $videoIFrame.removeClass('show');
                                }
                            }

                            function showPlaceholder(blockName, placeholderID) {
                                let $videoPlaceholder = $(`[placeholder-id=${blockName}__${placeholderID}]`);
                                if (!$videoPlaceholder.hasClass(`${blockName}__video-placeholder--show`)) {
                                    $videoPlaceholder.addClass(`${blockName}__video-placeholder--show`);
                                }
                            }

                            if (state && state.data === 0) {
                                if (video.blockName === 'promo-video-id') {
                                    showMainVideo();
                                } else {
                                    showPlaceholder(video.blockName, video.placeholderID);
                                }
                            }
                        }
                    }
                });
            })
        });
    }
</script>

</body>

<?php wp_footer(); ?>
