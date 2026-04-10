<?php
get_header();
?>
<div class="container content-area not-found">
    <h1><?php esc_html_e('Page not found', 'groundwrk'); ?></h1>
    <p><?php esc_html_e('The page you are looking for does not exist or has been moved.', 'groundwrk'); ?></p>
    <?php get_search_form(); ?>
</div>
<?php
get_footer();
