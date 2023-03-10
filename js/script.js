$(function () {
    $('.burger__btn').click(function () {
        $('.burger__btn').toggleClass('opened')
        $('.menu__body').toggleClass('opened')
        $('body').toggleClass('lock')
    });
});


$(function () {
    $(".donat-item").click(function () {
        $(".donat-item").removeClass("active");
        $(this).toggleClass("active");
    })
})

$(function () {
    $(".term-item").click(function () {
        $(".term-item").removeClass("active");
        $(this).toggleClass("active");
    })
})


$('.checked-blue').click(function () {
    $('.checked-blue .pre-info').toggleClass('active-blue')
    $('.checked-blue .pre-info .check').toggleClass('active')
});


$('.checked-brown').click(function () {
    $('.checked-brown .pre-info').toggleClass('active-brown')
    $('.checked-brown .pre-info .check').toggleClass('active')
});

$('.checked-yellow').click(function () {
    $('.checked-yellow .pre-info').toggleClass('active-yellow')
    $('.checked-yellow .pre-info .check').toggleClass('active')
});

$('.checked-pink').click(function () {
    $('.checked-pink .pre-info').toggleClass('active-pink')
    $('.checked-pink .pre-info .check').toggleClass('active')
});

$('.checked-green').click(function () {
    $('.checked-green .pre-info').toggleClass('active-green')
    $('.checked-green .pre-info .check').toggleClass('active')
});

$('.checked-purple').click(function () {
    $('.checked-purple .pre-info').toggleClass('active-purple')
    $('.checked-purple .pre-info .check').toggleClass('active')
});


$(document).ready(function () {
    $('.header-slider').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 2000,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('.limited').owlCarousel({
        loop: true,
        margin: 15,
        responsiveClass:true,
        nav: true,
        dots: true,
        dotsEach: true,
        responsive: {
            300: {
                items: 1,
                stagePadding: 35,
            },

            767: {
                items: 2,
                stagePadding: 40,
            },

            1000: {
                items: 2,
                stagePadding: 50,
            }
        }
    })
});





const filterBox = document.querySelectorAll('.filter');
document.querySelector('.donat-filter__container').addEventListener('click', event => {
    if (event.target.tagName !== 'DIV') return false;

    let filterClass = event.target.dataset['f'];
    filterBox.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass)) {
            elem.classList.add('hide');
        }
    });
});


var Accordeon = function (parrams) {

    parrams = parrams || {};
    var _self = this;

    // ???????????????????????????? ????????????
    var _config = {
        root: parrams.root || document.querySelector('.accordion'),
        clickElem: parrams.clickElem || document.querySelectorAll('.accordion__head'),
        closeSiblings: parrams.closeSiblings !== false ? true : false,
    }

    var _init = function () {
        // ???????????????????????????? ??????????????????
        // ?????????????????????????? ???????????? ???????? ????????????????

        [].forEach.call(_config.clickElem, function (item) {
            item.setAttribute('data-accordion', 'click')
        })
    }

    // ?????????? ???????????????? ??????????????????
    var getChildren = function (n, target) {
        var r = [];
        for (; n; n = n.nextSibling)
            if (n.nodeType == 1 && n != target)
                r.push(n);
        return r;
    };

    // ?????????? ??????????????
    var getSiblings = function (n) {
        return getChildren(n.parentNode.firstChild, n);
    }

    // ?????????????????? ???????????????? ????????????????
    var closeSiblings = function (e) {
        getSiblings(e.target.parentNode).forEach(function (item) {
            item.classList.remove('accordion--active');
        })
    }

    // ??????????????????/?????????????????? ?????????????? ???? ??????????
    var toggleItem = function (e) {
        if (e.type == 'click') {
            var eventElem = e.target;

            if (eventElem.getAttribute('data-accordion') == 'click') {

                if (_config.closeSiblings) {
                    closeSiblings(e);
                }
                ;

                e.target.parentNode.classList.toggle('accordion--active');
            }
            ;
        }
    };


    // ??????????????????
    var _listener = function () {
        document.addEventListener('click', toggleItem);
    }

    // ?????????????????????? - ?????????????????????? ?????? ???????????????? ????????????????????
    var _constructor = function () {
        _init();
        _listener();
    }

    _constructor();
};


// ???????????????? ????????????????????
var acc = new Accordeon({
    //closeSiblings: false,
});


$(function () {
    $(".how-to-connect, .how-to-connect-mob").click(function () {
        $(".popup-bg-beginner").addClass("open");
        $('body').addClass("lock-bg");
    })
    $(".close-popup").click(function () {
        $(".popup-bg-beginner").removeClass("open");
        $('body').removeClass("lock-bg");
    })
})

$(function () {
    $(".limited-proposition").click(function () {
        $(".popup-bg-limited").addClass("open");
        $('body').addClass("lock-bg");
    })
    $(".close-popup").click(function () {
        $(".popup-bg-limited").removeClass("open");
        $('body').removeClass("lock-bg");
    })
})



$(document).mouseup(function (e) {
    var container = $(".popup-content");
    if (container.has(e.target).length === 0) {
        $('.popup-bg-beginner, .popup-bg-limited').removeClass('open')
        $('body').removeClass('lock-bg')
    }
});



$(function () {
    $(".limited-item").click(function () {
        $(".limited-item").removeClass("selected");
        $(this).toggleClass("selected");
    })
})



$(document).ready(function($){
    $('.ip__server').click(function() {
        var $text_copy = $(this);
        var $temp = $("<input>");
        // $("body").append($temp);
        $temp.val($text_copy.text()).select();
        document.execCommand("copy");
        $temp.remove();
        $('.copy_link_mess').fadeIn(400);
        setTimeout(function(){$('.copy_link_mess').fadeOut(400);},1500);
    });
});




$(function () {
    $('.template__switch').click(function () {
        $('body').toggleClass('dark')
    });
});











