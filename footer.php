<?php
if (!defined('ABSPATH')) {
    exit;
}
?>
</main>
<footer class="site-footer">
    <div class="container-wide site-footer__inner">
        <div>
            <strong><?php bloginfo('name'); ?></strong>
            <p><?php echo esc_html(get_bloginfo('description')); ?></p>
        </div>
        <nav class="footer-nav" aria-label="<?php esc_attr_e('Footer navigation', 'groundwrk'); ?>">
            <?php
            wp_nav_menu([
                'theme_location' => 'footer',
                'menu_class'     => 'footer-nav__menu',
                'container'      => false,
                'fallback_cb'    => false,
            ]);
            ?>
        </nav>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
