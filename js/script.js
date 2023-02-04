
$(function () {
    $('.burger__btn').click(function () {
        $('.burger__btn').toggleClass('opened')
        $('.menu__body').toggleClass('opened')
        $('body').toggleClass('lock')
    });
});





$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


const filterBox = document.querySelectorAll('.filter');
document.querySelector('.donat-filter__container').addEventListener('click', event => {
    if (event.target.tagName !== 'DIV') return false;

    let filterClass = event.target.dataset['f'];
    filterBox.forEach( elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass)) {
            elem.classList.add('hide');
        }
    });
});






var Accordeon = function(parrams){

    parrams = parrams || {};
    var _self = this;

    // Инициализируем конфиг
    var _config = {
        root: parrams.root || document.querySelector('.accordion'),
        clickElem: parrams.clickElem || document.querySelectorAll('.accordion__head'),
        closeSiblings: parrams.closeSiblings !== false ? true : false ,
    }

    var _init = function(){
        // Инициализируем аккордион
        // Устанавливаем нужные дата атрибуты

        [].forEach.call(_config.clickElem,function(item){
            item.setAttribute('data-accordion','click')
        })
    }

    // Поиск дочерних элементов
    var getChildren = function(n, target){
        var r = [];
        for ( ; n; n = n.nextSibling )
            if ( n.nodeType == 1 && n != target)
                r.push( n );
        return r;
    };

    // Поиск соседий
    var getSiblings = function(n) {
        return getChildren(n.parentNode.firstChild, n);
    }

    // Закрывает соседние элементы
    var closeSiblings = function(e){
        getSiblings(e.target.parentNode).forEach(function(item){
            item.classList.remove('accordion--active');
        })
    }

    // Закрываем/Открываем элемент по клику
    var toggleItem = function(e){
        if(e.type == 'click'){
            var eventElem = e.target;

            if(eventElem.getAttribute('data-accordion') == 'click'){

                if(_config.closeSiblings){
                    closeSiblings(e);
                };

                e.target.parentNode.classList.toggle('accordion--active');
            };
        }
    };


    // Слушатель
    var _listener = function(){
        document.addEventListener('click',toggleItem);
    }

    // Конструктор - запуститься при создание экземпляра
    var _constructor = function(){
        _init();
        _listener();
    }

    _constructor();
};




// Создание экземпляра
var acc = new Accordeon({
    //closeSiblings: false,
});