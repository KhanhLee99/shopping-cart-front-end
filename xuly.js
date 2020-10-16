document.addEventListener('DOMContentLoaded', function () {
    var iconCart = document.querySelector('.icon-cart');
    var iconClose = document.querySelector('.icon-close');
    var cart = document.querySelector('.cart');
    console.log(iconCart);

    iconCart.onclick = function () {
        cart.classList.add('dichtrai');
        cart.classList.remove('dichphai');
    }

    iconClose.onclick = function () {
        cart.classList.remove('dichtrai');
        cart.classList.add('dichphai');
    }

    var size = document.getElementsByClassName('_1size');

    for (let i = 0; i < size.length; i++) {
        size[i].onclick = function () {
            size[i].classList.toggle('nenden');
            size[i].classList.toggle('chutrang');
        }
    }

    var add_cart = document.getElementsByClassName('add-cart');
    for (let j = 0; j < add_cart.length; j++) {
        add_cart[j].onclick = function () {
            cart.classList.add('dichtrai');
            cart.classList.remove('dichphai');
        }
    }

}, false);