$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });

  var showChoices = function () {
    $('.choice-container').fadeIn(2000);
    showSkip();
  };

  var showSkip = function () {
    $('.skip').slideDown(1500);
  };

  var speech2 = function () {
    $('#speech2').typeTo(" My name is Spot!");
    setTimeout(speech3, 2000);
  };

  var speech3 = function () {
    $('#speech3').typeTo(" Do you have a moment to help me please?");
    setTimeout(showChoices, 3500);
  };

  setTimeout(function () {
    $(function () {
      $('#speech1').typeTo("Hello!");
      setTimeout(speech2, 600);
    });
  }, 300);
});