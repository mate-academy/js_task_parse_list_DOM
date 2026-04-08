'use strict';

const emploees = Array.from(document.querySelectorAll('li'));

emploees.sort((e1, e2) => parseInt(e2.dataset.salary) - parseInt(e1.dataset.salary));

emploees
    .forEach(li => document.querySelector('ul').appendChild(li));

function parseInt(salary) {
    const toNum = Number(salary.replace(/[$,]/g, ''));
    return toNum;
}