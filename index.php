<?php
get_header();
?>
<div class="container content-area">
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class('entry-card'); ?>>
                <h2 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                <div class="entry-meta"><?php groundwrk_posted_on(); ?></div>
                <div class="entry-summary"><?php the_excerpt(); ?></div>
            </article>
        <?php endwhile; ?>

        <div class="pagination-wrap"><?php the_posts_pagination(); ?></div>
    <?php else : ?>
        <p><?php esc_html_e('No posts found.', 'groundwrk'); ?></p>
    <?php endif; ?>
</div>
<?php
get_footer();
