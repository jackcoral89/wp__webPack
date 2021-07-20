<?php

add_theme_support('post-thumbnails');

// Permetto l'upload dei file SVG
add_filter('upload_mimes', function ($mimes = array()) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
});

/**
 * CPT
 * cpt_name
 **/
function cpt_name_cpt()
{
    register_post_type(
        'pillar',
        array(
            'labels' => array(
                'name' => __('Pillars', 'textdomain'),
                'singular_name' => __('Pillar', 'textdomain'),
                'menu_name' => _x('Pillar', 'admin menu'),
                'name_admin_bar' => _x('Pillar', 'admin bar'),
                'add_new' => _x('Aggiungi pillar', 'add new'),
                'add_new_item' => __('Aggiungi pillar'),
                'new_item' => __('Nuovo pillar'),
                'edit_item' => __('Modifica pillar'),
                'view_item' => __('Vedi pillar'),
                'all_items' => __('Tutte le pillar'),
                'search_items' => __('Cerca pillar'),
                'not_found' => __('Nessun pillar trovato.'),
            ),
            'supports' => array('title', 'editor', 'thumbnail', 'taxonomy'),
            'public'      => true,
            'has_archive' => true,
            'show_in_rest' => true
        )
    );

    register_taxonomy(
        'argomento',
        'pillar',
        array(
            'label' => 'Argomenti',
            'singular_label' => 'Argomento',
            'hierarchical' => true,
            'query_var' => true,
            'public' => true,
            'has_archive' => true,
            'show_ui' => true,
        )
    );
}
// add_action('init', 'cpt_name_cpt');

// Salvo le impostazioni acf cartella /acf-json
function my_acf_json_save_point($path)
{
    $path = get_stylesheet_directory() . '/acf-json';
    return $path;
}
add_filter('acf/settings/save_json', 'my_acf_json_save_point');
