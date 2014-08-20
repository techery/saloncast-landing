$(document).ready(function() {

  // header
  var $header = $("header"),
      $window = $(window),
      $offset = $("#landing .intro");

  $window.scroll(function() {
    if ($window.scrollTop() > $offset.offset().top) {
      $header.addClass('visible');
    } else {
      $header.removeClass('visible');
    }
  });


  // slider
  var $slider = $('.slider');
  var $slider_items = $slider.find('li');
  var slider_items_count = $slider_items.length;


  $slider.find('.outer-container .previous').on('click', function() {
    slider_index = $slider_items.index($slider.find('li.active'));

    if(slider_index == 0) {
      $slider.addClass('at-start');
      return false;
    }

    if ($slider.hasClass('at-end')) { $slider.removeClass('at-end'); }

    $($slider_items[slider_index]).removeClass('active');
    $($slider_items[slider_index - 1]).addClass('active');
    --slider_index;
  });

  $slider.find('.outer-container .next').on('click', function() {
    slider_index = $slider_items.index($slider.find('li.active'));

    if(slider_index == (slider_items_count - 1)) {
      $slider.addClass('at-end');
      return false;
    }

    if ($slider.hasClass('at-start')) { $slider.removeClass('at-start'); }

    $($slider_items[slider_index]).removeClass('active');
    $($slider_items[slider_index + 1]).addClass('active');
    ++slider_index;
  });
});