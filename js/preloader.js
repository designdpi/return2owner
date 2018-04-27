jQuery(function($) {
    "use strict";

	/*==========  PAGE LOAD EFFECT  ==========*/
    if ($('.animsition').length > 0) {
	    $('.animsition').animsition({
	    	loading: false
	    });
    }
    $(window).load(function () {
    /*==========  PRELOADER  ==========*/
      //Preloader
      $('.preloader').addClass('load-anim');

      var dataLoading = $('.p-loading').data('loading');
      $('.preloader .p-loading')
      .prepend('<div class="progressFull" data-loading="' + dataLoading + '"></div>');
      setTimeout(function() {
        $('.preloader').addClass('preloader-hide');
      }, 500);
    });
  });