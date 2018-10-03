/**
 * Selectors & Vars
 */
const button = document.querySelector('.button');
const counter = document.querySelector('.counter');
const box = document.querySelectorAll('.box');

/**
 * Handlers
 */
const log = e => console.log('You click me!');

/**
 * Listeners
 */
button.addEventListener('click', log);
