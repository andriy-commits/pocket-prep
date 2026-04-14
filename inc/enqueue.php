<?php
if (!defined('ABSPATH')) {
    exit;
}

function groundwrk_enqueue_assets(): void
{
    $version = wp_get_theme()->get('Version');

    wp_enqueue_style(
        'groundwrk-main',
        get_template_directory_uri() . '/assets/css/main.css',
        [],
        $version
    );

    wp_enqueue_script(
        'groundwrk-navigation',
        get_template_directory_uri() . '/assets/js/navigation.js',
        [],
        $version,
        true
    );

    wp_enqueue_script(
        'amplitude-experiment',
        'https://cdn.amplitude.com/experiment-js-client/latest/experiment.min.js',
        [],
        null,
        true
    );
}
add_action('wp_enqueue_scripts', 'groundwrk_enqueue_assets');