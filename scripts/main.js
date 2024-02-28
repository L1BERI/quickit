let btnsBackground = document.querySelector('.btns-background')
let btnLogin = document.querySelector('.header__login')
let btnRequest = document.querySelector('.header__Request')



let businessItem = document.querySelectorAll('.business__item')
let businessBackground = document.querySelector('.business-line-background')
let focusSVG = document.querySelector('.focus-svg')
let lightSVG = document.querySelector('.light-svg')
let syncSVG = document.querySelector('.sync-svg')
let businessText = document.querySelector('.business-span')

businessItem.forEach(el => {
    el.addEventListener('click', function (e) {
        for (let i = 0; i < businessItem.length; i++) {
            businessItem[i].classList.remove('business-active')
        }
        el.classList.add('business-active')


        if (businessItem[0].classList.contains('business-active')) {
            businessBackground.classList.add('first-point')
            businessBackground.classList.remove('second-point')
            businessBackground.classList.remove('third-point')
            businessText.classList.add('first-text')
            businessText.classList.remove('second-text')
            businessText.classList.remove('third-text')
            focusSVG.classList.remove('focus-active')
            lightSVG.classList.add('light-active')
            syncSVG.classList.remove('sync-active')
        } else if (businessItem[1].classList.contains('business-active')) {
            businessBackground.classList.add('second-point')
            focusSVG.classList.add('focus-active')
            lightSVG.classList.remove('light-active')
            syncSVG.classList.remove('sync-active')
            businessText.classList.remove('first-text')
            businessText.classList.add('second-text')
            businessText.classList.remove('third-text')
            businessBackground.classList.remove('first-point')
            businessBackground.classList.remove('third-point')
        } else if (businessItem[2].classList.contains('business-active')) {
            businessBackground.classList.add('third-point')
            businessBackground.classList.remove('second-point')
            businessBackground.classList.remove('first-point')
            focusSVG.classList.remove('focus-active')
            lightSVG.classList.remove('light-active')
            syncSVG.classList.add('sync-active')
            businessText.classList.remove('first-text')
            businessText.classList.remove('second-text')
            businessText.classList.add('third-text')
        }
    })
});




let splash = document.querySelector('.splash-box');
let splashDashboard = document.querySelector('.dashboard-splash');

window.addEventListener('mousemove', function (e) {
    if(this.window.innerWidth > 768){
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        splash.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
        splashDashboard.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
        lightSVG.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
        focusSVG.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
        syncSVG.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    } else {
        splash.style.transform = 'translate(0,0)';
        splashDashboard.style.transform = 'translate(0,0)';
        lightSVG.style.transform = 'translate(0,0)';
        focusSVG.style.transform = 'translate(0,0)';
        syncSVG.style.transform = 'translate(0,0)';
    }
    
});





let burger = document.querySelector('.burger-menu')
let headerBurger = document.querySelector('.header__menu-burger')
let burgerButton = document.querySelector('.burger-button')
let headerNav = document.querySelector('.header__inner')
headerBurger.addEventListener('click', function (e) {
    e.preventDefault();
    if (burgerButton.classList.contains('burger-button-active')) {
        burgerButton.classList.remove('hburger-button-active')
       
    } else {
       
        burgerButton.classList.add('burger-button-active')

    }

    if (headerNav.classList.contains('header-hide')) {
        headerNav.classList.remove('header-hide')
    } else {
        headerNav.classList.add('header-hide')

    }

    burger.classList.add('burger-active')

    document.body.style.overflowY = 'hidden'

})
burgerButton.addEventListener('click', function (e) {
    e.preventDefault();
    burgerButton.classList.remove('burger-button-active')
    burger.classList.remove('burger-active')
    headerNav.classList.remove('header-hide')
    document.body.style.overflowY = 'scroll'



})

window.addEventListener('load', function(){
    console.log(window.innerWidth)
    if (this.window.innerWidth < 768){
            myAtropos.destroy();
    } else {
        const myAtropos = Atropos({
            el: '.my-atropos',
            shadow: false,
            alwaysActive: true,
            highlight: false,
            alwaysActive: true,
        });
    }
})