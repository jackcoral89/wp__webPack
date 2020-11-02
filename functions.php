<?php

add_theme_support('post-thumbnails');

// Permetto l'upload dei file SVG
add_filter('upload_mimes', function ($mimes = array()) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
});