const mobileMenu = document.querySelector('.ri-menu-line');
const headerLinksMobile = document.querySelector('.header__links-mobile');



mobileMenu.onclick = () => {
    headerLinksMobile.classList.toggle('active')
}