//toggle navbar in mobile
const navbarToggle = () => {
    const navbarIcon = document.querySelector('.navbar__icon');
    const navbarContain = document.querySelector('.navbar__mobile--contain');
    
    document.querySelector('.navbar__mobile--button').addEventListener('click', e => {
        navbarIcon.classList.toggle('fa-times');
        navbarContain.classList.toggle('display--none');
    }); 
}

navbarToggle();

const navbar = document.querySelector('.navbar__container');
window.addEventListener('scroll', e => {
    window.scrollY === 0 ? navbar.classList.remove('background--black') : navbar.classList.add('background--black'); 
}); 


