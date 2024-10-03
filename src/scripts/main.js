'use strict';

const lists = document.querySelector('ul');
const listElement = Array.from(lists.querySelectorAll('li'));
const sortedEl = listElement.sort((a, b) => {
    const salaryA = +a.dataset.salary.replace(/[$,]/g, '');
    const salaryB = +b.dataset.salary.replace(/[$,]/g, '');

    return salaryB - salaryA;
})

 lists.innerHTML = '';

sortedEl.forEach((el) => {
    lists.appendChild(el);
 });
