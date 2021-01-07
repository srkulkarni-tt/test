const p = document.querySelector('p');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    p.classList.toggle('hide');
})