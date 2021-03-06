const images = document.querySelectorAll('[data-src]');

function preloadImage(img) {
    const src = img.getAttribute('data-src'); 
    if(!src) {
        return false;
    }
    img.src = src; 
    img.classList.add('image-show');
}

const imgOptions = {
    threshold: 0, 
    rootMargin: "0px 0px 300px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return false; 
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions); 

images.forEach(image => {
    imgObserver.observe(image);
}); 