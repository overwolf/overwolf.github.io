(function($){
    var searchEventsInput = $('.search-game .search-input');

    if ( searchEventsInput.length ) {
        searchEventsInput.on('keyup change', function(e) {
            var search = searchEventsInput.val().trim().toLowerCase();

            if ( search.length === 0 ) {
                $('.game-data ul li').show();
            } else {
                $('.game-data ul li').each(function(i, el) {
                    var text = $(el).text().trim().toLowerCase();

                    if ( text.includes(search) )
                        $(el).show();
                    else
                        $(el).hide();
                });
            }
        })
    }

    var gameData = $('.game-data');

    if ( gameData.length ) {
        $('.game-data').on('click', 'li .star', function(e) {
            e.preventDefault();

            console.log($(this).parent());
            if ( $(this).parent().hasClass('fav') )
                $(this).parent().removeClass('fav');
            else
                $(this).parent().addClass('fav');
        });
    }
})(jQuery);
  