function acaoMenu() {
    const menu = document.querySelector('.menu');
    const menu_botão = document.querySelector('.menu_botão');
    const navbar = document.querySelector(".navbar");
    const wrapper = document.querySelector('.menu-wrapper');
    menu.classList.toggle('show'); 
    menu.style.marginRight = "15%";
    menu_botão.style.marginRight = "40%";
    menu_botão.style.marginTop = "8%";
    wrapper.style.marginLeft = "80%";

    setTimeout(() => {
        menu.style.margin = "0px";
        menu_botão.style.margin= "0px";
        wrapper.style.margin = "0px"}, 2000)
};