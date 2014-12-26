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
                <input type="text" class="form-control" placeholder="Search">
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
    <div id="subnav" class="container-fluid">
        <?php if (!empty($primary_nav)): ?>
            <?php print render($primary_nav); ?>
        <?php endif; ?>

    </div>
</div>
