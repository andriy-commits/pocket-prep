<?php
if (!defined('ABSPATH')) {
    exit;
}

function groundwrk_skip_link_focus_fix(): void
{
    ?>
    <script>
        /(trident|msie)/i.test(navigator.userAgent) && document.getElementById && window.addEventListener && window.addEventListener('hashchange', function () {
            var id = location.hash.substring(1),
                element;
            /^[A-z0-9_-]+$/.test(id) && (element = document.getElementById(id)) && (/^(?:a|select|input|button|textarea)$/i.test(element.tagName) || (element.tabIndex = -1), element.focus());
        }, false);
    </script>
    <?php
}
add_action('wp_print_footer_scripts', 'groundwrk_skip_link_focus_fix');
