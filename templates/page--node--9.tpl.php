<?php
/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.tpl.php template in this directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['header']: Items for the header region.
 * - $page['footer']: Items for the footer region.
 *
 * @see bootstrap_preprocess_page()
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see bootstrap_process_page()
 * @see template_process()
 * @see html.tpl.php
 *
 * @ingroup themeable
 */
?>
<div class="st-container">
  <!-- Fixed navbar -->
  <div class="navbar navbar-main navbar-primary navbar-fixed-top" role="navigation">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>"><?php print $site_name; ?></a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <?php if (!empty($primary_nav)): ?>
        <div class="collapse navbar-collapse" id="main-nav">
          <div class="col-sm-6" id="search-text">
            <!-- <div class="input-group"> -->
              <input type="text" class="form-control" placeholder="Search">
            <!-- </div> -->
          </div>

          <ul class="nav navbar-nav navbar-right">
            <!-- User -->
            <li>
              <img src="<?php echo $image; ?>people/110/guy-5.jpg" alt="Bill" class="img-circle" width="40" id="header-img-profile" />
            </li>

            <li id="header-user-profile">
              <a href="<?php echo url('user'); ?>">
                  <?php echo format_username($user); ?>
              </a>
              <?php if ($user->uid > 0) : ?>
              <a id="user-logout" href="<?php echo url('user/logout'); ?>">Logout</a>
              <?php else: ?>
              <a id="user-logout" href="<?php echo url('user'); ?>">Login</a>
              <?php endif; ?>
            </li>

            <li class="hidden-xs">
              <a href="#" data-toggle="sidebar-chat">
                <i class="fa fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      <?php endif; ?>

      <!-- /.navbar-collapse -->
    </div>
  </div>

  <nav class="navbar navbar-subnav navbar-fixed-top margin-bottom-none" role="navigation">
    <div class="container-fluid">
      <?php if (!empty($primary_nav)): ?>
        <?php print render($primary_nav); ?>
      <?php endif; ?>
    </div>
  </nav>

  <button id="toggle-sidebar-menu" href="#sidebar-menu" data-effect="st-effect-11" data-toggle="sidebar-menu" class="toggle">
    <span class="fa-indent fa"></span>
    My Dashboard
  </button>

  <?php print theme('sidebar_left'); ?>

  <div id="content">
    <div class="container">
      <?php print $messages; ?>
      <div id="banner-top" class="banner banner700-90">Banner (700 x 90)</div>

      <div class="row">
        <section class="col-sm-12">
          <h1 style="margin-left:40px">Recent Activity</h1>
          <ul class="timeline-list">
            <li class="media" id="october">
              <div class="pull-left">
                <img src="<?php echo $image; ?>people/110/guy-5.jpg" alt="people" class="img-square" width="80" />
                <div class="date">32 min ago</div>
              </div>
              <div class="media-body">
                <div class="row">
                  <div class="col-md-10 col-lg-8">
                    <div class="panel panel-default">
                      <div class="panel-body text-muted">
                        <p><a href="#">Matt</a> added a photo for <a href="#">Blue Marlin</a></p>
                        <img src="<?php echo $image; ?>food-2.jpg" class="img-responsive" width="258">
                        <br>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="media">
              <div class="pull-left">
                <img src="<?php echo $image; ?>people/110/woman-9.jpg" alt="people" class="img-square" width="80" />
                <div class="date">2 hr ago</div>
              </div>
              <div class="media-body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="panel panel-default">
                      <div class="panel-body text-muted">
                        <p><a href="#">Asley</a> added two photo for <a href="#">Manchester Unt</a></p>
                         <div class="tab-pane fade active in" id="home">
                          <!-- <div class="row">
                             <div class="col-lg-6"><img src="<?php echo $image; ?>food-3.jpg" class="img-responsive" width="45%"></div>
                             <div class="col-lg-6"><img src="<?php echo $image; ?>food-4.jpg" class="img-responsive" width="45%"></div>
                          </div> -->
                           <img src="<?php echo $image; ?>food-3.jpg" width="45%">
                           <img src="<?php echo $image; ?>food-4.jpg" width="45%">
                        </div>
                        <br>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="media">
              <div class="pull-left">
                <img src="<?php echo $image; ?>people/110/woman-5.jpg" alt="people" class="img-square" width="80" />
                <div class="date">3 Des</div>
              </div>
              <div class="media-body">
                <div class="panel panel-default">
                  <div class="panel-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis perspiciatis praesentium quaerat repudiandae soluta? Cum doloribus esse et eum facilis impedit officiis omnis optio, placeat, quia quo reprehenderit sunt velit? Asperiores cumque deserunt eveniet hic reprehenderit sit, ut voluptatum?</p>
                  </div>
                </div>
              </div>
            </li>
            <li class="media">
              <div class="pull-left">
                <img src="<?php echo $image; ?>people/110/guy-9.jpg" alt="people" class="img-square" width="80" />
                <div class="date">29 Nov</div>
              </div>
              <div class="media-body">
                <div class="panel panel-default">
                  <div class="panel-body">
                    <div class="boxed">
                      <a href="#" class="h4 margin-none">Vegetarian Pizza</a>
                      <div class="rating text-left">
                        <span class="star"></span>
                        <span class="star filled"></span>
                        <span class="star filled"></span>
                        <span class="star filled"></span>
                        <span class="star filled"></span>
                      </div>
                      <div class="media">
                        <a href="#" class="media-object pull-left">
                          <img src="<?php echo $image; ?>food1.jpg" alt="" width="80" />
                        </a>
                        <div class="media-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor impedit ipsum laborum maiores tempore veritatis....</p>
                        </div>
                      </div>
                      <ul class="icon-list">
                        <li><i class="fa fa-star fa-fw"></i> 4.8</li>
                        <li><i class="fa fa-clock-o fa-fw"></i> 20 min</li>
                        <li><i class="fa fa-graduation-cap fa-fw"></i> Beginner</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div style="display: none" >
            <?php print render($page['content']); ?>
          </div>
        </section>

        <div class="col-sm-4" id="sidebar-right">
          <div id="banner-right" class="banner banner220-200">Banner (220 x 200)</div>
          <div id="banner-right" class="banner banner220-200">Banner (220 x 200)</div>
          <div id="banner-right" class="banner banner220-200">Banner (220 x 200)</div>
          <div id="banner-right" class="banner banner220-200">Banner (220 x 200)</div>
        </div>
      </div>
    </div>
  </div>
</div>
