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
            <div class="head__search">
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
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>

</header>
<div class="mobile-menu">

    <button class="mobile-menu__close" aria-label="<?php esc_attr_e('Close menu', 'groundwrk'); ?>">
        <span></span>
        <span></span>
    </button>

    <?php
    wp_nav_menu([
        'theme_location' => 'primary',
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
<main id="primary" class="site-main">
