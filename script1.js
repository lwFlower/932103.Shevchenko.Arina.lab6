const btn1 = document.querySelector('#left');
const btn2 = document.querySelector('#both');
const btn3 = document.querySelector('#right');

const cat = document.querySelector('#cat');
const cat_img = document.querySelector('#cat_img');
const dog = document.querySelector('#dog');
const dog_img = document.querySelector('#dog_img');

btn1.onclick = function (){
    cat.style.width = '100%';
    cat_img.style.width = '75%';
    dog.style.width = '0%';
};

btn2.onclick = function (){
    cat.style.width = '50%';
    cat_img.style.width = '100%';
    dog.style.width = '50%';
    dog_img.style.width = '100%';
};

btn3.onclick = function (){
    dog.style.width = '100%';
    dog_img.style.width = '75%';
    cat.style.width = '0%';
};