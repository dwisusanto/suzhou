(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./app/js/themes/2/main.js":[function(require,module,exports){
// COMMON
require('../../common/main');
require('../../components/messages/main');

// CUSTOM
require('./_pages');
require('./components/sidebar/main');
require('./components/chat/main');
},{"../../common/main":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/common/main.js","../../components/messages/main":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/messages/main.js","./_pages":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/themes/2/_pages.js","./components/chat/main":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/themes/2/components/chat/main.js","./components/sidebar/main":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/themes/2/components/sidebar/main.js"}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/common/_breakpoints.js":[function(require,module,exports){
(function ($) {

    $(window).setBreakpoints({
        distinct: true,
        breakpoints: [ 320, 480, 768, 1024 ]
    });

})(jQuery);
},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/common/_gridalicious.js":[function(require,module,exports){
(function($){

    $('[data-toggle*="gridalicious"]').each(function () {
        $(this).gridalicious({
            gutter: $(this).data('gutter') || 15,
            width: $(this).data('width') || 370,
            selector: '> div'
        });
    });

})(jQuery);
},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/common/_skins.js":[function(require,module,exports){
var asyncLoader = require('../lib/async');

(function ($) {

    var changeSkin = function () {
        var skin = $.cookie("skin");
        if (typeof skin != 'undefined') {
            asyncLoader([ 'css/' + skin + '.min.css' ], function () {
                $('[data-skin]').removeProp('disabled').parent().removeClass('loading');
            });
        }
    };

    $('[data-skin]').on('click', function () {

        if ($(this).prop('disabled')) return;

        $('[data-skin]').prop('disabled', true);

        $(this).parent().addClass('loading');

        $.cookie("skin", $(this).data('skin'));

        changeSkin();

    });

    var skin = $.cookie("skin");

    if (typeof skin != 'undefined' && skin != 'default') {
        changeSkin();
    }

})(jQuery);
},{"../lib/async":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/lib/async.js"}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/common/main.js":[function(require,module,exports){
require('./_breakpoints');
require('./_skins');
require('./_gridalicious');
require('../components/forms/main');
require('../components/tables/main');
require('../components/other/_dropdown');
require('../components/other/_tooltip');
require('../components/other/_offcanvas');
require('../components/other/_ratings');
},{"../components/forms/main":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/forms/main.js","../components/other/_dropdown":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/other/_dropdown.js","../components/other/_offcanvas":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/other/_offcanvas.js","../components/other/_ratings":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/other/_ratings.js","../components/other/_tooltip":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/other/_tooltip.js","../components/tables/main":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/tables/main.js","./_breakpoints":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/common/_breakpoints.js","./_gridalicious":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/common/_gridalicious.js","./_skins":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/common/_skins.js"}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/_breakpoints.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $(window).bind('enterBreakpoint480', function () {
        $('.chat-window-container .panel:not(:last)').remove();
        $('.chat-window-container .panel').attr('id', 'chat-0001');
    });

    $(window).bind('enterBreakpoint768', function () {
        $("body").removeClass('show-chat');

        if ($('.chat-window-container .panel').length == 3) {
            $('.chat-window-container .panel:first').remove();
            $('.chat-window-container .panel:first').attr('id', 'chat-0001');
            $('.chat-window-container .panel:last').attr('id', 'chat-0002');
        }
    });

    $(window).bind('exitBreakpoint768', function () {
        $("body").removeClass('show-chat');
    });

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/_check-chat.js":[function(require,module,exports){
module.exports = function () {
    if (!$('body').hasClass('show-chat')) {
        $('.chat-window-container .panel-body').addClass('display-none');
        $('.chat-window-container input').addClass('display-none');
        if ($('.sidebar.left').length && $(window).width() > 768) $('body').addClass('show-sidebar');
    } else {
        $('.chat-window-container .panel-body').removeClass('display-none');
        $('.chat-window-container input').removeClass('display-none');
        if ($('.sidebar.left').length) $('body').removeClass('show-sidebar');
    }
};

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/_hide.js":[function(require,module,exports){
(function ($) {
    "use strict";

    function checkChat() {
        if (! $('body').hasClass('show-chat')) {
            $('.chat-window-container .panel-body').addClass('display-none');
            $('.chat-window-container input').addClass('display-none');
        } else {
            $('.chat-window-container .panel-body').removeClass('display-none');
            $('.chat-window-container input').removeClass('display-none');
        }
    }

    checkChat();

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/_search.js":[function(require,module,exports){
(function ($) {

    // match anything
    $.expr[ ":" ].containsNoCase = function (el, i, m) {
        var search = m[ 3 ];
        if (! search) return false;
        return new RegExp(search, "i").test($(el).text());
    };

    // Search Filter
    function searchFilterCallBack($data, $opt) {
        var search = $data instanceof jQuery ? $data.val() : $(this).val(),
            opt = typeof $opt == 'undefined' ? $data.data.opt : $opt;

        var $target = $(opt.targetSelector);
        $target.show();

        if (search && search.length >= opt.charCount) {
            $target.not(":containsNoCase(" + search + ")").hide();
        }
    }

    // input filter
    $.fn.searchFilter = function (options) {
        var opt = $.extend({
            // target selector
            targetSelector: "",
            // number of characters before search is applied
            charCount: 1
        }, options);

        return this.each(function () {
            var $el = $(this);
            $el.off("keyup", searchFilterCallBack);
            $el.on("keyup", null, {opt: opt}, searchFilterCallBack);
        });

    };

    // Filter by All/Online/Offline
    $(".chat-filter a").on('click', function (e) {

        e.preventDefault();
        $('.chat-contacts li').hide();
        $('.chat-contacts').find($(this).data('target')).show();

        $(".chat-filter li").removeClass('active');
        $(this).parent().addClass('active');

        $(".chat-search input").searchFilter({targetSelector: ".chat-contacts " + $(this).data('target')});

        // Filter Contacts by Search and Tabs
        searchFilterCallBack($(".chat-search input"), {
            targetSelector: ".chat-contacts " + $(this).data('target'),
            charCount: 1
        });
    });

    // Trigger Search Filter
    $(".chat-search input").searchFilter({targetSelector: ".chat-contacts li"});

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/_toggle.js":[function(require,module,exports){
(function ($) {

    $('[data-toggle="chat-box"]').on('click', function () {
        $(".chat-contacts li:first").trigger('click');
        if ($(this).data('hide')) $(this).hide();
    });

    (function () {
        var toggleBtn = $('[data-toggle="sidebar-chat"]');

        // If No Sidebar Exit
        if (!toggleBtn.length) return;

        toggleBtn.on('click', function () {

            $('body').toggleClass('show-chat');

            require('./_check-chat')();
        });
    })();

    require('./_check-chat')();
})(jQuery);
},{"./_check-chat":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/_check-chat.js"}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/_windows.js":[function(require,module,exports){
(function ($) {
    "use strict";

    var container = $('.chat-window-container');

    // Click User
    $(".chat-contacts li").on('click', function () {

        if ($('.chat-window-container [data-user-id="' + $(this).data('userId') + '"]').length) return;

        // If user is offline do nothing
        if ($(this).attr('class') === 'offline') return;

        var source = $("#chat-window-template").html();
        var template = Handlebars.compile(source);

        var context = {user_image: $(this).find('img').attr('src'), user: $(this).find('.contact-name').text()};
        var html = template(context);

        var clone = $(html);

        clone.attr("data-user-id", $(this).data("userId"));

        container.find('.panel:not([id^="chat"])').remove();

        var count = container.find('.panel').length;

        count ++;
        var limit = $(window).width() > 768 ? 3 : 1;
        if (count >= limit) {
            container.find('#chat-000'+ limit).remove();
            count = limit;
        }

        clone.attr('id', 'chat-000' + parseInt(count));
        container.append(clone).show();

        clone.show();
        clone.find('> .panel-body').removeClass('display-none');
        clone.find('> input').removeClass('display-none');
    });

    // Change ID by No. of Windows
    function chatLayout() {
        container.find('.panel').each(function (index, value) {
            $(this).attr('id', 'chat-000' + parseInt(index + 1));
        });
    }

    // remove window
    $("body").on('click', ".chat-window-container .close", function () {
        $(this).parent().parent().remove();
        chatLayout();
        if ($(window).width() < 768) $('.chat-window-container').hide();
    });

    // Chat heading collapse window
    $('body').on('click', '.chat-window-container .panel-heading', function (e) {
        e.preventDefault();
        $(this).parent().find('> .panel-body').toggleClass('display-none');
        $(this).parent().find('> input').toggleClass('display-none');
    });

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/main.js":[function(require,module,exports){
require('./_breakpoints');
require('./_search');
require('./_windows');
require('./_toggle');
require('./_hide');
},{"./_breakpoints":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/_breakpoints.js","./_hide":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/_hide.js","./_search":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/_search.js","./_toggle":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/_toggle.js","./_windows":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/_windows.js"}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/forms/_datepicker.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Datepicker INIT
    $('.datepicker').datepicker();

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/forms/_minicolors.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Minicolors INIT
    $('.minicolors').each(function () {
        $(this).minicolors({
            control: $(this).attr('data-control') || 'hue',
            defaultValue: $(this).attr('data-defaultValue') || '',
            inline: $(this).attr('data-inline') === 'true',
            letterCase: $(this).attr('data-letterCase') || 'lowercase',
            opacity: $(this).attr('data-opacity'),
            position: $(this).attr('data-position') || 'bottom left',
            change: function (hex, opacity) {
                if (! hex) return;
                if (opacity) hex += ', ' + opacity;
                if (typeof console === 'object') {
                    console.log(hex);
                }
            },
            theme: 'bootstrap'
        });
    });

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/forms/_progress-bars.js":[function(require,module,exports){
(function ($) {

    // Progress Bar Animation
    $('.progress-bar').each(function () {
        $(this).width($(this).attr('aria-valuenow') + '%');
    });

})(jQuery);
},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/forms/_selectpicker.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $('.selectpicker').each(function(){
        $(this).selectpicker({
            width: $(this).data('width') || '100%'
        });
    });

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/forms/_slider.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $('#ex1').slider({
        formatter: function (value) {
            return 'Current value: ' + value;
        }
    });

    $("#ex2").slider();

    $("#ex6").slider();

    $("#ex6").on("slide", function (slideEvt) {
        $("#ex6SliderVal").text(slideEvt.value);
    });

    $('.slider-handle').html('<i class="fa fa-bars fa-rotate-90"></i>');

})(jQuery);
},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/forms/main.js":[function(require,module,exports){
require('./_progress-bars');
require('./_slider');
require('./_selectpicker');
require('./_datepicker');
require('./_minicolors');
},{"./_datepicker":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/forms/_datepicker.js","./_minicolors":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/forms/_minicolors.js","./_progress-bars":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/forms/_progress-bars.js","./_selectpicker":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/forms/_selectpicker.js","./_slider":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/forms/_slider.js"}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/messages/_breakpoints.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $(window).bind('enterBreakpoint320', function () {
        var img = $('.messages-list .panel ul img');
        $('.messages-list .panel ul').width(img.first().width() * img.length);
    });

    $(window).bind('exitBreakpoint320', function () {
        $('.messages-list .panel ul').width('auto');
    });

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/messages/_nicescroll.js":[function(require,module,exports){
(function ($) {
    "use strict";

    var nice = $('.messages-list .panel').niceScroll({cursorborder: 0, cursorcolor: "#25ad9f", zindex: 1});

    var _super = nice.getContentSize;

    nice.getContentSize = function () {
        var page = _super.call(nice);
        page.h = nice.win.height();
        return page;
    };

})(jQuery);
},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/messages/main.js":[function(require,module,exports){
require('./_breakpoints');
require('./_nicescroll');
},{"./_breakpoints":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/messages/_breakpoints.js","./_nicescroll":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/messages/_nicescroll.js"}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/other/_dropdown.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Dropdown
    $('.dropdown-toggle').dropdown();

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/other/_offcanvas.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // OffCanvas
    $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active');
    });

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/other/_ratings.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Ratings
    $('.rating span.star').on('click', function () {
        var total = $(this).parent().children().length;
        var clickedIndex = $(this).index();
        $('.rating span.star').removeClass('filled');
        for (var i = clickedIndex; i < total; i ++) {
            $('.rating span.star').eq(i).addClass('filled');
        }
    });

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/other/_tooltip.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Tooltip
    $("body").tooltip({selector: '[data-toggle="tooltip"]', container: "body"});

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/sidebar/_breakpoints.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $(window).bind('enterBreakpoint768', function () {
        if (! $('.sidebar').length) return;
        $("body").addClass('show-sidebar');
    });

    $(window).bind('enterBreakpoint480', function () {
        if (! $('.sidebar').length) return;
        $("body").removeClass('show-sidebar');
    });

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/sidebar/_sidebar-menu.js":[function(require,module,exports){
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
},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/sidebar/_sidebar-toggle.js":[function(require,module,exports){
(function ($) {
    $('#subnav').collapse({'toggle': false});

    var toggleBtn = $('[data-toggle="sidebar-menu"]');

    // If No Sidebar Exit
    if (!toggleBtn.length) return;

    toggleBtn.on('click', function () {

        if ($('body').is('.show-chat')) $('body').removeClass('show-chat');

        $('body').toggleClass('show-sidebar');

        // Check chat windows
        require('../chat/_check-chat')();
    });

})(jQuery);
},{"../chat/_check-chat":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/_check-chat.js"}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/sidebar/main.js":[function(require,module,exports){
require('./_breakpoints');
require('./_sidebar-menu');
require('./_sidebar-toggle');
},{"./_breakpoints":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/sidebar/_breakpoints.js","./_sidebar-menu":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/sidebar/_sidebar-menu.js","./_sidebar-toggle":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/sidebar/_sidebar-toggle.js"}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/tables/_check-all.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Table Checkbox All
    $('#checkAll').on('click', function (e) {
        $(this).closest('table').find('td input:checkbox').prop('checked', this.checked);
    });

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/tables/_datatables.js":[function(require,module,exports){
(function ($) {

    // Datatables
    $('#data-table').dataTable();

})(jQuery);
},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/tables/main.js":[function(require,module,exports){
require('./_datatables');
require('./_check-all');
},{"./_check-all":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/tables/_check-all.js","./_datatables":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/tables/_datatables.js"}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/lib/async.js":[function(require,module,exports){
function contentLoaded(win, fn) {

    var done = false, top = true,

        doc = win.document,
        root = doc.documentElement,
        modern = doc.addEventListener,

        add = modern ? 'addEventListener' : 'attachEvent',
        rem = modern ? 'removeEventListener' : 'detachEvent',
        pre = modern ? '' : 'on',

        init = function (e) {
            if (e.type == 'readystatechange' && doc.readyState != 'complete') return;
            (e.type == 'load' ? win : doc)[ rem ](pre + e.type, init, false);
            if (! done && (done = true)) fn.call(win, e.type || e);
        },

        poll = function () {
            try {
                root.doScroll('left');
            } catch (e) {
                setTimeout(poll, 50);
                return;
            }
            init('poll');
        };

    if (doc.readyState == 'complete') fn.call(win, 'lazy');
    else {
        if (! modern && root.doScroll) {
            try {
                top = ! win.frameElement;
            } catch (e) {
            }
            if (top) poll();
        }
        doc[ add ](pre + 'DOMContentLoaded', init, false);
        doc[ add ](pre + 'readystatechange', init, false);
        win[ add ](pre + 'load', init, false);
    }
}

module.exports = function(urls, callback) {

    var asyncLoader = function (urls, callback) {

        urls.foreach(function (i, file) {
            loadCss(file);
        });

        // checking for a callback function
        if (typeof callback == 'function') {
            // calling the callback
            contentLoaded(window, callback);
        }
    };

    var loadCss = function (url) {
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = url;
        document.getElementsByTagName('head')[ 0 ].appendChild(link);
    };

    // simple foreach implementation
    Array.prototype.foreach = function (callback) {
        for (var i = 0; i < this.length; i ++) {
            callback(i, this[ i ]);
        }
    };

    asyncLoader(urls, callback);

};
},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/pages/timeline.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $('.share textarea').on('keyup', function () {
        $(".share button")[ $(this).val() === '' ? 'hide' : 'show' ]();
    });

    if (! $("#scroll-spy").length) return;

    var offset = $("#scroll-spy").offset().top;

    $('body').scrollspy({target: '#scroll-spy', offset: offset});

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/pages/users.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $('#users-filter-select').on('change', function () {
        if (this.value === 'name') {
            $('#user-first').removeClass('hidden');
            $('#user-search-name').removeClass('hidden');
        } else {
            $('#user-first').addClass('hidden');
            $('#user-search-name').addClass('hidden');
        }
        if (this.value === 'friends') {
            $('.select-friends').removeClass('hidden');

        } else {
            $('.select-friends').addClass('hidden');
        }
        if (this.value === 'name') {
            $('.search-name').removeClass('hidden');

        } else {
            $('.search-name').addClass('hidden');
        }
    });

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/themes/2/_pages.js":[function(require,module,exports){
require('../../pages/users');
require('../../pages/timeline');
},{"../../pages/timeline":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/pages/timeline.js","../../pages/users":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/pages/users.js"}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/themes/2/components/chat/_toggle.js":[function(require,module,exports){
(function ($) {
    $('[data-toggle="sidebar-chat"]').on('click', function () {
        // SIDEBAR
        $('body').removeClass('show-sidebar');

        // COLLAPSE NAVBAR
        if ($("#main-nav").is('.in')) $("#main-nav").collapse('hide');

        // SUBNAV HIDE
        if ($('body').is('.show-chat'))  $('#subnav').collapse('hide');
    });
})(jQuery);
},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/themes/2/components/chat/main.js":[function(require,module,exports){
// Common CHAT
require('../../../../components/chat/main');

// Custom TOGGLE
require('./_toggle');
},{"../../../../components/chat/main":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/main.js","./_toggle":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/themes/2/components/chat/_toggle.js"}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/themes/2/components/sidebar/_sidebar-toggle.js":[function(require,module,exports){
(function ($){
    $('[data-toggle="sidebar-menu"]').on('click', function () {
        if ($('body').is('.show-sidebar')) {
            // Layout 2 Hide SubNAV
            $('#subnav').collapse('hide');
        }
    });

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/themes/2/components/sidebar/main.js":[function(require,module,exports){
// Common CHAT
require('../../../../components/sidebar/main');

// Custom TOGGLE
require('./_sidebar-toggle');
},{"../../../../components/sidebar/main":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/sidebar/main.js","./_sidebar-toggle":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/themes/2/components/sidebar/_sidebar-toggle.js"}]},{},["./app/js/themes/2/main.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvdGhlbWVzLzIvbWFpbi5qcyIsImFwcC9qcy9jb21tb24vX2JyZWFrcG9pbnRzLmpzIiwiYXBwL2pzL2NvbW1vbi9fZ3JpZGFsaWNpb3VzLmpzIiwiYXBwL2pzL2NvbW1vbi9fc2tpbnMuanMiLCJhcHAvanMvY29tbW9uL21haW4uanMiLCJhcHAvanMvY29tcG9uZW50cy9jaGF0L19icmVha3BvaW50cy5qcyIsImFwcC9qcy9jb21wb25lbnRzL2NoYXQvX2NoZWNrLWNoYXQuanMiLCJhcHAvanMvY29tcG9uZW50cy9jaGF0L19oaWRlLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvY2hhdC9fc2VhcmNoLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvY2hhdC9fdG9nZ2xlLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvY2hhdC9fd2luZG93cy5qcyIsImFwcC9qcy9jb21wb25lbnRzL2NoYXQvbWFpbi5qcyIsImFwcC9qcy9jb21wb25lbnRzL2Zvcm1zL19kYXRlcGlja2VyLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvZm9ybXMvX21pbmljb2xvcnMuanMiLCJhcHAvanMvY29tcG9uZW50cy9mb3Jtcy9fcHJvZ3Jlc3MtYmFycy5qcyIsImFwcC9qcy9jb21wb25lbnRzL2Zvcm1zL19zZWxlY3RwaWNrZXIuanMiLCJhcHAvanMvY29tcG9uZW50cy9mb3Jtcy9fc2xpZGVyLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvZm9ybXMvbWFpbi5qcyIsImFwcC9qcy9jb21wb25lbnRzL21lc3NhZ2VzL19icmVha3BvaW50cy5qcyIsImFwcC9qcy9jb21wb25lbnRzL21lc3NhZ2VzL19uaWNlc2Nyb2xsLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvbWVzc2FnZXMvbWFpbi5qcyIsImFwcC9qcy9jb21wb25lbnRzL290aGVyL19kcm9wZG93bi5qcyIsImFwcC9qcy9jb21wb25lbnRzL290aGVyL19vZmZjYW52YXMuanMiLCJhcHAvanMvY29tcG9uZW50cy9vdGhlci9fcmF0aW5ncy5qcyIsImFwcC9qcy9jb21wb25lbnRzL290aGVyL190b29sdGlwLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvc2lkZWJhci9fYnJlYWtwb2ludHMuanMiLCJhcHAvanMvY29tcG9uZW50cy9zaWRlYmFyL19zaWRlYmFyLW1lbnUuanMiLCJhcHAvanMvY29tcG9uZW50cy9zaWRlYmFyL19zaWRlYmFyLXRvZ2dsZS5qcyIsImFwcC9qcy9jb21wb25lbnRzL3NpZGViYXIvbWFpbi5qcyIsImFwcC9qcy9jb21wb25lbnRzL3RhYmxlcy9fY2hlY2stYWxsLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvdGFibGVzL19kYXRhdGFibGVzLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvdGFibGVzL21haW4uanMiLCJhcHAvanMvbGliL2FzeW5jLmpzIiwiYXBwL2pzL3BhZ2VzL3RpbWVsaW5lLmpzIiwiYXBwL2pzL3BhZ2VzL3VzZXJzLmpzIiwiYXBwL2pzL3RoZW1lcy8yL19wYWdlcy5qcyIsImFwcC9qcy90aGVtZXMvMi9jb21wb25lbnRzL2NoYXQvX3RvZ2dsZS5qcyIsImFwcC9qcy90aGVtZXMvMi9jb21wb25lbnRzL2NoYXQvbWFpbi5qcyIsImFwcC9qcy90aGVtZXMvMi9jb21wb25lbnRzL3NpZGViYXIvX3NpZGViYXItdG9nZ2xlLmpzIiwiYXBwL2pzL3RoZW1lcy8yL2NvbXBvbmVudHMvc2lkZWJhci9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gQ09NTU9OXG5yZXF1aXJlKCcuLi8uLi9jb21tb24vbWFpbicpO1xucmVxdWlyZSgnLi4vLi4vY29tcG9uZW50cy9tZXNzYWdlcy9tYWluJyk7XG5cbi8vIENVU1RPTVxucmVxdWlyZSgnLi9fcGFnZXMnKTtcbnJlcXVpcmUoJy4vY29tcG9uZW50cy9zaWRlYmFyL21haW4nKTtcbnJlcXVpcmUoJy4vY29tcG9uZW50cy9jaGF0L21haW4nKTsiLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgICQod2luZG93KS5zZXRCcmVha3BvaW50cyh7XG4gICAgICAgIGRpc3RpbmN0OiB0cnVlLFxuICAgICAgICBicmVha3BvaW50czogWyAzMjAsIDQ4MCwgNzY4LCAxMDI0IF1cbiAgICB9KTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCl7XG5cbiAgICAkKCdbZGF0YS10b2dnbGUqPVwiZ3JpZGFsaWNpb3VzXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuZ3JpZGFsaWNpb3VzKHtcbiAgICAgICAgICAgIGd1dHRlcjogJCh0aGlzKS5kYXRhKCdndXR0ZXInKSB8fCAxNSxcbiAgICAgICAgICAgIHdpZHRoOiAkKHRoaXMpLmRhdGEoJ3dpZHRoJykgfHwgMzcwLFxuICAgICAgICAgICAgc2VsZWN0b3I6ICc+IGRpdidcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7IiwidmFyIGFzeW5jTG9hZGVyID0gcmVxdWlyZSgnLi4vbGliL2FzeW5jJyk7XG5cbihmdW5jdGlvbiAoJCkge1xuXG4gICAgdmFyIGNoYW5nZVNraW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBza2luID0gJC5jb29raWUoXCJza2luXCIpO1xuICAgICAgICBpZiAodHlwZW9mIHNraW4gIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFzeW5jTG9hZGVyKFsgJ2Nzcy8nICsgc2tpbiArICcubWluLmNzcycgXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLXNraW5dJykucmVtb3ZlUHJvcCgnZGlzYWJsZWQnKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgJCgnW2RhdGEtc2tpbl0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCQodGhpcykucHJvcCgnZGlzYWJsZWQnKSkgcmV0dXJuO1xuXG4gICAgICAgICQoJ1tkYXRhLXNraW5dJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcblxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdsb2FkaW5nJyk7XG5cbiAgICAgICAgJC5jb29raWUoXCJza2luXCIsICQodGhpcykuZGF0YSgnc2tpbicpKTtcblxuICAgICAgICBjaGFuZ2VTa2luKCk7XG5cbiAgICB9KTtcblxuICAgIHZhciBza2luID0gJC5jb29raWUoXCJza2luXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBza2luICE9ICd1bmRlZmluZWQnICYmIHNraW4gIT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgIGNoYW5nZVNraW4oKTtcbiAgICB9XG5cbn0pKGpRdWVyeSk7IiwicmVxdWlyZSgnLi9fYnJlYWtwb2ludHMnKTtcbnJlcXVpcmUoJy4vX3NraW5zJyk7XG5yZXF1aXJlKCcuL19ncmlkYWxpY2lvdXMnKTtcbnJlcXVpcmUoJy4uL2NvbXBvbmVudHMvZm9ybXMvbWFpbicpO1xucmVxdWlyZSgnLi4vY29tcG9uZW50cy90YWJsZXMvbWFpbicpO1xucmVxdWlyZSgnLi4vY29tcG9uZW50cy9vdGhlci9fZHJvcGRvd24nKTtcbnJlcXVpcmUoJy4uL2NvbXBvbmVudHMvb3RoZXIvX3Rvb2x0aXAnKTtcbnJlcXVpcmUoJy4uL2NvbXBvbmVudHMvb3RoZXIvX29mZmNhbnZhcycpO1xucmVxdWlyZSgnLi4vY29tcG9uZW50cy9vdGhlci9fcmF0aW5ncycpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgJCh3aW5kb3cpLmJpbmQoJ2VudGVyQnJlYWtwb2ludDQ4MCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmNoYXQtd2luZG93LWNvbnRhaW5lciAucGFuZWw6bm90KDpsYXN0KScpLnJlbW92ZSgpO1xuICAgICAgICAkKCcuY2hhdC13aW5kb3ctY29udGFpbmVyIC5wYW5lbCcpLmF0dHIoJ2lkJywgJ2NoYXQtMDAwMScpO1xuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLmJpbmQoJ2VudGVyQnJlYWtwb2ludDc2OCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoJ3Nob3ctY2hhdCcpO1xuXG4gICAgICAgIGlmICgkKCcuY2hhdC13aW5kb3ctY29udGFpbmVyIC5wYW5lbCcpLmxlbmd0aCA9PSAzKSB7XG4gICAgICAgICAgICAkKCcuY2hhdC13aW5kb3ctY29udGFpbmVyIC5wYW5lbDpmaXJzdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgJCgnLmNoYXQtd2luZG93LWNvbnRhaW5lciAucGFuZWw6Zmlyc3QnKS5hdHRyKCdpZCcsICdjaGF0LTAwMDEnKTtcbiAgICAgICAgICAgICQoJy5jaGF0LXdpbmRvdy1jb250YWluZXIgLnBhbmVsOmxhc3QnKS5hdHRyKCdpZCcsICdjaGF0LTAwMDInKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLmJpbmQoJ2V4aXRCcmVha3BvaW50NzY4JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcygnc2hvdy1jaGF0Jyk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoISQoJ2JvZHknKS5oYXNDbGFzcygnc2hvdy1jaGF0JykpIHtcbiAgICAgICAgJCgnLmNoYXQtd2luZG93LWNvbnRhaW5lciAucGFuZWwtYm9keScpLmFkZENsYXNzKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgJCgnLmNoYXQtd2luZG93LWNvbnRhaW5lciBpbnB1dCcpLmFkZENsYXNzKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgaWYgKCQoJy5zaWRlYmFyLmxlZnQnKS5sZW5ndGggJiYgJCh3aW5kb3cpLndpZHRoKCkgPiA3NjgpICQoJ2JvZHknKS5hZGRDbGFzcygnc2hvdy1zaWRlYmFyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJCgnLmNoYXQtd2luZG93LWNvbnRhaW5lciAucGFuZWwtYm9keScpLnJlbW92ZUNsYXNzKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgJCgnLmNoYXQtd2luZG93LWNvbnRhaW5lciBpbnB1dCcpLnJlbW92ZUNsYXNzKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgaWYgKCQoJy5zaWRlYmFyLmxlZnQnKS5sZW5ndGgpICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2hvdy1zaWRlYmFyJyk7XG4gICAgfVxufTtcbiIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tDaGF0KCkge1xuICAgICAgICBpZiAoISAkKCdib2R5JykuaGFzQ2xhc3MoJ3Nob3ctY2hhdCcpKSB7XG4gICAgICAgICAgICAkKCcuY2hhdC13aW5kb3ctY29udGFpbmVyIC5wYW5lbC1ib2R5JykuYWRkQ2xhc3MoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICAgICAgJCgnLmNoYXQtd2luZG93LWNvbnRhaW5lciBpbnB1dCcpLmFkZENsYXNzKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy5jaGF0LXdpbmRvdy1jb250YWluZXIgLnBhbmVsLWJvZHknKS5yZW1vdmVDbGFzcygnZGlzcGxheS1ub25lJyk7XG4gICAgICAgICAgICAkKCcuY2hhdC13aW5kb3ctY29udGFpbmVyIGlucHV0JykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tDaGF0KCk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgIC8vIG1hdGNoIGFueXRoaW5nXG4gICAgJC5leHByWyBcIjpcIiBdLmNvbnRhaW5zTm9DYXNlID0gZnVuY3Rpb24gKGVsLCBpLCBtKSB7XG4gICAgICAgIHZhciBzZWFyY2ggPSBtWyAzIF07XG4gICAgICAgIGlmICghIHNlYXJjaCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChzZWFyY2gsIFwiaVwiKS50ZXN0KCQoZWwpLnRleHQoKSk7XG4gICAgfTtcblxuICAgIC8vIFNlYXJjaCBGaWx0ZXJcbiAgICBmdW5jdGlvbiBzZWFyY2hGaWx0ZXJDYWxsQmFjaygkZGF0YSwgJG9wdCkge1xuICAgICAgICB2YXIgc2VhcmNoID0gJGRhdGEgaW5zdGFuY2VvZiBqUXVlcnkgPyAkZGF0YS52YWwoKSA6ICQodGhpcykudmFsKCksXG4gICAgICAgICAgICBvcHQgPSB0eXBlb2YgJG9wdCA9PSAndW5kZWZpbmVkJyA/ICRkYXRhLmRhdGEub3B0IDogJG9wdDtcblxuICAgICAgICB2YXIgJHRhcmdldCA9ICQob3B0LnRhcmdldFNlbGVjdG9yKTtcbiAgICAgICAgJHRhcmdldC5zaG93KCk7XG5cbiAgICAgICAgaWYgKHNlYXJjaCAmJiBzZWFyY2gubGVuZ3RoID49IG9wdC5jaGFyQ291bnQpIHtcbiAgICAgICAgICAgICR0YXJnZXQubm90KFwiOmNvbnRhaW5zTm9DYXNlKFwiICsgc2VhcmNoICsgXCIpXCIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlucHV0IGZpbHRlclxuICAgICQuZm4uc2VhcmNoRmlsdGVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIG9wdCA9ICQuZXh0ZW5kKHtcbiAgICAgICAgICAgIC8vIHRhcmdldCBzZWxlY3RvclxuICAgICAgICAgICAgdGFyZ2V0U2VsZWN0b3I6IFwiXCIsXG4gICAgICAgICAgICAvLyBudW1iZXIgb2YgY2hhcmFjdGVycyBiZWZvcmUgc2VhcmNoIGlzIGFwcGxpZWRcbiAgICAgICAgICAgIGNoYXJDb3VudDogMVxuICAgICAgICB9LCBvcHRpb25zKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciAkZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgJGVsLm9mZihcImtleXVwXCIsIHNlYXJjaEZpbHRlckNhbGxCYWNrKTtcbiAgICAgICAgICAgICRlbC5vbihcImtleXVwXCIsIG51bGwsIHtvcHQ6IG9wdH0sIHNlYXJjaEZpbHRlckNhbGxCYWNrKTtcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgLy8gRmlsdGVyIGJ5IEFsbC9PbmxpbmUvT2ZmbGluZVxuICAgICQoXCIuY2hhdC1maWx0ZXIgYVwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnLmNoYXQtY29udGFjdHMgbGknKS5oaWRlKCk7XG4gICAgICAgICQoJy5jaGF0LWNvbnRhY3RzJykuZmluZCgkKHRoaXMpLmRhdGEoJ3RhcmdldCcpKS5zaG93KCk7XG5cbiAgICAgICAgJChcIi5jaGF0LWZpbHRlciBsaVwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICQoXCIuY2hhdC1zZWFyY2ggaW5wdXRcIikuc2VhcmNoRmlsdGVyKHt0YXJnZXRTZWxlY3RvcjogXCIuY2hhdC1jb250YWN0cyBcIiArICQodGhpcykuZGF0YSgndGFyZ2V0Jyl9KTtcblxuICAgICAgICAvLyBGaWx0ZXIgQ29udGFjdHMgYnkgU2VhcmNoIGFuZCBUYWJzXG4gICAgICAgIHNlYXJjaEZpbHRlckNhbGxCYWNrKCQoXCIuY2hhdC1zZWFyY2ggaW5wdXRcIiksIHtcbiAgICAgICAgICAgIHRhcmdldFNlbGVjdG9yOiBcIi5jaGF0LWNvbnRhY3RzIFwiICsgJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSxcbiAgICAgICAgICAgIGNoYXJDb3VudDogMVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIFRyaWdnZXIgU2VhcmNoIEZpbHRlclxuICAgICQoXCIuY2hhdC1zZWFyY2ggaW5wdXRcIikuc2VhcmNoRmlsdGVyKHt0YXJnZXRTZWxlY3RvcjogXCIuY2hhdC1jb250YWN0cyBsaVwifSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cImNoYXQtYm94XCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiLmNoYXQtY29udGFjdHMgbGk6Zmlyc3RcIikudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgaWYgKCQodGhpcykuZGF0YSgnaGlkZScpKSAkKHRoaXMpLmhpZGUoKTtcbiAgICB9KTtcblxuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0b2dnbGVCdG4gPSAkKCdbZGF0YS10b2dnbGU9XCJzaWRlYmFyLWNoYXRcIl0nKTtcblxuICAgICAgICAvLyBJZiBObyBTaWRlYmFyIEV4aXRcbiAgICAgICAgaWYgKCF0b2dnbGVCdG4ubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgdG9nZ2xlQnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdzaG93LWNoYXQnKTtcblxuICAgICAgICAgICAgcmVxdWlyZSgnLi9fY2hlY2stY2hhdCcpKCk7XG4gICAgICAgIH0pO1xuICAgIH0pKCk7XG5cbiAgICByZXF1aXJlKCcuL19jaGVjay1jaGF0JykoKTtcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgY29udGFpbmVyID0gJCgnLmNoYXQtd2luZG93LWNvbnRhaW5lcicpO1xuXG4gICAgLy8gQ2xpY2sgVXNlclxuICAgICQoXCIuY2hhdC1jb250YWN0cyBsaVwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCQoJy5jaGF0LXdpbmRvdy1jb250YWluZXIgW2RhdGEtdXNlci1pZD1cIicgKyAkKHRoaXMpLmRhdGEoJ3VzZXJJZCcpICsgJ1wiXScpLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIC8vIElmIHVzZXIgaXMgb2ZmbGluZSBkbyBub3RoaW5nXG4gICAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ2NsYXNzJykgPT09ICdvZmZsaW5lJykgcmV0dXJuO1xuXG4gICAgICAgIHZhciBzb3VyY2UgPSAkKFwiI2NoYXQtd2luZG93LXRlbXBsYXRlXCIpLmh0bWwoKTtcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKHNvdXJjZSk7XG5cbiAgICAgICAgdmFyIGNvbnRleHQgPSB7dXNlcl9pbWFnZTogJCh0aGlzKS5maW5kKCdpbWcnKS5hdHRyKCdzcmMnKSwgdXNlcjogJCh0aGlzKS5maW5kKCcuY29udGFjdC1uYW1lJykudGV4dCgpfTtcbiAgICAgICAgdmFyIGh0bWwgPSB0ZW1wbGF0ZShjb250ZXh0KTtcblxuICAgICAgICB2YXIgY2xvbmUgPSAkKGh0bWwpO1xuXG4gICAgICAgIGNsb25lLmF0dHIoXCJkYXRhLXVzZXItaWRcIiwgJCh0aGlzKS5kYXRhKFwidXNlcklkXCIpKTtcblxuICAgICAgICBjb250YWluZXIuZmluZCgnLnBhbmVsOm5vdChbaWRePVwiY2hhdFwiXSknKS5yZW1vdmUoKTtcblxuICAgICAgICB2YXIgY291bnQgPSBjb250YWluZXIuZmluZCgnLnBhbmVsJykubGVuZ3RoO1xuXG4gICAgICAgIGNvdW50ICsrO1xuICAgICAgICB2YXIgbGltaXQgPSAkKHdpbmRvdykud2lkdGgoKSA+IDc2OCA/IDMgOiAxO1xuICAgICAgICBpZiAoY291bnQgPj0gbGltaXQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5maW5kKCcjY2hhdC0wMDAnKyBsaW1pdCkucmVtb3ZlKCk7XG4gICAgICAgICAgICBjb3VudCA9IGxpbWl0O1xuICAgICAgICB9XG5cbiAgICAgICAgY2xvbmUuYXR0cignaWQnLCAnY2hhdC0wMDAnICsgcGFyc2VJbnQoY291bnQpKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChjbG9uZSkuc2hvdygpO1xuXG4gICAgICAgIGNsb25lLnNob3coKTtcbiAgICAgICAgY2xvbmUuZmluZCgnPiAucGFuZWwtYm9keScpLnJlbW92ZUNsYXNzKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgY2xvbmUuZmluZCgnPiBpbnB1dCcpLnJlbW92ZUNsYXNzKCdkaXNwbGF5LW5vbmUnKTtcbiAgICB9KTtcblxuICAgIC8vIENoYW5nZSBJRCBieSBOby4gb2YgV2luZG93c1xuICAgIGZ1bmN0aW9uIGNoYXRMYXlvdXQoKSB7XG4gICAgICAgIGNvbnRhaW5lci5maW5kKCcucGFuZWwnKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgICQodGhpcykuYXR0cignaWQnLCAnY2hhdC0wMDAnICsgcGFyc2VJbnQoaW5kZXggKyAxKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZSB3aW5kb3dcbiAgICAkKFwiYm9keVwiKS5vbignY2xpY2snLCBcIi5jaGF0LXdpbmRvdy1jb250YWluZXIgLmNsb3NlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICAgICAgY2hhdExheW91dCgpO1xuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpICQoJy5jaGF0LXdpbmRvdy1jb250YWluZXInKS5oaWRlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBDaGF0IGhlYWRpbmcgY29sbGFwc2Ugd2luZG93XG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuY2hhdC13aW5kb3ctY29udGFpbmVyIC5wYW5lbC1oZWFkaW5nJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJz4gLnBhbmVsLWJvZHknKS50b2dnbGVDbGFzcygnZGlzcGxheS1ub25lJyk7XG4gICAgICAgICQodGhpcykucGFyZW50KCkuZmluZCgnPiBpbnB1dCcpLnRvZ2dsZUNsYXNzKCdkaXNwbGF5LW5vbmUnKTtcbiAgICB9KTtcblxufSkoalF1ZXJ5KTtcbiIsInJlcXVpcmUoJy4vX2JyZWFrcG9pbnRzJyk7XG5yZXF1aXJlKCcuL19zZWFyY2gnKTtcbnJlcXVpcmUoJy4vX3dpbmRvd3MnKTtcbnJlcXVpcmUoJy4vX3RvZ2dsZScpO1xucmVxdWlyZSgnLi9faGlkZScpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLy8gRGF0ZXBpY2tlciBJTklUXG4gICAgJCgnLmRhdGVwaWNrZXInKS5kYXRlcGlja2VyKCk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8vIE1pbmljb2xvcnMgSU5JVFxuICAgICQoJy5taW5pY29sb3JzJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykubWluaWNvbG9ycyh7XG4gICAgICAgICAgICBjb250cm9sOiAkKHRoaXMpLmF0dHIoJ2RhdGEtY29udHJvbCcpIHx8ICdodWUnLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAkKHRoaXMpLmF0dHIoJ2RhdGEtZGVmYXVsdFZhbHVlJykgfHwgJycsXG4gICAgICAgICAgICBpbmxpbmU6ICQodGhpcykuYXR0cignZGF0YS1pbmxpbmUnKSA9PT0gJ3RydWUnLFxuICAgICAgICAgICAgbGV0dGVyQ2FzZTogJCh0aGlzKS5hdHRyKCdkYXRhLWxldHRlckNhc2UnKSB8fCAnbG93ZXJjYXNlJyxcbiAgICAgICAgICAgIG9wYWNpdHk6ICQodGhpcykuYXR0cignZGF0YS1vcGFjaXR5JyksXG4gICAgICAgICAgICBwb3NpdGlvbjogJCh0aGlzKS5hdHRyKCdkYXRhLXBvc2l0aW9uJykgfHwgJ2JvdHRvbSBsZWZ0JyxcbiAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKGhleCwgb3BhY2l0eSkge1xuICAgICAgICAgICAgICAgIGlmICghIGhleCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmIChvcGFjaXR5KSBoZXggKz0gJywgJyArIG9wYWNpdHk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhoZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGVtZTogJ2Jvb3RzdHJhcCdcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgIC8vIFByb2dyZXNzIEJhciBBbmltYXRpb25cbiAgICAkKCcucHJvZ3Jlc3MtYmFyJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykud2lkdGgoJCh0aGlzKS5hdHRyKCdhcmlhLXZhbHVlbm93JykgKyAnJScpO1xuICAgIH0pO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgJCgnLnNlbGVjdHBpY2tlcicpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS5zZWxlY3RwaWNrZXIoe1xuICAgICAgICAgICAgd2lkdGg6ICQodGhpcykuZGF0YSgnd2lkdGgnKSB8fCAnMTAwJSdcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICQoJyNleDEnKS5zbGlkZXIoe1xuICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuICdDdXJyZW50IHZhbHVlOiAnICsgdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoXCIjZXgyXCIpLnNsaWRlcigpO1xuXG4gICAgJChcIiNleDZcIikuc2xpZGVyKCk7XG5cbiAgICAkKFwiI2V4NlwiKS5vbihcInNsaWRlXCIsIGZ1bmN0aW9uIChzbGlkZUV2dCkge1xuICAgICAgICAkKFwiI2V4NlNsaWRlclZhbFwiKS50ZXh0KHNsaWRlRXZ0LnZhbHVlKTtcbiAgICB9KTtcblxuICAgICQoJy5zbGlkZXItaGFuZGxlJykuaHRtbCgnPGkgY2xhc3M9XCJmYSBmYS1iYXJzIGZhLXJvdGF0ZS05MFwiPjwvaT4nKTtcblxufSkoalF1ZXJ5KTsiLCJyZXF1aXJlKCcuL19wcm9ncmVzcy1iYXJzJyk7XG5yZXF1aXJlKCcuL19zbGlkZXInKTtcbnJlcXVpcmUoJy4vX3NlbGVjdHBpY2tlcicpO1xucmVxdWlyZSgnLi9fZGF0ZXBpY2tlcicpO1xucmVxdWlyZSgnLi9fbWluaWNvbG9ycycpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgJCh3aW5kb3cpLmJpbmQoJ2VudGVyQnJlYWtwb2ludDMyMCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGltZyA9ICQoJy5tZXNzYWdlcy1saXN0IC5wYW5lbCB1bCBpbWcnKTtcbiAgICAgICAgJCgnLm1lc3NhZ2VzLWxpc3QgLnBhbmVsIHVsJykud2lkdGgoaW1nLmZpcnN0KCkud2lkdGgoKSAqIGltZy5sZW5ndGgpO1xuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLmJpbmQoJ2V4aXRCcmVha3BvaW50MzIwJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcubWVzc2FnZXMtbGlzdCAucGFuZWwgdWwnKS53aWR0aCgnYXV0bycpO1xuICAgIH0pO1xuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgbmljZSA9ICQoJy5tZXNzYWdlcy1saXN0IC5wYW5lbCcpLm5pY2VTY3JvbGwoe2N1cnNvcmJvcmRlcjogMCwgY3Vyc29yY29sb3I6IFwiIzI1YWQ5ZlwiLCB6aW5kZXg6IDF9KTtcblxuICAgIHZhciBfc3VwZXIgPSBuaWNlLmdldENvbnRlbnRTaXplO1xuXG4gICAgbmljZS5nZXRDb250ZW50U2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBhZ2UgPSBfc3VwZXIuY2FsbChuaWNlKTtcbiAgICAgICAgcGFnZS5oID0gbmljZS53aW4uaGVpZ2h0KCk7XG4gICAgICAgIHJldHVybiBwYWdlO1xuICAgIH07XG5cbn0pKGpRdWVyeSk7IiwicmVxdWlyZSgnLi9fYnJlYWtwb2ludHMnKTtcbnJlcXVpcmUoJy4vX25pY2VzY3JvbGwnKTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8vIERyb3Bkb3duXG4gICAgJCgnLmRyb3Bkb3duLXRvZ2dsZScpLmRyb3Bkb3duKCk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8vIE9mZkNhbnZhc1xuICAgICQoJ1tkYXRhLXRvZ2dsZT1cIm9mZmNhbnZhc1wiXScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnJvdy1vZmZjYW52YXMnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8vIFJhdGluZ3NcbiAgICAkKCcucmF0aW5nIHNwYW4uc3RhcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRvdGFsID0gJCh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbigpLmxlbmd0aDtcbiAgICAgICAgdmFyIGNsaWNrZWRJbmRleCA9ICQodGhpcykuaW5kZXgoKTtcbiAgICAgICAgJCgnLnJhdGluZyBzcGFuLnN0YXInKS5yZW1vdmVDbGFzcygnZmlsbGVkJyk7XG4gICAgICAgIGZvciAodmFyIGkgPSBjbGlja2VkSW5kZXg7IGkgPCB0b3RhbDsgaSArKykge1xuICAgICAgICAgICAgJCgnLnJhdGluZyBzcGFuLnN0YXInKS5lcShpKS5hZGRDbGFzcygnZmlsbGVkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxufSkoalF1ZXJ5KTtcbiIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLy8gVG9vbHRpcFxuICAgICQoXCJib2R5XCIpLnRvb2x0aXAoe3NlbGVjdG9yOiAnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScsIGNvbnRhaW5lcjogXCJib2R5XCJ9KTtcblxufSkoalF1ZXJ5KTtcbiIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgJCh3aW5kb3cpLmJpbmQoJ2VudGVyQnJlYWtwb2ludDc2OCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEgJCgnLnNpZGViYXInKS5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoJ3Nob3ctc2lkZWJhcicpO1xuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLmJpbmQoJ2VudGVyQnJlYWtwb2ludDQ4MCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEgJCgnLnNpZGViYXInKS5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoJ3Nob3ctc2lkZWJhcicpO1xuICAgIH0pO1xuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgLy8gU2Nyb2xsXG4gICAgJCgnW2RhdGEtc2Nyb2xsYWJsZV0nKS5uaWNlU2Nyb2xsKHtjdXJzb3Jib3JkZXI6IDAsIGN1cnNvcmNvbG9yOiBcIiMyNWFkOWZcIn0pO1xuICAgICQoJ1tkYXRhLXNjcm9sbGFibGVdJykuZ2V0TmljZVNjcm9sbCgpLnJlc2l6ZSgpO1xuICAgICQoJyNtZW51IHVsLmNvbGxhcHNlJykub24oJ3Nob3duLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgJCgnI21lbnUnKS5nZXROaWNlU2Nyb2xsKCkucmVzaXplKCk7XG4gICAgfSk7XG5cbiAgICAvLyBDb2xsYXBzZVxuICAgICQoJyNtZW51IHVsLmNvbGxhcHNlJykub24oJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB2YXIgcGFyZW50cyA9ICQodGhpcykucGFyZW50cygndWw6Zmlyc3QnKS5maW5kKCc+IGxpLm9wZW4gW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0nKTtcbiAgICAgICAgaWYgKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBwYXJlbnRzLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH1cbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcyhcIm9wZW5cIik7XG4gICAgfSk7XG5cbiAgICAkKCcjbWVudSB1bC5jb2xsYXBzZScpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwib3BlblwiKTtcbiAgICB9KTtcblxufShqUXVlcnkpKTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICAkKCcjc3VibmF2JykuY29sbGFwc2Uoeyd0b2dnbGUnOiBmYWxzZX0pO1xuXG4gICAgdmFyIHRvZ2dsZUJ0biA9ICQoJ1tkYXRhLXRvZ2dsZT1cInNpZGViYXItbWVudVwiXScpO1xuXG4gICAgLy8gSWYgTm8gU2lkZWJhciBFeGl0XG4gICAgaWYgKCF0b2dnbGVCdG4ubGVuZ3RoKSByZXR1cm47XG5cbiAgICB0b2dnbGVCdG4ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICgkKCdib2R5JykuaXMoJy5zaG93LWNoYXQnKSkgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzaG93LWNoYXQnKTtcblxuICAgICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ3Nob3ctc2lkZWJhcicpO1xuXG4gICAgICAgIC8vIENoZWNrIGNoYXQgd2luZG93c1xuICAgICAgICByZXF1aXJlKCcuLi9jaGF0L19jaGVjay1jaGF0JykoKTtcbiAgICB9KTtcblxufSkoalF1ZXJ5KTsiLCJyZXF1aXJlKCcuL19icmVha3BvaW50cycpO1xucmVxdWlyZSgnLi9fc2lkZWJhci1tZW51Jyk7XG5yZXF1aXJlKCcuL19zaWRlYmFyLXRvZ2dsZScpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLy8gVGFibGUgQ2hlY2tib3ggQWxsXG4gICAgJCgnI2NoZWNrQWxsJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0YWJsZScpLmZpbmQoJ3RkIGlucHV0OmNoZWNrYm94JykucHJvcCgnY2hlY2tlZCcsIHRoaXMuY2hlY2tlZCk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgIC8vIERhdGF0YWJsZXNcbiAgICAkKCcjZGF0YS10YWJsZScpLmRhdGFUYWJsZSgpO1xuXG59KShqUXVlcnkpOyIsInJlcXVpcmUoJy4vX2RhdGF0YWJsZXMnKTtcbnJlcXVpcmUoJy4vX2NoZWNrLWFsbCcpOyIsImZ1bmN0aW9uIGNvbnRlbnRMb2FkZWQod2luLCBmbikge1xuXG4gICAgdmFyIGRvbmUgPSBmYWxzZSwgdG9wID0gdHJ1ZSxcblxuICAgICAgICBkb2MgPSB3aW4uZG9jdW1lbnQsXG4gICAgICAgIHJvb3QgPSBkb2MuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICBtb2Rlcm4gPSBkb2MuYWRkRXZlbnRMaXN0ZW5lcixcblxuICAgICAgICBhZGQgPSBtb2Rlcm4gPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAnYXR0YWNoRXZlbnQnLFxuICAgICAgICByZW0gPSBtb2Rlcm4gPyAncmVtb3ZlRXZlbnRMaXN0ZW5lcicgOiAnZGV0YWNoRXZlbnQnLFxuICAgICAgICBwcmUgPSBtb2Rlcm4gPyAnJyA6ICdvbicsXG5cbiAgICAgICAgaW5pdCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoZS50eXBlID09ICdyZWFkeXN0YXRlY2hhbmdlJyAmJiBkb2MucmVhZHlTdGF0ZSAhPSAnY29tcGxldGUnKSByZXR1cm47XG4gICAgICAgICAgICAoZS50eXBlID09ICdsb2FkJyA/IHdpbiA6IGRvYylbIHJlbSBdKHByZSArIGUudHlwZSwgaW5pdCwgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKCEgZG9uZSAmJiAoZG9uZSA9IHRydWUpKSBmbi5jYWxsKHdpbiwgZS50eXBlIHx8IGUpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHBvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJvb3QuZG9TY3JvbGwoJ2xlZnQnKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHBvbGwsIDUwKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbml0KCdwb2xsJyk7XG4gICAgICAgIH07XG5cbiAgICBpZiAoZG9jLnJlYWR5U3RhdGUgPT0gJ2NvbXBsZXRlJykgZm4uY2FsbCh3aW4sICdsYXp5Jyk7XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICghIG1vZGVybiAmJiByb290LmRvU2Nyb2xsKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRvcCA9ICEgd2luLmZyYW1lRWxlbWVudDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0b3ApIHBvbGwoKTtcbiAgICAgICAgfVxuICAgICAgICBkb2NbIGFkZCBdKHByZSArICdET01Db250ZW50TG9hZGVkJywgaW5pdCwgZmFsc2UpO1xuICAgICAgICBkb2NbIGFkZCBdKHByZSArICdyZWFkeXN0YXRlY2hhbmdlJywgaW5pdCwgZmFsc2UpO1xuICAgICAgICB3aW5bIGFkZCBdKHByZSArICdsb2FkJywgaW5pdCwgZmFsc2UpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1cmxzLCBjYWxsYmFjaykge1xuXG4gICAgdmFyIGFzeW5jTG9hZGVyID0gZnVuY3Rpb24gKHVybHMsIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgdXJscy5mb3JlYWNoKGZ1bmN0aW9uIChpLCBmaWxlKSB7XG4gICAgICAgICAgICBsb2FkQ3NzKGZpbGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjaGVja2luZyBmb3IgYSBjYWxsYmFjayBmdW5jdGlvblxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIC8vIGNhbGxpbmcgdGhlIGNhbGxiYWNrXG4gICAgICAgICAgICBjb250ZW50TG9hZGVkKHdpbmRvdywgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBsb2FkQ3NzID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgbGluay50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICAgIGxpbmsuaHJlZiA9IHVybDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVsgMCBdLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH07XG5cbiAgICAvLyBzaW1wbGUgZm9yZWFjaCBpbXBsZW1lbnRhdGlvblxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JlYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGksIHRoaXNbIGkgXSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXN5bmNMb2FkZXIodXJscywgY2FsbGJhY2spO1xuXG59OyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgJCgnLnNoYXJlIHRleHRhcmVhJykub24oJ2tleXVwJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiLnNoYXJlIGJ1dHRvblwiKVsgJCh0aGlzKS52YWwoKSA9PT0gJycgPyAnaGlkZScgOiAnc2hvdycgXSgpO1xuICAgIH0pO1xuXG4gICAgaWYgKCEgJChcIiNzY3JvbGwtc3B5XCIpLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgdmFyIG9mZnNldCA9ICQoXCIjc2Nyb2xsLXNweVwiKS5vZmZzZXQoKS50b3A7XG5cbiAgICAkKCdib2R5Jykuc2Nyb2xsc3B5KHt0YXJnZXQ6ICcjc2Nyb2xsLXNweScsIG9mZnNldDogb2Zmc2V0fSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICQoJyN1c2Vycy1maWx0ZXItc2VsZWN0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09ICduYW1lJykge1xuICAgICAgICAgICAgJCgnI3VzZXItZmlyc3QnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgICAgICAkKCcjdXNlci1zZWFyY2gtbmFtZScpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJyN1c2VyLWZpcnN0JykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAgICAgJCgnI3VzZXItc2VhcmNoLW5hbWUnKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09ICdmcmllbmRzJykge1xuICAgICAgICAgICAgJCgnLnNlbGVjdC1mcmllbmRzJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcuc2VsZWN0LWZyaWVuZHMnKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09ICduYW1lJykge1xuICAgICAgICAgICAgJCgnLnNlYXJjaC1uYW1lJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcuc2VhcmNoLW5hbWUnKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxufSkoalF1ZXJ5KTtcbiIsInJlcXVpcmUoJy4uLy4uL3BhZ2VzL3VzZXJzJyk7XG5yZXF1aXJlKCcuLi8uLi9wYWdlcy90aW1lbGluZScpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInNpZGViYXItY2hhdFwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU0lERUJBUlxuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3Nob3ctc2lkZWJhcicpO1xuXG4gICAgICAgIC8vIENPTExBUFNFIE5BVkJBUlxuICAgICAgICBpZiAoJChcIiNtYWluLW5hdlwiKS5pcygnLmluJykpICQoXCIjbWFpbi1uYXZcIikuY29sbGFwc2UoJ2hpZGUnKTtcblxuICAgICAgICAvLyBTVUJOQVYgSElERVxuICAgICAgICBpZiAoJCgnYm9keScpLmlzKCcuc2hvdy1jaGF0JykpICAkKCcjc3VibmF2JykuY29sbGFwc2UoJ2hpZGUnKTtcbiAgICB9KTtcbn0pKGpRdWVyeSk7IiwiLy8gQ29tbW9uIENIQVRcbnJlcXVpcmUoJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY2hhdC9tYWluJyk7XG5cbi8vIEN1c3RvbSBUT0dHTEVcbnJlcXVpcmUoJy4vX3RvZ2dsZScpOyIsIihmdW5jdGlvbiAoJCl7XG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwic2lkZWJhci1tZW51XCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCgnYm9keScpLmlzKCcuc2hvdy1zaWRlYmFyJykpIHtcbiAgICAgICAgICAgIC8vIExheW91dCAyIEhpZGUgU3ViTkFWXG4gICAgICAgICAgICAkKCcjc3VibmF2JykuY29sbGFwc2UoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG59KShqUXVlcnkpO1xuIiwiLy8gQ29tbW9uIENIQVRcbnJlcXVpcmUoJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc2lkZWJhci9tYWluJyk7XG5cbi8vIEN1c3RvbSBUT0dHTEVcbnJlcXVpcmUoJy4vX3NpZGViYXItdG9nZ2xlJyk7Il19
