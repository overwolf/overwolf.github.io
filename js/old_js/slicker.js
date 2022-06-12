// Init fancybox
// =============
var selector = '.slick-slide:not(.slick-cloned)';

// Skip cloned elements
$().fancybox({
  selector : selector,
  backFocus : false
});

// Attach custom click event on cloned elements, 
// trigger click event on corresponding link
$(document).on('click', '.slick-cloned', function(e) {
  $(selector)
    .eq( ( $(e.currentTarget).attr("data-slick-index") || 0) % $(selector).length )
    .trigger("click.fb-start", {
      $trigger: $(this)
    });

  return false;
});

// Init Slick
// ==========
let  init = false;
function initSlick() {
  if (!document.querySelector('.box')) {
    console.log('no box')
    init = false;
    return;
  }
  if (init) return;
  init = true;
  console.log('initializing box')
  $('.box').slick({
    centerMode: true,
    // centerPadding: '60px',
    dots: true,
    speed: 500,
    adaptiveHeight: true,
    slidesToShow: 1,
    // variableWidth: true,
    infinite: false
  });
}

$(window).on("load", initSlick);

setInterval(initSlick, 50)