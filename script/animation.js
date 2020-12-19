const target = document.querySelectorAll('[data-animation]');

function scrollAnimation() {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.8);
    target.forEach(function(element) {
        if(windowTop > element.offsetTop) {
            element.classList.add('animate');
        } else {
            element.classList.remove('animate');
        }
    })
}

window.addEventListener('scroll', () => {
    scrollAnimation();
});