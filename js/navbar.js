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

