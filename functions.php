<?php

/* Javascript
-------------------------------------------------------- */
if (!function_exists('wp_webpack_scripts')) {
    function wp_webpack_scripts()
    {
        // wp_enqueue_script('gagliardini-jquery', get_template_directory_uri() . '/assets/js/jquery.min.js', null, true); // jquery
        // wp_enqueue_script('gagliardini-bootstrap-js', get_template_directory_uri() . '/assets/js/bootstrap.min.js', null, true); // bootstrap
        // wp_enqueue_script('gagliardini-gsap', get_template_directory_uri() . '/assets/js/gsap.min.js', null, true); // gsap
        // wp_enqueue_script('gagliardini-gsap-scroll-trigger', get_template_directory_uri() . '/assets/js/ScrollTrigger.min.js', null, true); // gsap ScrollTrigger
        // wp_enqueue_script('gagliardini-gsap-custom-ease', get_template_directory_uri() . '/assets/js/custom-ease.min.js', null, true); // gsap custom ease
        // wp_enqueue_script('gagliardini-vue', get_template_directory_uri() . '/assets/js/vue.min.js', null, true); // vue
        // wp_enqueue_script('gagliardini-axios', get_template_directory_uri() . '/assets/js/axios.min.js', null, true); // axios
        // wp_enqueue_script('gagliardini-clamp-js', get_template_directory_uri() . '/assets/js/clamp.min.js', null, true); // clamp
        // wp_enqueue_script('gagliardini-swiper-js', get_template_directory_uri() . '/assets/js/swiper.min.js', null, true); // swiper
        // wp_enqueue_script('gagliardini-animsition-js', get_template_directory_uri() . '/assets/js/animsition.min.js', null, true); // animsition
        wp_enqueue_script('wp-webback-index', get_stylesheet_directory_uri() . '/public/js/index.js', null, 0.1, true); // main
    }
}
add_action('wp_enqueue_scripts', 'wp_webpack_scripts');