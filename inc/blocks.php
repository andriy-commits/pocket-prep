<?php
if (!defined('ABSPATH')) {
    exit;
}

function groundwrk_register_blocks(): void
{
    $blocks = glob(get_template_directory() . '/blocks/*/block.json');

    if (!$blocks) {
        return;
    }

    foreach ($blocks as $block_json) {
        register_block_type(dirname($block_json));
    }
}
add_action('init', 'groundwrk_register_blocks');