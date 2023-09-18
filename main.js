//Declaring variables
const nav = document.querySelector('nav');
var scrollPositionThresold = 60;
var previousScrollPosition = window.scrollY;
const menuToggler = document.querySelector('.menuToggler');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const menu = document.querySelector('.menu');


//Hiding nav bar if user scroll up and revealing it on scroll down
window.onscroll = ()=>{
    var currentScrollPosition = window.scrollY;
    const atTop = currentScrollPosition === 0;

    if(currentScrollPosition >= scrollPositionThresold){
        if(currentScrollPosition > previousScrollPosition){
            nav.classList.add('-translate-y-full', 'bg-very-dark-saturated-blue', 'shadow', 'shadow-[rgba(0,0,0,0.4)]');
            nav.classList.replace('md:py-10', 'md:py-3');
            nav.classList.replace('py-8', 'py-6');
            bar1.style.rotate = '0deg';
            bar1.style.translate = '0 5px';
            bar2.style.rotate = '0deg';
            bar2.style.translate = '0 -5px';
            menuToggler.classList.replace('menuActive', 'menuInactive');
        }
        else{
            nav.classList.remove('-translate-y-full');
        }
    }
    else{
        nav.classList.remove('-translate-y-full', 'bg-very-dark-saturated-blue', 'shadow', 'shadow-[rgba(0,0,0,0.4)]');
        nav.classList.replace('md:py-3', 'md:py-10');
        nav.classList.replace('py-6', 'py-8');
    }
    previousScrollPosition = currentScrollPosition;
}


//To open the menu on small screen
menuToggler.addEventListener('click', ()=>{
    if(menuToggler.classList.contains('menuInactive')){
        bar1.style.rotate = '45deg';
        bar1.style.translate = '0 0';
        bar2.style.rotate = '-45deg';
        bar2.style.translate = '0 0';
        menuToggler.classList.replace('menuInactive', 'menuActive');
    }
    else{
        bar1.style.rotate = '0deg';
        bar1.style.translate = '0 5px';
        bar2.style.rotate = '0deg';
        bar2.style.translate = '0 -5px';
        menuToggler.classList.replace('menuActive', 'menuInactive');
    }
})