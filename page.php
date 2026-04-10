<?php
get_header();

if (have_posts()) {
    while (have_posts()) {
        the_post();
        ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <?php the_content(); ?>
        </article>
        <?php
    }
}

get_footer();
