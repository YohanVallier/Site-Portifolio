function acaoMenu() {
    const menu = document.querySelector('.menu');
    const menu_botão = document.querySelector('.menu_botão');
    const navbar = document.querySelector(".navbar");
    const wrapper = document.querySelector('.menu-wrapper');
    menu.classList.toggle('show'); 
    menu.style.marginRight = "15%";
    wrapper.style.marginLeft = "80%";
};