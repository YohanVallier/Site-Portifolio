function acaoMenu() {
    const menu = document.querySelector('.menu');
    const menu_botão = document.querySelector('.menu_botão');
    const wrapper = document.querySelector('.menu-wrapper');

    menu.classList.toggle('show');
    menu_botão.style.display = "none";
    wrapper.style.marginLeft = "80%";
};