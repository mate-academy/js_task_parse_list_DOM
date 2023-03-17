'use strict';

const list = document.querySelector('ul');
const employees = document.querySelectorAll('li');

function sortList(someEmployees) {
  const sortedEmployees = [...someEmployees].sort((item1, item2) => {
    const salary1 = +item1.dataset.salary
      .split(',').join('')
      .split('$').join('');

    const salary2 = +item2.dataset.salary
      .split(',').join('')
      .split('$').join('');

    return salary2 - salary1;
  });

  list.append(...sortedEmployees);
}

function getEmployees(someList) {
  return [...someList].map(item => {
    return {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });
}

sortList(employees);
getEmployees(employees);
