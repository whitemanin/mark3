let toContact = document.querySelector('.to__contact__button')

let buttonApplication = document.querySelector('#menu__link__application')
let buttonBiography = document.querySelector('#menu__link__biography')
let buttonHobbies = document.querySelector('#menu__link__hobbies')
let buttonGallery = document.querySelector('#menu__link__gallery')
let buttonContacts = document.querySelector('#menu__link__contacts')

const menuLinks = document.querySelectorAll('.menu__link[data-goto]')

let buttonTelegram = document.querySelector('#icon_telegram')
let buttonInstagram = document.querySelector('#icon_instagram')

let buttonTelegramInversion = document.querySelector('#icon_telegram_inversion')
let buttonInstagramInversion = document.querySelector('#icon_instagram_inversion')

toContact.addEventListener('mouseenter', function () {
    this.style.backgroundColor = '#CFCFCF'
    this.style.transform = 'scale(1.05)'
})
toContact.addEventListener('mouseleave', function () {
    this.style.backgroundColor = 'white'
    this.style.transform = 'none'
})
toContact.addEventListener('click', function () {
    window.open('https://t.me/maninwhiteman')
})

buttonApplication.addEventListener('mouseenter', function () {
    this.style.color = '#CFCFCF'
    this.style.borderBottom = '1.5px solid #CFCFCF'

})
buttonApplication.addEventListener('mouseleave', function () {
    this.style.color = 'white'
    this.style.borderBottom = '0'
})


buttonBiography.addEventListener('mouseenter', function () {
    this.style.color = '#CFCFCF'
    this.style.borderBottom = '1.5px solid #CFCFCF'
})
buttonBiography.addEventListener('mouseleave', function () {
    this.style.color = 'white'
    this.style.borderBottom = '0'
})


buttonHobbies.addEventListener('mouseenter', function () {
    this.style.color = '#CFCFCF'
    this.style.borderBottom = '1.5px solid #CFCFCF'
})
buttonHobbies.addEventListener('mouseleave', function () {
    this.style.color = 'white'
    this.style.borderBottom = '0'
})


buttonGallery.addEventListener('mouseenter', function () {
    this.style.color = '#CFCFCF'
    this.style.borderBottom = '1.5px solid #CFCFCF'
})
buttonGallery.addEventListener('mouseleave', function () {
    this.style.color = 'white'
    this.style.borderBottom = '0'
})


buttonContacts.addEventListener('mouseenter', function () {
    this.style.color = '#CFCFCF'
    this.style.borderBottom = '1.5px solid #CFCFCF'
})
buttonContacts.addEventListener('mouseleave', function () {
    this.style.color = 'white'
    this.style.borderBottom = '0'
})

if (menuLinks.length > 0){
    menuLinks.forEach(menuLinks => {
        menuLinks.addEventListener('click', onMenuLinkClick)
    })
    function onMenuLinkClick(e) {
        const menuLink = e.target
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto)
            const  gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            })
            e.preventDefault()
        }
    }
}



$(document).ready(function (){
    $('.gallery__slider').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'linear',
        infinite: false,
        autoplay: false,
        draggable: false,
        swipe: true,
        touchThreshold: 10,
        touchMove: true,
        waitForAnimate: false,
        centerMode: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]


    })
})


buttonTelegram.addEventListener('click', function () {
    window.open('https://t.me/maninwhiteman')
})
buttonInstagram.addEventListener('click', function () {
    window.open('https://instagram.com/_m_a_x_w_h_i_t_e_27?utm_medium=copy_link')
})

buttonTelegramInversion.addEventListener('click', function () {
    window.open('https://t.me/maninwhiteman')
})
buttonInstagramInversion.addEventListener('click', function () {
    window.open('https://instagram.com/_m_a_x_w_h_i_t_e_27?utm_medium=copy_link')
})
