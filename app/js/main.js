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
    $('.header__burger').toggleClass('open');
    $('.header__nav').toggleClass('open');
});

$('.header .menu > .menu-item > a').on('click', deleteClass);
$('.header__logo').on('click', deleteClass);
$('.upButton').on('click', deleteClass);

$('body').hide();
$('body').fadeIn(1000);