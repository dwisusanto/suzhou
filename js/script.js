jQuery(document).ready(function($) {
  $('#toggle-sidebar-menu').on('click', function(){
    $('body').toggleClass('show-sidebar');
  });

  $('.fa-dedent').click(function() {
    $('body').toggleClass('show-sidebar');
    $('.sidebar').addClass("hidden");
  	$('#main > section').removeClass("col-lg-9 col-md-12").addClass("col-md-9");
    // $('#sidebar-right').removeClass("hidden");
    $('#sidebar-right').removeClass("visible-lg");
    $('#content').css("margin-left", "25px");
    $('#toggle-sidebar-menu').removeClass("hidden");
  });
  $('button').click(function(){
    $('.sidebar').removeClass("hidden");
    $('#main > section').removeClass("col-md-9").addClass("col-lg-9 col-md-12");
    // $('#sidebar-right').addClass("hidden");
  	$('#sidebar-right').addClass("visible-lg");
  	$('#content').css("margin-left", "250px");
  	$('#toggle-sidebar-menu').addClass("hidden");
  })
});

(function ($) {
    // Scroll
    $('[data-scrollable]').niceScroll({cursorborder: 0, cursorcolor: "#25ad9f"});
    $('[data-scrollable]').getNiceScroll().resize();
    $('#menu ul.collapse').on('shown.bs.collapse', function (e) {
        $('#menu').getNiceScroll().resize();
    });

    // Collapse
    $('#menu ul.collapse').on('show.bs.collapse', function (e) {
        e.stopPropagation();
        var parents = $(this).parents('ul:first').find('> li.open [data-toggle="collapse"]');
        if (parents.length) {
            parents.trigger('click');
        }
        $(this).parent().addClass("open");
    });

    $('#menu ul.collapse').on('hidden.bs.collapse', function (e) {
        e.stopPropagation();
        $(this).parent().removeClass("open");
    });

}(jQuery));
