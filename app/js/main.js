
/**
 * Accordion
 */
$(document).ready(function () {
  let button = $('.js-accordion button');

  button.click(function (e) { 
    e.preventDefault();

    if (!$(this).hasClass('is-active')) {
      button.removeClass('is-active').attr('aria-expanded', false);
      button.parent().next().removeClass('is-open');
      $(this).addClass('is-active').attr('aria-expanded', true);
      $(this).parent().next().addClass('is-open');
    } else {
      $(this).removeClass('is-active').attr('aria-expanded', false);
      $(this).parent().next().removeClass('is-open');
    }
  });
});


(function () {
  var progresses = document.querySelectorAll('.js-progress');

  Array.prototype.forEach.call(progresses, function(el, i) {
    var progressValue = el.querySelector('.progress__value');
    var RADIUS = el.querySelector('circle').getAttribute('r');
    var CIRCUMFERENCE = 2 * Math.PI * RADIUS;
    var value = el.getAttribute('data-progress-value');
    
    function progress(value) {
      var progress = value / 100;
      var dashoffset = CIRCUMFERENCE * (1 - progress);
      
      progressValue.style.strokeDasharray = CIRCUMFERENCE;
      progressValue.style.strokeDashoffset = dashoffset;
    }

    progress(value);
  });
})();