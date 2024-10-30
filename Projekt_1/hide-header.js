let lastScrollY = window.scrollY;
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        header.classList.add("header--hidden");
    }
    else {
        header.classList.remove("header--hidden");
    }

    lastScrollY = window.scrollY;
});