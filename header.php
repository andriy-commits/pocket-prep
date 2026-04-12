<?php
if (!defined('ABSPATH')) {
    exit;
}
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<a class="screen-reader-text skip-link" href="#primary">
    <?php esc_html_e('Skip to content', 'groundwrk'); ?>
</a>

<header class="head">
    <div class="head-inner">

        <div class="head__left">

            <!-- LOGO -->
            <div class="head__logo">
                <?php if (has_custom_logo()) : ?>
                    <?php the_custom_logo(); ?>
                <?php else : ?>
                    <a href="<?php echo esc_url(home_url('/')); ?>">
                        <?php bloginfo('name'); ?>
                    </a>
                <?php endif; ?>
            </div>

            <!-- NAV -->
            <nav class="head__navigation" aria-label="<?php esc_attr_e('Primary navigation', 'groundwrk'); ?>">
                <?php
                wp_nav_menu([
                    'theme_location' => 'primary',
                    'menu_class'     => 'navigation',
                    'container'      => 'div',
                    'container_class'=> 'main-navigation-links',
                    'fallback_cb'    => false,
                ]);
                ?>
            </nav>

            <!-- SEARCH -->
            <div class="head__search head__search-desktop">
                <?php get_search_form(); ?>
            </div>

        </div>

        <!-- RIGHT SIDE -->
        <div class="head__right">
            <?php
            wp_nav_menu([
                'theme_location' => 'header_cta',
                'menu_class'     => 'header-cta',
                'container'      => 'div',
                'container_class'=> 'header-cta-wrapper',
                'fallback_cb'    => false,
            ]);
            ?>
        </div>

        <button class="head__burger" aria-label="<?php esc_attr_e('Open menu', 'groundwrk'); ?>">
            <svg width="15px" height="16px" viewBox="0 0 15 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title></title>
                <g id="icon/icon-search" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="search-icon-(editable)" stroke="#1671ff">
                        <line x1="11.4696699" y1="9.71966991" x2="11.4696699" y2="15.2196699" id="Line-2" stroke-width="2.5" stroke-linecap="round" transform="translate(11.469670, 12.469670) rotate(-45.000000) translate(-11.469670, -12.469670) "></line>
                        <circle id="Oval" stroke-width="2" cx="6" cy="6.5" r="5"></circle>
                    </g>
                </g>
            </svg>
            <div style="display: flex;flex-direction: column; gap:4px;">
            <span></span>
            <span></span>
            <span></span>
            </div>
        </button>
    </div>

</header>
<div class="mobile-menu">
    <div class="head__search-mobile head__search">
        <?php get_search_form(); ?>
    </div>
        <div class="mobile-menu__container">
    <?php
    wp_nav_menu([
        'theme_location' => 'mobile-menu',
        'menu_class'     => 'mobile-navigation',
        'container'      => false,
    ]);
    ?>

    <div class="mobile-menu__cta">
        <?php
        wp_nav_menu([
            'theme_location' => 'header_cta',
            'menu_class'     => 'mobile-cta',
            'container'      => false,
        ]);
        ?>
    </div>
        </div>
</div>
<main id="primary" class="site-main">
