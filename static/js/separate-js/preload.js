function animatePreloader() {
    if ($('.page-preloader').hasClass('loading')) {
        $(".page-preloader").find('path').css('transform', 'scaleY(0)');
        $(".page-preloader").find('path').each(function (index, e) {
            setTimeout(function () {
                $(e).css('transition', 'all .2s ease-in-out');
                $(e).css('transform', 'scaleY(.9)');
            }, (index +1) * 100)
        })
    }
}

setInterval(animatePreloader, 1500);

window.onload = function () {
    setTimeout(function () {
        $('.page').removeClass('fixed');
        $('.page-preloader').removeClass('loading');

        if ($(window).width() > 992) {
            let s = skrollr.init({
                forceHeight: false
            });
        }
    }, 2000)
};
