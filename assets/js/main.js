$(function () {
  'use strict';

  //===== Prealoder

  $(window).on('load', function (event) {
    $('.preloader').delay(500).fadeOut(500);
  });

  //===== Sticky

  $(window).on('scroll', function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 10) {
      $('.navbar-area').removeClass('sticky');
    } else {
      $('.navbar-area').addClass('sticky');
    }
  });

  //===== close navbar-collapse when a  clicked

  $('.navbar-nav a').on('click', function () {
    $('.navbar-collapse').removeClass('show');
  });

  //===== Mobile Menu

  $('.navbar-toggler').on('click', function () {
    $(this).toggleClass('active');
  });

  $('.navbar-nav a').on('click', function () {
    $('.navbar-toggler').removeClass('active');
  });

  //===== Section Menu Active

  var scrollLink = $('.page-scroll');
  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 73;

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });

  var el = document.getElementById('imagesGroup'); // Or whatever method to get the element
  el.scrollTop = 0;
  el.scrollLeft = 0;
  el.scrollTop += 0;
  el.scrollLeft += 300;

  var img = document.getElementById('imagesDiscounts');
  img.scrollTop = 0;
  img.scrollLeft = 0;
  img.scrollTop += 0;
  img.scrollLeft += 820;

  var pos1 = window.pageYOffset;
  window.onscroll = function () {
    var pos2 = window.pageYOffset;
    if (pos1 > pos2) {
      document.getElementById('navbarEight').style.top = null;
      $('.navbar-area').removeClass('sticky');
    } else {
      document.getElementById('navbarEight').style.top = '-1000px';
    }
    pos1 = pos2;
  };

  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $('#navbarButton').fadeOut();
    } else {
      $('#navbarButton').fadeIn();
    }
  });

  document.getElementById('sidebar-right').addEventListener(
    'mouseleave',
    (ev) => {
      $('.sidebar-right').removeClass('open');
      $('.overlay-right').removeClass('open');
    },
    false
  );

  //===== Sidebar

  $('[href="#side-menu-right"], .overlay-right').on(
    'click',
    function (event) {
      $('.sidebar-right, .overlay-right').addClass('open');
    }
  );

  $('[href="#close"], .overlay-right').on('click', function (event) {
    $('.sidebar-right, .overlay-right').removeClass('open');
  });

  //===== Isotope Project 3

  $('.container').imagesLoaded(function () {
    var $grid = $('.grid').isotope({
      // options
      transitionDuration: '1s',
    });

    // filter items on button click
    $('.portfolio-menu ul').on('click', 'li', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue,
      });
    });

    //for menu active class
    $('.portfolio-menu ul li').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });
  });

  //  Magnific Popup

  $('.image-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    },
  });

  //====== Magnific Popup

  $('.video-popup').magnificPopup({
    type: 'iframe',
    // other options
  });

  //===== Back to top

  // Show or hide the sticky footer button
  $(window).on('scroll', function (event) {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn(200);
    } else {
      $('.back-to-top').fadeOut(200);
    }
  });

  //Animate the scroll to yop
  $('.back-to-top').on('click', function (event) {
    event.preventDefault();

    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

  //=====  AOS

  new WOW().init();

  //=====
});
