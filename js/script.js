$(function () {
    $('.burger__btn').click(function () {
        $('.burger__btn').toggleClass('opened')
        $('.menu__body').toggleClass('opened')
        $('body').toggleClass('lock')
    });
});




$(function() {
    $(".donat-item").click(function() {
        $(".donat-item").removeClass("active");
        $(this).toggleClass("active");
    })
})

$(function() {
    $(".term-item").click(function() {
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






$('.owl-carousel').owlCarousel({
    loop: true,
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

    // Инициализируем конфиг
    var _config = {
        root: parrams.root || document.querySelector('.accordion'),
        clickElem: parrams.clickElem || document.querySelectorAll('.accordion__head'),
        closeSiblings: parrams.closeSiblings !== false ? true : false,
    }

    var _init = function () {
        // Инициализируем аккордион
        // Устанавливаем нужные дата атрибуты

        [].forEach.call(_config.clickElem, function (item) {
            item.setAttribute('data-accordion', 'click')
        })
    }

    // Поиск дочерних элементов
    var getChildren = function (n, target) {
        var r = [];
        for (; n; n = n.nextSibling)
            if (n.nodeType == 1 && n != target)
                r.push(n);
        return r;
    };

    // Поиск соседий
    var getSiblings = function (n) {
        return getChildren(n.parentNode.firstChild, n);
    }

    // Закрывает соседние элементы
    var closeSiblings = function (e) {
        getSiblings(e.target.parentNode).forEach(function (item) {
            item.classList.remove('accordion--active');
        })
    }

    // Закрываем/Открываем элемент по клику
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


    // Слушатель
    var _listener = function () {
        document.addEventListener('click', toggleItem);
    }

    // Конструктор - запуститься при создание экземпляра
    var _constructor = function () {
        _init();
        _listener();
    }

    _constructor();
};


// Создание экземпляра
var acc = new Accordeon({
    //closeSiblings: false,
});


$(function() {
    $(".how-to-connect").click(function() {
        $(".popup-bg-beginner").addClass("open");
        $('body').addClass("lock");
    })
    $(".close-popup").click(function() {
        $(".popup-bg-beginner").removeClass("open");
        $('body').removeClass("lock");
    })
})

$(document).mouseup(function (e) {
    var container = $(".popup-content");
    if (container.has(e.target).length === 0){
        $('.popup-bg-beginner').removeClass('open')
        $('body').removeClass('lock')
    }
});


