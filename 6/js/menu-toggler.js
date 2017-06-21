'use strict';

var mainNavOpen = document.querySelector('.main-nav__toggle');
var mainNavClose = document.querySelector('.main-nav__item--logo');
var toggle = document.querySelector('.main-nav__toggle');
var mainNavList = document.querySelector('.main-nav__list');

mainNavOpen.addEventListener('click', function () {
  toggle.classList.toggle('main-nav__toggle--open');
  mainNavList.classList.toggle('main-nav__list--invisible');
  mainNavClose.classList.toggle('main-nav__list-logo--visible')
});
