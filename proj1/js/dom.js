let div = document.createElement('div'),
    text = document.createTextNode('Here is was me!');

div.classList.add('black');

document.body.before(div);

console.log(div);



// let box = document.getElementById('box'),
//     btn = document.getElementsByTagName('button'),
//     circle = document.getElementsByClassName('circle'),
//     heart = document.querySelectorAll('.wrapper .heart'),
//     oneHeart = document.querySelector('.heart');

// box.style.backgroundColor = 'green';
// btn[1].style.borderRadius = '100%';
