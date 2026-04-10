<?php
get_header();
?>
<div class="container content-area">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <header class="entry-header">
                <h1 class="entry-title"><?php the_title(); ?></h1>
                <div class="entry-meta"><?php groundwrk_posted_on(); ?></div>
            </header>
            <div class="entry-content"><?php the_content(); ?></div>
        </article>
    <?php endwhile; endif; ?>
</div>
<?php
get_footer();
