<?php
if (!defined('ABSPATH')) {
    exit;
}
?>
</main>
<footer class="site-footer">
    <?php
    $footer = get_page_by_path('footer');

    if ($footer) {
        echo apply_filters('the_content', $footer->post_content);
    }
    ?>
</footer>

<?php get_template_part('template-parts/modals'); ?>
<?php wp_footer(); ?>
</body>
</html>
