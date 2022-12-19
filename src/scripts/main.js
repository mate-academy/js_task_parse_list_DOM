'use strict';

const liElements = document.querySelectorAll('li');
const ulElement = document.querySelector('ul');
const arr = [...liElements];

function toNumb(salary) {
  return +salary.slice(1).replace(',', '');
}

const sortList = function(list) {
  return list.sort((a, b) => {
    return (toNumb(b.dataset.salary) - toNumb(a.dataset.salary));
  });
};

const newLi = sortList(arr);

[...liElements].forEach(el => el.remove());

ulElement.insertAdjacentHTML('afterbegin', `
    ${[...newLi].map(person => `
      ${person.outerHTML}
    `).join('')}
`);

function getEmployees(list) {
  const arrayObj = [...list].map(person => {
    const clearName = person.innerText
      .slice(2, person.innerText.lastIndexOf('/n'))
      .trim();

    const obj = {
      name: clearName,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };

    return obj;
  });

  return arrayObj;
};

getEmployees(newLi);
