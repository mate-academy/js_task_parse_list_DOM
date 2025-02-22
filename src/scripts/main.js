'use strict';

const li = document.querySelectorAll('li');
const parents = document.querySelector('ul');

const listEmployees = [];

li.forEach((el) => {
  listEmployees.push({
    name: el.innerText,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
    element: el,
  });
});

function sortList(list) {
  list.sort((item1, item2) => {
    const salary1 = +item1.salary.replace(/[^0-9]/g, '');
    const salary2 = +item2.salary.replace(/[^0-9]/g, '');

    return salary2 - salary1;
  });
}

sortList(listEmployees);

parents.innerHTML = '';
listEmployees.forEach((user) => parents.appendChild(user.element));
