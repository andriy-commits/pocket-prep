<?php
if (!defined('ABSPATH')) {
    exit;
}

function groundwrk_theme_setup(): void
{
    load_theme_textdomain('groundwrk', get_template_directory() . '/languages');

    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('editor-styles');
    add_theme_support('wp-block-styles');
    add_theme_support('align-wide');
    add_theme_support('responsive-embeds');
    add_theme_support('custom-spacing');
    add_theme_support('custom-line-height');
    add_theme_support('appearance-tools');
    add_theme_support('custom-units');
    add_theme_support('html5', [
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
        'navigation-widgets',
    ]);

    add_theme_support('custom-logo', [
        'height'      => 120,
        'width'       => 300,
        'flex-height' => true,
        'flex-width'  => true,
    ]);

    register_nav_menus([
        'primary' => __('Primary Menu', 'groundwrk'),
        'header_cta' => __('Header CTA', 'groundwrk'),
        'footer'  => __('Footer Menu', 'groundwrk'),
        'mobile-menu' => __('Mobile Menu', 'groundwrk')
    ]);

    add_editor_style('assets/css/editor.css');
}
add_action('after_setup_theme', 'groundwrk_theme_setup');

function groundwrk_content_width(): void
{
    $GLOBALS['content_width'] = 1500;
}
add_action('after_setup_theme', 'groundwrk_content_width', 0);


add_action('after_setup_theme', function () {
    add_theme_support('editor-styles');
    add_editor_style('assets/css/editor.css');
});



add_filter('nav_menu_link_attributes', function ($atts, $item, $args, $depth) {

    if (in_array('current-menu-item', $item->classes, true) ||
        in_array('current_page_item', $item->classes, true)) {
        $atts['aria-current'] = 'page';
    }

    return $atts;

}, 10, 4);

function allow_svg_uploads($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'allow_svg_uploads');


function register_modals_cpt() {
    register_post_type('modals', [
        'label' => 'Modals',
        'public' => false,
        'show_ui' => true,
        'menu_icon' => 'dashicons-welcome-view-site',
        'supports' => ['title', 'editor'],
        'show_in_rest' => true,
    ]);
}
add_action('init', 'register_modals_cpt');