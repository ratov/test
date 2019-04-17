let menuItem = document.querySelectorAll('.menu .menu-item'),
    menu = document.querySelector('menu');
    menuItem[1].innerHTML = 'Второй пункт';
    menuItem[2].innerHTML = 'Третий пункт';

let li = document.createElement('li'),
    txt = document.createTextNode('Пятый пункт');

// let appLi = li.classList.add('menu-item');
// li.classList.add('menu-item');
li.appendChild(txt);
menu.parentNode.appendChild(li);

// document.body.style.backgroundImage = 'url(../img/apple_true.jpg)';