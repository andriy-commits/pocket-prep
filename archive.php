<?php
get_header();
?>
<div class="container content-area">
    <header class="archive-header">
        <?php the_archive_title('<h1 class="archive-title">', '</h1>'); ?>
        <?php the_archive_description('<div class="archive-description">', '</div>'); ?>
    </header>

    <?php if (have_posts()) : ?>
        <div class="archive-grid">
            <?php while (have_posts()) : the_post(); ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class('entry-card'); ?>>
                    <h2 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                    <div class="entry-summary"><?php the_excerpt(); ?></div>
                </article>
            <?php endwhile; ?>
        </div>
        <?php the_posts_pagination(); ?>
    <?php else : ?>
        <p><?php esc_html_e('No content found.', 'groundwrk'); ?></p>
    <?php endif; ?>
</div>
<?php
get_footer();
