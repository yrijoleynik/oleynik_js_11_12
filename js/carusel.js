(function($) {
    $.fn.CaruselPlugin = function() {
        var left = $('.carusel_left');
        var right = $('.carusel_right');
        var caruselList = $('.carusel');
        var pixelCarusel = 220;
        var currentLeft = 0;
        var maxLeft = -(caruselList.find('li').length - 3) * pixelCarusel;

        left.on('click', function() {
            if (currentLeft !== maxLeft) {
                currentLeft -= 220;
                caruselList.animate({
                    left: currentLeft
                }, 1000);
            }
        });
        right.on('click', function() {
            if (currentLeft !== 0) {
                currentLeft += 220;
                caruselList.animate({
                    left: currentLeft
                }, 1000);
            }
        });

        return this;
    };
})(jQuery);
