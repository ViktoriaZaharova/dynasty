$('.home-slider').slick({
    slidesToShow: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.numbers-hotels-nav').slick({
    slidesToShow: 4,
    vertical: true,
    arrows: false,
    focusOnSelect: true,
    infinite: false,
    asNavFor: '.numbers-hotels-gallery'
});


$('.numbers-hotels-gallery').slick({
    slidesToShow: 1,
    arrows: false,
    fade: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
                    '\t viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n' +
                    '<g>\n' +
                    '\t<g>\n' +
                    '\t\t<path d="M501.333,245.333H36.417l141.792-141.792c4.167-4.167,4.167-10.917,0-15.083c-4.167-4.167-10.917-4.167-15.083,0l-160,160\n' +
                    '\t\t\tc-4.167,4.167-4.167,10.917,0,15.083l160,160c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125\n' +
                    '\t\t\tc4.167-4.167,4.167-10.917,0-15.083L36.417,266.667h464.917c5.896,0,10.667-4.771,10.667-10.667S507.229,245.333,501.333,245.333z\n' +
                    '\t\t\t"/>\n' +
                    '\t</g>\n' +
                    '</g>\n' +
                    '</svg>\n</button>',
                nextArrow: '<button type="button" class="slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
                    '\t viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n' +
                    '<g>\n' +
                    '\t<g>\n' +
                    '\t\t<path d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792\n' +
                    '\t\t\tH10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083\n' +
                    '\t\t\tc2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z\n' +
                    '\t\t\t"/>\n' +
                    '\t</g>\n' +
                    '</g>\n' +
                    '</svg>\n</button>'
            }
        }
    ]
});

$('.hotels-slider').slick({
    slidesToShow: 1,
    fade: true,
    // centerMode: true,
    // variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n' +
        '<g>\n' +
        '\t<g>\n' +
        '\t\t<path d="M501.333,245.333H36.417l141.792-141.792c4.167-4.167,4.167-10.917,0-15.083c-4.167-4.167-10.917-4.167-15.083,0l-160,160\n' +
        '\t\t\tc-4.167,4.167-4.167,10.917,0,15.083l160,160c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125\n' +
        '\t\t\tc4.167-4.167,4.167-10.917,0-15.083L36.417,266.667h464.917c5.896,0,10.667-4.771,10.667-10.667S507.229,245.333,501.333,245.333z\n' +
        '\t\t\t"/>\n' +
        '\t</g>\n' +
        '</g>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n' +
        '<g>\n' +
        '\t<g>\n' +
        '\t\t<path d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792\n' +
        '\t\t\tH10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083\n' +
        '\t\t\tc2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z\n' +
        '\t\t\t"/>\n' +
        '\t</g>\n' +
        '</g>\n' +
        '</svg>\n</button>',
});

$('.news-slider').slick({
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n' +
        '<g>\n' +
        '\t<g>\n' +
        '\t\t<path d="M501.333,245.333H36.417l141.792-141.792c4.167-4.167,4.167-10.917,0-15.083c-4.167-4.167-10.917-4.167-15.083,0l-160,160\n' +
        '\t\t\tc-4.167,4.167-4.167,10.917,0,15.083l160,160c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125\n' +
        '\t\t\tc4.167-4.167,4.167-10.917,0-15.083L36.417,266.667h464.917c5.896,0,10.667-4.771,10.667-10.667S507.229,245.333,501.333,245.333z\n' +
        '\t\t\t"/>\n' +
        '\t</g>\n' +
        '</g>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n' +
        '<g>\n' +
        '\t<g>\n' +
        '\t\t<path d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792\n' +
        '\t\t\tH10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083\n' +
        '\t\t\tc2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z\n' +
        '\t\t\t"/>\n' +
        '\t</g>\n' +
        '</g>\n' +
        '</svg>\n</button>',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.sales-slider').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n' +
        '<g>\n' +
        '\t<g>\n' +
        '\t\t<path d="M501.333,245.333H36.417l141.792-141.792c4.167-4.167,4.167-10.917,0-15.083c-4.167-4.167-10.917-4.167-15.083,0l-160,160\n' +
        '\t\t\tc-4.167,4.167-4.167,10.917,0,15.083l160,160c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125\n' +
        '\t\t\tc4.167-4.167,4.167-10.917,0-15.083L36.417,266.667h464.917c5.896,0,10.667-4.771,10.667-10.667S507.229,245.333,501.333,245.333z\n' +
        '\t\t\t"/>\n' +
        '\t</g>\n' +
        '</g>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n' +
        '<g>\n' +
        '\t<g>\n' +
        '\t\t<path d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792\n' +
        '\t\t\tH10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083\n' +
        '\t\t\tc2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z\n' +
        '\t\t\t"/>\n' +
        '\t</g>\n' +
        '</g>\n' +
        '</svg>\n</button>',
});

$('.neighbors-slider').slick({
    slidesToShow: 3,
    arrows: false,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                variableWidth: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                variableWidth: false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
            }
        }
    ]
});

$('.number-gallery-slider').slick({
    slidesToShow: 2,
    prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n' +
        '<g>\n' +
        '\t<g>\n' +
        '\t\t<path d="M501.333,245.333H36.417l141.792-141.792c4.167-4.167,4.167-10.917,0-15.083c-4.167-4.167-10.917-4.167-15.083,0l-160,160\n' +
        '\t\t\tc-4.167,4.167-4.167,10.917,0,15.083l160,160c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125\n' +
        '\t\t\tc4.167-4.167,4.167-10.917,0-15.083L36.417,266.667h464.917c5.896,0,10.667-4.771,10.667-10.667S507.229,245.333,501.333,245.333z\n' +
        '\t\t\t"/>\n' +
        '\t</g>\n' +
        '</g>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n' +
        '<g>\n' +
        '\t<g>\n' +
        '\t\t<path d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792\n' +
        '\t\t\tH10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083\n' +
        '\t\t\tc2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z\n' +
        '\t\t\t"/>\n' +
        '\t</g>\n' +
        '</g>\n' +
        '</svg>\n</button>',
});

// header fixed
$(window).scroll(function () {
    var heightMain = $('.main').outerHeight();

    if ($(this).scrollTop() > heightMain) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});

$('.dropdown').on('click', function () {
   $(this).toggleClass('click').find('.submenu').fadeToggle();
});

$('.btn-menu').on('click', function () {
   $('.overlay').fadeIn();
    $('.mobile-menu').fadeIn();

});

$('.btn-close').on('click', function () {
    $('.overlay').fadeOut();
    $('.mobile-menu').fadeOut();

});

if ($(".hotels h3").length){
    $('.hotels h3').clone().appendTo('.hotels .title-mobile');
}