<?php

/**
 * @file
 * template.php
 */

/**
 * Implements hook_page_alter().
 */
function suzhou_page_alter(&$page) {
  if (isset($page['page_top']['navbar'])) {
    unset($page['page_top']['navbar']);
  }
}

/**
 * Implements hook_theme().
 */
function suzhou_theme($existing, $type, $theme, $path) {
  return array(
    'sidebar_left' => array(
      'variables' => array(
        'image' => $path . '/images',
      ),
      'path' => $path . '/templates',
      'template' => 'sidebar-left',
    ),
  );
}

/**
 * Implements template_preprocess_block().
 */
function suzhou_preprocess_block(&$variables) {
}

/**
 * Implements template_preprocess_page().
 */
function suzhou_preprocess_page(&$variables) {
  if (!theme_get_setting('bootstrap_navbar_inverse')) {
    // Disable default bootstrap navbar theme.
    $variables['navbar_classes_array'][count(
    $variables['navbar_classes_array'])-1] = 'navbar-primary';
  }
  $variables['image'] = path_to_theme() . '/images/';
}

/**
 * Implements hook_preprocess_html().
 */
function suzhou_preprocess_html(&$variables) {
  $variables['classes_array'][] = 'st-layout';
  $variables['classes_array'][] = 'ls-top-navbar';
  $variables['classes_array'][] = 'ls-bottom-footer';
}
