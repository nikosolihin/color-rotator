const button = document.querySelector('.button');

const hide = e => (e.target.style.display = 'none');

button.addEventListener('click', hide);
