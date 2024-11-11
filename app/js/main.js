$(document).ready(function () {
    // Установка title, для wp не понадобиться
    if (document.location.pathname === '/') { document.title = 'Главная' };
    if (document.location.pathname === '/404.html') { document.title = 'Страница не найдена' };
    if (document.location.pathname === '/terms-of-trade.html') { document.title = 'Условия торговли' };
    if (document.location.pathname === '/platform.html') { document.title = 'Платформа' };
    if (document.location.pathname === '/analytics.html') { document.title = 'Аналитика рынка' };
    if (document.location.pathname === '/news.html') { document.title = 'Новости рынка' };
    if (document.location.pathname === '/forecasts.html') { document.title = 'Прогнозы рынка' };
    if (document.location.pathname === '/currencies.html') { document.title = 'Валюты' };
    if (document.location.pathname === '/cryptocurrencies.html') { document.title = 'Криптовалюты' };
    if (document.location.pathname === '/stocks.html') { document.title = 'Акции' };
    if (document.location.pathname === '/indexes.html') { document.title = 'Индексы' };
    if (document.location.pathname === '/about.html') { document.title = 'О Patronus Investments' };
    if (document.location.pathname === '/contacts.html') { document.title = 'Контакты' };

    $(document).ready(function () {
        $('.faq__list > li > .answer').hide();

        $('.faq__list > li').click(function () {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active").find(".answer").slideUp();
            } else {
                $(".faq__list > li.active .answer").slideUp();
                $(".faq__list > li.active").removeClass("active");
                $(this).addClass("active").find(".answer").slideDown();
            }
            return false;
        });
    });

    function backToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    $('.header__logo').on('click', backToTop);
    $('.footer__logo').on('click', backToTop);

    // плавная прокрутка до якоря
    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

    // кнопка вверх
    window.addEventListener('scroll', trackScroll);
    $('.upButton').on('click', backToTop);

    function trackScroll() {
        let scrolled = window.pageYOffset;

        if (scrolled > 100) {
            $('.upButton').addClass('show')
        }
        if (scrolled < 100) {
            $('.upButton').removeClass('show')
        }
    }

    function deleteClass() {
        $('.header__burger').removeClass('open')
        $('.header__nav').removeClass('open')
    }

    $('.header__burger').on('click', () => {
        $('.header__burger').toggleClass('open')
        $('.header__nav').toggleClass('open')
    })

    $('.header .menu > .menu-item > a').on('click', deleteClass)
    $('.header__logo').on('click', deleteClass)
    $('.upButton').on('click', deleteClass)
});