<?php

function load_style_script()
{
    wp_enqueue_style('fonts', 'https://cloud.typography.com/7816514/6478592/css/fonts.css"');

    wp_enqueue_style('slick-theme', get_stylesheet_directory_uri() . '/styles/slick-theme.css');
    wp_enqueue_style('slick',  get_stylesheet_directory_uri() . '/styles/slick.css');

    wp_deregister_script('jquery');
    wp_enqueue_script('jquery', get_stylesheet_directory_uri() . '/scripts/jquery.min.js', array(), null, true);
    wp_enqueue_script('modernizr-custom', get_stylesheet_directory_uri() . '/scripts/modernizr-custom.min.js',  array('jquery'), null, true);
    wp_enqueue_script('slick',  get_stylesheet_directory_uri() . '/scripts/slick.js',  array('jquery'), null, true);
    wp_enqueue_script('geoip2',  get_stylesheet_directory_uri() . '/scripts/geoip2.js',  array('jquery'), null, true);
    wp_enqueue_script('geoip-service-scripts', get_stylesheet_directory_uri() . '/scripts/geoip-service.min.js',  array('jquery'), null, true);
    wp_enqueue_script('geoip-scripts', get_stylesheet_directory_uri() . '/scripts/geoip.js',  array('jquery'), null, true);
    wp_enqueue_script('ut-spi-scripts', get_stylesheet_directory_uri() . '/scripts/youtube-api.js',  array('jquery'), null, true);
    wp_enqueue_script('custom-scripts', get_stylesheet_directory_uri() . '/bundle.js',  array('jquery'), null, true);

}
add_action('wp_enqueue_scripts', 'load_style_script');

//add SVG to allowed file uploads
function add_file_types_to_uploads($file_types){

    $new_filetypes = array();
    $new_filetypes['svg'] = 'image/svg+xml';
    $file_types = array_merge($file_types, $new_filetypes );

    return $file_types;
}
add_action('upload_mimes', 'add_file_types_to_uploads');

if( function_exists('acf_add_options_page') ) {

    acf_add_options_page(array(
        'page_title' 	=> 'Fighter slider',
        'menu_title'	=> 'Fighter slider',
        'menu_slug' 	=> 'theme-general-settings',
        'capability'	=> 'edit_posts',
        'redirect'		=> false
    ));

}
