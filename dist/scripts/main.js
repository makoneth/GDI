"use strict";
! function(c) {
  c(".search").keyup(function() {
    var n = c(this).val();
    c(".block").unmark({
      done: function() {
        c(".block").mark(n)
      }
    })
  }), c(".toggle").click(function() {
    c(".acordeon-content").toggleClass("hidden")
  })
}(jQuery);
