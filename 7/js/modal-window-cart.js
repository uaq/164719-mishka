'use strict';

var mainNavOpen = document.querySelector('.add-to-cart');
var buttonCart = document.querySelector('.btn');

buttonCart.addEventListener('click', function () {
  mainNavOpen.classList.remove('add-to-cart--invisible');
  mainNavOpen.classList.add('add-to-cart--visible');
});
