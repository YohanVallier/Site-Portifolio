function acaoMenu() {
    const menu = document.querySelector('.menu');
    const wrapper = document.querySelector('.menu_wrapper');
    const botão = document.querySelector('.menu_botão img');

    menu.classList.toggle('show');
    if (menu.classList.contains('show')) {
        wrapper.style.display = 'flex';
        wrapper.style.flexDirection = 'row';
        botão.style.width = '28px';
        botão.style.height = '28px';

    } else {
        wrapper.style.display = 'flex';
        wrapper.style.flexDirection = 'column';
        botão.style.width = '40px';
        botão.style.height = '40px';
    }

};
