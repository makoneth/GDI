(function($){
  // Esta sección de código brinca al resultado, el detalle es que brinca todo el tiempo al escribir
  // var $results,
  //     currentClass = 'current',
  //     offsetTop = 50,
  //     currentIndex = 0;
  //
  // function jumpTo() {
  //   if ($results.length) {
  //     var position,
  //       $current = $results.eq(currentIndex);
  //     $results.removeClass(currentClass);
  //     if ($current.length) {
  //       $current.addClass(currentClass);
  //       position = $current.offset().top - offsetTop;
  //       window.scrollTo(0, position);
  //     }
  //   }
  // }
  //
  // $('.search-btn').click(function() {
  //   console.log('click');
  // 	var searchVal = this.value;
  //   $('.block').unmark({
  //     done: function() {
  //       $('.block').mark(searchVal, {
  //         separateWordSearch: true,
  //         done: function() {
  //           $results = $('.block').find('mark');
  //           currentIndex = 0;
  //           jumpTo();
  //         }
  //       });
  //     }
  //   });
  // });

  $('.search').keyup(function(){
    var $this = $(this).val();
    $('.block').unmark({
      done: function() {
        $('.block').mark($this);
      }
    });
  });

  $('.toggle').click(function() {
    $('.acordeon-content').toggleClass('hidden');
  });
})(jQuery);
