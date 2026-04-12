<?php
$modals = get_posts([
    'post_type'   => 'modals',
    'numberposts' => -1,
    'post_status' => 'publish',
]);

if (!$modals) {
    return;
}

foreach ($modals as $modal) :
    $slug = $modal->post_name;
    ?>
    <div class="modal-container" id="<?php echo esc_attr($slug); ?>">
        <div class="modal modal--has-title modal__<?php echo esc_attr($slug); ?>">
            <div class="modal__close" tabindex="0" aria-label="Close modal">✕</div>

            <div class="modal__title">
                <?php echo esc_html($modal->post_title); ?>
            </div>

            <div class="modal__content">
                <?php echo apply_filters('the_content', $modal->post_content); ?>
            </div>
        </div>
    </div>
<?php
endforeach;