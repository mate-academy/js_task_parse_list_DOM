'use strict';

// write code here
function sortedList(list) {
  const items = [...list.querySelectorAll('li')];

  items.sort((a, b) => {
    const salary1 = parseInt(a.dataset.salary.replace(/[^0-9]/g, ''), 10);
    const salary2 = parseInt(b.dataset.salary.replace(/[^0-9]/g, ''), 10);

    return salary1 - salary2;
  });

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const array = [];

  list.querySelectorAll('li').forEach((li) => {
    const person = {
      name: li.innerText,
      position: li.dataset.position,
      salary: li.dataset.salary,
      age: li.dataset.age,
    };

    array.push(person);
  });

  return array;
}

const ul = document.querySelector('ul');

sortedList(ul);
getEmployees(ul);
