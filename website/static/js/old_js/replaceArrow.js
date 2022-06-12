$(document).ready(function () {
  let prevButton = $('.docs-prev.button');
  let nextButton = $('.docs-next.button');

  prevButton.children('span.arrow-prev').remove();
  nextButton.children('span.arrow-next').remove();

  prevButton.prepend('<i class="arrow left"></i>');
  nextButton.append('<i class="arrow right"></i>');
});