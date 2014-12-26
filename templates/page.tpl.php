<?php
$image = path_to_theme('suzhou') . '/images/';
?>
<?php include_once("fixed_navbar.tpl.php"); ?>

<button type="button" id="toggle-sidebar-menu">
  <span class="fa-indent fa"></span>
  My Dashboard
</button>
<div id="content" style="margin-left: 50px;">
<?php include_once("sidebar_left.tpl.php"); ?>
    <section<?php print $content_column_class; ?>>
      <?php if (!empty($page['highlighted'])): ?>
        <div class="highlighted jumbotron"><?php print render($page['highlighted']); ?></div>
      <?php endif; ?>
      <?php if (!empty($breadcrumb)): print $breadcrumb; endif;?>
      <a id="main-content"></a>
      <?php print render($title_prefix); ?>
      <?php if (!empty($title)): ?>
        <h1 class="page-header"><?php print $title; ?></h1>
      <?php endif; ?>
      <?php print render($title_suffix); ?>
      <?php print $messages; ?>
      <?php if (!empty($tabs)): ?>
        <?php print render($tabs); ?>
      <?php endif; ?>
      <?php if (!empty($page['help'])): ?>
        <?php print render($page['help']); ?>
      <?php endif; ?>
      <?php if (!empty($action_links)): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      <?php print render($page['content']); ?>
    </section>
<?php include_once("sidebar_right.tpl.php"); ?>
</div>
