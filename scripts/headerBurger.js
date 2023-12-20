let headerBurgerBtn = document.querySelector('.headerBurger');
let headerBodyBurger = document.querySelector('.headerBodyBurger');
let headerIconsSvg = document.querySelector('.headerIconsSvg');

let headerBurgerLineTop = document.querySelector('.headerBurgerLineTop');
let headerBurgerLineCenter = document.querySelector('.headerBurgerLineCenter');
let headerBurgerLineBotton = document.querySelector('.headerBurgerLineBotton');

headerBurgerBtn.addEventListener('click', function(){

let headerBodyBurger = document.querySelector('.headerBodyBurger');
    if (headerBodyBurger.classList.contains('active')) {

        headerBodyBurger.classList.remove('active');
        headerIconsSvg.classList.remove('active');

        headerBurgerLineTop.classList.remove('lineTopActive');
        headerBurgerLineCenter.classList.remove('lineCenterActive');
        headerBurgerLineBotton.classList.remove('lineBottonActive');
    } else {
        headerBodyBurger.classList.add('active');
        headerIconsSvg.classList.add('active');

        headerBurgerLineTop.classList.add('lineTopActive');
        headerBurgerLineCenter.classList.add('lineCenterActive');
        headerBurgerLineBotton.classList.add('lineBottonActive');
    }
})