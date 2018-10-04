var distance = $('.cover').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
        $('.cover').addClass("top");
    }else{
        $('.cover').removeClass("top");
    }
});