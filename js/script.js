
$(function () {
    $('.burger__btn').click(function () {
        $('.burger__btn').toggleClass('opened')
        $('.menu__body').toggleClass('opened')
        $('body').toggleClass('lock')
    });
});