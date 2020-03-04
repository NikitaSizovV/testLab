let navButton = document.getElementById("nav-btn")
    logoSrc   = document.getElementById("logo")
    source    = ''
    header    = document.getElementById("header")
    phone     = document.getElementById("phone")
    body      = document.body
    nav       = document.getElementById('nav')
    menu      = document.getElementById('menu')
    links     = document.getElementById('links');


if (window.pageYOffset == 0){
        header.classList.remove('white-background');
        phone.classList.remove('black-color');
        navButton.classList.remove('white');
        logoSrc.src = 'img/logo.png';
        navButton.onclick = function () {
            links.classList.toggle('padding')
            navButton.classList.toggle("is-active");
            header.classList.toggle('white-background');
            phone.classList.toggle('black-color');
            body.classList.toggle('no-scroll');
            if (nav.classList.contains('slidedown')) {
                menu.classList.remove('fade');
                menu.classList.add('fadeOut');
                menu.classList.remove('visible');
                nav.classList.add('slideup');
                nav.classList.remove('slidedown');
                nav.classList.remove('flex');
                
            } else {
                nav.classList.remove('slideup');
                nav.classList.add('slidedown');
                menu.classList.remove('fadeOut');
                menu.classList.add('fade');
                setTimeout(function(){
                    menu.classList.add('visible');
                    nav.classList.add('flex');
                }
                , 600)
            }
            
            source = logoSrc.src;
            if (source.includes('logo.png')) {
                logoSrc.src = 'img/logo_black.png';
            } else if (source.includes('logo_black.png')) {
                logoSrc.src = 'img/logo.png'
            };
        };
}
window.addEventListener('scroll', function () {
    if (pageYOffset > 0){
        header.classList.add('white-background');
        phone.classList.add('black-color');
        navButton.classList.add('white');
        logoSrc.src = 'img/logo_black.png';
        navButton.onclick = function () {
            navButton.classList.toggle("is-active");
            body.classList.toggle('no-scroll');
            if (nav.classList.contains('slidedown')) {
                menu.classList.remove('fade');
                menu.classList.add('fadeOut');
                menu.classList.remove('visible');
                nav.classList.add('slideup');
                nav.classList.remove('slidedown');
                nav.classList.remove('flex');
                
            } else {
                nav.classList.remove('slideup');
                nav.classList.add('slidedown');
                menu.classList.remove('fadeOut');
                menu.classList.add('fade');
                setTimeout(function(){
                    menu.classList.add('visible');
                    nav.classList.add('flex');
                }
                , 600)
            }
        };
    } else if (pageYOffset == 0){
        header.classList.remove('white-background');
        phone.classList.remove('black-color');
        navButton.classList.remove('white');
        logoSrc.src = 'img/logo.png';
        navButton.onclick = function () {
            navButton.classList.toggle("is-active");
            header.classList.toggle('white-background');
            phone.classList.toggle('black-color');
            body.classList.toggle('no-scroll');
            if (nav.classList.contains('slidedown')) {
                menu.classList.remove('fade');
                menu.classList.add('fadeOut');
                menu.classList.remove('visible');
                nav.classList.add('slideup');
                nav.classList.remove('slidedown');
                nav.classList.remove('flex');
                
            } else {
                nav.classList.remove('slideup');
                nav.classList.add('slidedown');
                menu.classList.remove('fadeOut');
                menu.classList.add('fade');
                setTimeout(function(){
                    menu.classList.add('visible');
                    nav.classList.add('flex');
                }
                , 600)
            }
            
            source = logoSrc.src;
            if (source.includes('logo.png')) {
                logoSrc.src = 'img/logo_black.png';
            } else if (source.includes('logo_black.png')) {
                logoSrc.src = 'img/logo.png'
            };
        };
    }   

});

var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                ' из ' +
                '<span class="' + totalClass + '"></span>';
        }
    },
    navigation: {
        nextEl: '.next-slide',
        prevEl: '.prev-slide'
    }
});