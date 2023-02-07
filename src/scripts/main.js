'use strict';

function sortList(people) {
  const array = [...people];

  array.sort((person1, person2) => {
    const salary1 = +person1.dataset.salary.replace(/\W/g, '');
    const salary2 = +person2.dataset.salary.replace(/\W/g, '');

    return salary2 - salary1;
  });

  return array;
};

function getEmployees(people) {
  return [...people].map(person => {
    return `
    <li
      data-position="${person.dataset.position}"
      data-salary="${person.dataset.salary}"
      data-age="${person.dataset.age}"
    >
      ${person.innerText}
    </li>
    `;
  });
}

const items = document.querySelectorAll('li');
const list = document.querySelector('ul');

list.innerHTML = getEmployees(sortList(items)).join(' ');
