<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>

    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="<?php bloginfo('description'); ?>">

    <?php wp_head(); ?>

    <title><?php the_title(); ?></title>

    <link rel="stylesheet" href="<?php echo get_template_directory_uri() . '/public/globalCss.css' ?>">

</head>

<body>

    <section class="nav pt-5 pl-5">
        <ul>
            <li><a href="<?php the_permalink(10) ?>">Home</a></li>
            <li><a href="<?php the_permalink(2) ?>">Page Template</a></li>
        </ul>
    </section>